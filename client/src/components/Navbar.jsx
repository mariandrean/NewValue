import React from 'react'
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";

const Navbar = () => {
    console.log(useUserContext());

  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        {user &&(
            <>     
                <NavLink to="/dashboard">Dashboard</NavLink>
                <button onClick={()=> SpeechSynthesisUtterance(null)}>Log Out</button>
            </>
        )}
    </nav>
  );
};

export default Navbar;