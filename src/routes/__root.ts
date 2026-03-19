import { createRouter } from "../gen/tsrouter.gen";

export const Router = async (DOM: HTMLElement) => {
  const router = await createRouter(DOM);
  await router.navigate(window.location.pathname + window.location.search);

  window.addEventListener("popstate", () => {
    void router.navigate(window.location.pathname + window.location.search, false);
  });
};