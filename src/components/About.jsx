export default function About({ texts }) {
  return (
    <section id="about">
      <h2 style={{ marginBottom: "10px" }}>{texts.about_title}</h2>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,.06)"
        }}
      >
        <p style={{ marginBottom: "10px" }}>{texts.about_p1}</p>
        <p>{texts.about_p2}</p>
      </div>
    </section>
  );
}
