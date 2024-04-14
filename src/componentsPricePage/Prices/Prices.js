import PriceCards from "./PricesCards";
import "./Prices.css";
import "../../icons/css/fontello.css";
import DudeTrener from "../../images/prices1.png";
import DudeTrener2 from "../../images/prices2.png";
import DudeTrener3 from "../../images/prices3.png";

const CardsPrices = [
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener2,
    price: "50$",
    period: "Месячно",
    title: "Платиновая треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener3,
    price: "60$",
    period: "Месячно",
    title: "Золотая треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
  },
  {
    SamplePhoto: DudeTrener,
    price: "45$",
    period: "Месячно",
    title: "Стандартная треня",
    desc1: "Безлемитный клубный пропуск",
    desc2: "Можно посещать с друзьями",
    desc3: "Посещение спортзала",
    desc4: "Посещать сауну",
    desc5: "Посещать боеввые искуства",
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
