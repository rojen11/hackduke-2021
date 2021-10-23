import style from "./login.module.scss";

export function Login() {
  return (
    <div className={`${style.login}`} style={{ zIndex: 1 }}>
      <div className={`${style.box}`} style={{ zIndex: 5 }}>
        <div className={`${style.heading}`}>Login</div>
        <div className={`${style.inputPlacement}`}>
          <InputField label="Email: " placeholder="Enter your email" />
          <InputField
            label="Password: "
            placeholder="Enter your password"
            password={true}
          />
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
