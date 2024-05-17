import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
const token = localStorage.getItem("token");
const LogOutButton = () => {
  const { setUser, setUserAuth, setUserRole } = useUserContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserAuth(null);
    setUserRole(null);
    navigate("/");
  }

  return (
    <button onClick={handleLogOut} className="flex gap-3 items-center">
      <p>Salir</p>
      <img src="/src/assets/logout-icon.png" alt="Logout" className='h-3.5 mb-0.5' />
    </button>
  );
}

export default LogOutButton;