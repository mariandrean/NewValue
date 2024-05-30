import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import DashboardMenu from "../components/DashboardMenu";
import { Helmet } from "react-helmet-async";

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
  }, [token, userAuth]);

  return (
    <>
      <Helmet>
        <title>Panel de Control</title>
      </Helmet>
      <header className='fixed z-10 w-full'>
        <DashboardMenu />
      </header>
      <section className='flex flex-col items-center p-5 sm:px-10 pb-10 lg:px-20 mt-[50px]'>
        <Outlet />
      </section>
      <footer></footer>
    </>
  )
};

export default LayoutPrivate;

