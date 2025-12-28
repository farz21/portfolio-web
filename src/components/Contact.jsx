import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact({ texts }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_mx8v9zp",   // <--- reemplaza con tu Service ID
      "template_mj7e60v",  // <--- reemplaza con tu Template ID
      form,                // datos del formulario
      "tyUE9c6MR2lWTfV3T"    // <--- reemplaza con tu Public Key
    )
    .then(() => {
      alert(texts.contact_alert); // mensaje de éxito
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      alert("Error: " + error.text);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "30px" }}>
        {texts.contact_title}
      </h2>

      <div className="contact-grid">
        {/* Información de contacto */}
        <div className="card contact-info">
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            {texts.contact_intro}
          </p>
          <p style={{ fontSize: "1.2rem" }}><FaEnvelope style={{ marginRight: "10px" }} /> fabrigabrielcoronel@gmail.com</p>
          <p style={{ fontSize: "1.2rem" }}><FaPhone style={{ marginRight: "10px" }} /> +54 381 365-1474</p>
          <p style={{ fontSize: "1.2rem" }}><FaGithub style={{ marginRight: "10px" }} /><a href="https://github.com/farz21" target="_blank">GitHub</a></p>
          <p style={{ fontSize: "1.2rem" }}><FaLinkedin style={{ marginRight: "10px" }} /><a href="https://www.linkedin.com/in/fabrizio-gabriel-coronel-gordillo-36379822b/" target="_blank">LinkedIn</a></p>
        </div>

        {/* Formulario */}
        <div className="card contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={texts.contact_name_placeholder}
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={texts.contact_email_placeholder}
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={texts.contact_message_placeholder}
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit" className="btn primary">{texts.contact_send_btn}</button>
          </form>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: "30px", textAlign: "center" }}>
        <p>© {new Date().getFullYear()} Fabrizio Coronel. {texts.contact_footer}</p>
      </footer>
    </section>
  );
}
