import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext.jsx';
import { loginUser } from '../services/usersServices.js'


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
            const data = await loginUser(email, password);
            localStorage.setItem('authToken', data.token);
            setUser(data.data);
            setUserAuth(true);
            navigate('/home');

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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError('');
                        }} required id="email" placeholder="ejemplo@bt.com" />
                        {emailError && <p>{emailError}</p>}
                    </label>
                </div>

                <div>
                    <label htmlFor="password">
                        Contraseña
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError('');}} required id="password" placeholder="Ingresa tu contraseña"/>
                            {passwordError && <p>{passwordError}</p>}
                    </label>
                </div>

                <div>
                    <button>
                        Iniciar sesión
                    </button>
                    <p>¿No tienes cuenta?<Link to="/dashboard/register">Regístrate</Link></p>
                </div>
            </form>
        </>
    );
}
export default LoginForm;