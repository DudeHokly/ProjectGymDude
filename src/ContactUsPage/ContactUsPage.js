import "./ContactUsPage.css"
import HeaderNav from "../componentsMainPage/header/headerNav";

export default function ContactUs() {
  return (
    <header className="headerServices">
      <HeaderNav />
      <section className="bannerSectionHeader">
        <div className="content _conteiner">
          <div className="row">
            <h1>Связаться с Нами</h1>
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
  )
}