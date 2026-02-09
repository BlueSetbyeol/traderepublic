import "./Home.css";
import Faq from "../../components/Faq/Faq";
import Image1 from "../../assets/images/videoframe_2671.png"
import Image2 from "../../assets/images/videoframe_3106.png"
import Image3 from "../../assets/images/videoframe_3755.png"
import Confiance from "../../components/Confiance/Confiance";


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
    <section className="hero-section">
      <div className="content-container">
        <h2 className="main-title">
          Épargnez maintenant, pour plus tard
        </h2>

        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-title">Commencez à investir dès 1 €</span>
            <span className="feature-description"> dans les actions, ETF, crypto et le non coté. Aucuns frais cachés.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">Créez des plans d'épargne</span>
            <span className="feature-description"> sans frais avec Trade Republic pour vous constituer une épargne à long terme.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">Créez un Plan Épargne Enfant</span>
            <span className="feature-description"> entièrement en ligne.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">Investir peut vous aider à faire fructifier votre argent,</span>
            <span className="feature-description"> mais chaque investissement comporte des risques.</span>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="device-mockup">
          <img src={Image2} alt="Application d'épargne sur smartphone" />
        </div>
      </div>
    </section>
    <section className="hero-section">
      <div className="image-container">
        <div className="device-mockup">
          <img src={Image3} alt="Portefeuille d'investissement" />
        </div>
      </div>

      <div className="content-container">
        <h2 className="main-title">
          Équilibrez votre portefeuille
        </h2>

        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-title">Investissez dans Private Markets.</span>
            <span className="feature-description"> Allez au-delà des marchés financiers avec Apollo et EQT.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">Profitez d'intérêts élevés pendant des années</span>
            <span className="feature-description"> avec l'Obligataire, y compris les obligations américaines.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">Tradez et transférez 50 cryptos,</span>
            <span className="feature-description"> ou recevez des intérêts du staking dans votre Wallet Crypto.</span>
          </div>

          <div className="feature-item">
            <span className="feature-title">La diversification peut réduire les risques de marché,</span>
            <span className="feature-description"> mais chaque investissement comporte toujours des risques.</span>
          </div>
        </div>
      </div>
    </section>
      <Confiance />
      <Faq />
    </>
  );
}
