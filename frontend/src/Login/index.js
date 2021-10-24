import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import RegisterLoginLayout from "../components/RegisterLoginLayout";

function onLogin(userData, history, func, func1) {
  var formData = new FormData();
  formData.append("username", userData.username);
  formData.append("password", userData.password);
  axios
    .post("/api/login", formData)
    .then((res) => {
      history.push("/dashboard");
      func(true);
    })
    .catch((error) => {
      console.log(error.response);
      func1("Invalid Credientials");
      func(false);
    });
}

export function Login() {
  let history = useHistory();
  const [userData, setUserData] = useState({ username: "", password: "" });
  let input = [
    {
      label: "Email",
      placeholder: "Enter Your Email",
      password: false,
      onChange: (val) => setUserData({ ...userData, username: val }),
    },
    {
      label: "Password",
      placeholder: "Enter Your Password",
      password: true,
      onChange: (val) => setUserData({ ...userData, password: val }),
    },
  ];
  return (
    <RegisterLoginLayout
      title="Login"
      input={input}
      quote="Pets are the beauty of the world"
      buttonName="Register"
      onClick={(func, func1) => onLogin(userData, history, func, func1)}
    />
  );
}
