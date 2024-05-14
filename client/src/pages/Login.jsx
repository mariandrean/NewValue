import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext.jsx';
import { login } from '../services/usersServices.js'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUserAuth, setUser, setUserRole } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="flex flex-col items-center justify-center min-w-[500px] bg-white-100">
        <h3 className="text-4xl text-gray-900 mb-10 text-center font-semibold">Iniciar sesión</h3>
        <h4 className="text-1xl text-gray-900 mb-10 text-center">(Solo personal del sitio)</h4>
        <form className="min-w-[300px] gap-6 flex flex-col justify-center" onSubmit={handleSubmit(handleLogin)}>

          <input {...register("email", { required: true })} type="email" id="email" placeholder="Email" required className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" />

          <div className="relative">
            <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} id="password" placeholder="Contraseña" required className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" />
            <button type="button" id="togglePassword" className="absolute text-sm right-0 m-4 text-gray-500" onClick={togglePasswordVisibility}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          {loginError && <p className='text-red-500 text-sm self-center m-0'>Datos incorrectos</p>}

          <button type="submit" className="w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">
            Acceder
          </button>

        </form>
      </div>
    </>
  );
}

export default Login;