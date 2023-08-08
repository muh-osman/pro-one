// useContext
import { createContext, useState, useMemo } from "react";

export const authContext = createContext();

export default function AuthContext({ children }) {
  const [auth, setAuth] = useState({
    boolean: false,
    token: "",
    userDetails: {},
  });
  
  const authValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <authContext.Provider value={authValue}>
      {children}
    </authContext.Provider>
  );
}
