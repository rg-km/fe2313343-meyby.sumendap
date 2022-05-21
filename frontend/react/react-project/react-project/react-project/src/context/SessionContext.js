import { createContext, useState } from "react";

export const SessionContext = createContext({
  // TODO: answer here
  user: {},
  isLoggedIn: false,
  setUser: () => {},
  setIsLoggedIn: () => {},
});

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [user, setUser] = useState({
    id: "",
    username: "",
    image: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
