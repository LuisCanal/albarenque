import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/albarenque-logo-new.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Obras", href: "#obras" },
  { label: "Novedades", href: "#novedades" },
  { label: "Productos", href: "#productos" },
  { label: "Empresa", href: "#empresa" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const goToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector(href);
    if (!section) return;

    const headerOffset = 125;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - headerOffset,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[var(--shadow-card)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between sm:h-28">
          <a
            href="#inicio"
            onClick={(event) => goToSection(event, "#inicio")}
            className="flex min-w-0 items-center gap-3"
            aria-label="Ir al inicio"
          >
            <img
              src={logo}
              alt="Albarenque — Desde 1956"
              className="h-20 w-auto text-xs font-thin sm:h-24 lg:h-[108px]"
              width={240}
              height={108}
              decoding="async"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => goToSection(event, item.href)}
                className="text-sm font-medium text-brand-graphite hover:text-brand-gold-strong transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 text-brand-graphite">
            <a
              href="https://www.facebook.com/albarenque.1956"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 hover:text-brand-gold-strong transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/albarenque.marmoleria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 hover:text-brand-gold-strong transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-graphite"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="max-h-[calc(100svh-6rem)] overflow-y-auto border-t border-border py-4 space-y-1 lg:hidden"
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => goToSection(event, item.href)}
                className="block px-2 py-3 text-sm font-medium text-brand-graphite hover:bg-brand-soft rounded"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 pt-3 px-2">
              <a
                href="https://www.facebook.com/albarenque.1956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 hover:text-brand-gold-strong transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/albarenque.marmoleria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 hover:text-brand-gold-strong transition-colors"
              >
                <Instagram className="h-4 w-4" />
                </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
