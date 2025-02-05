import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AppConfig } from "@/core/app.core";
import { routeTree } from "@/routeTree.gen";
import "./index.css";

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
        <RouterProvider router={router} />
      </StrictMode>
    );
  });
}
