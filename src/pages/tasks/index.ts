import { html, useTSElements, useTSMetaData } from "@devwareng/vanilla-ts";

export default function Tasks(DOM: HTMLElement) {
  useTSMetaData({
    title: "Tasks Page",
    description: "Tasks",
    author: "Your name here",
    favicon: "/resto.webp",
  });

  const ui = useTSElements(
    DOM,
    html`
      <div>
        <h1>Tasks</h1>
      </div>
    `
  );

  return ui;
}