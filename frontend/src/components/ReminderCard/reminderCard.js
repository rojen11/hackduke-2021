import style from "./reminderCard.module.scss";

let cardData = [
  ["Take Buddy to Vet", "on October 28, 2021", "Annual Check-up"],
  [
    "Grooming Day",
    "on November 03, 2021",
    "Appointment at Pet's Grooming Center at 10AM",
  ],
  [
    "Playdate with Tucker",
    "on November 28, 2021",
    "Time to meet my best friend Tucker :D",
  ],
];

export default function ReminderCard() {
  return (
    <div className={style.reminderCards}>
      {cardData.map((e) => (
        <RemainderCard title={e[0]} date={e[1]} description={e[2]} />
      ))}
      ;
      {cardData.map((e) => (
        <RemainderCard title={e[0]} date={e[1]} description={e[2]} />
      ))}
      ;
      {cardData.map((e) => (
        <RemainderCard title={e[0]} date={e[1]} description={e[2]} />
      ))}
      ;
      {cardData.map((e) => (
        <RemainderCard title={e[0]} date={e[1]} description={e[2]} />
      ))}
      ;
    </div>
  );
}

function RemainderCard({ title, date, description }) {
  return (
    <div className={style.card}>
      <span className={style.cardTitle}>
        <h3>{title}</h3>
      </span>

      <div className={style.cardReminderDate}>
        <span className={style.cardTitle}>
          <p>{date}</p>
        </span>
      </div>

      <div className={style.cardContent}>
        <span className={style.cardTitle}>
          <p>{description}</p>
        </span>
      </div>
    </div>
  );
}
