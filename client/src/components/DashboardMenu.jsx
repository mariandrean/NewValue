import React from 'react'
import LogOutButton from "../components/LogOutButton";

function DashboardMenu() {
  return (
    <div className="flex justify-between items-center sm:text-lg bg-black text-white py-3 px-5">
    <div className="flex gap-3">
      <a href="/Dashboard">Panel de Control</a>
      |
      <a href="/" >Portada</a >
    </div>
    <div className="flex gap-5">
      <LogOutButton />
    </div>
  </div>
  )
}

export default DashboardMenu