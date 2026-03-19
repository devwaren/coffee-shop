import { navLinks } from "@/constants";
import { html, useTSElements } from "@devwareng/vanilla-ts";

function NavList(DOM: HTMLElement) {

  const links = navLinks.map(
    (link) => html`
      <li class="navlist__item">
        <a href="${link.href}" class="navlist__link block px-4 py-2 hover:bg-amber-500 rounded">
          ${link.name}
        </a>
      </li>
    `
  ).join("");

  return useTSElements(
    DOM,
    html`
      <nav class="navlist-container" aria-label="Main navigation">
        <ul
          class="
            navlist 
            flex flex-col md:flex-row 
            gap-2 md:gap-4 
            p-2 md:p-0
          "
        >
          ${links}
        </ul>
      </nav>
    `
  );
}

export { NavList };