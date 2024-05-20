import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const LogOutButton = () => {
  const { setUser, setUserAuth, setUserRole } = useUserContext();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserAuth(null);
    setUserRole(null);
    return navigate("/");
  }

  return (
    <button onClick={handleLogOut} className="flex gap-3 items-center">
      <p>Cerrar Sesión</p>
    </button>
  );
}

export default LogOutButton;