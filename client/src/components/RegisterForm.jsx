import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { userRegister } from "../services/usersServices.js";

const RegisterForm = () => {
    const { register, formState: { errors }, handleSubmit, unregister } = useForm();
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        unregister("confirmPassword");

        const userData = { ...data };
        if (!checkPasswordsMatch(userData.password, userData.confirmPassword)) {
            return;
        }
        try {
            const response = await userRegister(userData);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const checkPasswordsMatch = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-[500px] bg-white-100">
                <form className="min-w-[300px] gap-6 flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl text-gray-900 mb-10 text-center font-semibold">Register</h1>
                    <h3 className="text-1xl text-gray-900 mb-10 text-center">Crear nuevos usuarios</h3>
                    <div className="flex">

                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Tu nombre'{...register('name', { maxLength: { value: 50 } })} id="name" />
                        {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El nombre debe tener menos de 50 caracteres</div>}
                    </div>
                    <div className="flex">

                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" placeholder='Tu apellido'{...register('lastname', { maxLength: { value: 50 } })} id="lastname" />
                        {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El apellido debe tener menos de 50 caracteres</div>}
                    </div>
                    <div className="flex">

                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="email" id="email" placeholder="Tu email" {...register('email', { required: true, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i })} />
                        <error>
                            {errors.email?.type === "required" && "Introduce un email"}
                            {errors.email?.type === "pattern" && "🥀Formato de email incorrecto"}
                        </error>
                    </div>
                    <div className="flex">

                        <div className="relative">
                            <input
                                className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" placeholder="Contraseña"
                                type={showPassword ? "text" : "password"}
                                {...register('password', { required: true })}
                            />
                            <button
                                type="button"
                                id="togglePassword"
                                className="absolute text-sm right-0 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Ocultar' : 'Mostrar'}
                            </button>
                        </div>
                    </div>

                    <div className="flex">
                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="password" placeholder="Confirmar contraseña" placeholder="Confirmar contraseña" {...register('confirmPassword', { required: true })} />
                    </div>
                    {registerError && <p className="text-red-500 text-sm self-center m-0">{registerError}</p>}

                    <button className="w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
};

export default RegisterForm;