import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx';
import DashboardMenu from '../components/DashboardMenu.jsx';
import { useUserContext } from '../context/UserContext.jsx';

const LayoutPublic = () => {
  const token = localStorage.getItem("token");
  const { userAuth } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && !userAuth) {
      navigate("/");
    }
  }, [token, userAuth]);

  return (
    <>
      <header className='fixed z-10 w-full'>
        {token && <DashboardMenu />}
        <Navbar />
      </header>
      <section className={'p-5 sm:px-10 sm:pb-10 flex flex-col items-center '+ (token ? 'mt-[100px]' : 'mt-[50px]')}>
        <div className='max-w-[1200px]'>
          <Outlet />
        </div>
      </section>
      <Footer />
    </ >
  );
}

export default LayoutPublic;