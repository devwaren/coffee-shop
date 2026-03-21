import { Icon, NavList } from "@/components";
import { createSignal, html, useTSElements, useTSSelect } from "@devwareng/vanilla-ts";

function Navbar(DOM: HTMLElement) {
  const mobileOpen = createSignal(false);
  const lastScrollY = createSignal(0);

  // Toggle mobile menu
  const toggleMobileMenu = () => mobileOpen.set(prev => !prev);

  // Reactive effect for mobile nav visibility & icon
  mobileOpen.subscribe((isOpen) => {
    const mobileNav = useTSSelect("#mobileNav", DOM);
    const iconEl = useTSSelect("#mobileMenuButton [data-bind='icon']", DOM);

    if (mobileNav) {
      // Add/remove 'hidden' class for accessibility & Tailwind
      mobileNav.classList.toggle("hidden", !isOpen);
      // Smooth slide with transition-all + max-height
      mobileNav.style.height = isOpen ? mobileNav.scrollHeight + "px" : "0px";
    }

    if (iconEl) {
      iconEl.innerHTML = Icon({ icon: isOpen ? "x" : "bars" });
    }
  });

  // Scroll handler remains imperative
  const handleScroll = () => {
    const navbar = useTSSelect("#navbarRoot", DOM);
    if (!navbar) return;

    const currentScroll = window.scrollY;

    navbar.style.transform =
      currentScroll > lastScrollY() && currentScroll > 50
        ? "translateY(-100%)"
        : "translateY(0)";

    lastScrollY.set(currentScroll);
  };

  const ui = useTSElements(
    DOM,
    html`
      <div
        id="navbarRoot"
        class="w-full fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out p-4"
      >
        <header class="header w-full py-6 px-4 relative">
          <div class="header-container flex justify-between items-center max-w-440 mx-auto">
            <div class="header-left">
              <a href="#" class="logo font-clicker-script text-3xl font-semibold">
                Coffee Shop
              </a>
            </div>

            <div class="header-right flex items-center gap-4">
              <!-- Desktop nav -->
              <div id="navList" data-component="NavList" class="hidden md:flex"></div>

              <!-- Mobile menu button -->
              <div
                id="mobileMenuButton"
                class="menu-bar md:hidden cursor-pointer"
                data-click="toggleMobileMenu"
              >
                <span data-bind="icon">${Icon({ icon: "bars" })}</span>
              </div>

              <div class="flex items-center gap-4 text-sm font-semibold">
                <button>Sign In</button>
                <button class="px-6 py-4 bg-amber-600 rounded-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile nav -->
          <div
            id="mobileNav"
            class="hidden absolute top-full left-0 w-full bg-black text-white md:hidden overflow-hidden transition-all duration-300 ease-in-out"
            style="height: 0;"
          >
            <div id="mobileNavList" data-component="NavList" class="flex flex-col gap-2 px-4 py-2"></div>
          </div>
        </header>
      </div>
    `,
    {
      NavList: (el) => NavList(el),
      mobileNavList: (el) => NavList(el),
      toggleMobileMenu,
    }
  );

  window.addEventListener("scroll", handleScroll);

  return ui;
}

export { Navbar };