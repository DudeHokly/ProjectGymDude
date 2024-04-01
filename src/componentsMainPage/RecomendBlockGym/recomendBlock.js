import KartochkaAnimated from "./kartochkiAnimated";
import "./recomendBlock.css";
import "../../icons/css/fontello.css";

const cards = [
  {
    icon: <i className="icon-accessibility"></i>,
    title: "FLEX MUSCLE",
    text: "Ты можешь стать сильнее только когда ты сильный и можешь стать слабее когда ты слабый",
    link: "#",
  },
  {
    icon: <i className="icon-blind"></i>,
    title: "BIG WEIGHT LIFTING",
    text: "Поднимай большие веса и становись большим, потому что ты можешь ты можешь все",
    link: "#",
  },
  {
    icon: <i className="icon-person"></i>,
    title: "POWERFUL VITAMINS",
    text: "Ешь много витаминов и не забывай покупать наши витамины, почему потому что ты можешь ты можешь все",
    link: "#",
  },
  {
    icon: <i className="icon-blind-1"></i>,
    title: "JUST PUMPING",
    text: "Просто качай железо, чтобы оно не качало тебя",
    link: "#",
  },
];

export default function RecomendBlock() {
  return (
    <section className="recomendBlockGym">
      <div className="contentRecomendBlock _conteiner">
        <div className="rowRecomend">
          <h2 className="textRecomend">Почему стоит выбрать нас</h2>
          <h1 className="textRecomend2">Big PUMP</h1>
        </div>
        <KartochkaAnimated cards={cards} />
      </div>
    </section>
  );
}
