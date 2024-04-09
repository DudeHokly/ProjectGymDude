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

            {/* <li>
              <Link to="/TestPage"> TestPage </Link>
            </li> */}
            <li>
              <Link to="/ContactUs" className="krug">
                {" "}
                Связаться с нами{" "}
              </Link>
            </li>

            <li className="iconNav">
              <Link to="/" className="defolt">
                <i className="icon-user iconSing"></i>
              </Link>
              <ul className="iconSingIn">
                <li>
                  <Link to="/" className="defoltIcon">
                    {" "}
                    Авторизоваться{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="defoltIcon">
                    {" "}
                    Зарегестрироватсья{" "}
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
