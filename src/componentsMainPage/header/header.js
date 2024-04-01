import HeaderNav from "./headerNav";
import "../../icons/css/fontello.css";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="_conteiner">
        <HeaderNav />
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
