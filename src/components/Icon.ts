import { html } from "@devwareng/vanilla-ts"

type IconProps = {
    icon: string
}

const Icon = ({ icon }: IconProps) => {
    return html`
        <i class="fa-solid fa-${icon}"></i>
    `
}

export { Icon }