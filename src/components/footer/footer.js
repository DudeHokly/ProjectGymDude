import "./footer.css";
import logo from "../../images/logo_gym.png";
import "../../icons/css/fontello.css";

export default function Footer() {
  return (
    <section className="FooterSection">
      <div className="ball _placeIcon">
        <figure className="footerLeft_icon">
          <i className="icon-dribbble"></i>
        </figure>
      </div>
      <div className="ball _placeIcon">
        <figure className="footerRight_icon">
          <i className="icon-dribbble"></i>
        </figure>
      </div>
      <div className="conteinerFooter _conteiner">
        <div className="contentgDiv">
          <div className="CardFooter">
            <div className="aboutCard padAbout1">
              <figure className="logo">
                <a href="#">
                  <i className="icon-wheelchair"></i>
                </a>
              </figure>
              <p>Какой то текст пока не </p>
              <ul className="footIcons">
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-paper-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-github-squared"></i>
                  </a>
                </li>
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-steam"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__navigation">
            <div className="CardFooter aboutCard padAbout2">
              <h6>Часы работы</h6>
              <ul className="spisokFooter">
                <li>
                  <p>Понедельник - Суббота</p>
                  <span>12.00 - 14.45</span>
                </li>
                <li>
                  <p>Воскресенье - Четверг</p>
                  <span>17.00 - 00.00</span>
                </li>
                <li>
                  <p>Пятница - Суббота</p>
                  <span>17.00 - 00.00</span>
                </li>
              </ul>
            </div>
            <div className="CardFooter aboutCard padAbout3">
              <h6>Quick Links</h6>
              <ul className="spisokFooter">
                <li>
                  <i>
                    <a href="#">О нас</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Услуги</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Тренера</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Цены</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Связаться с нами</a>
                  </i>
                </li>
              </ul>
            </div>
            <div className="CardFooter aboutCard padAbout3">
              <h6>Связаться с нами</h6>
              <ul className="spisokFooter">
                <li>
                  <p>Адрес:</p>
                  <span>121 Московский район, 7, Санкт-Петербург</span>
                </li>
                <li>
                  <p>Email:</p>
                  <span>info@kachatsa.ru</span>
                </li>
                <li>
                  <p>Телефон:</p>
                  <span>+799921245234</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomCopiright">
        <div className="margCopiraight">
          <p>Copyright 2024 GymProject Все права защищены</p>
        </div>
      </div>
    </section>
  );
}
