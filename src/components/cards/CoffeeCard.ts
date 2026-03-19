import { html } from '@devwareng/vanilla-ts'

type Props = {
    image: string,
    title: string,
    desc: string,
    price: string,
    i?: number
}

function CoffeeCard({ image, title, desc, price, i = 0 }: Props) {
    return html`
    <div class="border border-amber-600 hover:scale-105 duration-500 ease-in-out"
         data-effect="fade-in slide-up duration-800 delay-${i * 100} ease-out">
      <img src="${image}" alt="${title}" class="w-full h-[13em]">
      <div class="py-8 space-y-2">
        <p class="text-2xl">${title}</p>
        <p>${desc}</p>
        <p>${price}</p>
        <button class="bg-amber-600 text-white py-2 px-4 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  `
}

export { CoffeeCard }