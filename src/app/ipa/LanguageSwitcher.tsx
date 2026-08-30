"use client";

import { useEffect, useState } from "react";
import { type Language } from "./translations";

const supportedLanguages: Language[] = ["en", "de"];
const STORAGE_KEY = "german-pronunciation-language";

type LanguageSwitcherProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  ariaLabel: string;
};

export function LanguageSwitcher({
  language,
  onLanguageChange,
  ariaLabel,
}: LanguageSwitcherProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;

    if (saved && supportedLanguages.includes(saved)) {
      onLanguageChange(saved);
    } else {
      const browserLanguage: Language =
        navigator.language.toLowerCase().startsWith("de") ? "de" : "en";

      onLanguageChange(browserLanguage);
    }

    setMounted(true);
  }, [onLanguageChange]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = event.target.value as Language;

    onLanguageChange(newLanguage);
    localStorage.setItem(STORAGE_KEY, newLanguage);
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="languageSwitcher">
      <select
        value={language}
        onChange={handleChange}
        className="languageSelect"
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}
