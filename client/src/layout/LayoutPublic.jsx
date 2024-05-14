import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx';
import DashboardMenu from '../components/DashboardMenu.jsx';

const LayoutPublic = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <header>
        {token && <DashboardMenu />}
        <Navbar />
      </header>
      <main className='p-5 lg:p-20'>
        <Outlet />
      </main>
      <Footer />
    </ >
  );
}

export default LayoutPublic;