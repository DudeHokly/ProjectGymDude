import "./ContactUsPage.css";
import { Link } from "react-router-dom";
import HeaderNav from "../componentsMainPage/header/headerNav";

export default function ContactUs() {
  return (
    <header className="headerServices">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Связаться с Нами</h1>
            <Link to="/" className="bannerSectionContentBtn">
              <span>Главная</span>-<span>Присоединиться</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
