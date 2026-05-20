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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Albarenque — Pisos graníticos, mármoles y piedra natural desde 1956" },
      {
        name: "description",
        content:
          "Fabricamos pisos graníticos, mosaicos, marmolería y piedras naturales de alta resistencia para obras arquitectónicas, comerciales e industriales. Más de 60 años de experiencia.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Albarenque — Pisos graníticos y piedra natural" },
      {
        property: "og:description",
        content: "Más de 60 años fabricando soluciones durables para obras y espacios exigentes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mosaicosalbarenque.com.ar/" },
      { property: "og:site_name", content: "Albarenque" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://mosaicosalbarenque.com.ar/" },
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
