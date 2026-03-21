import { useTSLogin } from "@/hooks";
import {
  createSignal,
  html,
  useTSElements,
  useTSMetaData,
} from "@devwareng/vanilla-ts";
import { z } from "zod";

export default function Login(DOM: HTMLElement) {
  useTSMetaData({
    title: "Login",
    description: "Login to your account",
    author: "Your name here",
    favicon: "/favicon.ico",
  });

  const data = createSignal({
    email: "",
    password: "",
    errors: {} as Record<string, string>,
    status: "idle" as "idle" | "error" | "success",
  });

  const LoginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleLogin = () => {
    const { email, password } = data();

    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
      const errors = Object.fromEntries(
        result.error.issues.map((issue) => [
          issue.path[0],
          issue.message,
        ])
      );

      data.set((prev) => ({
        ...prev,
        errors,
        status: "error",
      }));

      return;
    }

    data.set((prev) => ({
      ...prev,
      errors: {},
      status: "success",
    }));

    console.log("LOGIN DATA:", result.data);
  };

  // 🔥 derived message (no longer stored in state)
  const getMessage = () => {
    const { status } = data();

    if (status === "error") return "Please fix the errors above";
    if (status === "success") return "Login successful ✅";
    return "";
  };

  const { loginForm } = useTSLogin({
    data,
    handleLogin,
    getMessage,
  });

  return useTSElements(
    DOM,
    html`
      <div class="w-full h-screen flex items-center justify-center bg-gray-100 text-black">
        <div class="bg-white p-8 rounded-lg shadow-lg w-80 space-y-4">
          <h1 class="text-2xl font-bold text-center">Login</h1>

          <div class="space-y-1">
            <input
              type="email"
              placeholder="Email"
              class="w-full border p-2 rounded"
              data-input="email"
            />
            <p class="text-xs text-red-500">
              <span data-component="errorEmail"></span>
            </p>
          </div>

          <div class="space-y-1">
            <input
              type="password"
              placeholder="Password"
              class="w-full border p-2 rounded"
              data-input="password"
            />
            <p class="text-xs text-red-500">
              <span data-component="errorPassword"></span>
            </p>
          </div>

          <p class="text-sm text-center text-red-500">
            <span data-component="message"></span>
          </p>

          <button
            class="w-full bg-blue-500 text-white p-2 rounded"
            data-click="login"
          >
            Login
          </button>
        </div>
      </div>
    `,
    loginForm
  );
}