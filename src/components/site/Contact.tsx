import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP =
  "https://wa.me/543454025690?text=" +
  encodeURIComponent("Hola, quiero consultar por un presupuesto.");

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5440615083403!2d-58.01124562410858!3d-31.400619174269025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade7ff0aa6f353%3A0x2e3629991e290cbe!2sBolivia%20526%2C%20E3202%20Concordia%2C%20Entre%20R%C3%ADos!5e1!3m2!1ses-419!2sar!4v1779377512213!5m2!1ses-419!2sar";

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold mb-4 text-2xl">
            ¿Hablamos?
          </p>

          <h2
            id="contacto-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-graphite leading-tight"
          >
            Estamos para ayudarte
          </h2>

          <p className="mt-5 text-brand-text-soft leading-relaxed max-w-md">
            Consultanos por tu proyecto. Te asesoramos y encontramos la mejor
            solución.
          </p>

          <ul className="mt-10 space-y-5 text-brand-graphite">
            <li className="flex items-center gap-4">
              <span
                className="h-10 w-10 rounded-full bg-brand-soft flex items-center justify-center"
                aria-hidden="true"
              >
                <Phone className="h-4 w-4 text-brand-gold-strong" />
              </span>
              <a
                href="tel:+543454025690"
                className="font-medium transition-colors hover:text-brand-gold-strong"
              >
                +54 345 4025690
              </a>
            </li>

            <li className="flex items-center gap-4">
              <span
                className="h-10 w-10 rounded-full bg-brand-soft flex items-center justify-center"
                aria-hidden="true"
              >
                <Mail className="h-4 w-4 text-brand-gold-strong" />
              </span>
              <a
                href="mailto:info@albarenque.com.ar"
                className="font-medium transition-colors hover:text-brand-gold-strong"
              >
                info@albarenque.com.ar
              </a>
            </li>

            <li className="flex items-center gap-4">
              <span
                className="h-10 w-10 rounded-full bg-brand-soft flex items-center justify-center"
                aria-hidden="true"
              >
                <MapPin className="h-4 w-4 text-brand-gold-strong" />
              </span>
              <span className="font-medium">Bolivia 526, Concordia, Entre Ríos, Argentina</span>
            </li>
          </ul>

          <div className="mt-10 p-6 rounded-lg bg-brand-soft border border-border flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.47 0 9.93-4.46 9.93-9.93 0-2.65-1.03-5.14-2.92-7Zm-7.02 15.26h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.27-4.38c0-4.53 3.69-8.22 8.23-8.22 2.19 0 4.25.85 5.8 2.41a8.15 8.15 0 0 1 2.42 5.81c0 4.54-3.69 8.24-8.2 8.24Zm4.51-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.17-.28.19-.53.07-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.65.31-.22.25-.85.83-.85 2.01 0 1.18.87 2.32.99 2.49.12.17 1.7 2.59 4.11 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.67-1.18.2-.57.2-1.06.14-1.17-.06-.11-.22-.17-.47-.29Z" />
                </svg>
              </span>

              <div>
                <p className="font-semibold text-brand-graphite">
                  Consultanos por WhatsApp
                </p>
                <p className="text-xs text-brand-text-soft">
                  Respondemos en horario comercial
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="ml-auto inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-strong text-brand-graphite font-semibold px-5 py-3 rounded-md text-sm transition-colors"
            >
              Escribir ahora
            </a>
          </div>
        </div>

        <div className="bg-brand-soft p-3 rounded-lg border border-border h-[320px] sm:h-[420px] lg:h-[460px]">
          <iframe
            title="Ubicación Albarenque — Bolivia 526, Concordia"
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
