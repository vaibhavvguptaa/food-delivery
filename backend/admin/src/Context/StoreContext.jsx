import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [admin, setAdmin] = useState(() => localStorage.getItem("admin") === "true");

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("admin", admin);
  }, [token, admin]);

  const contextValue = { token, setToken, admin, setAdmin };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} 
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
