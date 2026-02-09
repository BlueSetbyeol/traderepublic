import "./Navbar.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <nav>
      <p className="introduction">
        Faites fructifier votre argent de manière responsable. Découvrez tous
        les avantages et risques <ChevronRightIcon />
      </p>
      <section className="navigation">
        <Link to="/">
          <img
            src="/src/assets/images/trade_republic_white.png"
            alt="Logo"
            className="logo"
          />
        </Link>
        <section className="connect_area">
          <Link to="/contact">Connexion</Link>
          <Button
            variant="contained"
            className="qrcode"
            sx={{
              borderRadius: "18px",
              padding: "0 .5em",
              backgroundColor: "var(--primary-color)",
              color: "var(--primary-font-color)",
              fontFamily: "var(--font-family)",
              textTransform: "none",
            }}
          >
            <p>Télécharger l'app</p>
            <img
              src="/src/assets/images/traderepublic_qr_code.png"
              alt="connectez vous"
            />
          </Button>
        </section>
      </section>
    </nav>
  );
}