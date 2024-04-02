import "./testPage.css";
import "../icons/css/fontello.css";

const days = [
  "Logo",
  "Суббота",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
];
// const WorkTime = ["08:00", "10:00", "16:00", "20:00", "22:00"];

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

/*
const UpEx = ["Cardio", "YOGA", "GYM", "CROSSFIT", "BOXING"];
const DownEx = [
  "Cardio Excersices",
  "Yoga Session",
  "Mass Gain",
  "Streching",
  "Boxings",
];
*/

const schedule = [
  days,
  ["8:00", cardio, cardio, cardio, blank, cardio, yoga],
  ["10:00", cardio, cardio, cardio, yoga, cardio, yoga],
  ["16:00", cardio, cardio, cardio, yoga, cardio, yoga],
  ["20:00", cardio, cardio, cardio, yoga, cardio, yoga],
  ["22:00", cardio, cardio, cardio, yoga, cardio, yoga],
];

const scheduleJsx = [];

for (let i = 0; i < schedule.length; i++) {
  for (let j = 0; j < schedule[i].length; j++) {
    let blockClass = "";
    if (i === 0) {
      blockClass = "black";
      scheduleJsx.push(
        <ScheduleCard title={schedule[i][j]} className={blockClass} />
      );
    } else if (j === 0) {
      blockClass = "time";
      scheduleJsx.push(
        <ScheduleCard title={schedule[i][j]} className={blockClass} />
      );
    } else {
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

export default function TestPage() {
  return <section className="schedule">{scheduleJsx}</section>;
}
