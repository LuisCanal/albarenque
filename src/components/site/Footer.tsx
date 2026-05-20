import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, X } from "lucide-react";

const WHATSAPP =
  "https://wa.me/543454025690?text=" +
  encodeURIComponent("Hola, quiero consultar por un presupuesto.");

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-11 w-11"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.47 0 9.93-4.46 9.93-9.93 0-2.65-1.03-5.14-2.92-7Zm-7.02 15.26h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.27-4.38c0-4.53 3.69-8.22 8.23-8.22 2.19 0 4.25.85 5.8 2.41a8.15 8.15 0 0 1 2.42 5.81c0 4.54-3.69 8.24-8.2 8.24Zm4.51-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.17-.28.19-.53.07-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.65.31-.22.25-.85.83-.85 2.01 0 1.18.87 2.32.99 2.49.12.17 1.7 2.59 4.11 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.67-1.18.2-.57.2-1.06.14-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const privacyCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!privacyOpen) return;

    privacyCloseButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPrivacyOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [privacyOpen]);

  return (
    <>
      <footer className="bg-[#111] text-white/70 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-center md:text-left">
            <p>© 2026 MOSAL SRL. Todos los derechos reservados.</p>

             <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/45">
             Las imágenes utilizadas corresponden a trabajos propios de la empresa.
             Algunas fueron optimizadas o retocadas con herramientas de inteligencia
             artificial para mejorar su presentación visual.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-brand-gold transition-colors"
            >
              Política de privacidad
            </button>

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://www.facebook.com/albarenque.1956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-brand-gold transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/albarenque.marmoleria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-brand-gold transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/75 px-4 py-6 flex items-center justify-center"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-4xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={privacyCloseButtonRef}
              type="button"
              onClick={() => setPrivacyOpen(false)}
              aria-label="Cerrar política de privacidad"
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-3 text-brand-graphite shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-7 lg:p-10 border-b border-border">
              <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold text-sm mb-3">
                Información legal
              </p>

              <h2
                id="privacy-title"
                className="text-3xl lg:text-4xl font-bold text-brand-graphite"
              >
                Política de privacidad
              </h2>

              <p className="mt-4 text-brand-text-soft leading-relaxed">
                En MOSAL SRL valoramos la privacidad de las personas que visitan
                nuestro sitio web y se comunican con nosotros. Esta política
                explica de manera simple qué datos podemos recibir, para qué los
                usamos y cómo podés contactarnos.
              </p>
            </div>

            <div className="p-7 lg:p-10 space-y-8 text-brand-text-soft leading-relaxed">
              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  1. Responsable del tratamiento
                </h3>
                <p className="mt-3">
                  El responsable del tratamiento de los datos personales es
                  MOSAL SRL, empresa vinculada comercialmente a Albarenque,
                  con domicilio de atención en Bolivia 526, Concordia, Entre
                  Ríos, Argentina.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  2. Datos que podemos recibir
                </h3>
                <p className="mt-3">
                  Podemos recibir datos que nos brindes voluntariamente al
                  comunicarte con nosotros, por ejemplo: nombre, teléfono, correo
                  electrónico, mensaje, consulta comercial, datos del proyecto o
                  información necesaria para preparar una respuesta o presupuesto.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  3. Finalidad del uso de los datos
                </h3>
                <p className="mt-3">
                  Usamos la información recibida para responder consultas,
                  brindar asesoramiento, preparar presupuestos, coordinar visitas,
                  informar sobre productos o servicios solicitados y mantener la
                  comunicación comercial vinculada a tu consulta.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  4. Comunicación por WhatsApp y redes sociales
                </h3>
                <p className="mt-3">
                  Si hacés click en botones de WhatsApp, Facebook o Instagram,
                  la comunicación puede continuar dentro de plataformas externas.
                  El uso de esas plataformas se rige también por sus propias
                  políticas de privacidad y condiciones de uso.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  5. Estadísticas de visitas (Google Analytics)
                </h3>
                <p className="mt-3">
                  Utilizamos Google Analytics para comprender de forma agregada
                  cómo se utiliza el sitio (por ejemplo, páginas visitadas,
                  dispositivo o país aproximado). Google puede procesar datos
                  técnicos de navegación según su propia política de privacidad.
                  Podés limitar el seguimiento con extensiones del navegador o
                  la configuración de anuncios de Google.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  6. Google Maps y otros servicios externos
                </h3>
                <p className="mt-3">
                  Nuestro sitio puede incluir mapas, enlaces o contenidos de
                  terceros para facilitar la ubicación del local o la comunicación
                  con la empresa. Estos servicios pueden recopilar información
                  técnica de navegación de acuerdo con sus propias políticas.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  7. Conservación de la información
                </h3>
                <p className="mt-3">
                  Conservamos la información únicamente durante el tiempo
                  necesario para responder la consulta, gestionar el vínculo
                  comercial o cumplir obligaciones legales, administrativas o
                  contables que pudieran corresponder.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  8. Derechos de las personas titulares de datos
                </h3>
                <p className="mt-3">
                  Podés solicitar acceso, rectificación, actualización o supresión
                  de tus datos personales escribiendo a nuestro correo de contacto.
                  También podés pedir que dejemos de utilizar tus datos para
                  comunicaciones comerciales.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  9. Contacto
                </h3>
                <p className="mt-3">
                  Para consultas sobre esta política o para ejercer tus derechos
                  vinculados a datos personales, podés escribirnos a:
                </p>

                <a
                  href="mailto:info@albarenque.com.ar"
                  className="mt-3 inline-flex font-semibold text-brand-gold-strong hover:text-brand-gold transition-colors"
                >
                  info@albarenque.com.ar
                </a>
              </section>

              <section>
                <h3 className="text-xl font-bold text-brand-graphite">
                  10. Actualizaciones
                </h3>
                <p className="mt-3">
                  Esta política puede actualizarse en el futuro para reflejar
                  cambios en el sitio web, en nuestros canales de contacto o en
                  la normativa aplicable.
                </p>
              </section>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(false)}
                  className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-gold-strong transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center sm:bottom-6 sm:right-6"
      >
        <span className="absolute h-16 w-16 rounded-full bg-[#25D366]/30 animate-[ping_2.7s_ease-out_infinite]" />

        <span
          className="absolute h-16 w-16 rounded-full bg-[#25D366]/20 animate-[ping_2.7s_ease-out_infinite]"
          style={{ animationDelay: "1.4s" }}
        />

        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-110">
          <WhatsAppIcon />
        </span>
      </a>
    </>
  );
}
