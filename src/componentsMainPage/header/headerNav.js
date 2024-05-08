import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import "../../icons/css/fontello.css";
import { useState } from "react";

export default function HeaderNav() {
  const [isMenu, setIsMenu] = useState(false);

  function menuClick() {
    setIsMenu(true);
  }
  function menuDisable() {
    setIsMenu(false);
  }

  return (
    <div className="menu _conteiner">
      <figure className="logo">
        <Link to="/">
          <i className="logoMainPage">
            <SportsBasketballIcon fontSize="100px" />
          </i>
        </Link>
      </figure>
      <div className="menu_blocks">
        <nav className="nav_menu">
          <ul className="navigation">
            <li>
              <Link to="/" className="defolt">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/services" className="defolt">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/TeamPage" className="defolt">
                Наши тренера
              </Link>
            </li>
            <li>
              <Link to="/Pricing" className="defolt">
                Цены
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="krug">
                Связаться с нами
              </Link>
            </li>
            <li className="iconNav">
              <Link to="/ProfilePage" className="defolt iconAutoriz">
                <i className="icon-user iconSing"></i>
              </Link>
              <ul className="iconSingIn">
                <li>
                  <Link to="/Authorization" className="defoltIcon">
                    Авторизация
                  </Link>
                </li>
                <li>
                  <Link to="/Registration" className="defoltIcon">
                    Регистрация
                  </Link>
                </li>
                <li>
                  <Link to="/ProfilePage" className="defoltIcon">
                    Профиль
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          data-testid="menu-open"
          className="contentBurger"
          onClick={menuClick}
        >
          <Link to="" className="defolt">
            <i className="logoBurger">
              <MenuIcon />
            </i>
          </Link>
        </div>
      </div>

      {isMenu ? (
        <div data-testid="menu" className="MenuMobile">
          <nav className="navMobile">
            <ul className="navigationMobile">
              <li
                data-testid="menu-close"
                className="contentBurger"
                onClick={menuDisable}
              >
                <Link to="" className="defoltMobile">
                  <i className="logoBurger">
                    <CloseIcon />
                  </i>
                </Link>
              </li>
              <li className="blockNavGl">
                <Link to="/" className="defoltMobile">
                  <i className="icon-right-open"></i>
                  Главная
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/services" className="defoltMobile">
                  <i className="icon-right-open"></i>
                  Услуги
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/TeamPage" className="defoltMobile">
                  <i className="icon-right-open"></i>
                  Наши тренера
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/Pricing" className="defoltMobile">
                  <i className="icon-right-open"></i>
                  Цены
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/ContactUs" className="defoltMobile">
                  <i className="icon-right-open"></i>
                  Связаться с нами
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/Authorization" className="defoltIcon">
                  <i className="icon-right-open"></i>
                  Авторизация
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/Registration" className="defoltIcon">
                  <i className="icon-right-open"></i>
                  Регистрация
                </Link>
              </li>
              <li className="blockNav">
                <Link to="/" className="defoltIcon">
                  <i className="icon-right-open"></i>
                  Помощь
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
