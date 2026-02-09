import "./Home.css";
import Faq from "../../components/Faq/Faq";
import Image1 from "../../assets/images/videoframe_2671.png"
import Image2 from "../../assets/images/videoframe_3106.png"
import Image3 from "../../assets/images/videoframe_3755.png"

export default function Home() {
  return (
    <>
    <section className="hero">
        <h1>La manière la plus intelligente d'investir, de dépenser et d'épargner.</h1>
      </section>
    <section className="hero-section">
      <div className="image-container">
        <div className="device-mockup">
          <img src={Image1} alt="Carte bancaire et smartphone" />
        </div>
      </div>

      <div className="content-container">
        <h2>
          Investissez pendant que vous dépensez
        </h2>

        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-title">Activez les 2 % d'intérêts.</div>
            <div className="feature-description">Vous recevrez à la fois les intérêts de nos banques partenaires et les dividendes de nos fonds monétaires.</div>
          </div>

          <div className="feature-item">
            <div className="feature-title">Recevez 1 % de Saveback</div>
            <div className="feature-description">sur vos dépenses par carte dans votre plan d'épargne ou arrondissez vos paiements par carte avec Round Up.</div>
          </div>

          <div className="feature-item">
            <div className="feature-title">Aucuns frais de souscription mensuelle.</div>
            <div className="feature-description">Retraits gratuits et illimités dans le monde entier à partir de 100 €.</div>
          </div>

          <div className="feature-item">
            <div className="feature-title">Saveback, Round up et les intérêts</div>
            <div className="feature-description">vous aident à faire fructifier votre argent, mais ce sont des investissements qui comportent des risques liés aux cours.</div>
          </div>
        </div>
      </div>
    </section>
      
      <Faq />
    </>
  );
}
