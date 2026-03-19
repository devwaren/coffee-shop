import { useTSHomePage } from "@/hooks";
import { html, useTSElements, useTSMetaData } from "@devwareng/vanilla-ts";

export default function HomePage(DOM: HTMLElement) {

  useTSMetaData({
    title: "Coffee Shop",
    description: "Coffee Shop for Coffee Lovers",
    author: "Dev Waren",
    favicon: "/coffeebean.png",
  });

  const { components, componentMounts } = useTSHomePage()

  return useTSElements(
    DOM,
    html`
      <div>
         ${components}
      </div>
    `,
    componentMounts
  )

}