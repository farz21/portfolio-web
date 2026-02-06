export default function Hero({ texts, lang }) {
  // Link del CV según idioma
  const cvLink = lang === "es" ? "https://drive.google.com/file/d/1fPgi5yEITDM9BCBFYFkBIcPvCgR3k4P7/view?usp=sharing" : "https://drive.google.com/file/d/1rBc82pLi_q9PAoeTWXU_RVKUbXDCPMSZ/view?usp=sharing";

  return (
    <section
      id="home"
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 40px",
        gap: "12px",
      }}
    >
      <img
        className="avatar"
        src="/foto-perfil.jpg"
        alt="Foto de Fabrizio Coronel"
      />

      <h1>{texts.hero_title}</h1>
      <h2>{texts.hero_sub}</h2>

      {/* Botón CV */}
      <a
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn primary"
        style={{ marginTop: "20px" }}
      >
        {texts.cv_button} {/* "Ver CV" / "View Resume" según idioma */}
      </a>
    </section>
  );
}
