import React from 'react'
import LogOutButton from "../components/LogOutButton";
import { Link } from 'react-router-dom';

function DashboardMenu() {

  const path = window.location.pathname;

  return (
    <div className="w-full flex justify-between items-center text-sm bg-black text-white py-3 px-5">
      <div className="flex gap-3">
        <Link href="/dashboard">Panel de Control</Link>
        {path !== '/' &&
          <>
            <p>|</p>
            <Link href="/" >Portada</Link>
          </>
        }
      </div>
      <div className="flex gap-5">
        <LogOutButton />
      </div>
    </div>
  )
}

export default DashboardMenu