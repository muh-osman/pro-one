import { Link } from "react-router-dom"
import "./Header.scss"
import { useContext } from "react"
import { LocalStorageContext } from "../../Context/LocalStorageProvider";

export default function Header() {

  const { emailExist, setEmailExist } = useContext(LocalStorageContext);


  const logout = () => {
    localStorage.removeItem("emailStorage")
    setEmailExist(prev => ({ ...prev, boolean: false }))
  }

  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {!emailExist.boolean && <li><Link to="login">Login</Link></li>}
                {emailExist.boolean && <li><button onClick={logout}>Logout</button></li>}
                {/* <li><Link to="about">About</Link></li> */}
            </ul>
        </nav>
    </header>
  )
}