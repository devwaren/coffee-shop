import { html } from "@devwareng/vanilla-ts";

function TitleLogo() {
    return html`
         <div class=" text-center w-fit leading-[-0.1rem]">
            <p class="text-gray-500">Since 1993</p>
            <h2 class="font-bold text-2xl text-gray-600">LA FRESHTO</h2>
            <p class="text-gray-400 text-sm">Best food in town</p>
        </div>
    `
}

export { TitleLogo }