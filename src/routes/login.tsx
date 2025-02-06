import { LoginPage } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPage />
    </>
  );
}
