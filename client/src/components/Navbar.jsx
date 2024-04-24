import React from 'react';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import { LogOutButton } from "../components/LogOutButton.jsx";

const Nav = () => {
  const { userAuth } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {userAuth ? (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <LogOutButton />
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
