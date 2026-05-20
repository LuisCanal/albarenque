import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Works } from "@/components/site/Works";
import { News } from "@/components/site/News";
import { Company } from "@/components/site/Company";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "es_AR" },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:alt", content: "Albarenque — pisos graníticos y piedra natural" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_OG_DESCRIPTION },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="pt-24 sm:pt-28">
        <Hero />
        <Products />
        <Works />
        <Company />
        <Clients />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
