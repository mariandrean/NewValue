import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext.jsx';
import { login } from '../services/usersServices.js'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUserAuth, setUser, setUserRole } = useUserContext();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      localStorage.setItem('token', response.token);
      setUserAuth(true);
      setUser(response.user_name);
      setUserRole(response.user_role)
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data.error);
      setLoginError(error.response.data.error)
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
        <h3 className="text-4xl text-gray-900 mb-10 text-center font-semibold">Inicio de sesión</h3>
        <h4 className="text-1xl text-gray-900 mb-10 text-center">(Solo personal del sitio)</h4>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>

          <input {...register("email")} className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" type="email" id="email" placeholder="Email" />

          <input {...register("password")} className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 mb-5" type="password" id="password" placeholder="Contraseña" />

          {loginError && <p className='text-sm'>Datos de ingreso incorrectos</p>}

          <button type="submit" className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out mb-10">
            Acceder
          </button>

        </form>
      </div>
    </>
  );
}

export default Login;