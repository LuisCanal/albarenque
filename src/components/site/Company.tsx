import k1 from "@/assets/kitchen-new.png";

const stats = [
  { value: "70", label: "Años de trayectoria" },
  { value: "1.000+", label: "Obras realizadas" },
  { value: "5+", label: "Provincias" },
  { value: "100%", label: "Producción nacional" },
];

export function Company() {
  return (
    <section
      id="empresa"
      aria-labelledby="empresa-title"
      className="py-24 bg-brand-graphite my-0 lg:py-[128px] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 my-0 lg:px-[40px] py-0 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="tracking-[0.25em] uppercase text-brand-gold-strong font-semibold mb-4 text-2xl">
            La empresa
          </p>
          <h2
            id="empresa-title"
            className="text-3xl sm:text-4xl font-bold leading-tight lg:text-5xl px-0"
          >
            Trayectoria, Experiencia y Compromiso 
            desde 1956
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            En Albarenque combinamos décadas de experiencia con procesos modernos de fabricación.
            Proveemos mesadas de todo tipo de superficie, amoblamientos, pisos graníticos, rústicos
            y de piedras naturales a los proyectos más exigentes de la región. Con foco en la calidad
            de atención previa y posterior a la venta.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl lg:text-4xl font-bold text-brand-gold">{s.value}</div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={k1}
            alt="Detalle de obra Albarenque"
            loading="lazy"
            decoding="async"
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover rounded-lg shadow-[var(--shadow-soft)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-brand-gold text-brand-graphite p-6 rounded-lg max-w-[220px] shadow-[var(--shadow-soft)]">
            <p className="text-2xl font-bold">Desde 1956</p>
            <p className="text-xs mt-1 font-medium">Calidad que acompaña tus proyectos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
