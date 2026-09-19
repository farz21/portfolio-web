import { useState } from "react";

export default function Navbar({ lang, setLang, texts, theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav">
      {/* 1. LOGO (Izquierda) */}
      <a href="#home" className="nav-brand">
        Fabrizio<span>Coronel</span>
      </a>

      {/* 2. ENLACES (Centro en PC, Menú flotante en Celular) */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>{texts.nav_home}</a>
        <a href="#about" onClick={() => setOpen(false)}>{texts.nav_about}</a>
        <a href="#projects" onClick={() => setOpen(false)}>{texts.nav_projects}</a>
        <a href="#certifications" onClick={() => setOpen(false)}>{texts.nav_certifications}</a>
        <a href="#contact" onClick={() => setOpen(false)}>{texts.nav_contact}</a>
      </nav>

      {/* 3. BOTONES DE ACCIÓN (Derecha siempre) */}
      <div className="nav-actions">
        {/* Botón Tema */}
        <button 
          className="lang-btn" 
          onClick={toggleTheme}
          title={theme === "dark" ? texts.theme_light : texts.theme_dark}
          style={{ fontSize: "1.1rem", padding: "6px 10px" }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Botón Idioma */}
        <button
          className="lang-btn"
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          style={{ padding: "6px 10px" }}
        >
          {lang === "es" ? (
            <><img src="/us.png" alt="English" style={{ width: '20px', height: '20px' }}/><span>EN</span></>
          ) : (
            <><img src="/es.png" alt="Español" style={{ width: '20px', height: '20px' }}/><span>ES</span></>
          )}
        </button>

        {/* Hamburguesa (solo visible en celular por CSS) */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </div>
  );
}