import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-granite.png";

function AnimatedText({
  text,
  delay = 0,
  speed = 0.030,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="hero-letter-reveal"
          style={{ animationDelay: `${delay + index * speed}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative h-[calc(100svh-6rem)] min-h-[540px] w-full overflow-hidden sm:h-[88vh] sm:min-h-[600px]"
    >
      <style>
        {`
          @keyframes heroLetterReveal {
            0% {
              opacity: 0;
              transform: translateX(-18px) translateY(8px);
              filter: blur(6px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) translateY(0);
              filter: blur(0);
            }
          }

          @keyframes heroFadeUp {
            0% {
              opacity: 0;
              transform: translateY(18px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-letter-reveal {
            display: inline-block;
            opacity: 0;
            animation: heroLetterReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .hero-content-reveal {
            opacity: 0;
            animation: heroFadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}
      </style>

      <img
        src={hero}
        alt="Pisos graníticos premium"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        width={1920}
        height={1280}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div
            className="flex items-center gap-3 mb-6 hero-content-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-px w-10 bg-brand-gold" />
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-medium">
              Desde 1956
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            aria-label="Fábrica de mosaicos, mármoles y amoblamientos"
          >
            <AnimatedText
              text="Fábrica de mosaicos,"
              delay={0.2}
              className="block"
            />
            <AnimatedText
              text="mármoles y"
              delay={0.8}
              className="block"
            />
            <AnimatedText
              text="amoblamientos"
              delay={1.12}
              className="block"
            />
          </h1>

          <p
            className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed hero-content-reveal"
            style={{ animationDelay: "1.65s" }}
          >
            70 años fabricando soluciones durables para obras y espacios exigentes.
          </p>

          <a
            href="#contacto"
            className="mt-10 inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-strong text-brand-graphite font-semibold px-7 py-4 rounded-md transition-all hover:translate-x-0.5 shadow-[var(--shadow-soft)] hero-content-reveal"
            style={{ animationDelay: "1.9s" }}
          >
            Solicitar presupuesto
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
