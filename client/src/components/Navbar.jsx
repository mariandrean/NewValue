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
      <nav className={`navbar flex content-between w-full ${scrolled ? 'navbar-scrolled' : ''}`}>

        <div className="menu-icon-wrapper sm:w-1/3" onClick={toggleMobileMenu}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
        </div>

        <NavLink to="/" className={`px-5 ${isMobileMenuOpen ? 'hidden' : 'logo'}`}>
          <img
            alt="logo"
            src={LogoGris}
            className="w-145 h-35 mb-1"
          />
        </NavLink>

        <NavLink to="https://newvalue.es/contactanos" className="hidden sm:flex px-5 sm:w-1/3 justify-end">
          <button className="text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Contacto</button>
        </NavLink>


        <div className={`open-menu h-screen ${isMobileMenuOpen ? 'flex flex-col gap-3' : 'hidden'}`}  onClick={() => setMobileMenuOpen(false)}>
          <NavLink to="/" className="logo-menu" >
            <img
              alt="logo"
              src={LogoGris}
              className="w-145 h-35"
            />
          </NavLink>
          <hr className="menu-separator" />

          <NavLink to="https://newvalue.es/index" className="menu-link" onClick={() => setMobileMenuOpen(false)}>IMPULSA EL CAMBIO</NavLink>

          <NavLink to="https://newvalue.es/desarrollo-proyectos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>DESARROLLO DE PROYECTOS</NavLink>

          <div className="projects flex flex-col gap-3">

            <NavLink to="https://newvalue.es/aws-getit" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>AWS GetIT</NavLink>

            <NavLink to="https://newvalue.es/teoria-cambio" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Teoría del Cambio</NavLink>

            <NavLink to="https://newvalue.es/marketing-impacto" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Marketing de Impacto</NavLink>

            <NavLink to="https://newvalue.es/voluntariado-corporativo" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Voluntariado Corporativo</NavLink>

          </div>

          <NavLink to="https://newvalue.es/consultoria-esg" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONSULTORÍA ESG</NavLink>

          <NavLink to="https://newvalue.es/por-que-new-value" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONÓCENOS</NavLink>

          <NavLink to="https://newvalue.es/contactanos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONTÁCTANOS</NavLink>

          <NavLink to="/login" className="menu-link" onClick={() => setMobileMenuOpen(false)}>Iniciar Sesión</NavLink>

          <hr className="menu-separator" />
          <div className="flex gap-5 place-items-center">
            <a href="https://www.instagram.com/newvaluegeneration/">
              <img src={Instagram} alt="icon-instagram" className="h-[33px]" /> </a>
            <a href="https://www.linkedin.com/company/new-value-generation/">
              <img src={Linkedin} alt="icon-linkedin" className="h-[30px]" /> </a>

          </div>
        </div>

      </nav>

      <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </>
  );
};

export default Navbar;