import HeaderNav from "../../componentsMainPage/header/headerNav";
import { Link } from "react-router-dom";
import "./HeaderServices.css";

export default function HeaderServices() {
  return (
    <header className="headerServices">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Наши Услуги</h1>
            <Link to="/" className="bannerSectionContentBtn">
              <span>Главная</span>-<span>Присоединиться</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
