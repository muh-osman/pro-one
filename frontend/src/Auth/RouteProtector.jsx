import { useContext } from "react"
import { authContext } from "./AuthContext";
import { Outlet, Navigate, useLocation } from "react-router-dom"


export default function RouteProtector() {

    const user = useContext(authContext)
    const location = useLocation()
  return (
        user.auth.token ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace/>
  )
}