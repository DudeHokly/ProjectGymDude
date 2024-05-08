import "./ProfilePage.css";
import { Link } from "react-router-dom";
import "../icons/css/fontello.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Profile() {
  return (
    <section className="yourProfile">
      <div className="container">
        <div className="main-body">
          <div className="row1 gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="AvatarBlock">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="avatarText">
                      <h4 className="nickname">Ваш никнейм</h4>
                      <p className="userProfile">Пользователь</p>
                      <div className="flexDivProfil">
                        <button class="btnFullBack">Редактировать</button>
                        <button class="btnNotFullBack">Сообщения</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondCard">
              <div className="card">
                <div className="card-body">
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/">
                        <h6 className="linkToPageProfile">
                          Перейти на главную
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/RecordinFormPage">
                        <h6 className="linkToPageProfile">
                          Проверить запись на занятие
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/services">
                        <h6 className="linkToPageProfile">
                          Посетить наши услуги
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/ContactUs">
                        <h6 className="linkToPageProfile">Связаться с нами</h6>
                      </Link>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/Pricing">
                        <h6 className="linkToPageProfile">
                          Посмотреть цены на услуги
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="textProfile">
                      <Link to="/TeamPage">
                        <h6 className="linkToPageProfile">
                          Узнать о наших тренерах
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ThirdCard">
            <div className="card">
              <div className="card-body">
                <div className="row2 rowTextProfile">
                  <i className="icon-right-open"></i>
                  <a href="#" alt="Иконка" className="iconProfile">
                    <TelegramIcon />
                  </a>
                  <Link>
                    <h6 className="linkToPageProfile">Наш телеграм</h6>
                  </Link>
                </div>
                <div className="row2 rowTextProfile">
                  <i className="icon-right-open"></i>
                  <a href="#" alt="Иконка" className="iconProfile">
                    <WhatsAppIcon />
                  </a>
                  <Link>
                    <h6 className="linkToPageProfile">Наш Вотсап</h6>
                  </Link>
                </div>
                <div className="row2 rowTextProfile">
                  <i className="icon-right-open"></i>
                  <a href="#" alt="Иконка" className="iconProfile">
                    <YouTubeIcon />
                  </a>
                  <Link>
                    <h6 className="linkToPageProfile">Наш Ютуб</h6>
                  </Link>
                </div>
                <div className="row2 rowTextProfile">
                  <i className="icon-right-open"></i>
                  <a href="#" alt="Иконка" className="iconProfile">
                    <GitHubIcon />
                  </a>
                  <Link>
                    <h6 className="linkToPageProfile">Наш Гит</h6>
                  </Link>
                </div>
                <div className="row2 rowTextProfile">
                  <i className="icon-right-open"></i>
                  <a href="#" alt="Иконка" className="iconProfile">
                    <ThumbUpIcon />
                  </a>
                  <Link>
                    <h6 className="linkToPageProfile">Палец Вверх</h6>
                  </Link>
                </div>
                <div className="profileJoinBtn">
                  <Link to="/" className="borderDiv">
                    Присоединиться
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
