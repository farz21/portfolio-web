export default function Projects({ texts }) {
  return (
    <section id="projects">
      <h2>{texts.projects_title}</h2>
      <br />
      <div className="projects-grid">

        {/* 🔵 Proyecto Gestión Hoteles */}
        <div className="project-card">
          <img
            src="/hotel-home.png"
            alt="Proyecto sistema de gestión de hoteles"
            className="project-img"
          />

          <h3>{texts.project_hotel_title}</h3>
          <p>{texts.project_hotel_desc}</p>

          <h4>{texts.project_hotel_role_title}</h4>
          <ul>
            <li>{texts.project_hotel_role_1}</li>
            <li>{texts.project_hotel_role_2}</li>
            <li>{texts.project_hotel_role_3}</li>
            <li>{texts.project_hotel_role_4}</li>
            <li>{texts.project_hotel_role_5}</li>
          </ul>

          <div className="links">
            <a
              className="btn secondary"
              href="https://github.com/tadeo14/Gestion-Hoteles-Front"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.project_hotel_front}
            </a>
            <a
              className="btn secondary"
              href="https://github.com/tadeo14/Gestion-Hoteles-Backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.project_hotel_back}
            </a>
            <a
              className="btn primary"
              href="https://pruebahotel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.demo_online}
            </a>
          </div>
        </div>

        {/* Proyecto Freak Shop (E-Commerce) */}
        <div className="project-card">
          <img
            src="/shop-home.png" 
            alt="E-commerce Freak Shop"
            className="project-img"
          />

          <h3>{texts.project_freak_title}</h3>
          <p>{texts.project_freak_desc}</p>

          <h4>{texts.project_freak_features_title}</h4>
          <ul>
            <li>{texts.project_freak_point_1}</li>
            <li>{texts.project_freak_point_2}</li>
            <li>{texts.project_freak_point_3}</li>
            <li>{texts.project_freak_point_4}</li>
            <li>{texts.project_freak_point_5}</li>
          </ul>

          <div className="links">
            <a
              className="btn secondary"
              href="https://github.com/farz21/freak_shop" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.repo_github}
            </a>
            <a
              className="btn primary"
              href="https://freak-shop.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.demo_online}
            </a>
          </div>
        </div>

        {/* 🟢 Proyecto Banco */}
        <div className="project-card">
          <img
            src="/bank-home.png"
            alt="Simulador banco digital"
            className="project-img"
          />

          <h3>{texts.project_bank_title}</h3>
          <p>{texts.project_bank_desc}</p>

          <ul>
            <li>{texts.project_bank_point_1}</li>
            <li>{texts.project_bank_point_2}</li>
            <li>{texts.project_bank_point_3}</li>
          </ul>

          <div className="links">
            <a
              className="btn secondary"
              href="https://github.com/farz21/simulador-app-banco"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.repo_github}
            </a>
            <a
              className="btn primary"
              href="https://afp-digital-bank.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.demo_online}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}