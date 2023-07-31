// useContext
import { createContext, useState } from "react";

export const LocalStorageContext = createContext();

export default function LocalStorageProvider(props) {
  const [emailExist, setEmailExist] = useState({
    boolean: false,
  });

  return (
    <>
      <LocalStorageContext.Provider value={{ emailExist, setEmailExist }}>
        {props.children}
      </LocalStorageContext.Provider>
    </>
  );
}
