import { html, useTSElements } from '@devwareng/vanilla-ts';

export function HomeSection(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
      <div class="relative bg-coffee h-[35em] lg:h-screen bg-cover flex items-center lg:p-14">
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent z-10"></div>

        <!-- Content -->
        <div class="relative z-10 w-full px-4 lg:px-20 space-y-16">
          <div class="lg:max-w-[50%] space-y-8">
            
            <p data-effect="fade-in slide-up duration-300 ease-out">
              We’ve got your morning covered with
            </p>

            <h1 data-effect="fade-in slide-up -y-30 duration-2000 ease-out" 
                class="text-[6em] lg:text-[14em] font-clicker-script leading-none">
              Coffee
            </h1>

            <div class="w-full lg:w-1/2 leading-8 space-y-4">
              <p data-effect="fade-in -y-10 duration-300 ease-out text-xs lg:text-base">
                It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best
                for our customers.
              </p>

              <button class="py-4 px-6 bg-yellow-800 rounded-full hover:bg-yellow-700 transition">
                Order Now
              </button>
            </div>

          </div>
        </div>
      </div>
    `
    );

    return ui;
}