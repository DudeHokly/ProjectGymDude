import "./OurServices.css";
import "../../icons/css/fontello.css";

export default function Services() {
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
              <h1 className="textServices1">МЫ ПРЕДЛАГАЕМ</h1>
              <h2 className="textServices2">
                ВСЕ НЕОБХОДИМОЕ ДЛЯ ПОДДЕРЖАНИЯ ФОРМЫ И ХОРОШЕГО САМОЧУВСТВИЯ
              </h2>
            </div>
          </div>
          <div className="_placeIcon">
            <figure className="_services_right_icon">
              <i className="icon-dribbble"></i>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
