import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import styled from 'styled-components'; // Para estilos

// Estilo para el contenedor del botón
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

// Estilo para el botón
const Button = styled.button`
    background: none;
    border: none;
    color: #007bff; /* Color de texto azul */
    text-decoration: underline; /* Subrayado */
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    &:hover {
        color: #0056b3; /* Cambiar color cuando se pasa el ratón */
    }
`;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLoginSuccess = (response) => {
        console.log('Login successful:', response);
        setIsLoggedIn(true);
    };

    const handleRegisterSuccess = (response) => {
        console.log('Registration successful:', response);
        setIsRegistering(false);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    {isRegistering ? (
                        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                    ) : (
                        <LoginForm onLoginSuccess={handleLoginSuccess} />
                    )}
                    <ButtonContainer>
                        <Button onClick={() => setIsRegistering(!isRegistering)}>
                            {isRegistering ? 'Already have an account? Login' : '¿No tienes una cuenta? Registrate'}
                        </Button>
                    </ButtonContainer>
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
