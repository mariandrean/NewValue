import React from 'react'
import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
  return (
    <div>LayoutPublic hola
    <Outlet />
    </div>
  );
}

export default LayoutPublic;