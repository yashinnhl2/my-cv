import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const LANGUAGES = [
  { code: "en", label: "🇬🇧 EN" },
  { code: "fr", label: "🇫🇷 FR" },
  { code: "es", label: "🇪🇸 ES" },
  { code: "de", label: "🇩🇪 DE" },
];

export default function Nav() {
  const { i18n, t } = useTranslation();

  return (
    <nav className="nav">
      <div className="nav-links">
        <Link href="/">{t("nav.about")}</Link>
        <Link href="/projects">{t("nav.projects")}</Link>
        <Link href="/blog">{t("nav.blog")}</Link>
        <Link href="/contact">{t("nav.contact")}</Link>
      </div>
      <div className="lang-switcher">
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className={i18n.language === code ? "active" : ""}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
