import { html } from "@devwareng/vanilla-ts"

type Props = {
    icon: string,
    title: string,
    desc: string,
    i: number
}

const IconCard = ({ ...item }: Props) => {

    return html`
        <div class="border border-amber-600 hover:scale-105 duration-300 ease-in-out px-4  ${item.i === 0 ? "bg-amber-200" : "bg-amber-100/20"}">
               <div class="aspect-square w-full h-40 grid place-items-center">
                 <img src="${item.icon}" alt="${item.title}" class="w-30 h-30">
               </div>
                <div class="py-8 space-y-2">
                    <p class="text-2xl text-amber-800">${item.title}</p>
                    <p>${item.desc}</p>
                </div>
            </div>
    `

}

export { IconCard }