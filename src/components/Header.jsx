import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header({ lang, setLang, texts, theme, setTheme }) {
  return (
    <header>
      <Navbar lang={lang} setLang={setLang} texts={texts} theme={theme} setTheme={setTheme} />
      <Hero texts={texts} lang={lang} />
    </header>
  );
}