import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { userRegister } from "../services/usersServices.js";
import Swal from 'sweetalert2';
import { useUserContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    unregister("confirmPassword");

    const userData = { ...data };
    if (!checkPasswordsMatch(userData.password, userData.confirmPassword)) {
      setRegisterError('Error: Las contraseñas no coinciden');
      setIsLoading(false);
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
      setIsLoading(false);
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
            <input disabled={isLoading} className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Nombre (Opcional)'{...register('name', { maxLength: { value: 50 } })} id="name" />
            {errors.name && errors.name.type === "maxLength" && <div className="text-red-500">El nombre debe tener menos de 50 caracteres</div>}
          </div>
          <div>
            <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Apellido (Opcional)'{...register('lastname', { maxLength: { value: 50 } })} id="lastname" />
            {errors.lastname && errors.lastname.type === "maxLength" && <div className="text-red-500">El apellido debe tener menos de 50 caracteres</div>}
          </div>
          <div>
            <input disabled={isLoading} className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="email" id="email" placeholder="Email" {...register('email', { required: true, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i })} required />
            <p className='text-red-500 text-sm self-center m-0'>
              {errors.email?.type === "pattern" && "🥀Formato de email incorrecto"}
            </p>
          </div>
          <div className="relative w-full">
            <input disabled={isLoading}
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
            <input disabled={isLoading}
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
          {isLoading &&
            <div role="status" className='flex flex-col place-items-center w-full'>
              <svg aria-hidden="true" className="m-3 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
          <button disabled={isLoading} className="m-t3 w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out" type="submit">
            Enviar
          </button>
          <button type='button' onClick={() => navigate('/dashboard')} className="w-[150px] self-center bg-gray-500 text-white border-gray-900 rounded-lg font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300 ease-in-out">Cancelar</button>
        </form>
      </div>
    </>
  );
};

export default Register;