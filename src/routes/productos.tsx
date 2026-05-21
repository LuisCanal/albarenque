import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/productos")({
  beforeLoad: () => {
    throw redirect({ href: "/#productos", statusCode: 301 });
  },
});
