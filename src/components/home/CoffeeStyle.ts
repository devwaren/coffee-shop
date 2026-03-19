import { html, mapper, useTSElements } from '@devwareng/vanilla-ts';
import { CoffeeCard } from '@/components/cards';
import { card } from '@/constants';

export function CoffeeStyle(DOM: HTMLElement) {

    return useTSElements(
        DOM,
        html`
      <div class="bg-white text-black pb-8">
        <!-- Heading -->
        <div class="max-w-440 mx-auto text-center space-y-4">
          <p class="text-5xl text-amber-800"
             data-effect="fade-in slide-up duration-600 ease-out">
            Enjoy a new blend of coffee style
          </p>
          <p data-effect="fade-in slide-up duration-800 delay-100 ease-out">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>

          <!-- Cards Grid -->
          <div class="flex justify-center flex-wrap gap-4" data-stagger="100">
            ${mapper(card, (item, i) => CoffeeCard({ ...item, i }))}
          </div>
        </div>
      </div>
    `
    );

}