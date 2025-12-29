import { useState } from "react";

export default function Navbar({ lang, setLang, texts }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <h2>Fabrizio Coronel</h2>

      {/* BOTÓN HAMBURGUESA (solo mobile) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* NAV LINKS */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>{texts.nav_home}</a>
        <a href="#about" onClick={() => setOpen(false)}>{texts.nav_about}</a>
        <a href="#projects" onClick={() => setOpen(false)}>{texts.nav_projects}</a>
        <a href="#certifications" onClick={() => setOpen(false)}>{texts.nav_certifications}</a>
        <a href="#contact" onClick={() => setOpen(false)}>{texts.nav_contact}</a>

        {/* BOTÓN DE BANDERAS + TEXTO */}
        <button
          className="lang-btn"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {lang === "es" ? (
            <>
              <img src="/us.png" alt="English" />
              <span>English</span>
            </>
          ) : (
            <>
              <img src="/es.png" alt="Español" />
              <span>Español</span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
}
