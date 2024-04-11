import { Link } from "react-router-dom";

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
        <span className="circle__price">{elem.price}</span>
        <span className="circle__price">{elem.period}</span>
      </div>
      <h5 className="titlePrice">{elem.title}</h5>
      <ul className="descPriceCard">
        <li className="descPrice">{elem.desc1}</li>
        <li className="descPrice">{elem.desc2}</li>
        <li className="descPrice">{elem.desc3}</li>
        <li className="descPrice">{elem.desc4}</li>
        <li className="descPrice">{elem.desc5}</li>
      </ul>
      <Link to="/Pricing" className="defolt">
        Присоединиться
      </Link>
    </div>
  );
}
