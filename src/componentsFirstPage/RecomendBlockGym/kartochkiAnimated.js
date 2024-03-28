export default function KartochkaAnimated({ cards }) {
  const cardsJsx = cards.map((elem, i) => {
    return (
      <Kartochka
        icon={elem.icon}
        title={elem.title}
        text={elem.text}
        href={elem.link}
      />
    );
  });
  return <div className="kartochkiAnimated">{cardsJsx}</div>;
}

function Kartochka({ icon, title, text, href }) {
  return (
    <div className="Kartochka">
      <div className="icon">{icon}</div>
      <h2 className="ZagolovKartoch">{title}</h2>
      <p className="textCard">{text}</p>
      <a href={href}>Узнать больше</a>
    </div>
  );
}
