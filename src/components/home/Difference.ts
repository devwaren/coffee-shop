import { coffeeBlastRight } from '@/assets';
import { iconList } from '@/constants';
import { html, mapper, useTSElements } from '@devwareng/vanilla-ts'
import { IconCard } from '@/components/cards';

export function Difference(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
        <div 
            class="bg-white text-black py-12 relative min-h-60 grid place-items-center text-center space-y-6"
            data-effect="fade-up duration-1000 ease-out"
        >
            <div class="text-amber-900" data-effect="fade-up delay-200 duration-1000 ease-out">
                <h2 class="text-6xl" data-effect="scale-up duration-1000 ease-out">Why are we different?</h2>
                <p data-effect="fade-up delay-400 duration-1000 ease-out">We don’t just make your coffee, we make your day!</p>
            </div>

            <img 
                src=${coffeeBlastRight} 
                alt="coffee bean right" 
                class="absolute right-0 top-0"
                data-effect="slide-left duration-1200 ease-out"
            >

            <div class="flex gap-4" data-effect="fade-up delay-600 duration-1000 ease-out">
                ${mapper(iconList, IconCard)}
            </div>

            <div class="space-y-2" data-effect="fade-up delay-800 duration-1000 ease-out">
                <p data-effect="fade-up delay-900 duration-1000 ease-out">Great ideas start with great coffee, Let's help you achieve that</p>
                <p data-effect="fade-up delay-1000 duration-1000 ease-out text-4xl">Get Started Today!.</p>

                <button 
                    class="px-6 py-2 bg-amber-900 text-white rounded-full"
                    data-effect="scale-up delay-1100 duration-1000 ease-out"
                >
                    Join Us
                </button>
            </div>
        </div>
`
    );
    return ui
}