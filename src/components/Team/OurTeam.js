import "./OurTeam.css";
import Trenner1 from "../../images/Trener1.jpg";
import Trenner2 from "../../images/Trener2.jpg";
import Trenner3 from "../../images/Trener3.jpg";
import Gif from "../../images/gymGif.gif";

export default function TeamGroup() {
  return (
    <section className="teamGroup">
      <div conteinerTeam>
        <figure className="iconTeam">
          <img src={Gif} alt className="gif"></img>
        </figure>
        <div className="rowTextTeam">
          <div className="PaddingDiv">
            <h2 className="TextTrenners">Наши Профессиональные Тренера</h2>
          </div>
        </div>
        <div className="teamTrenners">
          <div className="teamTrennersPaddign">
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
                <p>Кроссфит</p>
                <div className="TeamIcons">
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="teamTrennersPaddign">
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
                <p>Бокс</p>
                <div className="TeamIcons">
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="teamTrennersPaddign">
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
                <p>Поуэрлифтинг</p>
                <div className="TeamIcons">
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                  <a href="#">
                    <i className="#">Иконка</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="iconTeam2">
          <img src={Gif} alt className="gif"></img>
        </figure>
      </div>
    </section>
  );
}
