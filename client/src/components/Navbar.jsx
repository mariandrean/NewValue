import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import "./Navbar.css"; // Importa los estilos CSS

const Navbar = () => {
  const { userAuth } = useUserContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Icono de hamburguesa */}
      <div className="menu-icon-wrapper" onClick={toggleMobileMenu}>
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
        </div>
      </div>

      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img
            alt="logo"
            src="/src/assets/newvaluelogogris-titulo.svg"
            className="w-145 h-35"
          />
        </NavLink>
      </div>

      {/* Menú para escritorio y móvil */}
      <div className="list">
      <ul className={`sm:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <NavLink to="https://newvalue.es/index" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/desarrollo-proyectos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Desarrollo de Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/consultoria-esg" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Consultoría ESG</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/por-que-new-value" className="menu-link" onClick={() => setMobileMenuOpen(false)}>¿Por qué New Value?</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/contactanos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Contacto</NavLink>
        </li>
        <li>
          {userAuth ? (
            <NavLink to="/dashboard" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink>
          ) : (
            <NavLink to="/login" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Login</NavLink>
          )}
        </li>
      </ul>

      <div className="button-contact">
              <NavLink to="https://newvalue.es/contactanos">
                <button className="mr-10 text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Contacto</button>
              </NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;