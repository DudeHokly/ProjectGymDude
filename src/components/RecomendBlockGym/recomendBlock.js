import KartochkaAnimated from "./kartochkiAnimated";
import "./recomendBlock.css";
import "../../icons/css/fontello.css";

export default function RecomendBlock() {
  return (
    <section className="recomendBlockGym">
      <div className="contentRecomendBlock _conteiner">
        <div className="rowRecomend">
          <h2 className="textRecomend">Почему стоит выбрать нас</h2>
          <h1 className="textRecomend2">Big PUMP</h1>
        </div>
        <KartochkaAnimated />
      </div>
    </section>
  );
}
