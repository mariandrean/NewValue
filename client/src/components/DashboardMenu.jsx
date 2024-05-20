import React from 'react'
import LogOutButton from "../components/LogOutButton";
import { Link } from 'react-router-dom';

function DashboardMenu() {
  return (
    <div className="w-screen flex justify-between items-center sm:text-lg bg-black text-white py-3 px-5">
      <div className="flex gap-3">
        <Link href="/dashboard">Panel de Control</Link>
        <Link href="/" >Portada</Link >
      </div>
      <div className="flex gap-5">
        <LogOutButton />
      </div>
    </div>
  )
}

export default DashboardMenu