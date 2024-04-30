import React from 'react'
import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
  return (
    <div>
    <Outlet />
    </div>
  );
}

export default LayoutPublic;