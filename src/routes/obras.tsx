import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/obras")({
  beforeLoad: () => {
    throw redirect({ href: "/#obras", statusCode: 301 });
  },
});
