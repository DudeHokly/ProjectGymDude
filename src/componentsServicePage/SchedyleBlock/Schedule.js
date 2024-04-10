import "./Schedule.css";
import "../../icons/css/fontello.css";

const days = [
  "Logo",
  "Суббота",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
];

const blank = {
  title: "",
  desc: "",
};
const cardio = {
  title: "Cardio",
  desc: "Cardio Excersices",
};
const yoga = {
  title: "YOGA",
  desc: "Yoga Session",
};
const gym = {
  title: "GYM",
  desc: "Mass Gain",
};
const crossfit = {
  title: "CROSSFIT",
  desc: "Mass Gain",
};
const box = {
  title: "BOXING",
  desc: "Mass Gain",
};

const schedule = [
  days,
  ["8:00", cardio, cardio, cardio, cardio, cardio, cardio],
  ["10:00", yoga, yoga, blank, yoga, yoga, blank],
  ["16:00", gym, blank, gym, gym, blank, blank],
  ["20:00", crossfit, crossfit, blank, blank, crossfit, crossfit],
  ["22:00", box, box, box, box, box, box],
];

const scheduleJsx = [];

for (let i = 0; i < schedule.length; i++) {
  for (let j = 0; j < schedule[i].length; j++) {
    let blockClass = "";
    if (i === 0) {
      blockClass = "tableUpBlackBlock";
      scheduleJsx.push(
        <ScheduleCard title={schedule[i][j]} className={blockClass} />
      );
    } else if (j === 0) {
      blockClass = "tableTimeBlock";
      scheduleJsx.push(
        <ScheduleCard title={schedule[i][j]} className={blockClass} />
      );
    } else {
      blockClass = "tableScheduleBlockWhite";
      scheduleJsx.push(
        <ScheduleCard
          title={schedule[i][j].title}
          desc={schedule[i][j].desc}
          className={blockClass}
        />
      );
    }
  }
}

function ScheduleCard({ className, title, desc }) {
  return (
    <div className={" " + className}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="ScheduleSection">
      <div className="content _conteiner">
        <div className="rowTimetable">
          <h5 className="ScheduleText1">Наш график работы</h5>
          <h2 className="ScheduleText2">
            Ниже можете ознакомиться с нашими мероприятиями
          </h2>
        </div>
        <div className="ScheduleTable">{scheduleJsx}</div>
      </div>
    </section>
  );
}
