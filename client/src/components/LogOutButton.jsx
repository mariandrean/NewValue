import { useUserContext } from '../context/UserContext';

const LogOutButton = () => {
    const { setUser, setUserAuth, setUserRole } = useUserContext();

    const handleLogOut = () => {
        setUser(null);
        setUserAuth(null);
        setUserRole(null);
        localStorage.removeItem('token');
    }

  return (

    <button onClick={handleLogOut}>Log Out</button>
  );
}

export default LogOutButton;