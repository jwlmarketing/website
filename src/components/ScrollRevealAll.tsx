"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Applique automatiquement l'effet escalier (fade + translateY au scroll) à toutes
 * les <section> de la page courante, sans avoir à instrumenter chaque page à la main.
 * Monté une seule fois dans le layout racine.
 */
export default function ScrollRevealAll() {
  const pathname = usePathname();

  useEffect(() => {
    // Cible les blocs de premier niveau de la page (section, ou a defaut les <div>
    // directement enfants du wrapper racine de la page) : chaque page n'utilise pas
    // systematiquement des <section>, mais chacune a un wrapper racine sous <main>.
    const main = document.querySelector("main");
    const pageRoot = main?.firstElementChild;
    const explicitSections = Array.from(
      document.querySelectorAll<HTMLElement>("main section")
    );
    const fallbackBlocks =
      explicitSections.length === 0 && pageRoot
        ? Array.from(pageRoot.children).filter(
            (el): el is HTMLElement =>
              el instanceof HTMLElement && el.tagName !== "SCRIPT"
          )
        : [];
    const sections = explicitSections.length > 0 ? explicitSections : fallbackBlocks;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("jwl-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    sections.forEach((section) => {
      if (section.dataset.jwlRevealSkip) return;
      section.classList.add("jwl-reveal");
      const rect = section.getBoundingClientRect();
      // Ne pas cacher ce qui est déjà visible au chargement (au-dessus du pli).
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("jwl-in-view");
      } else {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
