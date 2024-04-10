import { Link } from "react-router-dom";

export default function PriceCards({ cards }) {
  const CardPriceJsx = cards.map((elem, i) => {
    return <KartaPrice elem={elem} />;
  });
  return <div className="kartochkiAnimated">{CardPriceJsx}</div>;
}

function KartaPrice({ elem }) {
  return (
    <div className="BoxCard">
      <figure className="photoPrices">{elem.SamplePhoto}</figure>
      <div className="priceMonth">
        <span>{elem.price}</span>
        <span>{elem.price}</span>
      </div>
      <h5>{elem.title}</h5>
      <ul className="descPriceCard">
        <li>{elem.desc1}</li>
        <li>{elem.desc2}</li>
        <li>{elem.desc3}</li>
        <li>{elem.desc4}</li>
        <li>{elem.desc5}а</li>
      </ul>
      <Link to="/Pricing" className="defolt">
        {" "}
        Присоединиться{" "}
      </Link>
    </div>
  );
}
