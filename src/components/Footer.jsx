export default function Footer({ texts }) {
  return (
    <footer className="footer" style={{ marginTop: "30px", paddingBottom: "20px", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} Fabrizio Coronel. {texts.contact_footer}</p>
    </footer>
  );
}