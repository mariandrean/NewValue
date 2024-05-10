import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"


const LayoutPublic = () => {
  return (
    <div style={{ minHeight: "100%", position: "relative", display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className='px-5 lg:px-20 '>
        <Outlet />
      </main>
      <Navbar />
    </div >
  );
}

export default LayoutPublic;