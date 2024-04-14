import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="menu _conteiner">
      <figure className="logo">
        <Link to="/">
          <i className="icon-wheelchair"></i>
        </Link>
      </figure>
      <div className="menu_blocks">
        <nav className="nav_menu">
          <ul className="navigation">
            <li>
              <Link to="/" className="defolt">
                {" "}
                Главная{" "}
              </Link>
            </li>
            <li>
              <Link to="/services" className="defolt">
                {" "}
                Услуги{" "}
              </Link>
            </li>
            <li>
              <Link to="/TeamPage" className="defolt">
                {" "}
                Наши тренера{" "}
              </Link>
            </li>
            <li>
              <Link to="/Pricing" className="defolt">
                {" "}
                Цены{" "}
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="krug">
                {" "}
                Связаться с нами{" "}
              </Link>
            </li>

            <li className="iconNav">
              <Link to="/" className="defolt iconAutoriz">
                <i className="icon-user iconSing"></i>
              </Link>
              <ul className="iconSingIn">
                <li>
                  <Link to="/Authorization" className="defoltIcon">
                    {" "}
                    Авторизация{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="defoltIcon">
                    {" "}
                    Регистрация{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="defoltIcon">
                    {" "}
                    Помощь{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/TestPage" className="defoltIcon">
                    {" "}
                    Тестовая{" "}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
