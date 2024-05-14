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
      <header>
        <DashboardMenu />
      </header>
      <main className='p-5 lg:p-20'>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
};

export default LayoutPrivate;

