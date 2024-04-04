import "./TeamPageTreners.css";
import "../../icons/css/fontello.css";
import Trenner1 from "../../images/Trener1.jpg";
import Trenner2 from "../../images/Trener2.jpg";
import Trenner3 from "../../images/Trener3.jpeg";
import Trenner4 from "../../images/Trener4.jpg";
import Trenner5 from "../../images/Trener5.jpg";
import Trenner6 from "../../images/Trener6.jpeg";
import Trenner7 from "../../images/Trener7.jpg";
import Trenner8 from "../../images/Trener8.png";
import Trenner9 from "../../images/Trener9.jpg";

const cardOfTrenners = [
  {
    Trenera: Trenner1,
    nameTrener: "Sakura Hibiki",
    textTeam1: <p className="textTeam">Кроссфит</p>,
  },
  {
    Trenera: Trenner2,
    nameTrener: "Uehara Ayaka",
    textTeam1: <p className="textTeam">Бокс</p>,
  },
  {
    Trenera: Trenner3,
    nameTrener: "Machio Naruzo",
    textTeam1: <p className="textTeam">Поуэрлифтинг</p>,
  },
  {
    Trenera: Trenner4,
    nameTrener: "Tachibana Satomi",
    textTeam1: <p className="textTeam">Кардио Нагрузки</p>,
  },
  {
    Trenera: Trenner5,
    nameTrener: "Кибер Демон",
    textTeam1: <p className="textTeam">Гига Хакинг</p>,
  },
  {
    Trenera: Trenner6,
    nameTrener: "Gina Boyd",
    textTeam1: <p className="textTeam">Специалист по гантелям</p>,
  },
  {
    Trenera: Trenner7,
    nameTrener: "Soryuin Akemi",
    textTeam1: <p className="textTeam">Фитнес-тренер</p>,
  },
  {
    Trenera: Trenner8,
    nameTrener: "Barnold Shortsinator",
    textTeam1: <p className="textTeam">Спортивный судья</p>,
  },
  {
    Trenera: Trenner9,
    nameTrener: "Kure Yakusha",
    textTeam1: <p className="textTeam">Инструктор по фитнесу</p>,
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

export default function TeamPageDudes() {
  return (
    <section className="DudesAreTreners">
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