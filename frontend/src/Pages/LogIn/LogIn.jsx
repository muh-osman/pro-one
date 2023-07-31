// React & React Router
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Sass
import "./LogIn.scss";
// Axios
import axios from "axios";
// useContext
import { useContext } from "react";
import { LocalStorageContext } from "../../Context/LocalStorageProvider";

export default function LogIn() {
  const [email, setEmail] = useState("mail99@mail.com");
  const [password, setPassword] = useState("123456789");

  const navigate = useNavigate()

  const { emailExist, setEmailExist } = useContext(LocalStorageContext);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("emailStorage", email);
        setEmailExist((prev) => ({ ...prev, boolean: true }));
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <>
      <h1>Login page goes here</h1>

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
        <button type="submit">Login</button>
      </form>
      <p>Or</p>
      <Link className="signup-btn" to="/signup">
        SignUp
      </Link>
    </>
  );
}
