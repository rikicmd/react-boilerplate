import { MainPage } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Helmet>
        <title>My Template React Boilerplate</title>
      </Helmet>
      <MainPage />
    </>
  );
}
