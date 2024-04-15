import PriceCards from "./PricesCards";
import "./Prices.css";
import "../../icons/css/fontello.css";
import DudeTrener from "../../images/prices1.jpg";
import DudeTrener2 from "../../images/prices2.jpg";
import DudeTrener3 from "../../images/prices3.jpg";
import DudeTrener4 from "../../images/prices4.jpg";
import DudeTrener5 from "../../images/prices5.jpg";
import DudeTrener6 from "../../images/prices6.jpg";

const CardsPrices = [
  {
    SamplePhoto: DudeTrener,
    price: "20К",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener2,
    price: "24К",
    period: "Месячно",
    title: "Платиновая треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener3,
    price: "27К",
    period: "Месячно",
    title: "Золотая треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener4,
    price: "30К",
    period: "Месячно",
    title: "Адамантитовая треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener5,
    price: "35К",
    period: "Месячно",
    title: "Титановая треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener6,
    price: "40К",
    period: "Месячно",
    title: "Гига треня",
    desc1: "Безлемитный пропуск",
    desc2: "Приходить с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Боеввые искуства",
  },
];

export default function Prices() {
  return (
    <section className="OurServices">
      <div className="ServicesConteiner _conteiner">
        <div className="ServicesContent">
          <div className="_placeIcon">
            <figure className="_services_left_icon">
              <i className="icon-dribbble"></i>
            </figure>
          </div>
          <div className="contentServices _conteiner">
            <div className="row">
              <h2 className="textServices1">МЫ ПРЕДЛАГАЕМ</h2>
              <h3 className="textServices2">
                ВСЕ НЕОБХОДИМОЕ ДЛЯ ПОДДЕРЖАНИЯ ФОРМЫ И ХОРОШЕГО САМОЧУВСТВИЯ
              </h3>
            </div>
          </div>
          <div className="_placeIcon">
            <figure className="_services_right_icon">
              <i className="icon-dribbble"></i>
            </figure>
          </div>
        </div>
        <PriceCards cards={CardsPrices} />
      </div>
    </section>
  );
}
