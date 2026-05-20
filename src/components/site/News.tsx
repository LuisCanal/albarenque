import { useEffect, useState } from "react";
import { ArrowRight, Lightbulb, X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

import obraImg from "@/assets/obra.1.jpg";
import marmoleriaImg from "@/assets/marmoleria.png";
import tipsImg from "@/assets/obra.2.jpg";

type NewsItem = {
  tag: string;
  date: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  content: string[];
};

type TipItem = {
  category: string;
  title: string;
  desc: string;
};

// ──────────────────────────────────────────────────────────────────────────────
// DATA — actualizar las 3 novedades cada mes, los tips se acumulan
// ──────────────────────────────────────────────────────────────────────────────

const news: NewsItem[] = [
  {
    tag: "Obras",
    date: "Marzo 2026",
    title: "Nuevos trabajos en mesadas y revestimientos",
    desc: "Acompañamos esta obra con mesadas en granito natural Negro Brasil, combinando durabilidad, precisión en las terminaciones y una estética elegante para el uso diario.",
    image: obraImg,
    imageAlt: "Trabajo realizado con mesadas y revestimientos",
    content: [
      "En esta obra realizamos la provisión e implementación de mesadas en granito natural Negro Brasil, una elección ideal para espacios que buscan combinar resistencia, elegancia y una terminación sobria.",

      "El granito natural Negro Brasil aporta una superficie firme, duradera y de fácil mantenimiento, especialmente adecuada para cocinas, islas y sectores de uso cotidiano.",
      "Cada mesada fue trabajada contemplando las medidas del espacio, los encuentros con muebles y paredes, los cortes necesarios para bacha y artefactos, y los detalles de terminación para asegurar una colocación precisa y funcional.",
      "El resultado es una superficie resistente al uso diario, con presencia visual y una terminación cuidada que acompaña el diseño general del ambiente.",
    ],
  },
  {
    tag: "Marmolería",
    date: "Febrero 2026",
    title: "Piedras seleccionadas para transformar ambientes",
    desc: "Mesadas, bachas y revestimientos a medida para cocinas, baños y espacios de alta categoría.",
    image: marmoleriaImg,
    imageAlt: "Mesada y superficie de piedra natural",
    content: [
      "La marmolería aporta presencia, valor y distinción a cada ambiente. Una buena elección de piedra puede transformar por completo una cocina, un baño, una recepción o un espacio comercial.",
      "Realizamos mesadas, bachas, revestimientos y piezas especiales a medida, cuidando cada detalle técnico: cortes, uniones, perforaciones, cantos, espesores y terminaciones.",
      "Trabajamos con materiales seleccionados para lograr piezas funcionales y elegantes, pensadas para clientes que buscan calidad, resistencia y una estética superior.",
    ],
  },
  {
    tag: "Marmolería",
    date: "Mayo 2026",
    title: "Revestimiento de escalones exteriores",
    desc: "Amplia variedad de granitos para todo tipo de superficies, desde veredas de alto tránsito hasta espacios residenciales de diseño.",
    image: tipsImg,
    imageAlt: "Variedad de granitos naturales disponibles",
    content: [
      "El granito natural Negro Boreal Leather es una solución ideal para escaleras exteriores, ya que combinan resistencia, seguridad y presencia estética. Su textura leather aporta mejor agarre al tránsito diario y una terminación sobria que acompaña muy bien la arquitectura del espacio.",
      "Para sectores expuestos al uso constante y a la intemperie, este material ofrece una superficie durable, firme y de fácil mantenimiento. Su tonalidad oscura genera una imagen elegante y uniforme, manteniendo un aspecto cuidado a lo largo del tiempo.",
      "En esta obra acompañamos la elección del material y los detalles de colocación para lograr una escalera funcional, resistente y visualmente integrada al entorno.",
    ],
  },
];

// Tips acumulables — agregar nuevos al final del array
const tips: TipItem[] = [
  {
    category: "Marmolería",
    title: "Qué mesada conviene según el uso de la cocina",
    desc: "Para cocinas de uso intenso conviene elegir superficies resistentes al calor, a la humedad y al desgaste diario. También es importante definir bien el espesor, el tipo de canto y la ubicación de bacha y anafe para lograr una mesada funcional y prolija.",
  },
  {
    category: "Marmolería",
    title: "Diferencias entre mármol, granito y superficies sintéticas",
    desc: "El mármol aporta distinción y belleza natural, el granito ofrece gran resistencia para uso diario y las superficies sintéticas permiten diseños más uniformes. La elección ideal depende del estilo buscado, el mantenimiento esperado y el tipo de ambiente.",
  },
  {
    category: "Mosaicos",
    title: "Cómo elegir mosaicos para veredas de alto tránsito",
    desc: "En veredas, accesos y espacios públicos conviene priorizar piezas resistentes, de buena textura y fácil mantenimiento. El formato, el color y la terminación influyen tanto en la seguridad como en la durabilidad del piso.",
  },
  {
    category: "Mosaicos",
    title: "Por qué el mosaico sigue siendo una solución vigente",
    desc: "El mosaico combina resistencia, identidad y tradición. Es una opción muy usada en obras urbanas, instituciones y comercios porque soporta circulación constante y permite lograr diseños clásicos, sobrios o personalizados.",
  },
  {
    category: "Marmetas",
    title: "Dónde conviene usar marmetas",
    desc: "Las marmetas funcionan muy bien en patios, galerías, accesos, bordes de piscina y espacios exteriores. Aportan presencia visual, buena resistencia y una terminación natural ideal para proyectos residenciales o de mayor categoría.",
  },
  {
    category: "Marmetas",
    title: "Qué tener en cuenta antes de elegir marmetas exteriores",
    desc: "Antes de elegir marmetas conviene evaluar exposición al sol, humedad, tránsito y estilo del entorno. Una buena elección de color, textura y formato ayuda a lograr un espacio elegante, durable y fácil de mantener.",
  },
  {
    category: "Amoblamientos",
    title: "Cómo aprovechar mejor una cocina a medida",
    desc: "Un amoblamiento bien diseñado debe ordenar guardado, circulación y zonas de trabajo. Conviene definir desde el inicio dónde irán electrodomésticos, alacenas, cajones, mesada y puntos de uso diario para lograr una cocina cómoda y funcional.",
  },
  {
    category: "Amoblamientos",
    title: "Por qué conviene integrar muebles y mesadas en un mismo proyecto",
    desc: "Cuando el diseño del mueble y la mesada se piensan juntos, el resultado queda más armónico y preciso. Se pueden cuidar mejor las medidas, encuentros, colores, espesores y terminaciones, logrando un ambiente más elegante y profesional.",
  },
  {
    category: "Mantenimiento",
    title: "Cómo cuidar mesadas de piedra",
    desc: "Para conservar una mesada en buen estado conviene limpiar con productos suaves, evitar abrasivos fuertes y secar derrames rápidamente. También es recomendable usar tablas de apoyo y proteger la superficie del calor directo prolongado.",
  },
  {
    category: "Mantenimiento",
    title: "Cómo mantener pisos exteriores en buen estado",
    desc: "En patios, veredas y accesos, la limpieza periódica evita acumulación de tierra, humedad y manchas. Usar productos adecuados y revisar juntas o sectores flojos ayuda a prolongar la vida útil del piso.",
  },
  {
    category: "Obras",
    title: "Por qué asesorarse antes de comprar materiales",
    desc: "No todos los materiales responden igual frente al tránsito, la humedad, el sol o el uso cotidiano. Un buen asesoramiento permite elegir la opción más adecuada para evitar problemas de mantenimiento, desgaste o mala terminación.",
  },
  {
    category: "Obras",
    title: "Qué define una buena terminación en obra",
    desc: "Una buena terminación no depende solo del material. También influyen la nivelación, los cortes, las juntas, los encuentros con paredes, el diseño de colocación y la prolijidad general del trabajo.",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// MODAL COMPONENTS
// ──────────────────────────────────────────────────────────────────────────────

function NewsModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: NewsItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="news-modal-title"
        className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-5xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label="Cerrar novedad"
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2.5 text-brand-graphite shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          {/* Image */}
          <div className="relative min-h-[260px] lg:min-h-full bg-brand-graphite overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
            <img
              src={item.image}
              alt={item.imageAlt}
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Tag overlay */}
            <div className="absolute left-6 bottom-6">
              <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-graphite">
                {item.tag}
              </span>
              <p className="mt-2 text-white/70 text-sm">{item.date}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-12">
            <h3
              id="news-modal-title"
              className="text-3xl lg:text-4xl font-bold text-brand-graphite leading-tight"
            >
              {item.title}
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-brand-text-soft border-l-4 border-brand-gold pl-4">
              {item.desc}
            </p>

            <div className="mt-7 space-y-4">
              {item.content.map((paragraph) => (
                <p key={paragraph} className="text-brand-text-soft leading-relaxed text-[0.95rem]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation between news */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                disabled={!hasPrev}
                aria-label="Novedad anterior"
                className="flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-brand-graphite transition-all hover:bg-brand-graphite hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </button>
              <button
                type="button"
                onClick={onNext}
                disabled={!hasNext}
                aria-label="Siguiente novedad"
                className="flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-brand-graphite transition-all hover:bg-brand-graphite hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-gold-strong transition-colors"
              >
                Consultar por este tema
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-md border border-brand-graphite px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-graphite hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function TipsModal({ onClose }: { onClose: () => void }) {
  const categories = [...new Set(tips.map((t) => t.category))];
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const allCategories = ["Todos", ...categories];

  const filtered =
    activeCategory === "Todos"
      ? tips
      : tips.filter((t) => t.category === activeCategory);

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="tips-modal-title"
        className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-4xl max-h-[calc(100svh-2rem)] overflow-x-hidden overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label="Cerrar tips"
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2.5 text-brand-graphite shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-brand-graphite rounded-t-2xl p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-brand-gold/20">
              <Lightbulb className="h-6 w-6 text-brand-gold" />
            </div>
            <span className="rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold">
              {tips.length} tips acumulados
            </span>
          </div>
          <h3
            id="tips-modal-title"
            className="text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            Guía de recomendaciones
          </h3>
          <p className="mt-3 text-white/65 leading-relaxed max-w-xl">
            Consejos prácticos para materiales, terminaciones, mantenimiento y uso
            de cada espacio. Se actualizan continuamente.
          </p>
        </div>

        {/* Category filter */}
        <div className="px-8 sm:px-10 pt-6 pb-2">
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-brand-gold text-brand-graphite"
                    : "bg-brand-gold/10 text-brand-gold-strong hover:bg-brand-gold/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tips grid */}
        <div className="p-8 sm:p-10 pt-6 grid sm:grid-cols-2 gap-4">
          {filtered.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-border bg-[#F6F5F3] p-5 transition-all hover:shadow-md hover:border-brand-gold/30"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-gold-strong bg-brand-gold/10 px-2.5 py-1 rounded-full">
                {tip.category}
              </span>
              <h4 className="mt-3 text-base font-bold text-brand-graphite leading-snug">
                {tip.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-soft">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="px-8 sm:px-10 pb-8 flex flex-col sm:flex-row gap-3 border-t border-border pt-6">
          <a
            href="#contacto"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-gold-strong transition-colors"
          >
            Consultar por asesoramiento
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-brand-graphite px-7 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-graphite hover:text-white transition-colors"
          >
            Cerrar
          </button>
        </div>
      </article>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN SECTION
// ──────────────────────────────────────────────────────────────────────────────

export function News() {
  const [selectedNewsIndex, setSelectedNewsIndex] = useState<number | null>(null);
  const [showTips, setShowTips] = useState(false);

  const modalOpen = selectedNewsIndex !== null || showTips;

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && selectedNewsIndex !== null) goNext();
      if (e.key === "ArrowLeft" && selectedNewsIndex !== null) goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalOpen, selectedNewsIndex]);

  const closeModal = () => {
    setSelectedNewsIndex(null);
    setShowTips(false);
  };

  const goPrev = () => {
    if (selectedNewsIndex !== null && selectedNewsIndex > 0)
      setSelectedNewsIndex(selectedNewsIndex - 1);
  };

  const goNext = () => {
    if (selectedNewsIndex !== null && selectedNewsIndex < news.length - 1)
      setSelectedNewsIndex(selectedNewsIndex + 1);
  };

  return (
    <section
      id="novedades"
      aria-labelledby="novedades-title"
      className="scroll-mt-28 py-24 lg:py-32 bg-[#F6F5F3] border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold mb-4 text-sm">
              Novedades
            </p>
            <h2
              id="novedades-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-graphite leading-tight"
            >
              Actualidad &amp; Obras
            </h2>
            <p className="mt-5 text-brand-text-soft leading-relaxed max-w-lg">
              Tres novedades destacadas del mes: trabajos realizados, materiales
              y proyectos en los que participamos.
            </p>
          </div>

          <a
            href="#contacto"
            className="self-start lg:self-auto inline-flex items-center justify-center gap-2 rounded-md border border-brand-graphite px-6 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-graphite hover:text-white transition-colors"
          >
            Consultar por un proyecto
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* ── NEWS GRID — 3 cards ── */}
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {news.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedNewsIndex(index)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus:outline-none focus:ring-2 focus:ring-brand-gold-strong"
            >
              {/* Image thumbnail */}
              <div className="relative h-56 w-full shrink-0 overflow-hidden bg-brand-graphite">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 bottom-4 rounded-full bg-brand-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-brand-graphite">
                  {item.tag}
                </span>
                <span className="absolute right-4 top-4 text-[0.7rem] text-white/75 bg-black/30 rounded-full px-2.5 py-1">
                  {item.date}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-graphite leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-text-soft line-clamp-3">
                  {item.desc}
                </p>
                <span className="mt-auto pt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-gold-strong transition-all duration-300 group-hover:gap-3">
                
                  Leer más
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div className="my-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2 text-brand-gold-strong">
            <Lightbulb className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Biblioteca de tips</span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── TIPS BANNER ── */}
        <div className="relative rounded-2xl overflow-hidden bg-brand-graphite">
          {/* Decorative stripe */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-gold" />

          <div className="flex flex-col md:flex-row md:items-center gap-8 px-6 py-10 sm:px-10">
            {/* Icon cluster */}
            <div className="shrink-0 flex items-center gap-4">
              <div className="p-4 rounded-xl bg-brand-gold/15">
                <BookOpen className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Tips publicados
                </p>
                <p className="text-3xl font-bold text-white">{tips.length}</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Consejos útiles para tus proyectos
              </h3>
              <p className="mt-2 text-white/60 leading-relaxed max-w-xl">
                Recomendaciones sobre materiales, usos, mantenimiento, diseño y
                terminaciones. Se van sumando con el tiempo.
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => setShowTips(true)}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-graphite hover:bg-brand-gold-strong transition-colors sm:w-auto"
            >
              Ver todos los tips
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── MODALS ── */}
      {selectedNewsIndex !== null && (
        <NewsModal
          item={news[selectedNewsIndex]}
          onClose={closeModal}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={selectedNewsIndex > 0}
          hasNext={selectedNewsIndex < news.length - 1}
        />
      )}

      {showTips && <TipsModal onClose={closeModal} />}
    </section>
  );
}
