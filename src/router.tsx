import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Prerender requests run at the site root; the browser adds the repository
    // prefix only for GitHub Pages project sites.
    basepath:
      typeof window === "undefined"
        ? "/"
        : import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    trailingSlash: "always",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
