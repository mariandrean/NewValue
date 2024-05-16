import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx';
import DashboardMenu from '../components/DashboardMenu.jsx';

const LayoutPublic = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <main>
        <header className='fixed z-10'>
          {token && <DashboardMenu />}
          <Navbar />
        </header>
        <section className='p-5 sm:px-10 pb-10 lg:px-20 mt-[100px]'>
          <Outlet />
        </section>
      </main>

      <Footer />
    </ >
  );
}

export default LayoutPublic;