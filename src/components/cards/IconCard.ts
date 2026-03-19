import { html } from "@devwareng/vanilla-ts"

type Props = {
    icon: string,
    title: string,
    desc: string
}

const IconCard = ({ ...item }: Props) => {

    return html`
        <div class="border border-amber-600 hover:scale-105 duration-300 ease-in-out">
                <img src="${item.icon}" alt="${item.title}" class="w-full h-[13em]">
                <div class="py-8 space-y-2">
                    <p class="text-2xl">${item.title}</p>
                    <p>${item.desc}</p>
                    <button class="bg-amber-600 text-white py-2 px-4 rounded-full">Order Now</button>
                </div>
            </div>
    `

}

export { IconCard }