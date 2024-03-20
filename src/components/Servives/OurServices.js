import "./OurServices.css";
import Gif from "../../images/gymGif.gif";

export default function Services() {
  return (
    <div className="OurServices">
      <div className="ServicesConteiner">
        <div className="ServicesContent">
          <section className="bgServices">
            <div className="icon_box">
              <figure className="services_left_icon">
                <img src={Gif} alt className="img_left"></img>
              </figure>
              <div className="contentServices">
                <div className="row">
                  <h1 className="textServices1">МЫ ПРЕДЛАГАЕМ</h1>
                  <h2 className="textServices2">
                    ВСЕ НЕОБХОДИМОЕ ДЛЯ ПОДДЕРЖАНИЯ ФОРМЫ И ХОРОШЕГО
                    САМОЧУВСТВИЯ
                  </h2>
                </div>
              </div>
              <figure className="services_right_icon">
                <img src={Gif} alt className="img_right"></img>
              </figure>
            </div>
          </section>
          <section className="facilities_section">
            <div className="facilities_conteiner">
              <div className="row_kartochki">
                <div className="padding_card card_tren">
                  <div className="facilities_content">
                    <figure className="icon_facilities">
                      <img src="#" alt="Иконка" className="icon_facilit"></img>
                    </figure>
                    <h5 className="textWhiteLeftyUp">ПЕРСОНАЛЬНЫЙ ТРЕНЕР</h5>
                    <p className="textWhiteLeftyLow">
                      Тренерский стаж более 5 лет. Специализация, кросфит,
                      функциональный тренинг, бокс. Методики жиросжигания за 3
                      месяца. КМС по боксу.
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
                      <img src="#" alt="Иконка" className="icon_facilit"></img>
                    </figure>
                    <h5 className="textWhiteLeftyUp">ЗАНЯТИЯ ЙОГОЙ</h5>
                    <p className="textWhiteLeftyLow">
                      Для сжигания жира и увеличения выносливости. Йога,
                      безусловно, сделает вас сильнее, увеличит силы и повысит
                      гибкость.
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
                      <img src="#" alt="Иконка" className="icon_facilit"></img>
                    </figure>
                    <h5 className="textWhiteLeftyUp">ЗАНЯТИЯ БОКСОМ</h5>
                    <p className="textWhiteLeftyLow">
                      Занятия боксом — это специально разработанный комплекс,
                      который позволит овладеть всеми необходимыми навыками
                      бокса.
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
                      <img src="#" alt="Иконка" className="icon_facilit"></img>
                    </figure>
                    <h5 className="textWhiteLeftyUp">ЖИРОСЖИГАНИЕ</h5>
                    <p className="textWhiteLeftyLow">
                      Наиболее эффективный способ похудения — это уменьшение
                      потребляемых калорий. Мы подберем для вас отличную
                      программу.
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
                <a className="KnowMoreBtn" href="#">
                  Присоединится
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
