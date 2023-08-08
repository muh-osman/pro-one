// React & react Router
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Sass
import css from "./CreateUser.module.scss";
// Me(Axios)
import api from "../../api";

export default function CreateUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("muh");
  const [email, setEmail] = useState("mail99@mail.com");
  const [password, setPassword] = useState("123456789");
  const [confirmPassword, setConfirmPassword] = useState("123456789");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/user/create", {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });

      console.log(res.data);
      navigate("/dashboard/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={css.create_user}>
      <h1>CreateUser</h1>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <button onClick={fetchData}>Create</button>
      </form>
    </div>
  );
}
