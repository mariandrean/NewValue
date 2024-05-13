import React from 'react';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";

const Navbar = () => {
  const { userAuth } = useUserContext();

  return (
    <>
      <nav className="flex justify-between items-center pt-12 pb-5">
        <div className="flex items-center">
          <img
            alt="burger-menu"
            src="./src/assets/burger-menu.svg"
            className="mx-10" // Ajusta el margen según sea necesario
          />
        </div>

        <div className="flex-grow flex items-center justify-center">
          <NavLink to="/">
            <a>
              <img
                alt="logo"
                src="/src/assets/newvaluelogogris-titulo.svg"
                className="w-145 h-35 ml-40"
              />
            </a>
          </NavLink>
        </div>

        <div className="ml-auto flex items-center mr-10">
          <NavLink to="/contactanos">
            <button className="mr-10 text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Contacto</button>
          </NavLink>
          {userAuth? (
            <NavLink to="/dashboard">
              <button className="text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Dashboard</button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
