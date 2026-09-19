import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Certifications from "./Certifications";
import Contact from "./Contact";

export default function MainHome({ texts }) {
  return (
    <main>
      <About texts={texts} />
      <Projects texts={texts} />
      <TechStack texts={texts} />
      <Certifications texts={texts} />
      <Contact texts={texts} />
    </main>
  );
}