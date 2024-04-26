import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <>
      <div>
        <div>
          <Link to='/'>
          </Link>
          <h1>Iniciar sesión</h1>
        <LoginForm/>
      </div>
    </div >
   </>
  );
}

export default Login;