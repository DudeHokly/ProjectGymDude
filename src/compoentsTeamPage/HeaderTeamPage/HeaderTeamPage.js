import "./HeaderTeamPage.css";
import { Link } from "react-router-dom";
import HeaderNav from "../../componentsMainPage/header/headerNav";

export default function HeaderTeamPage() {
  return (
    <header className="HeaderTeamPage">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Наши Тренера</h1>
            <Link to="/" className="bannerSectionContentBtn">
              <span>Главная</span>-<span>Присоединиться</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
