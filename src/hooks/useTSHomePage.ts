import { CoffeeAbout, CoffeeStyle, Difference, HomeSection } from "@/components/home";
import { html, mapper } from "@devwareng/vanilla-ts";

type Components = {
    homeSection: (el: HTMLElement) => void;
    coffeeSection: (el: HTMLElement) => void;
    coffeeStyle: (el: HTMLElement) => void;
    difference: (el: HTMLElement) => void;
}

const useTSHomePage = () => {
    const sections = ["homeSection", "coffeeSection", "coffeeStyle", "difference"]

    const components = mapper(sections, (el) => (
        html`
        <section data-component="${el}" class="w-full"></section>
    `
    ))

    const componentMounts: Components = {
        homeSection: (el) => HomeSection(el),
        coffeeSection: (el) => CoffeeAbout(el),
        coffeeStyle: (el) => CoffeeStyle(el),
        difference: (el) => Difference(el)
    }

    return {
        components, componentMounts
    }
};

export { useTSHomePage };