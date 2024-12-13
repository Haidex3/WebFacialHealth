// src/components/LoginForm.js
import React, { useState } from 'react';
import { login } from '../api/script'; // Asegúrate de importar las funciones login y register

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        const credentials = {
            username,
            password
        };

        try {
            const response = await login(credentials);
            // Si el login es exitoso, ejecutar onLoginSuccess
            onLoginSuccess(response);
        } catch (err) {
            setError('Credenciales incorrectas o error en el servidor');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
