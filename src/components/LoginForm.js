import React, { useState } from 'react';
import { login } from '../api/script';
import styled from 'styled-components';

const handleBackToTwit = () => {
    window.location.href = '/twit';
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh; 
    background-color: #f0f0f0; 
    flex-direction: column;
`;

const Logo = styled.img`
    width: 140px; 
    height: auto;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    color: #333;
    font-size: 3rem;
    margin-bottom: 30px;
`;

const Form = styled.form`
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 1rem;
    &:focus {
        border-color: #5c9ded;
        outline: none;
    }
`;

const Button = styled.button`
    background-color: #5c9ded;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
    &:hover {
        background-color: #4a8bc2;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
`;

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login(credentials);
            console.log('Usuario logueado con éxito:', response);
        } catch (err) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <Container>
            <Logo src="/path-to-logo.jpg" alt="Logo" />
            <Title>SKINGLOW</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={credentials.username}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={credentials.password}
                    onChange={handleInputChange}
                />
                <Button type="submit" onClick={handleBackToTwit}>Iniciar sesión</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Form>
        </Container>
    );
}

export default LoginForm;
