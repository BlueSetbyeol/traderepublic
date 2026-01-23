import "./Navbar.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Navbar() {
  return (
    <nav>
      <p className="introduction">
        Faites fructifier votre argent de manière responsable. Découvrez tous
        les avantages et risques <ChevronRightIcon />
      </p>
      <Link to="/">
        <img src="/src/assets/images/trade_republic_white.png" alt="Logo" />
      </Link>
      <section>
        <Link to="">Connexion</Link>
        <button className="qrcode">
          <p>Télécharger l'app</p>
          <img
            src="/src/assets/images/traderepublic_qr_code.png"
            alt="connectez vous"
          />
        </button>
      </section>
    </nav>
  );
}
