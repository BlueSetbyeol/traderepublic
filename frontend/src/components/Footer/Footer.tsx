import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        <p>Investir comporte des risques. La valeur de votre investissement peut baisser ou augmenter et des pertes du capital investi peuvent survenir. Les performances passées ne garantissent pas les résultats futurs.</p>
        <div className="flex-wrapper">
            <div className="wrapper">
                <span>Produits</span>
                <div className="little-gap-wrapper">
                  <a href="">Dépenser</a>
                  <a href="">Épargner</a>
                  <a href="">Confiance</a>
                </div>
            </div>
            <div className="wrapper">
                <span>Entreprise</span>
                <div className="little-gap-wrapper">
                  <a href="">Qui sommes-nous ?</a>
                  <a href="">Carrières</a>
                  <a href="">Presse</a>
                </div>
            </div>
            <div className="wrapper">
                <span>Clients</span>
                <div className="little-gap-wrapper">
                  <a href="">Assistance</a>
                  <a href="">Tarifs</a>
                  <a href="">Mentions légales</a>
                </div>
            </div>
            <div className="wrapper">
                <div className="little-gap-flex-wrapper"></div>
                <div className="little-gap-flex-wrapper">
                  <a>EN</a>
                  <span>FR</span>
                </div>

            </div>
        </div>
    </footer>
  );
}