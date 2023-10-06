//
import { Outlet } from "react-router-dom";
//
import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
//
import api from "../api";
//
import { Loading } from "../_index";
//
import Cookies from "universal-cookie";

export default function PersistLogin() {
  const [loading, setLoading] = useState(true);
  const { auth, setAuth } = useContext(authContext);
  const token = auth.token;

  const cookie = new Cookies();
  const getCookie = cookie.get("Bearer");

  useEffect(() => {
    const refreshToken = async () => {
      try {
        await api
          .post("/api/refresh", null, {
            headers: {
              Authorization: `Bearer ${getCookie}`,
            },
          })
          .then((res) => {
            cookie.set("Bearer", res.data.token);
            setAuth((prev) => {
              return { token: res.data.token, userDetails: res.data.user };
            });
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    !token ? refreshToken() : setLoading(false);
  }, []);

  return !loading ? <Outlet /> : <Loading />;
}
