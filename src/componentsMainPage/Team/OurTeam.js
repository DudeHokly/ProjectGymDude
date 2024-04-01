import "./OurTeam.css";
import Trenner1 from "../../images/Trener1.jpg";
import Trenner2 from "../../images/Trener2.jpg";
import Trenner3 from "../../images/Trener3.jpg";
import "../../icons/css/fontello.css";

const cardOfTrenners = [
  {
    topPhotoTrenera: (
      <figure className="topPhotoTrenera">
        <img src={Trenner1} alt="Фото тренера" className="photoTrenera"></img>
      </figure>
    ),
    nameTrener: <h5 className="nameTrener">Тренер1</h5>,
    textTeam1: <p className="textTeam">Кроссфит</p>,
    TeamIcon1: (
      <a href="#">
        <i className="icon-skype"></i>
      </a>
    ),
    TeamIcon2: (
      <a href="#">
        <i className="icon-paper-plane"></i>
      </a>
    ),
    TeamIcon3: (
      <a href="#">
        <i className="icon-gplus"></i>
      </a>
    ),
  },
];

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

        <div className="teamTrenners">
          <div className="boxKartochki">
            <figure className="topPhotoTrenera">
              <img
                src={Trenner1}
                alt="Фото тренера"
                className="photoTrenera"
              ></img>
            </figure>
            <div className="lowerTextKartochki">
              <h5 className="nameTrener">Тренер1</h5>
              <p className="textTeam">Кроссфит</p>
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
          <div className="boxKartochki">
            <figure className="topPhotoTrenera">
              <img
                src={Trenner2}
                alt="Фото тренера"
                className="photoTrenera"
              ></img>
            </figure>
            <div className="lowerTextKartochki">
              <h5 className="nameTrener">Тренер2</h5>
              <p className="textTeam">Бокс</p>
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
          <div className="boxKartochki">
            <figure className="topPhotoTrenera">
              <img
                src={Trenner3}
                alt="Фото тренера"
                className="photoTrenera"
              ></img>
            </figure>
            <div className="lowerTextKartochki">
              <h5 className="nameTrener">Тренер3</h5>
              <p className="textTeam">Поуэрлифтинг</p>
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
        </div>
        <div className="_placeIcon">
          <figure className="_services_left_icon">
            <i className="icon-dribbble"></i>
          </figure>
        </div>
      </div>
    </section>
  );
}
