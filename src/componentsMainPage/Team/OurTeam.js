import "./OurTeam.css";
import Trenner1 from "../../images/Trener1.jpg";
import Trenner2 from "../../images/Trener2.jpg";
import Trenner3 from "../../images/Trener3.jpg";
import "../../icons/css/fontello.css";

const cardOfTrenners = [
  {
    Trenera: Trenner1,
    nameTrener: "Королев Степан Фёдорович",
    textTeam1: <p className="textTeam">Кроссфит</p>,
  },
  {
    Trenera: Trenner2,
    nameTrener: "Емельянов Иван Михайлович",
    textTeam1: <p className="textTeam">Бокс</p>,
  },
  {
    Trenera: Trenner3,
    nameTrener: "Журавлев Демид Ильич",
    textTeam1: <p className="textTeam">Поуэрлифтинг</p>,
  },
];

const generCards = cardOfTrenners.map((elem, i) => {
  return <TrenerCard elem={elem} />;
});

function TrenerCard({ elem }) {
  return (
    <div className="boxKartochki">
      <figure className="topPhotoTrenera">
        <img
          src={elem.Trenera}
          alt="Фото тренера"
          className="photoTrenera"
        ></img>
      </figure>
      <div className="lowerTextKartochki">
        <h5 className="nameTrener">{elem.nameTrener}</h5>
        <p className="textTeam">{elem.textTeam1}</p>
        <div className="TeamIcons">
          <a href="#">
            <i className="icon-skype"></i>
          </a>
          <a href="#">
            <i className="icon-paper-plane"></i>
          </a>
          <a href="#">
            <i className="icon-gplus"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TeamGroup() {
  return (
    <section className="teamGroup ">
      <div className="conteinerTeam _conteiner">
        <div className="_placeIcon">
          <figure className="_services_right_icon">
            <i className="icon-dribbble"></i>
          </figure>
        </div>
        <div className="rowTextTeam">
          <h2 className="TextTrenners">Наши Профессиональные Тренера</h2>
        </div>

        <div className="teamTrenners">{generCards}</div>
        <div className="_placeIcon">
          <figure className="_services_left_icon">
            <i className="icon-dribbble"></i>
          </figure>
        </div>
      </div>
    </section>
  );
}
