import "./Reviews.css";
import { Link } from "react-router-dom";

export default function ReviewsPage() {
  return (
    <section className="ReviewsSection">
      <div className="ReviewCont _conteiner">
        <div className="ReviewsContent">
          <div className="rowReviews">
            <h4>Отзывы наших клиентов</h4>
            <h2>Что о нас говорят</h2>
          </div>
          <div className="TextReviews">
            <p>
              Все супер сходил вместе с друзьями - отдохнули супер круто, мы
              любим качаться и любим мышцы - мышцы это жизнь. Главное не
              останавливаться, ведь если остановиться можно многое потерять. Так
              что мы с ребятами ходим в этот замечательный зал и не
              останавливаемся и не здаемся и вам советуем приходить в этот
              замечательный клуб, ведь если не сегодня то когда?
            </p>
            <div className="Client">
              <h6>Dude Dudske</h6>
              <p>Счастливый Dude</p>
            </div>
          </div>
          <div className="pointerMain">
            <div className="pointer">
              <Link to="/TeamPage" className="btnRev">
                1--
              </Link>
            </div>
            <div className="pointer">
              <Link to="/TeamPage" className="btnRev">
                --1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
