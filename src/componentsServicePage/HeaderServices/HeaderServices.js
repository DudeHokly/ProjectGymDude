import HeaderNav from "../../componentsMainPage/header/headerNav";
import "./HeaderServices.css";

export default function HeaderServices() {
  return (
    <header className="headerServices">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Наши Услуги</h1>
            <div className="bannerSectionContentBtn">
              <a href="#">
                <span className="spn_Home">Главная</span>
              </a>
              -
              <a href="#">
                <span className="spn_Join">Присоединиться</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
