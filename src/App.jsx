import { useState } from "react";
import { texts } from "./translations";
import './index.css'
import './App.css'
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} texts={texts[lang]} />

<Hero texts={texts[lang]} lang={lang} />
<About texts={texts[lang]} />
<Projects texts={texts[lang]} />
<TechStack texts={texts[lang]} /> 
<Certifications texts={texts[lang]} />
<Contact texts={texts[lang]} />


    </>
  );
}

export default App;
