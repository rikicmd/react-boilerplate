import LoginScreen from "@/internal/login/screen/LoginScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <head>
        <title>Login</title>
      </head>
      <LoginScreen />
    </>
  );
}
