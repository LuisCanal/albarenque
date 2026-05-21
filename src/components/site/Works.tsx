import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, X } from "lucide-react";

import w1 from "@/assets/airport.png";
import w2 from "@/assets/work-pergola.jpg";
import w3 from "@/assets/work-floor.png";
import w4 from "@/assets/banco-macro.png";
import w5 from "@/assets/F1.png";
import w6 from "@/assets/F2.png";
import w7 from "@/assets/F3.png";
import w8 from "@/assets/F4.png";
import w9 from "@/assets/F5.png";
import w10 from "@/assets/F6.png";
import w11 from "@/assets/F7.png";
import w12 from "@/assets/F8.png";

type Work = {
  title: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  heightClassName?: string;
};

const catalogWorks: Work[] = [
  {
    title: "Aeropuerto Concordia",
    location: "Concordia, Entre Ríos",
    description:
      "Provisión de revestimientos para pisos interiores y exteriores, mesadas en piedra natural y revestimientos en porcelanato para baños y cocinas, con durabilidad y diseño en espacios de uso permanente.",
    image: w1,
    alt: "Aeropuerto Concordia",
    heightClassName: "h-56 lg:h-72",
  },
  {
    title: "Costanera",
    location: "Concordia, Entre Ríos",
    description:
      "Solado exterior para espacios abiertos, integrando funcionalidad, resistencia y una estética acorde al entorno urbano.",
    image: w2,
    alt: "Costanera",
    heightClassName: "h-40 lg:h-52",
  },
  {
    title: "Club Social",
    location: "Concepción del Uruguay, Entre Ríos",
    description:
      "Trabajo de piso interior con diseño clásico y terminación cuidada, ideal para espacios institucionales y de alto valor arquitectónico.",
    image: w3,
    alt: "Club Social",
    heightClassName: "h-40 lg:h-52",
  },
  {
    title: "Banco Macro",
    location: "Concordia, Entre Ríos",
    description:
      "Revestimiento exterior para accesos y veredas, combinando resistencia, durabilidad y una terminación prolija en espacios de alto tránsito. Además, realizamos mesadas con bachas para los baños de la sucursal.",
    image: w4,
    alt: "Banco Macro",
    heightClassName: "h-56 lg:h-72",
  },
  {
    title: "Cocina contemporánea",
    location: "Concordia, Entre Ríos",
    description:
      "Diseño de cocina con bajo mesada en gris humo y mesada en granito Negro Brasil, combinando elegancia, resistencia y funcionalidad.",
    image: w5,
    alt: "Cocina contemporánea",
  },
  {
    title: "Cocina integrada",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de cocina con mesada en gris topo, bajo mesada y mobiliario en Roble Casella Marrón, combinado con alacenas en Gris Sombra Sólida.",
    image: w6,
    alt: "Cocina integrada",
  },
  {
    title: "Cocina luminosa",
    location: "Concordia, Entre Rios",
    description:
      "Proyecto de cocina con muebles en Blanco Aglomerado y mesada en Blanco Paloma, logrando un diseño limpio, moderno y funcional.",
    image: w7,
    alt: "Cocina luminosa",
  },
  {
    title: "Cocina moderna",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de cocina con mesada en Blanco Nube y bajo mesada en Roble Kendal, combinando luminosidad, calidez y diseño contemporáneo.",
    image: w8,
    alt: "Cocina moderna integrada",
  },
  {
    title: "Baño revestido en mármol",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de baño con revestimientos y mesada en mármol Blanco Carrara, combinando elegancia y una terminación luminosa y limpia.",
    image: w9,
    alt: "Baño revestido en mármol",
  },
  {
    title: "Baño moderno minimalista",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de baño con revestimientos claros, mesada flotante Blanco Nube y grifería cromada, logrando un ambiente limpio y funcional.",
    image: w10,
    alt: "Baño moderno minimalista",
  },
  {
    title: "Baño con espejo iluminado",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de baño con mesada en Blanco Paloma, bacha de apoyo y espejo iluminado, logrando un ambiente elegante, cálido y funcional.",
    image: w11,
    alt: "Baño moderno con espejo iluminado",
  },
  {
    title: "Mesada de baño moderna",
    location: "Concordia, Entre Ríos",
    description:
      "Proyecto de mesada en Terrazo White y bacha bajo mesada, combinando diseño limpio, funcionalidad y una terminación elegante.",
    image: w12,
    alt: "Mesada de baño moderna",
  },
];

const featuredWorks = [
  catalogWorks[0],
  catalogWorks[2],
  catalogWorks[1],
  catalogWorks[3],
];

export function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [showCatalog, setShowCatalog] = useState(false);
  const catalogCloseButtonRef = useRef<HTMLButtonElement>(null);
  const workCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedWork && !showCatalog) return;

    if (selectedWork) {
      workCloseButtonRef.current?.focus();
    } else {
      catalogCloseButtonRef.current?.focus();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedWork) {
          setSelectedWork(null);
        } else {
          setShowCatalog(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork, showCatalog]);

  return (
    <section
      id="obras"
      aria-labelledby="obras-title"
      className="py-24 lg:py-32 bg-white border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <p className="tracking-[0.20em] uppercase text-brand-gold-strong font-semibold mb-4 text-2xl">
            Nuestros proyectos
          </p>

          <h2
            id="obras-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-graphite leading-tight"
          >
            Obras que nos representan
          </h2>

          <p className="mt-5 text-brand-text-soft leading-relaxed">
            Acompañamos proyectos en toda la región, con compromiso, calidad y
            experiencia.
          </p>

          <button
            type="button"
            onClick={() => setShowCatalog(true)}
            className="mt-8 inline-flex items-center gap-2 border border-brand-graphite text-brand-graphite hover:bg-brand-graphite hover:text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
          >
            Ver más obras
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <WorkImage
              work={featuredWorks[0]}
              onClick={() => setSelectedWork(featuredWorks[0])}
            />
            <WorkImage
              work={featuredWorks[1]}
              onClick={() => setSelectedWork(featuredWorks[1])}
            />
          </div>

          <div className="space-y-4 mt-8">
            <WorkImage
              work={featuredWorks[2]}
              onClick={() => setSelectedWork(featuredWorks[2])}
            />
            <WorkImage
              work={featuredWorks[3]}
              onClick={() => setSelectedWork(featuredWorks[3])}
            />
          </div>
        </div>
      </div>

      {showCatalog && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 px-4 py-6 flex items-center justify-center"
          onClick={() => setShowCatalog(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-title"
            className="relative w-full max-w-[calc(100vw-2rem)] xl:max-w-7xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={catalogCloseButtonRef}
              type="button"
              onClick={() => setShowCatalog(false)}
              aria-label="Cerrar catálogo"
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-3 text-brand-graphite shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-105"
            > 
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 lg:p-10 border-b border-border">
              <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold text-sm mb-3">
                Catálogo de obras
              </p>

              <h3
                id="catalog-title"
                className="text-3xl lg:text-4xl font-bold text-brand-graphite"
              >
                Proyectos realizados
              </h3>

              <p className="mt-3 text-brand-text-soft max-w-2xl leading-relaxed">
                Conocé algunos trabajos donde acompañamos obras institucionales,
                comerciales, urbanas y espacios interiores con soluciones
                durables y terminaciones de calidad.
              </p>
            </div>

            <div className="p-6 lg:p-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {catalogWorks.map((work) => (
                <CatalogCard
                  key={work.title}
                  work={work}
                  onClick={() => setSelectedWork(work)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedWork && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 px-4 py-6 flex items-center justify-center"
          onClick={() => setSelectedWork(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-6xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={workCloseButtonRef}
              type="button"
              onClick={() => setSelectedWork(null)}
              aria-label="Cerrar imagen"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-brand-graphite shadow-md hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[1.45fr_0.75fr]">
              <div className="bg-black flex items-center justify-center">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.alt}
                  decoding="async"
                  className="max-h-[70svh] w-full object-contain lg:max-h-[82vh]"
                />
              </div>

              <div className="p-7 lg:p-10">
                <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold text-sm mb-4">
                  Obra destacada
                </p>

                <h3
                  id="work-modal-title"
                  className="text-2xl lg:text-3xl font-bold text-brand-graphite leading-tight"
                >
                  {selectedWork.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-brand-gold-strong font-semibold">
                  <MapPin className="h-5 w-5" />
                  <span>{selectedWork.location}</span>
                </div>

                <p className="mt-6 text-brand-text-soft leading-relaxed">
                  {selectedWork.description}
                </p>

                <a
                  href="#contacto"
                  onClick={() => {
                    setSelectedWork(null);
                    setShowCatalog(false);
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-gold-strong transition-colors"
                >
                  Consultar por una obra similar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WorkImage({
  work,
  onClick,
}: {
  work: Work;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver detalle de ${work.title}`}
      className="group relative block w-full overflow-hidden rounded-lg text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold-strong"
    >
      <img
        src={work.image}
        alt={work.alt}
        loading="lazy"
        decoding="async"
        className={`w-full ${
          work.heightClassName || "h-56 lg:h-72"
        } object-cover transition-transform duration-500 group-hover:scale-[1.02]`}
      />

      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

      <div className="absolute left-4 right-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-md bg-white/95 px-4 py-3 shadow-lg">
          <p className="font-semibold text-brand-graphite">{work.title}</p>
          <p className="mt-1 text-sm text-brand-text-soft">{work.location}</p>
        </div>
      </div>
    </button>
  );
}

function CatalogCard({
  work,
  onClick,
}: {
  work: Work;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver detalle de ${work.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white border border-border text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-gold-strong"
    >
      <div className="h-48 w-full overflow-hidden bg-brand-soft">
        <img
          src={work.image}
          alt={work.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-bold text-brand-graphite leading-tight">
          {work.title}
        </h4>

        <div className="mt-2 flex items-start gap-2 text-sm text-brand-gold-strong font-semibold">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{work.location}</span>
        </div>

        <p className="mt-3 text-sm text-brand-text-soft leading-relaxed">
          {work.description}
        </p>

        <span className="relative mt-auto pt-4 inline-flex w-fit items-center gap-2 py-1 text-sm font-semibold text-brand-gold-strong transition-colors duration-300 group-hover:text-brand-graphite">
          <span className="relative z-10">Ver detalle</span>

          <ArrowRight className="relative z-10 h-4 w-4" />

          <span className="absolute left-0 bottom-1 h-px w-[78px] origin-left scale-x-0 bg-brand-gold-strong transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </div>
    </button>
  );
}
