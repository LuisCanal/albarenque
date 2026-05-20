import handler from "@tanstack/react-start/server-entry";
import { withSecurityHeaders } from "@/lib/security-headers";

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    const response = await handler.fetch(request, env, ctx);
    return withSecurityHeaders(response);
  },
};
