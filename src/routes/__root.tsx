import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const siteUrl = "https://mosaicosalbarenque.com.ar/";
const logoUrl = `${siteUrl}albarenque-logo-new.png`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Albarenque",
  legalName: "MOSAL SRL",
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  foundingDate: "1956",
  description:
    "Fábrica de mosaicos, mármoles y amoblamientos con soluciones para obras y espacios exigentes.",
  telephone: "+543454025690",
  email: "info@albarenque.com.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bolivia 526",
    addressLocality: "Concordia",
    addressRegion: "Entre Ríos",
    addressCountry: "AR",
  },
  sameAs: [
    "https://www.facebook.com/albarenque.1956",
    "https://www.instagram.com/albarenque.marmoleria/",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Albarenque | MOSAL SRL" },
      {
        name: "description",
        content:
          "Albarenque / MOSAL SRL: fábrica de mosaicos, mármoles y amoblamientos desde 1956 en Concordia, Entre Ríos.",
      },
      { name: "author", content: "MOSAL SRL" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#F6F5F3" },
      { property: "og:title", content: "Albarenque | MOSAL SRL" },
      {
        property: "og:description",
        content:
          "Fábrica de mosaicos, mármoles y amoblamientos con soluciones para obras y espacios exigentes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: logoUrl },
      { property: "og:image:alt", content: "Albarenque" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoUrl },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
