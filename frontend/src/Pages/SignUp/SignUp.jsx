// React & React Router
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Axios
import axios from "axios";
// Sass
import "./SignUp.scss";
// useContext
import { useContext } from "react";
import { LocalStorageContext } from "../../Context/LocalStorageProvider";


export default function SignUp() {
  const [email, setEmail] = useState("mail99@mail.com");
  const [password, setPassword] = useState("123456789");

  const navigate = useNavigate();

  const { emailExist, setEmailExist } = useContext(LocalStorageContext);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/register", {
        name: "muh",
        email: email,
        password: password,
        password_confirmation: "123456789",
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("emailStorage", email);
        setEmailExist((prev) => ({ ...prev, boolean: true }));
        navigate("/");
      })

      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <h1>SignUp page goes here</h1>

      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">SignUp</button>
      </form>
    </>
  );
}
