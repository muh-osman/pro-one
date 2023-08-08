// Reacr & React Router
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Sass
import css from "./Edit.module.scss";
// Me(Axios)
import api from "../../api";


export default function Edit() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("123456789")

  // Get the userId param from the URL.
  let { id } = useParams();

  // Fetch user data
  useEffect(() => {

    async function fetchUser() {
      try {
        const res = await api.get(`/api/user/showbyid/${id}`);
        setName(res.data[0]?.name)
        setEmail(res.data[0]?.email)
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser()

  }, [])


  // Edit Button
  const navigate = useNavigate()
  const editBtn = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/api/user/update/${id}`,{
        name: name,
        email: email,
        password: password,
        password_confirmation: "123456789",
      });
      navigate("/dashboard/users")
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className={css.edit_box}>
      <form>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" />
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
        <button onClick={editBtn}>Update</button>
      </form>
    </div>
  );
}
