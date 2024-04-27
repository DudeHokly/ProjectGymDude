import "./TeamPageTreners.css";
import "../../icons/css/fontello.css";
import Trenner1 from "../../images/Trener1.jpg";
import Trenner2 from "../../images/Trener2.jpg";
import Trenner3 from "../../images/Trener3.jpg";
import Trenner4 from "../../images/Trener4.jpg";
import Trenner5 from "../../images/Trener5.jpg";
import Trenner6 from "../../images/Trener6.jpg";
import Trenner7 from "../../images/Trener7.jpg";
import Trenner8 from "../../images/Trener8.jpg";
import Trenner9 from "../../images/Trener9.jpg";

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
  {
    Trenera: Trenner4,
    nameTrener: "Гуляев Тимофей Алексеевич",
    textTeam1: <p className="textTeam">Кардио Нагрузки</p>,
  },
  {
    Trenera: Trenner5,
    nameTrener: "Кулябин Степан Юрьевич",
    textTeam1: <p className="textTeam">Тренер</p>,
    dudeImage: true,
  },
  {
    Trenera: Trenner6,
    nameTrener: "Яковлев Иван Платонович",
    textTeam1: <p className="textTeam">Специалист по гантелям</p>,
  },
  {
    Trenera: Trenner7,
    nameTrener: "Горбачев Виктор Ильич",
    textTeam1: <p className="textTeam">Фитнес-тренер</p>,
  },
  {
    Trenera: Trenner8,
    nameTrener: "Степанов Матвей Тимофеевич",
    textTeam1: <p className="textTeam">Спортивный судья</p>,
  },
  {
    Trenera: Trenner9,
    nameTrener: "Мельников Семён Александрович",
    textTeam1: <p className="textTeam">Инструктор по фитнесу</p>,
  },
];

const generCards = cardOfTrenners.map((elem, i) => {
  if (elem.dudeImage) {
    return <TrenerSpecialCard elem={elem} />;
  }
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

function TrenerSpecialCard({ elem }) {
  return (
    <div className="boxKartochki">
      <figure className="topPhotoTreneraSpecial">
        <img
          src={elem.Trenera}
          alt="Фото тренера"
          className="photoTreneraSpecial"
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

export default function TeamPageDudes() {
  return (
    <section className="DudesAreTreners">
      <div className="conteinerTeam _conteiner">
        <div className="_placeIcon">
          <figure className="_services_right_icon iconBall">
            <i className="icon-dribbble"></i>
          </figure>
        </div>
        <div className="rowTextTeam">
          <h2 className="TextTrenners">Наши Профессиональные Тренера</h2>
        </div>

        <div className="teamTrenners">{generCards}</div>
        <div className="_placeIcon">
          <figure className="_services_left_icon iconBall">
            <i className="icon-dribbble"></i>
          </figure>
        </div>
      </div>
    </section>
  );
}
