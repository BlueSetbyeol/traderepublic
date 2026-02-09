import "./Confiance.css";
import Confidence from "./../../assets/images/home_section4_img.webp";

export default function Confiance() {
  return (
    <section className="confiance_section">
      <article className="presentation_confiance">
        <h2>La confiance de millions de personnes</h2>
        <div className="presentation_texte">
          <p className="lighter">
            <strong className="stronger">
              Plus de 10 millions de clients{" "}
            </strong>
            dans 18 pays européens.
          </p>
          <p className="lighter">
            <strong className="stronger">Plus de 150 milliards d'euros </strong>
            d'actifs de nos clients.
          </p>
          <p className="lighter">
            <strong className="stronger">
              Plus de 2,5 milliards d'euros d'intérêts
            </strong>
            versés directement aux clients.
          </p>
          <p className="lighter">
            <strong className="stronger">Un marché public régulé </strong> et
            des meilleurs spreads en moyenne que sur le marché de référence.
          </p>
        </div>
      </article>
      <img src={Confidence} alt="show your confidence" className="confidence" />
    </section>
  );
}
