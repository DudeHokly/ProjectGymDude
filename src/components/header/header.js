import logo from "../../images/logo_gym.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="menu">
        <div className="content">
          <div className="conteiner">
            <div className="logo">
              <img className="Logo" src={logo} alt={"Logo"} />
            </div>
            <div className="menu_blocks">
              <nav>
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
        </div>
        <div className="ScrollLeft">
          <div className="ConteinerMonkeStrong">
            <h1 className="text_header1">MONKE IS STRONG</h1>
            <h1 className="text_header2">YOU CAN BE STRONG TOO</h1>
            <h2 className="text_header3">
              Just be Pumped and Strong like BEAST
            </h2>
            <p className="disapearLink">
              <a href="#" className="Prisoed">
                Присоединяйся
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
