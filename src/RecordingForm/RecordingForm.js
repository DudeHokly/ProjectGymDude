import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecordingForm.css";

export default function RecForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousClick = () => {
    setCurrentStep(currentStep - 1);
  };
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  return (
    <section className="RecordingFormSec">
      <form id="msform">
        <ul id="progressbar">
          <li className={currentStep === 1 ? "active" : ""}>
            Ввод ваших данных
          </li>
          <li className={currentStep === 2 ? "active" : ""}>выбор даты</li>
          <li className={currentStep === 3 ? "active" : ""}>Ваш телефон</li>
        </ul>

        <fieldset style={{ display: currentStep === 1 ? "block" : "none" }}>
          <h2 className="fs-title">Запись на занятие</h2>
          <h3 className="fs-subtitle">Шаг 1</h3>
          <input type="text" name="email" placeholder="Ваш Email" />
          <input type="password" name="pass" placeholder="Пароль" />
          <input
            type="password"
            name="cpass"
            placeholder="Подтверждение пароля"
          />
          {currentStep === 1 && (
            <button
              type="button"
              className="next action-button"
              onClick={handleNextClick}
            >
              Далее
            </button>
          )}
        </fieldset>

        <fieldset style={{ display: currentStep === 2 ? "block" : "none" }}>
          <h2 className="fs-title">Когда вам удобно</h2>
          <h3 className="fs-subtitle">Выберите дату занятия</h3>
          <input
            type="datetime-local"
            id="appointmentDateTime"
            name="appointmentDateTime"
            value={dateTime}
            onChange={handleDateTimeChange}
            required
          />
          <input type="text" name="name" placeholder="Ваше имя" />
          <input type="text" name="cername" placeholder="Ваша фамилия" />
          <input type="text" name="cername" placeholder="Ваше отчество" />
          {currentStep === 2 && (
            <>
              <button
                type="button"
                className="previous action-button"
                onClick={handlePreviousClick}
              >
                Назад
              </button>
              <button
                type="button"
                className="next action-button"
                onClick={handleNextClick}
              >
                Далее
              </button>
            </>
          )}
        </fieldset>

        <fieldset style={{ display: currentStep === 3 ? "block" : "none" }}>
          <h2 className="fs-title">Телефон</h2>
          <h3 className="fs-subtitle">Укажите свой номер телефона</h3>
          <input type="text" name="phone" placeholder="Телефон" />
          <textarea name="address" placeholder="Ваши пожелания"></textarea>
          {currentStep === 3 && (
            <>
              <button
                type="button"
                className="previous action-button"
                onClick={handlePreviousClick}
              >
                Назад
              </button>
              <Link to="/">
                <button type="button" className="next action-button">
                  Записаться
                </button>
              </Link>
            </>
          )}
        </fieldset>
      </form>
    </section>
  );
}
