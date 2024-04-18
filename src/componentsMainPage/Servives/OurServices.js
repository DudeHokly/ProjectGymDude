import "./OurServices.css";
import "../../icons/css/fontello.css";

export default function Services() {
  return (
    <section className="OurServices">
      <div className="ServicesConteiner _conteiner">
        <div className="ServicesContent">
          <div className="_placeIcon">
            <figure className="_services_left_icon iconBall">
              <i className="icon-dribbble"></i>
            </figure>
          </div>
          <div className="contentServices _conteiner">
            <div className="row">
              <h2 className="textServicess1">МЫ ПРЕДЛАГАЕМ</h2>
              <h3 className="textServices2">
                ВСЕ НЕОБХОДИМОЕ ДЛЯ ПОДДЕРЖАНИЯ ФОРМЫ И ХОРОШЕГО САМОЧУВСТВИЯ
              </h3>
            </div>
          </div>
          <div className="_placeIcon">
            <figure className="_services_right_icon iconBall">
              <i className="icon-dribbble"></i>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
