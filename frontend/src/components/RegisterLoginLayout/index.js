import style from "./registerLoginLayout.module.scss";
import { Pets } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterLoginLayout({
  title,
  input,
  quote,
  buttonName,
  onClick,
}) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(true);
  return (
    <div className={`${style.login}`} style={{ zIndex: 1 }}>
      <div className={`${style.box}`} style={{ zIndex: 5 }}>
        <Pets className={style.mainIcon} style={{ fontSize: 70, width: 200 }} />
        <div className={`${style.heading}`}>{title}</div>
        <div className={`${style.inputPlacement}`}>
          {input.map((e) => (
            <InputField
              label={e.label}
              placeholder={e.placeholder}
              password={e.password}
              onChange={e.onChange}
            />
          ))}
          {!success ? <div className={style.error}>{error}</div> : ""}
          <div
            className={`${style.buttonBox} ${
              success ? style.buttonBoxMarginHigh : style.buttonBoxMarginLow
            }`}
          >
            <button
              onClick={() => onClick(setSuccess, setError)}
              className={style.submitButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={style.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={style.quote}>"{quote}"</div>
      <Link
        to={buttonName === "Login" ? "/login" : "/register"}
        className={style.loginRegister}
      >
        {buttonName}
      </Link>
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
