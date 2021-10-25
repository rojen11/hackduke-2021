import RegisterLoginLayout from "../components/RegisterLoginLayout";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

function onRegister(userData, history, func, func1) {
  axios
    .post("/api/register", userData)
    .then((res) => {
      history.push("/login");
      func(true);
    })
    .catch((error) => {
      func1(error.response.data.detail);
      func(false);
    });
}

export function Register() {
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    phone_no: "",
  });
  let input = [
    {
      label: "Username",
      placeholder: "Enter Your Username",
      password: false,
      onChange: (val) => setUserData({ ...userData, email: val }),
    },
    {
      label: "Password",
      placeholder: "Enter Your Password",
      password: true,
      onChange: (val) => setUserData({ ...userData, password: val }),
    },
    {
      label: "Phone Number",
      placeholder: "Enter Your Phone Number",
      password: false,
      onChange: (val) => setUserData({ ...userData, phone_no: val }),
    },
  ];
  return (
    <RegisterLoginLayout
      title="Register"
      input={input}
      quote={"Every pet is human in nature"}
      buttonName="Login"
      onClick={(func, func1) => onRegister(userData, history, func, func1)}
    />
  );
}
