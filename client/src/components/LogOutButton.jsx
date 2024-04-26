import { useUserContext } from '../context/UserContext';

const LogOutButton = () => {
    const { setUser, setUserAuth  } = useUserContext();

    const deleteDataUser = () => {
        setUser(null);
        setUserAuth(null);
        localStorage.removeItem('Token');
    }

  return (

    <button onClick={deleteDataUser}>Log Out</button>
  );
}

export default LogOutButton;