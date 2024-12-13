import React, { useState } from 'react';
import styled from 'styled-components';
import { register } from '../api/script';

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
        gender: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await register(userData);
            setError('registrado correctamente');
        } catch (error) {
            console.error('Error during registration:', error);
            setError('Error al registrar el usuario');
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        window.location.href = '/login';
    };

    return (
        <Container>
            <Title>Registrarse</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="Nombre de usuario"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required
                />
                <Input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    required
                />
                <Input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                    placeholder="Edad"
                    required
                />
                <Input
                    type="text"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    placeholder="Género"
                    required
                />
                {error && <ErrorMessage isSuccess={error === 'registrado correctamente'}>{error}</ErrorMessage>}
                <Button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </Button>
                <BackButton type="button" onClick={handleBackToLogin}>
                    Volver al inicio de sesión
                </BackButton>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
`;

const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #a1c1e6;
        cursor: not-allowed;
    }
`;

const BackButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #999;
    }
`;

const ErrorMessage = styled.p`
    color: ${(props) => (props.isSuccess ? 'green' : 'red')};
    font-size: 0.9rem;
`;

ErrorMessage.defaultProps = {
    isSuccess: false,
};

export default RegisterForm;
