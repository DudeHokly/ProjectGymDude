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
              <a href="/" className="defolt">
                Главная
              </a>
            </li>
            <li>
              <Link to="/services"> Услуги </Link>
            </li>
            <li>
              <a href="#" className="defolt">
                Наши тренера
              </a>
            </li>
            <li>
              <a href="#" className="defolt">
                Цены
              </a>
            </li>
            <li>
              <a href="#" className="defolt">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="krug">
                Связаться с нами
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
