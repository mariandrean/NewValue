import React from 'react'
import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
  return (
    <div>
      <main className='px-5 lg:px-20 '>
        <Outlet />
      </main>
    </div >
  );
}

export default LayoutPublic;