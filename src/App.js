// src/App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLoginSuccess = (response) => {
        // Lógica cuando el login es exitoso
        console.log('Login successful:', response);
        setIsLoggedIn(true);
    };

    const handleRegisterSuccess = (response) => {
        // Lógica cuando el registro es exitoso
        console.log('Registration successful:', response);
        setIsRegistering(false);
    };

    return (
        <div>
            <h1>Welcome to Facial Health</h1>
            {!isLoggedIn ? (
                <div>
                    {isRegistering ? (
                        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                    ) : (
                        <LoginForm onLoginSuccess={handleLoginSuccess} />
                    )}
                    <button onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Welcome back!</h2>
                    {/* Aquí puedes agregar un componente de dashboard o lo que prefieras */}
                </div>
            )}
        </div>
    );
}

export default App;
