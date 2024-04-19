import "./aboutUs.css";

// const counterNumbers =
// py-[120px] pr-[90px] pl-[550px]
export default function AboutUS() {
  return (
    <section className="aboutUS Large:w-[100%] ExtraLarge:w-[100%]">
      <div className="contentUs Large:w-[430px] _conteiner">
        <div className="conteinerUs flex justify-end">
          <div className="#">
            <h2 className="textAbout">О нас</h2>
            <h1 className="textWelcome">ДОБРО ПОЖАЛОВАТЬ В XTREME FITNESS</h1>
            <p className="textJust">
              Это не просто клуб для любителей спорта и людей, которые ведут
              здоровый образ жизни. Наша площадка – это настоящий стиль жизни,
              который в первую очередь гарантирует не только профессиональный
              подход к занятию спортом, а отвечает на главный вопрос: кто герой
              и героиня нашего времени.
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
            <div className="buttonJoin">
              <a href="#" className="buttonUs">
                Присоединиться
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
