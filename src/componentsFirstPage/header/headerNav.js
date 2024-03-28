export default function HeaderNav() {
  return (
    <div className="menu _conteiner">
      <figure className="logo">
        <a href="#">
          <i className="icon-wheelchair"></i>
        </a>
      </figure>
      <div className="menu_blocks">
        <nav className="nav_menu">
          <ul className="navigation">
            <li>
              <a href="#" className="defolt">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="defolt">
                Услуги
              </a>
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
