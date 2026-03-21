import { createSignal, html, useTSElements, useTSMetaData } from "@devwareng/vanilla-ts";

export default function Notfound(DOM: HTMLElement) {

  useTSMetaData({
    title: "Notfound",
    description: "Notfound",
    author: "Your name here",
    favicon: "/favicon.ico",
  });

  const count = createSignal(0);

  return useTSElements(
    DOM,
    html`
      <div class="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1>404 | Page Not Found</h1>
        <p data-component="counter"></p>
        <button data-click="btn-increment">Increment</button>
        <button data-click="btn-decrement">Decrement</button>
      </div>
    `,
    {
      counter: (el) => count.bind(el),
      "btn-increment": () => count.set(prev => prev + 1),
      "btn-decrement": () => count.set(prev => prev - 1)
    }
  );
}