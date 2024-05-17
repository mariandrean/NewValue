import React from 'react'
import LogOutButton from "../components/LogOutButton";

function DashboardMenu() {

  const path = window.location.pathname;

  return (
    <div className="w-full flex justify-between items-center text-sm bg-black text-white py-3 px-5">
      <div className="flex gap-3">
        <a href="/dashboard">Panel de Control</a>
        {path !== '/' &&
          <>
            <p>|</p>
            <a href="/" >Portada</a >
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