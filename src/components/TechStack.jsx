import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaGithub,
} from "react-icons/fa";
// Agregamos SiPowerbi a la importación
import {
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function TechStack({ texts }) {
  const technologies = [
    { name: "C#", icon: <FaCode color="#239120" size={40} /> },
    { name: ".NET", icon: <SiDotnet color="#512BD4" size={40} /> },
    { name: "React", icon: <FaReact color="#61dafb" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs color="#3c873a" size={40} /> },
    { name: "Express.js", icon: <SiExpress color="#5a5858" size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" size={40} /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34c26" size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#264de4" size={40} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} /> },
    { name: "GitHub", icon: <FaGithub color="#5a5858" size={40} /> },
    {
      name: "Power BI",
      icon: (
        <svg viewBox="0 0 24 24" fill="#F2C811" width="40" height="40">
          <path d="M14 2h6v20h-6V2zM7.5 8h5.5v14H7.5V8zM1 14h5.5v8H1v-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech-stack" style={{ padding: "60px 20px" }}>
      <div
        className="card"
        style={{
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          {texts.tech_stack_title}
        </h2>

        <div
          className="tech-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{ textAlign: "center" }}
            >
              {tech.icon}
              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  color: "var(--color-text)",
                }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
