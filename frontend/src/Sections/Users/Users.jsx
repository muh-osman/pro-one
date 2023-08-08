// Reacr & React Router
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Sass
import css from "./Users.module.scss";
//  React Icons
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
// Me(Axios)
import api from "../../api";
// useContext
import { authContext } from "../../Auth/AuthContext";



export default function Users() {
  const { auth, setAuth } = useContext(authContext)
  const token = auth.token
  // Fetch data
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const res = await api.get("/api/user/show",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete Button
  const deleteBtn = async (id) => {
    try {
      await api.delete(`/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.users}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usser</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <Link to={`${id}`}>
                  <AiFillEdit />
                </Link>
                <button onClick={() => deleteBtn(id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
