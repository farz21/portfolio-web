export default function Certifications({ texts }) {
  return (
    <section id="certifications" className="certifications-section">
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "30px" }}>
        {texts.certifications_title}
      </h2>

      <div className="card certifications-card" style={{ maxWidth: "900px", margin: "0 auto", padding: "30px" }}>
        <p style={{ fontSize: "1.2rem", textAlign: "center", marginBottom: "25px" }}>
          {texts.fullstack_certificate}
        </p>

        <img
          src="/Certificado-Fullstack.png"
          alt="Certificado Fullstack"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            border: "4px solid white",
            margin: "0 auto",
            display: "block"
          }}
        />
      </div>
    </section>
  );
}
