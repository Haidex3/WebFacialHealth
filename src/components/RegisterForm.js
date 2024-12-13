// src/components/RegisterForm.js
import React, { useState } from 'react';
import { register } from '../api/script'; // Asegúrate de importar las funciones login y register

const RegisterForm = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        const userData = {
            username,
            password
        };

        try {
            const response = await register(userData);
            // Si el registro es exitoso, ejecutar onRegisterSuccess
            onRegisterSuccess(response);
        } catch (err) {
            setError('Error al registrar el usuario o el servidor');
        }
    };

    return (
        <div>
            <h2>Register</h2>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
