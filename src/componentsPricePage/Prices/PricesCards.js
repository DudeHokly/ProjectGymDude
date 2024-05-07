import { Link } from "react-router-dom";
import "../../icons/css/fontello.css";

export default function PriceCards({ cards }) {
  const CardPriceJsx = cards.map((elem, i) => {
    return <KartaPrice elem={elem} />;
  });
  return <div className="PricesCardsBlock">{CardPriceJsx}</div>;
}

function KartaPrice({ elem }) {
  return (
    <div className="BoxCard">
      <figure className="photoPrices">
        <img className="PhotoTrenerPrices" src={elem.SamplePhoto} />
      </figure>
      <div className="priceMonth">
        <div className="forCirclePricePage">
          <span className="circle__price">{elem.price}</span>
          <span className="circle__price">{elem.period}</span>
        </div>
      </div>
      <div className="ContentPricesPage">
        <h5 className="titlePrice">{elem.title}</h5>
        <ul className="descPriceCard">
          <li className="descPrice">
            <i className="icon-right-open"></i>
            {elem.desc1}
          </li>
          <li className="descPrice">
            <i className="icon-right-open"></i>
            {elem.desc2}
          </li>
          <li className="descPrice">
            <i className="icon-right-open"></i>
            {elem.desc3}
          </li>
          <li className="descPrice">
            <i className="icon-right-open"></i>
            {elem.desc4}
          </li>
          <li className="descPrice">
            <i className="icon-right-open"></i>
            {elem.desc5}
          </li>
        </ul>
        <div className="forPricePadding">
          <Link to="/Payment" className="priceJoin joinPrices">
            Купить абонент
          </Link>
        </div>
      </div>
    </div>
  );
}
