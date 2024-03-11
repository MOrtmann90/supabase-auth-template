import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <p>
          &copy; {year}
          <Link
            className="links pl-1"
            to={"http://mapa.tandil.gov.ar/IdeTandil/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Área de Geotecnologías
          </Link>
        </p>
        <span className="hidden lg:inline-block mx-1">|</span>
        <p>Dirección de Estadística Local</p>
      </div>
    </footer>
  );
};

export default Footer;
