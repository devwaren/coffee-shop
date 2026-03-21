import { html, useTSElements, useTSMetaData, useTSExtractParams } from "@devwareng/vanilla-ts";

export default function About(DOM: HTMLElement) {
  useTSMetaData({
    title: "About",
    description: "About",
    author: "Your name here",
    favicon: "/favicon.ico",
  });

  const ui = useTSElements(
    DOM,
    html`
      <div class="flex items-center justify-center w-full h-screen">
        <h1>About</h1>
        
      </div>
    `
  );

  return ui;
}