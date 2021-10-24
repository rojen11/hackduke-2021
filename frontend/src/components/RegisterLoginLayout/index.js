import style from "./registerLoginLayout.module.scss";
import { Pets } from "@material-ui/icons";

export default function RegisterLoginLayout({ title, input }) {
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
            />
          ))}
          <div className={style.buttonBox}>
            <button className={style.submitButton}>
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
      <div className={style.quote}>"Pets are the beauty of the world"</div>
    </div>
  );
}

function InputField({ label, placeholder, password }) {
  return (
    <div className={`${style.inputBox}`}>
      <div className={`${style.label}`}>
        <label>{label}</label>
      </div>
      <input
        className={`${style.inputStyle}`}
        placeholder={placeholder}
        type={password ? "password" : ""}
      />
    </div>
  );
}
