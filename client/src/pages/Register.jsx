import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { userRegister } from "../services/usersServices.js";
import Swal from 'sweetalert2';
import { useUserContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, formState: { errors }, handleSubmit, unregister } = useForm();
  const [registerError, setRegisterError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setUserAuth, setUser, setUserRole } = useUserContext();
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setRegisterError('');
  };

  const onSubmit = async (data) => {
    unregister("confirmPassword");

    const userData = { ...data };
    if (!checkPasswordsMatch(userData.password, userData.confirmPassword)) {
      setRegisterError('Error: Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await userRegister(userData);
      localStorage.setItem('token', response['token']);
      setUserAuth(true);
      setUser(response.user_name);
      setUserRole(response.user_role);
      navigate('/dashboard');

      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con éxito',
        showConfirmButton: false,
        timer: 2000,
      });

    } catch (error) {
      console.error('Error:', error);
      setRegisterError('Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial');
    }
  };

  const checkPasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center gap-5 m-5 sm:m-10">
        <h1 className=" text-center font-semibold">Registrar moderador</h1>
        <form className="w-[300px] mt-3 gap-5 flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Nombre (Opcional)'{...register('name', { maxLength: { value: 50 } })} id="name" />
            {errors.name && errors.name.type === "maxLength" && <div className="text-red-500">El nombre debe tener menos de 50 caracteres</div>}
          </div>
          <div>
            <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Apellido (Opcional)'{...register('lastname', { maxLength: { value: 50 } })} id="lastname" />
            {errors.lastname && errors.lastname.type === "maxLength" && <div className="text-red-500">El apellido debe tener menos de 50 caracteres</div>}
          </div>
          <div>
            <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="email" id="email" placeholder="Email" {...register('email', { required: true, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i })} required />
            <p className='text-red-500 text-sm self-center m-0'>
              {errors.email?.type === "pattern" && "🥀Formato de email incorrecto"}
            </p>
          </div>
          <div className="relative w-full">
            <input
              className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register('password', { required: true })} required
            />
            <button
              type="button"
              id="togglePassword"
              className="absolute text-sm right-0 m-4 text-gray-500"
              onClick={togglePasswordVisibility}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
            {errors.password && <p className="text-red-500 text-sm">La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula un número y un caracter especial</p>}
          </div>
          <div className="relative w-full">
            <input
              className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              {...register('confirmPassword', { required: true })} required
            />
            <button
              type="button"
              id="toggleConfirmPassword"
              className="absolute text-sm right-0 m-4 text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
            </button>

          </div>
          {registerError && <p className="text-red-500 text-sm self-center m-0">{registerError}</p>}
          <button className="m-t3 w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out" type="submit">
            Enviar
          </button>
          <button type='button' onClick={() => navigate('/dashboard')} className="w-[150px] self-center bg-gray-500 text-white border-gray-900 rounded-lg font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300 ease-in-out">Cancelar</button>
        </form>
      </div>
    </>
  );
};

export default Register;