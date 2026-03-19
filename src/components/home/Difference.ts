import { coffeeBlastRight } from '@/assets';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export function Difference(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
        <div class="bg-white text-black relative min-h-60 grid place-items-center text-center">
            <div class="text-amber-900">
                 <h2 class="text-6xl">Why are we different?</h2>
            <p>We don’t just make your coffee, we make your day!</p>
            </div>
            <img src=${coffeeBlastRight} alt="coffee bean right" class="absolute right-0 top-0">
        </div>
`
    );
    return ui
}