import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Route = createRootRoute({
  component: () => {
    const { t, i18n } = useTranslation("global");
    return (
      <QueryClientProvider client={queryClient}>
        <header className="absolute w-full">
          <div className="m-2 flex items-end justify-end">
            <div className="join shadow-2xl">
              <button
                type="button"
                className="btn join-item"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
              <button
                type="button"
                className="btn join-item"
                onClick={() => i18n.changeLanguage("id")}
              >
                ID
              </button>
            </div>
          </div>
        </header>

        <Outlet />
        <ReactQueryDevtools />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </QueryClientProvider>
    );
  },
});
