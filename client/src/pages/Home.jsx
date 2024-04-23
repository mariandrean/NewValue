import React from 'react'
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useUserContext();

  return (
    <>
      <h1>Home</h1>
      {!user && (
        <button onClick={() => setUser({ name: "John Doe" })}>Login</button>
      )}
    </>
  );
};

export default Home;
