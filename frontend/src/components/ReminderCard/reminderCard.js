import { useEffect, useState } from "react";
import style from "./reminderCard.module.scss";
import axios from "../../utils/axios_token";
import TextField from "@mui/material/TextField";
// import  form

export default function ReminderCard() {
  const [cardData, setcardData] = useState([]);
  function onPostReminder(data) {
    const now = Date.now();
    const offset = Math.floor((new Date(data["due_date"]) - now) / 1000);

    axios
      .post("/api/reminder/create", { ...data, offset: offset })
      .then((res) => {
        setcardData([...cardData, res.data]);
      });
  }

  useEffect(() => {
    axios
      .get("/api/reminder/")
      .then((res) => setcardData(res.data))
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
            onChange={(e) => setData({ ...data, due_date: e.target.value })}
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
        <RemainderCard title={e.title} date={e.due_date} description={e.body} />
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
