// React & React Router
import { Link } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
// Sass
import "./Header.scss";
// Me
import { LocalStorageContext } from "../../Context/LocalStorageProvider";

export default function Header() {
  const { emailExist, setEmailExist } = useContext(LocalStorageContext);

  useLayoutEffect(() => {
    const email = localStorage.getItem("emailStorage");

    if (email) {
      setEmailExist((prev) => ({ ...prev, boolean: true }));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("emailStorage");
    setEmailExist((prev) => ({ ...prev, boolean: false }));
    window.location.reload();
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          {!emailExist.boolean ? (
            <li>
              <Link to="login">Login</Link>
            </li>
          ) : (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
          {/* <li><Link to="about">About</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}
