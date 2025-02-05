import { MainPage } from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";

describe("Main Page", () => {
  it("should render", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { getByText, findAllByText } = render(<MainPage />, { wrapper });
    expect(document.body.contains(getByText("Example"))).toBe(true);
    expect(await findAllByText(/id:/)).toHaveLength(10);
    expect(await findAllByText(/title:/)).toHaveLength(10);
  });
});
