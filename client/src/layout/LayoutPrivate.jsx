import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const token = localStorage.getItem("token");
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <Outlet />;
};

export default LayoutPrivate;

