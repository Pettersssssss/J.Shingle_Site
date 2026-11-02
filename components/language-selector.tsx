"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "pt-BR" | "en-US" | "es-ES";

const languages: { id: Language; flag: string; short: string; label: string }[] = [
  { id: "pt-BR", flag: "🇧🇷", short: "PT", label: "Português (Brasil)" },
  { id: "en-US", flag: "🇺🇸", short: "EN", label: "English (US)" },
  { id: "es-ES", flag: "🇪🇸", short: "ES", label: "Español" },
];

export function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [open, setOpen] = useState(false);
  const selected = languages.find((item) => item.id === language) ?? languages[0];

  useEffect(() => {
    const syncLanguage = () => {
      let stored = "pt-BR";
      try { stored = window.localStorage.getItem("jshingle-language") ?? "pt-BR"; } catch { /* Keep the default when storage is unavailable. */ }
      const next: Language = stored === "en-US" || stored === "es-ES" ? stored : "pt-BR";
      setLanguage(next);
      document.documentElement.lang = next;
    };
    syncLanguage();
    window.addEventListener("jshingle-language-change", syncLanguage);
    return () => window.removeEventListener("jshingle-language-change", syncLanguage);
  }, []);

  function chooseLanguage(next: Language) {
    try { window.localStorage.setItem("jshingle-language", next); } catch { /* The current selection still applies for this visit. */ }
    document.documentElement.lang = next;
    setLanguage(next);
    setOpen(false);
    window.dispatchEvent(new Event("jshingle-language-change"));
  }

  return (
    <div className={`language-picker${dark ? " language-picker-dark" : ""}`}>
      <button
        className="language-picker-trigger"
        type="button"
        aria-label={`Idioma: ${selected.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
      >
        <span className="language-flag" aria-hidden="true">{selected.flag}</span>
        <span>{selected.short}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && (
        <div className="language-picker-menu" role="menu" aria-label="Selecionar idioma">
          <p>Idioma</p>
          {languages.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitemradio"
              aria-checked={language === item.id}
              className="language-picker-option"
              onClick={() => chooseLanguage(item.id)}
            >
              <span aria-hidden="true">{item.flag}</span>
              <span>{item.label}</span>
              <span className="language-picker-check" aria-hidden="true">{language === item.id ? "✓" : ""}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
