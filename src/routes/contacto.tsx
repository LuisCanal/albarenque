import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  beforeLoad: () => {
    throw redirect({ href: "/#contacto", statusCode: 301 });
  },
});
