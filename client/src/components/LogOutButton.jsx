import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const LogOutButton = () => {
    const { setUser, setUserAuth, setUserRole } = useUserContext();
    const navigate = useNavigate();
    const handleLogOut = () => {
        setUser(null);
        setUserAuth(null);
        setUserRole(null);
        localStorage.removeItem('token');
        navigate("/");
    }

  return (
    <button onClick={handleLogOut} className="flex gap-3 items-center">
      <p className='hidden sm:block'>Cerrar Sesión</p>
      <img src="/src/assets/logout-icon.png" alt="Logout" className='h-4' />
    </button>
  );
}

export default LogOutButton;