import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import "./ContactUsPage.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <section className="ContacUsSection">
      <div className="contactContent _conteiner">
        <figure className="logoContactUsPage ">
          <Link to="/">
            <i className="logoContactPage">
              <SportsBasketballIcon fontSize="150px" />
            </i>
          </Link>
        </figure>
        <h1 className="contactText">СВЯЗАТЬСЯ С НАМИ</h1>
        <form className="Contactform">
          <input
            className="ContactInput"
            type="Email"
            name="Email"
            placeholder="Введите ваш Email"
          />
          <span className="btn_Contact">
            <Link to="/" className="ContactJoinLink">
              {" "}
              Отправить{" "}
            </Link>
          </span>
        </form>
        <ul className="footIcons ContactUsicons">
          <li>
            <a href="#" alt="Иконка">
              <i className="icon-paper-plane"></i>
            </a>
          </li>
          <li>
            <a href="#" alt="Иконка">
              <i className="icon-github-squared"></i>
            </a>
          </li>
          <li>
            <a href="#" alt="Иконка">
              <i className="icon-steam"></i>
            </a>
          </li>
          <li>
            <a href="#" alt="Иконка">
              <i className="icon-wheelchair-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
