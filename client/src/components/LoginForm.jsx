import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext.jsx';
import { login } from '../services/usersServices.js'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const { userAuth, setUserAuth } = useUserContext();
    const { user, setUser } = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem('authToken', data.token);
            setUser(data.data);
            setUserAuth(true);
            navigate('/dashboard');

        } catch (error) {
            console.error('Error:', error);
            if (error.message.includes('Usuario no registrado.')) {
                setEmailError('Usuario no registrado.');
                setPasswordError('');
            } else if (error.message.includes('Contraseña incorrecta.')) {
                setPasswordError('Contraseña incorrecta.');
                setEmailError('');
            } else {
                setPasswordError('Error en la solicitud de inicio de sesión');
                setEmailError('');
            }
        }
    };

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
            <form className="space-y-6" action="/login" method="post" onSubmit={handleSubmit}> 
            {/* ruta para manejar el form: He puesto /login pero hay que ver cual es el en */}
            <h3 class="text-4xl text-gray-900 mb-20 text-center font-semibold">Login</h3>
            <h4 class="text-1xl text-gray-900 mb-10 text-center">Acceso al cuadro de mandos</h4>
                <div>
                    <label htmlFor="email">
                        <input className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError('');
                        }} required id="email" placeholder="hola@newvalue.es" />
                        {emailError && <p>{emailError}</p>}
                        
                    </label>
                </div>

                <div>
                    <label htmlFor="password">
                        <input className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 mb-5" type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError('');}} required id="password" placeholder="********"/>
                            {passwordError && <p>{passwordError}</p>}
                    </label>
                </div>

                <div>
                    <button className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out mb-10">
                        Acceder
                    </button>
                    <div>
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
            </form>
            </div>
        </>
    );
}
export default LoginForm;