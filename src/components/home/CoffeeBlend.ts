import { beans, cup } from '@/assets';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export function CoffeeBlend(DOM: HTMLElement) {

    return useTSElements(
        DOM,
        html`
        <div class="min-h-100 lg:min-h-200 text-amber-800 bg-expresso bg-cover bg-no-repeat relative overflow-hidden">

            <!-- Beans (BACKGROUND) -->
            <img 
                class="absolute top-0 right-0 w-full lg:w-1/2 h-full object-cover z-11 opacity-80"
                src="${beans}" 
                alt=""
                data-effect="fade slide-up duration-2000 ease-out"
            >

            <!-- Overlay -->
            <div class="bg-yellow-800/70 inset-0 h-full w-full absolute z-10">
                <div class="relative flex justify-around items-center h-full p-20">

                    <!-- Text -->
                    <div 
                        class="text-white flex-1 font-playfair space-y-10 z-20"
                        data-effect="slide-left"
                        data-delay="200"
                    >
                        <h2 class="text-7xl font-semibold">
                            Get a chance to have an Amazing morning
                        </h2>

                        <p class="text-3xl">
                            We are giving you a one time opportunity to experience a better life with coffee.
                        </p>

                        <button class="py-4 px-6 bg-yellow-600 rounded-full hover:bg-yellow-500 transition">Order Now</button>
                    </div>

                    <!-- Cup (FOREGROUND) -->
                    <div 
                        class="relative ml-60 flex-1 z-30"
                        data-effect="fade slide-up duration-1000 ease-out delay-200"
                    >
                        <img 
                            src="${cup}" 
                            class="relative w-40 lg:w-100 drop-shadow-2xl"
                            alt=""
                        >
                    </div>

                </div>
            </div>

        </div>
        `
    );
}