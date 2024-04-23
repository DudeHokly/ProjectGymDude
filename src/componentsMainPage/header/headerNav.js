import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { useState } from "react";


export default function HeaderNav() {

  const [isMenu, setIsMenu] = useState(false);

  function menuClick() {
    setIsMenu(true);
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
              <Link to="/" className="defolt iconAutoriz">
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
                  <Link to="/" className="defoltIcon">
                    Помощь
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contentBurger" onClick={menuClick}>
        <Link to="/" className="defolt">
          <i className="logoBurger">
            <MenuIcon />
          </i>
        </Link>
      </div>
      {
        isMenu
          ? (<div className="top-0 left-0 fixed w-[100vw] h-[100vh] bg-white/50 flex flex-col gap-5 justify-center items-center text-black">
              <div>
                123
              </div>
              <div>
                123
              </div>
              <div>
                123
              </div>
            </div>)
          : ''
      }
    </div>
  );
}
