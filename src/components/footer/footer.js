import "./footer.css";
import Gif from "../../images/gymGif.gif";

export default function Footer() {
  return (
    <section className="FooterSection">
      <div className="conteinerFooter">
        <figure>
          <img src={Gif} alt className="gifFooter"></img>
        </figure>
        <div className="margDiv">
          <div className="rowFooter">
            <div className="CardFooter">
              <div className="aboutCard">
                <a href="#">
                  <figure>
                    <img src="#" alt="Лого" className="imgLogoFooter"></img>
                  </figure>
                </a>
                <p>Какой то текст пока не придумал пускай он тут буит</p>
                <ul>
                  <li>
                    <a href="#" alt="Иконка">
                      <i></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="Иконка">
                      <i></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="Иконка">
                      <i></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="CardFooter">
              <div className="hourFooterCard">
                <h6>Часы работы</h6>
                <ul className="spisokFooter">
                  <li>
                    <p>Понедельник - Суббота</p>
                  </li>
                  <li>
                    <span>12.00 - 14.45</span>
                  </li>
                  <li>
                    <p>Воскресенье - Четверг</p>
                  </li>
                  <li>
                    <span>17.00 - 00.00</span>
                  </li>
                  <li>
                    <p>Пятница - Суббота</p>
                  </li>
                  <li>
                    <span>17.00 - 00.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="CardFooter">
              <div className="LinkFooter">
                <h6>
                  <ul>
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
                </h6>
              </div>
            </div>
            <div className="CardFooter">
              <div className="ContactFooter">
                <h6>Связаться с нами</h6>
                <ul>
                  <li>
                    <p>Адрес:</p>
                  </li>
                  <li>
                    <span>121 Московский район, 7, Санкт-Петербург</span>
                  </li>
                  <li>
                    <p>Email:</p>
                  </li>
                  <li>
                    <span>info@kachatsa.ru</span>
                  </li>
                  <li>
                    <p>Телефон:</p>
                  </li>
                  <li>
                    <span>+799921245234</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <figure>
          <img src={Gif} alt className="gifFooter"></img>
        </figure>
      </div>
      <div className="BottomCopiright">
        <div className="margCopiraight">
          <p>Copyright 2024 GymProject Все права защищены</p>
        </div>
      </div>
    </section>
  );
}
