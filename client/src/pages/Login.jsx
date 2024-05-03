import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <>
      <div>
        <div>
          <Link to='/dashboard'>
          </Link>
        <LoginForm/>
      </div>
    </div >
   </>
  );
}

export default Login;