import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsIcon from "@mui/icons-material/Sports";
import "./KartochkiTreners.css";
import "../../icons/css/fontello.css";
import { useState } from "react";

export default function KartochkiTreners() {
  let [count, setCount] = useState(0);

  let interval = setInterval(() => {
    if (count >= 1000) {
      clearInterval(interval)
    }
    setCount(count+1);
  }, 30)

  return (
    <section className="facilities_section _conteiner">
      <div className="facilities_conteiner">
        <div className="row_kartochki">
          <div className="padding_card card_tren">
            <div className="facilities_content">
              <figure className="icon_facilities">
                <i className="iconServices">
                  <FitnessCenterIcon fontSize="75px" />
                </i>
              </figure>
              <h5 className="textWhiteLeftyUp">ПЕРСОНАЛЬНЫЙ ТРЕНЕР{count}</h5>
              <p className="textWhiteLeftyLow">
                Тренерский стаж более 5 лет. Специализация, кросфит,
                функциональный тренинг, бокс. Методики жиросжигания за 3 месяца.
                КМС по боксу.
              </p>
              <div className="btn_more">
                <a className="KnowMoreBtn" href="#">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
          <div className="padding_card card_yoga">
            <div className="facilities_content">
              <figure className="icon_facilities">
                <i className="iconServices">
                  <SportsGymnasticsIcon fontSize="75px" />
                </i>
              </figure>
              <h5 className="textWhiteLeftyUp">ЗАНЯТИЯ ЙОГОЙ</h5>
              <p className="textWhiteLeftyLow">
                Для сжигания жира и увеличения выносливости, улучшает вашу
                фигуру. Йога, безусловно, сделает вас сильнее, увеличит силы и
                повысит гибкость.
              </p>
              <div className="btn_more">
                <a className="KnowMoreBtn" href="#">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
          <div className="padding_card card_box">
            <div className="facilities_content">
              <figure className="icon_facilities">
                <i className="iconServices">
                  <SportsMmaIcon fontSize="75px" />
                </i>
              </figure>
              <h5 className="textWhiteLeftyUp">ЗАНЯТИЯ БОКСОМ</h5>
              <p className="textWhiteLeftyLow">
                Занятия боксом — это специально разработанный комплекс, который
                позволит овладеть всеми необходимыми навыками бокса и даже
                больше.
              </p>
              <div className="btn_more">
                <a className="KnowMoreBtn" href="#">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
          <div className="padding_card card_kardio">
            <div className="facilities_content">
              <figure className="icon_facilities">
                <i className="iconServices">
                  <SportsIcon fontSize="75px" />
                </i>
              </figure>
              <h5 className="textWhiteLeftyUp">ЖИРОСЖИГАНИЕ</h5>
              <p className="textWhiteLeftyLow">
                Наиболее эффективный способ похудения — это уменьшение
                потребляемых калорий и правельное питание. Мы подберем для вас
                отличную программу.
              </p>
              <div className="btn_more">
                <a className="KnowMoreBtn" href="#">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_join">
          <a className="KnowMoreBtnJoin" href="#">
            Присоединится
          </a>
        </div>
      </div>
    </section>
  );
}
