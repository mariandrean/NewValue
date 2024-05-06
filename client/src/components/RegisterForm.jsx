import React from 'react'
import { useForm } from "react-hook-form";
import { userRegister } from "../services/usersServices.js";

const RegisterForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await userRegister(data);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-[500px] bg-white-100">
                <form className="min-w-[300px] gap-6 flex flex-col justify-center"onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl text-gray-900 mb-20 text-center font-semibold">Register</h1>
                    <h3 className="text-1xl text-gray-900 mb-10 text-center">Crear nuevos usuarios</h3>
                    <div className="flex">
                        <label className="mr-7">Nombre</label>
                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" {...register('name')} />

                    </div>
                    <div className="flex">
                        <label className="mr-7">Apellido</label>
                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" {...register('lastname')} />
                    </div>
                    <div className="flex">
                        <label className="mr-12">Email</label>
                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" {...register('email', { pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i })} />
                        {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                    </div>
                    <div className="flex">
                        <label className="mr-2">Contraseña</label>
                        <input className="input border border-gray-400 appearance-none rounded w-full p-3 focus focus:border-teal-500 focus:outline-none active:outline-none active:border-teal-500" type="text" {...register('password', { required: true })} />
                        {errors.password?.type === 'required' && <p>El campo password es requerido</p>}
                    </div>
                    {/* <div>
                        <label>Confirmar</label>
                        <input type="text" />
                    </div> */}
                    <button className="w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
};

export default RegisterForm;