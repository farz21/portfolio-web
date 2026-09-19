import { useState } from "react";

export default function Navbar({ lang, setLang, texts, theme, setTheme }) {
  const [open, setOpen] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav">
      <a href="#home" className="nav-brand">
        Fabrizio<span>Coronel</span>
      </a>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          {texts.nav_home}
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          {texts.nav_about}
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          {texts.nav_projects}
        </a>
        <a href="#certifications" onClick={() => setOpen(false)}>
          {texts.nav_certifications}
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          {texts.nav_contact}
        </a>

        {/* CONTENEDOR DE BOTONES (Tema + Idioma) */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* BOTÓN MODO OSCURO/CLARO */}
          <button
            className="lang-btn"
            onClick={toggleTheme}
            /* Aquí usamos las traducciones en lugar de texto fijo */
            title={theme === "dark" ? texts.theme_light : texts.theme_dark}
            style={{ fontSize: "1.2rem", padding: "6px 10px" }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* BOTÓN DE BANDERAS */}
          <button
            className="lang-btn"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? (
              <>
                <img src="/us.png" alt="English" />
                <span>EN</span>
              </>
            ) : (
              <>
                <img src="/es.png" alt="Español" />
                <span>ES</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
