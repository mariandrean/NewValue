import "./Navbar.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import Linkedin from '../assets/linkedin-black-icon.svg'
import Instagram from '../assets/instagram-black-icon.svg'
import LogoGris from '../assets/newvaluelogogris-titulo.svg'

const Navbar = () => {
  const { userAuth } = useUserContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
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
            src={LogoGris}
            className="w-145 h-35"
          />
        </NavLink>
      </div>

      {/* Menú para escritorio y móvil */}
      <ul className={`sm:flex ${isMobileMenuOpen ? 'block h-screen' : 'hidden'}`}>
      <NavLink to="/" className="logo-menu">
          <img
            alt="logo"
            src={LogoGris}
            className="w-145 h-35"
          />
        </NavLink>
      <hr className="menu-separator" />
        <li>
          <NavLink to="https://newvalue.es/index" className="menu-link" onClick={() => setMobileMenuOpen(false)}>IMPULSA EL CAMBIO</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/desarrollo-proyectos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>DESARROLLO DE PROYECTOS</NavLink>
          <li className="projects">
            <li>
              <NavLink to="https://newvalue.es/aws-getit" className="menu-link" onClick={() => setMobileMenuOpen(false)}>AWS GetIT</NavLink>
            </li>
            <li>
              <NavLink to="https://newvalue.es/teoria-cambio" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Teoría del Cambio</NavLink>
            </li>
            <li>
              <NavLink to="https://newvalue.es/marketing-impacto" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Marketing de Impacto</NavLink>
            </li>
            <li>
              <NavLink to="https://newvalue.es/voluntariado-corporativo" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Voluntariado Corporativo</NavLink>
            </li>
          </li>
        </li>
        <li>
          <NavLink to="https://newvalue.es/consultoria-esg" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONSULTORÍA ESG</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/por-que-new-value" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONÓCENOS</NavLink>
        </li>
        <li>
          <NavLink to="https://newvalue.es/contactanos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONTÁCTANOS</NavLink>
        </li>
        <li>
          {userAuth ? (
            <NavLink to="/dashboard" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink>
          ) : (
            <NavLink to="/login" className="menu-link" onClick={() => setMobileMenuOpen(false)}>LOGIN</NavLink>
          )}
        </li>
        <hr className="menu-separator1" />
        <li className="logos-social">
          <a href="https://www.linkedin.com/company/new-value-generation/">
            <img src={Linkedin} alt="icon-linkedin" className="h-7" /> </a>
          <a href="https://www.instagram.com/newvaluegeneration/">
            <img src={Instagram} alt="icon-instagram" className="h-7" /> </a>
        </li>
      </ul>
      <div className="button-contact">
        <NavLink to="https://newvalue.es/contactanos">
          <button className="mr-10 text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Contacto</button>
        </NavLink>
      </div>
    </nav>

    {/* Fondo negro transparente */}
    <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </>
  );
};

export default Navbar;