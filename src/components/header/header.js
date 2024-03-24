import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="_conteiner">
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
        <div className="ScrollLeft _conteiner">
          <div className="ConteinerMonkeStrong">
            <h1 className="text_header1">MONKE IS STRONG</h1>
            <h1 className="text_header2">YOU CAN BE STRONG TOO</h1>
            <h2 className="text_header3">
              Just be Pumped and Strong like BEAST
            </h2>
            <div className="disapearLink">
              <a href="#" className="krug2">
                Присоединяйся
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
