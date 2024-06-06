import React from "react";
import { useContext, useState } from "react";

export const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userAuth, setUserAuth] = useState(null);
  const [userRole, setUserRole] = useState(null);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth, user, setUser, userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;