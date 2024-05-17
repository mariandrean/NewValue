import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import DashboardMenu from "../components/DashboardMenu";

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
      <main>
        <header className='fixed z-10'>
          <DashboardMenu />
        </header>
        <section className='p-5 sm:px-10 pb-10 lg:px-20 self mt-[60px]'>
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </>
  )
};

export default LayoutPrivate;

