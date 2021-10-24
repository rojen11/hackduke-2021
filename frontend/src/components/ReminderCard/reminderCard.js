import { useEffect, useState } from "react";
import style from "./reminderCard.module.scss";
import axios from "axios";
import TextField from "@mui/material/TextField";

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

function onPostReminder(data) {
  axios.post("/api/remainder/create", { ...data, offset: 10 }).then((res) => {
    console.log(res);
    cardData.push([data.title, data.due_date, data.description]);
  });
}

export default function ReminderCard() {
  useEffect(() => {
    axios
      .get("/api/reminder/")
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  }, []);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ title: "", due_date: "", body: "" });
  return (
    <div className={style.reminderCards}>
      <button className={style.addButton} onClick={() => setShow(!show)}>
        Add Reminder
      </button>
      {show && (
        <div className={style.popup}>
          <button className={style.crossButton} onClick={() => setShow(!show)}>
            X
          </button>
          <InputField
            label="Title"
            placeholder="Enter Your Title"
            onChange={(val) => setData({ ...data, title: val })}
          />
          <TextField
            style={{ marginTop: 10 }}
            onChange={(val) => setData({ ...data, due_date: val })}
            id="datetime-local"
            label="Date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputField
            label="Description"
            placeholder="Enter Your Description"
            onChange={(val) => setData({ ...data, body: val })}
          />
          <button
            onClick={() => onPostReminder(data)}
            className={style.submitButton}
          >
            SUBMIT
          </button>
        </div>
      )}
      {cardData.map((e) => (
        <RemainderCard title={e[0]} date={e[1]} description={e[2]} />
      ))}
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

function InputField({ label, placeholder, password, onChange }) {
  return (
    <div className={`${style.inputBox}`}>
      <div className={`${style.label}`}>
        <label>{label}</label>
      </div>
      <input
        className={`${style.inputStyle}`}
        placeholder={placeholder}
        type={password ? "password" : ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
