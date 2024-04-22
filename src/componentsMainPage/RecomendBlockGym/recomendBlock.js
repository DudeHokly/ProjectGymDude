import KartochkaAnimated from "./kartochkiAnimated";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import "./recomendBlock.css";
import "../../icons/css/fontello.css";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: (
      <i className="iconRecomend colorIcon">
        <FitnessCenterIcon fontSize="60px" />
      </i>
    ),
    title: "FLEX MUSCLE",
    text: "Ты можешь стать сильнее только когда ты сильный и можешь стать слабее когда ты слабый",
    link: "#",
  },
  {
    icon: (
      <i className="iconRecomend colorIcon">
        <ScoreboardIcon fontSize="60px" />
      </i>
    ),
    title: "BIG LIFTING",
    text: "Поднимай большие веса и становись большим, потому что ты можешь ты можешь все",
    link: "#",
  },
  {
    icon: (
      <i className="iconRecomend colorIcon">
        <BloodtypeIcon fontSize="60px" />
      </i>
    ),
    title: "VITAMINS",
    text: "Ешь много витаминов и не забывай покупать наши витамины, почему потому что ты можешь ты можешь все",
    link: "#",
  },
  {
    icon: (
      <i className="iconRecomend colorIcon">
        <SportsMartialArtsIcon fontSize="60px" />
      </i>
    ),
    title: "PUMPING",
    text: "Просто качай железо, чтобы оно не качало тебя",
    link: "#",
  },
];

export default function RecomendBlock() {
  return (
    <section className="recomendBlockGym">
      <div className="contentRecomendBlock _conteiner CardsScreen:w-[1300px]">
        <div className="rowRecomend">
          <h2 className="textRecomend">Почему стоит выбрать нас</h2>
          <h1 className="textRecomend2">Big PUMP</h1>
        </div>
        <KartochkaAnimated cards={cards} />
        <div className="pointerMainRec">
          <div className="pointer">
            <Link to="#" className="btnRev">
              ←
            </Link>
          </div>
          <div className="pointer">
            <Link to="#" className="btnRev">
              →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
