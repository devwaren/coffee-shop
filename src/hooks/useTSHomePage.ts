import {
    CoffeeAbout,
    CoffeeBlend,
    CoffeeStyle,
    Difference,
    Feedback,
    HomeSection
} from "@/components/home";

import { html, mapper, type ElementHandlers } from "@devwareng/vanilla-ts";

const useTSHomePage = () => {

    const sectionMap = {
        homeSection: HomeSection,
        coffeeSection: CoffeeAbout,
        coffeeStyle: CoffeeStyle,
        difference: Difference,
        coffeeBlend: CoffeeBlend,
        feedBack: Feedback,
    };

    const components = mapper(Object.keys(sectionMap), (key) =>
        html`
            <section data-component="${key}" class="w-full"></section>
        `);

    const componentMounts: ElementHandlers = Object.fromEntries(
        Object.entries(sectionMap).map(([key, Component]) => [
            key,
            (el) => Component(el),
        ])
    );

    return {
        components,
        componentMounts,
    };
};

export { useTSHomePage };