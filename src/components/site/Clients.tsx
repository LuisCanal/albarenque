import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import aca from "@/assets/clients/aca.jpg";
import barIdeal from "@/assets/clients/bar-ideal.jpg";
import centroConvenciones from "@/assets/clients/centro-convenciones.jpg";
import centroElectrico from "@/assets/clients/centroelectrico.jpg";
import concordia from "@/assets/clients/concordia.png";
import elReloj from "@/assets/clients/elreloj.jpg";
import farmafull from "@/assets/clients/farmafull.jpg";
import fornes from "@/assets/clients/fornes.jpg";
import galicia from "@/assets/clients/galicia.jpg";
import hsg from "@/assets/clients/hsg.jpg";
import imqg from "@/assets/clients/imqg.png";
import mutualSg from "@/assets/clients/mutual-sg.jpg";
import nacion from "@/assets/clients/nacion.png";
import palmar from "@/assets/clients/palmar.png";
import per from "@/assets/clients/per.jpg";
import santander from "@/assets/clients/santander.png";
import uba from "@/assets/clients/uba.png";
import uner from "@/assets/clients/uner.png";
import utn from "@/assets/clients/utn.png";
import incar from "@/assets/clients/incar.jpg";
import copul from "@/assets/clients/copul.jpg";
import caballi from "@/assets/clients/caballi.jpg";
import caper from "@/assets/clients/caper-1.jpg";
import cristobal from "@/assets/clients/cristobal.jpg";
import green from "@/assets/clients/green.jpg";
import grinac from "@/assets/clients/grinac.jpg";
import mix from "@/assets/clients/mix.jpg";

type Client = {
  src: string;
  alt: string;
};

const clients: Client[] = [
  // Bancos
  { src: galicia, alt: "Banco Galicia" },
  { src: nacion, alt: "Banco Nación" },
  { src: santander, alt: "Santander Río" },

  // Universidades
  { src: utn, alt: "UTN" },
  { src: uner, alt: "UNER" },
  { src: uba, alt: "UBA Sociales" },

  // Salud e institucionales
  { src: imqg, alt: "Instituto Médico Quirúrgico Garat" },
  { src: concordia, alt: "Municipalidad de Concordia" },
  { src: centroConvenciones, alt: "Centro de Convenciones Concordia" },

  // Institucionales y servicios
  { src: per, alt: "P.E.R." },
  { src: mutualSg, alt: "Mutual SG" },
  { src: copul, alt: "COPUL" },
  { src: caper, alt: "Caper Noreste" },
  { src: aca, alt: "ACA" },
  { src: centroElectrico, alt: "Centro Eléctrico" },
  { src: incar, alt: "Incar Constructora" },
  { src: caballi, alt: "Caballi S.A." },
  { src: mix, alt: "Mix" },

  // Empresas, hotelería, gastronomía y comercios
  { src: palmar, alt: "Palmar Hotel Casino" },
  { src: barIdeal, alt: "Bar Ideal" },
  { src: elReloj, alt: "El Reloj" },
  { src: cristobal, alt: "Cristóbal Café" },
  { src: farmafull, alt: "Farmafull" },
  { src: fornes, alt: "Fornes" },
  { src: hsg, alt: "HSG" },
  { src: green, alt: "Green S.A." },
  { src: grinac, alt: "Grinac" },
];

const CLIENTS_PER_PAGE = 9;

export function Clients() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(clients.length / CLIENTS_PER_PAGE);

  const visibleClients = clients.slice(
    page * CLIENTS_PER_PAGE,
    page * CLIENTS_PER_PAGE + CLIENTS_PER_PAGE
  );

  const nextPage = () => {
    setPage((current) => (current + 1) % totalPages);
  };

  const previousPage = () => {
    setPage((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  return (
    <section
      id="clientes"
      aria-labelledby="clientes-title"
      className="scroll-mt-28 py-24 lg:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.45fr] gap-14 lg:gap-20 items-center">
          <div>
            <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold mb-4 text-2xl">
              Clientes
            </p>

            <h2
              id="clientes-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-graphite leading-tight"
            >
              Confían en Nosotros
            </h2>

            <p className="mt-5 text-brand-text-soft leading-relaxed">
              Acompañamos obras institucionales, comerciales, educativas,
              bancarias, hoteleras, gastronómicas, de salud y constructoras con
              soluciones durables, materiales de calidad y terminaciones
              cuidadas.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 border border-brand-graphite text-brand-graphite hover:bg-brand-graphite hover:text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Trabajemos juntos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div
            className="relative"
            role="region"
            aria-label="Carrusel de clientes"
          >
            <button
              type="button"
              onClick={previousPage}
              aria-label="Clientes anteriores"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-brand-graphite shadow-lg border border-border transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-110 sm:left-0 sm:-translate-x-1/2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextPage}
              aria-label="Clientes siguientes"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-brand-graphite shadow-lg border border-border transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-110 sm:right-0 sm:translate-x-1/2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 lg:p-7 shadow-[var(--shadow-card)] min-h-[580px] sm:min-h-[760px] flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-3 sm:gap-4" aria-live="polite">
                {Array.from({ length: CLIENTS_PER_PAGE }).map((_, index) => {
                  const client = visibleClients[index];

                  if (!client) {
                    return (
                      <div
                        key={`empty-${index}`}
                        className="min-h-[150px] rounded-xl border border-transparent sm:min-h-[190px]"
                      />
                    );
                  }

                  return (
                    <article
                      key={`${client.alt}-${index}`}
                      aria-label={client.alt}
                      className="group min-h-[150px] rounded-xl border border-border bg-brand-soft/40 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-soft)] sm:min-h-[190px] sm:p-4"
                    >
                      <div className="flex h-20 items-center justify-center sm:h-28">
                        <img
                          src={client.src}
                          alt={client.alt}
                          loading="lazy"
                          decoding="async"
                          className="max-h-16 max-w-full object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 sm:max-h-24"
                        />
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-xs sm:text-sm font-semibold text-brand-graphite leading-tight">
                          {client.alt}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPage(index)}
                    aria-label={`Ver grupo de clientes ${index + 1}`}
                    aria-current={page === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      page === index
                        ? "w-8 bg-brand-gold"
                        : "w-2.5 bg-brand-text-soft/30 hover:bg-brand-gold/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
