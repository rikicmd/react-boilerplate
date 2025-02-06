import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AppConfig } from "@/core/app.core";
import { routeTree } from "@/routeTree.gen";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translations from "./locales";
import LanguageDetector from "i18next-browser-languagedetector";

import "./index.css";

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "en",
  resources: translations,
  supportedLngs: ["en", "id"],
});

async function enableMocking() {
  if (AppConfig.enabledMock == "false") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  enableMocking().then(() => {
    root.render(
      <StrictMode>
        <I18nextProvider i18n={i18next}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </StrictMode>
    );
  });
}
