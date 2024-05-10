import React from 'react';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";


const Navbar = () => {
  const { userAuth } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {userAuth ? (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
                </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
