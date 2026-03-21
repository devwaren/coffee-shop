import type { ElementHandlers, Signal } from "@devwareng/vanilla-ts";

type T = {
    email: string;
    password: string;
    errors: Record<string, string>;
    status: "idle" | "error" | "success";
};

type Props = {
    data: Signal<T>;
    handleLogin: () => void;
    getMessage: () => string;
};

const useTSLogin = ({ data, handleLogin, getMessage }: Props) => {

    const bindText = (el: HTMLElement, selector: () => string) => {
        const update = () => {
            el.textContent = selector();
        };

        update();

        const origSet = data.set;
        data.set = (fn) => {
            origSet(fn);
            update();
        };
    };

    const loginForm: ElementHandlers = {
        email: (el) => {
            const input = el as HTMLInputElement;

            input.value = data().email;

            input.addEventListener("input", () => {
                data.set((prev) => ({
                    ...prev,
                    email: input.value,
                    errors: { ...prev.errors, email: "" },
                }));
            });
        },

        password: (el) => {
            const input = el as HTMLInputElement;

            input.value = data().password;

            input.addEventListener("input", () => {
                data.set((prev) => ({
                    ...prev,
                    password: input.value,
                    errors: { ...prev.errors, password: "" },
                }));
            });
        },

        message: (el) => {
            bindText(el, getMessage);
        },

        errorEmail: (el) => {
            bindText(el, () => data().errors.email || "");
        },

        errorPassword: (el) => {
            bindText(el, () => data().errors.password || "");
        },

        login: handleLogin,
    };

    return { loginForm };
};

export { useTSLogin };