import "./HeaderPricePage.css";
import HeaderNav from "../../componentsMainPage/header/headerNav";

export default function HeaderPrice() {
  return (
    <header className="HeaderTeamPage">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Тарифный План</h1>
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
