import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import appCss from "../styles.css?url";
import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_FAVICON,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_PHONE,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  image: SITE_OG_IMAGE,
  logo: SITE_FAVICON,
  foundingDate: "1956",
  description: SITE_OG_DESCRIPTION,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bolivia 526",
    addressLocality: "Concordia",
    addressRegion: "Entre Ríos",
    postalCode: "3200",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.3927,
    longitude: -58.0209,
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  sameAs: [
    "https://www.facebook.com/albarenque.1956",
    "https://www.instagram.com/albarenque.marmoleria/",
  ],
};

const sharedLinks = [
  { rel: "stylesheet", href: appCss },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
  { rel: "preconnect", href: "https://www.googletagmanager.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
  },
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "apple-touch-icon", href: "/favicon.png" },
];

const sharedSocialMeta = [
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:locale", content: "es_AR" },
  { property: "og:image", content: SITE_OG_IMAGE },
  { property: "og:image:alt", content: "Albarenque — pisos graníticos y piedra natural" },
  { property: "og:image:width", content: "1522" },
  { property: "og:image:height", content: "1033" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:image", content: SITE_OG_IMAGE },
  { name: "twitter:image:alt", content: "Albarenque — pisos graníticos y piedra natural" },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
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
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_LEGAL_NAME },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#F6F5F3" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      ...sharedSocialMeta,
    ],
    links: [...sharedLinks, { rel: "canonical", href: SITE_URL }],
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
        <GoogleAnalytics />
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
