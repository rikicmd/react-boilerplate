import { MainPage } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <head>
        <title>My Template React Boilerplate</title>
      </head>
      <MainPage />
    </>
  );
}
