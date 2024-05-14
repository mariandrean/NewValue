import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import LogOutButton from "../components/LogOutButton";

const LayoutPrivate = () => {
  const token = localStorage.getItem("token");
  const { userAuth } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && !userAuth) {
      navigate("/login");
    }
    else if (token && userAuth) {
      navigate("/dashboard");
    }
  }, [token, navigate, userAuth]);

  return (
    <>
      <div className="flex justify-between items-center sm:text-lg bg-black text-white py-3 px-5">
        <div className="flex gap-5">
          <a href="/Dashboard">Panel Principal</a>
          <a href="/" >Portada</a >
        </div>
        <div className="flex gap-5">
          <LogOutButton />
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default LayoutPrivate;

