import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, expectTypeOf, it } from "vitest";
import { useMainPage } from "@/hooks";
import { Example } from "@/interfaces";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("Main Page Hook", () => {
  it("should return data from the API", async () => {
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

    const { result } = renderHook(() => useMainPage(), { wrapper });

    await waitFor(() => expect(result.current.example.isSuccess).toBe(true));

    expect(result.current.example.data).lengthOf(10);
    expectTypeOf(result.current.example.data).toEqualTypeOf<
      Example[] | undefined
    >();
  });

  it("api example error scenario on load", async () => {
    server.use(
      http.get("/api/example", async () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

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

    const { result } = renderHook(() => useMainPage(), { wrapper });

    await waitFor(() => expect(result.current.example.isError).toBe(true));

    expect(result.current.example.error?.message).equal(
      "Request failed with status code 500"
    );
    expect(result.current.example.data).toBeUndefined();
  });
});
