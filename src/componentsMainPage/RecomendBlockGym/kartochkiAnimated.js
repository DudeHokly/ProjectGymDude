export default function KartochkaAnimated({ cards }) {
  const cardsJsx = cards.map((elem, i) => {
    return <Kartochka elem={elem} />;
  });
  return <div className="kartochkiAnimated">{cardsJsx}</div>;
}

function Kartochka({ elem }) {
  return (
    <div className="Kartochka">
      <div className="icon">{elem.icon}</div>
      <h2 className="ZagolovKartoch">{elem.title}</h2>
      <p className="textCard">{elem.text}</p>
      <a href={elem.link}>Узнать больше</a>
    </div>
  );
}
