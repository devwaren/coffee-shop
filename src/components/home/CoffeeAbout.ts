import { html, useTSElements } from '@devwareng/vanilla-ts';
import { coffeeBean, coffeeBlastLeft } from '@/assets';

export function CoffeeAbout(DOM: HTMLElement) {
    const coffee = coffeeBean;

    const ui = useTSElements(
        DOM,
        html`
      <div class="bg-white text-black min-h-160 flex items-center relative">
        <!-- Background blast -->
        <img src="${coffeeBlastLeft}" 
             alt="coffee blast left" 
             class="absolute left-0 bottom-0"
             data-effect="fade-in slide-left duration-800 ease-out">

        <div class="max-w-410 mx-auto py-4">
          <div class="flex flex-col md:flex-row items-center gap-4 px-4">

            <!-- Text Column -->
            <div class="flex-1 space-y-6">
              <p class="text-amber-800 text-4xl" 
                 data-effect="fade-in slide-up duration-600 ease-out">
                Discover the best coffee
              </p>

              <p class="text-sm" 
                 data-effect="fade-in slide-up duration-800 delay-100 ease-out">
                Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
              </p>

              <button class="bg-amber-800 text-white py-2 px-4 rounded-full"
                      data-effect="fade-in slide-up duration-1000 delay-200 ease-out">
                Learn More
              </button>
            </div>

            <!-- Image Column -->
            <div class="flex-1 grid place-items-center">
              <img src="${coffee}" alt="coffee icon"
                   data-effect="fade-in slide-up duration-800 delay-150 ease-out">
            </div>

          </div>
        </div>
      </div>
    `
    );

    return ui;
}