import "./aboutUs.css";

export default function AboutUS() {
  return (
    <div className="aboutUS">
      <div className="contentUs">
        <div className="conteinerUs">
          <h2 className="textAbout">О нас</h2>
          <h1 className="textWelcome">ДОБРО ПОЖАЛОВАТЬ В XTREME FITNESS</h1>
          <p className="textJust">
            Это не просто клуб для любителей спорта и людей, которые ведут
            здоровый образ жизни. Наша площадка – это настоящий стиль жизни,
            который в первую очередь гарантирует не только профессиональный
            подход к занятию спортом, а отвечает на главный вопрос: кто герой и
            героиня нашего времени.
          </p>
          <div className="allResultAbout">
            <div className="resultsAbout">
              <h3>600k+</h3>
              <p>РАБОЧИХ ЧАСОВ</p>
            </div>
            <div className="resultsAbout">
              <h3>790+</h3>
              <p>ПРОГРАММ ТРЕНИРОВОК</p>
            </div>
            <div className="resultsAbout">
              <h3>2560+</h3>
              <p>СЧАСТЛИВЫХ КЛИЕНТОВ</p>
            </div>
            <div className="resultsAbout">
              <h3>840+</h3>
              <p>ИДЕАЛЬНЫЙ РЕЗУЛЬТАТ</p>
            </div>
          </div>
          <button className="buttonJoin">Присоединиться</button>
        </div>
      </div>
    </div>
  );
}
