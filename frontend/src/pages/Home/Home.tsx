import "./Home.css";
import Faq from "../../components/Faq/Faq";
import Confiance from "../../components/Confiance/Confiance";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          La manière la plus intelligente d'investir, de dépenser et d'épargner.
        </h1>
      </section>
      <Confiance />
      <Faq />
    </>
  );
}
