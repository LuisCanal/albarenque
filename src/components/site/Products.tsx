import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

import amoblamientos from "@/assets/amoblamientos.png";
import marmoleria from "@/assets/marmoles.png";
import mosaicos from "@/assets/mosaicos.png";
import marmetas from "@/assets/Marmetas.png";

type Product = {
  img: string;
  title: string;
  desc: string;
  detailTitle: string;
  detailDesc: string;
  imageTitle: string;
  imageDescription: string;
  steps: string[];
};

const products: Product[] = [
  {
    img: amoblamientos,
    title: "Amoblamientos",
    desc: "Soluciones a medida para cocinas, vestidores y baños. Diseños funcionales, simples y modernos.",
    detailTitle: "Amoblamientos a medida para cada espacio",
    detailDesc:
      "Diseñamos y fabricamos muebles personalizados para cocinas, baños, vestidores y espacios interiores. Buscamos combinar funcionalidad, estética y buena terminación para que cada proyecto se adapte al uso real del cliente.",
    imageTitle: "Diseño del espacio",
    imageDescription:
      "Analizamos medidas, distribución, circulación y necesidades de guardado para lograr espacios funcionales y bien terminados.",
    steps: [
      "Relevamos medidas y necesidades del espacio.",
      "Definimos diseño, materiales y terminaciones.",
      "Fabricamos e instalamos cuidando cada detalle.",
    ],
  },
  {
    img: marmoleria,
    title: "Marmolería",
    desc: "Mesadas y revestimientos a medida en mármoles, granitos, cuarzos, sinterizados y demás. Calidad para tus proyectos.",
    detailTitle: "Amplia variedad de piedras para transformar tus ambientes",
    detailDesc:
      "Marmoles, granitos, cuarzos, cuarcitas y sinterizados. Trabajamos cada pieza a medida para lograr precisión, resistencia y una estética de alta calidad.",
    imageTitle: "Selección del material",
    imageDescription:
      "Ayudamos a elegir la piedra o superficie más adecuada según uso, estética, mantenimiento y tipo de proyecto.",
    steps: [
      "Asesoramos en la elección del material.",
      "Medimos, cortamos y preparamos cada pieza.",
      "Instalamos mesadas, bachas y revestimientos.",
    ],
  },
  {
    img: mosaicos,
    title: "Mosaicos",
    desc: "Nuestra esencia. Mosaicos clásicos y elegantes, con diseños tradicionales que aportan resistencia y distinción.",
    detailTitle: "Nuestra escencia. Clásico, elegante y tradicional.",
    detailDesc:
      "Cada baldosa cuenta una historia: raíces artesanales, formas clásicas y una belleza que perdura generación tras generación. Es la elección de quienes valoran lo eterno y lo bien hecho.",
    imageTitle: "Diseño y textura",
    imageDescription:
      "Contamos con distintas terminaciones, colores y formatos para adaptarnos a cada proyecto.",
    steps: [
      "Definimos diseño, formato y terminación.",
      "Fabricamos piezas resistentes y uniformes.",
      "Acompañamos proyectos de obra y colocación.",
    ],
  },
  {
    img: marmetas,
    title: "Marmetas",
    desc: "Belleza natural exclusiva, materiales de altísima calidad y una terminación distinguida para proyectos de gran categoría.",
    detailTitle: "Marmetas para exteriores y espacios urbanos",
    detailDesc:
      "Las marmetas son una solución práctica y resistente para exteriores, veredas, patios, accesos y espacios de uso frecuente. Ofrecen buena durabilidad, diseño y fácil mantenimiento.",
    imageTitle: "Solución para exteriores",
    imageDescription:
      "Ideales para patios, galerías, accesos, veredas y espacios abiertos con uso cotidiano.",
    steps: [
      "Analizamos el tipo de uso y tránsito del espacio.",
      "Recomendamos formato, color y terminación.",
      "Proveemos piezas listas para una colocación prolija.",
    ],
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedProduct) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="py-24 lg:py-32 bg-brand-soft"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="productos-title"
            className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold mb-4 text-2xl"
          >
            ¿Qué hacemos?
          </h2>

          <p className="mt-2 text-brand-text-soft leading-relaxed">
            Productos de alta calidad para proyectos arquitectónicos,
            comerciales e industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <button
              key={product.title}
              type="button"
              onClick={() => openProduct(product)}
              aria-label={`Ver más sobre ${product.title}`}
              className="group bg-white rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 text-left focus:outline-none focus:ring-2 focus:ring-brand-gold-strong"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-graphite">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm text-brand-text-soft leading-relaxed whitespace-pre-line">
                  {product.desc}
                </p>

                <span className="relative mt-4 inline-flex items-center gap-2 py-1 pr-2 text-sm font-semibold text-brand-gold-strong transition-all duration-300 group-hover:gap-3 group-hover:text-brand-graphite">
                  <span className="relative z-10">Ver más</span>

                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />

                  <span className="absolute left-0 right-2 bottom-1 h-px origin-left scale-x-0 bg-brand-gold-strong transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 px-4 py-4 flex items-center justify-center sm:py-6"
          onClick={closeProduct}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-6xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeProduct}
              aria-label="Cerrar detalle"
              className="absolute right-4 top-4 z-20 rounded-full bg-white p-3 text-brand-graphite shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[1.25fr_0.9fr]">
              <div className="relative bg-black min-h-[260px] sm:min-h-[360px] lg:min-h-[620px] flex items-center justify-center">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  decoding="async"
                  className="h-full max-h-[82vh] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute left-6 right-6 bottom-6">
                  <p className="text-white text-xl font-bold">
                    {selectedProduct.imageTitle}
                  </p>

                  <p className="mt-2 text-white/85 text-sm leading-relaxed max-w-xl">
                    {selectedProduct.imageDescription}
                  </p>
                </div>
              </div>

              <div className="p-7 lg:p-10">
                <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold text-sm mb-4">
                  {selectedProduct.title}
                </p>

                <h3
                  id="product-modal-title"
                  className="text-3xl lg:text-4xl font-bold text-brand-graphite leading-tight"
                >
                  {selectedProduct.detailTitle}
                </h3>

                <p className="mt-5 text-brand-text-soft leading-relaxed">
                  {selectedProduct.detailDesc}
                </p>

                <div className="mt-8 rounded-lg bg-brand-soft border border-border p-6">
                  <h4 className="font-bold text-brand-graphite">
                    Cómo trabajamos
                  </h4>

                  <div className="mt-5 space-y-4">
                    {selectedProduct.steps.map((step) => (
                      <div key={step} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-gold-strong shrink-0" />
                        <p className="text-sm text-brand-text-soft leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contacto"
                    onClick={closeProduct}
                    className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-gold-strong transition-colors whitespace-nowrap"
                  >
                    Pedir presupuesto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
