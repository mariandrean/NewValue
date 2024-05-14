import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer/Footer";

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
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
};

export default LayoutPrivate;

