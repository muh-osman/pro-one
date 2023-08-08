// React & React Router
import { Link } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
// Sass
import "./Header.scss";
// Me
import { authContext } from "../../Auth/AuthContext";

export default function Header() {
  const { auth, setAuth } = useContext(authContext);

  useLayoutEffect(() => {
    const email = localStorage.getItem("emailStorage");

    if (email) {
      setAuth((prev) => ({ ...prev, boolean: true }));
    }
  }, []);

  const logout = () => {
    setAuth((prev) => ({ ...prev, token: "", userDetails: {} }));
    // window.location.reload();
    console.log(auth)
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
          {!auth.token ? (
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
