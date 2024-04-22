import "./aboutUs.css";

export default function AboutUS() {
  return (
    <section className="aboutUS flex justify-end ExtraLarge:justify-center bg-bgContactImgPhone Medium:bg-bgContactImgFull pt-[125px] pb-[160px]">
      <div className="contentUs Large:w-[430px] Large:max-w-full-[100%]  ExtraLarge:w-[1100px] w-full flex justify-end ">
        <div className="conteinerUs w-[470px] Medium:shrink-0 p-2.5">
          <div className="">
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
