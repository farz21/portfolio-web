import { useState, useEffect } from "react";
import { texts } from "../data/translations"; 
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState("es");
  
  const [theme, setTheme] = useState("dark"); 

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const currentTexts = texts[lang]; 

  return (
    <>
      <Header lang={lang} setLang={setLang} texts={currentTexts} theme={theme} setTheme={setTheme} />
      <MainHome texts={currentTexts} />
      <Footer texts={currentTexts} />
    </>
  );
}