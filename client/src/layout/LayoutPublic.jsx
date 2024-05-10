import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/footer/Footer';


const LayoutPublic = () => {
  return (
    <div>
      <main className='px-5 lg:px-20 '>
        <Outlet />
        <Footer />
      </main>
    </div >
  );
}

export default LayoutPublic;