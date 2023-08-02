// Reacr & React Router
import { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Sass
import css from "./Users.module.scss";
//  React Icons
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";




export default function Users() {
  // Fetch data
  const [users, setUsers] = useState([]);
  const apiUrl = "http://127.0.0.1:8000";
  const fetchUsers = () => {
    axios
      .get(`${apiUrl}/api/user/show`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Edit Button
  const editBtn = (id) => {};
  
  // Delete Button
  const deleteBtn = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/user/delete/${id}`);
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => editBtn(user.id)}>
                  <AiFillEdit />
                </button>
                <button onClick={() => deleteBtn(user.id)}>
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
