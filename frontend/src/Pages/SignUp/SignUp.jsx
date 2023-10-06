// React & React Router
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Axios
import axios from "axios";
// Sass
import "./SignUp.scss";
// useContext
import { authContext } from "../../Auth/AuthContext";
// Universal Cookie
import Cookies from "universal-cookie";


export default function SignUp() {

  const cookie = new Cookies()

  const [email, setEmail] = useState("mail99@mail.com");
  const [password, setPassword] = useState("123456789");

  const navigate = useNavigate();

  const { auth, setAuth } = useContext(authContext);

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
        const token = res.data.data.token
        cookie.set("Bearer", token);
        const userDetails = res.data.data.user
        navigate("/");
        
        setAuth((prev) => ({ ...prev, token, userDetails}));

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
