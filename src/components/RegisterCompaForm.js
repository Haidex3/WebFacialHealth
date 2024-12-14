import React, { useState } from 'react';
import { registerCompany } from '../api/script';  // Asegúrate de tener la importación correcta
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;  // Cambiar height por min-height para que el contenedor ocupe toda la pantalla
    background-image: url('/FondoInicio.jpg');
    background-size: cover;
    background-position: center;
    flex-direction: column;
    padding: 20px; // Para evitar que el contenido toque los bordes de la pantalla en móviles
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
    max-width: 500px;
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

const RegisterCompaForm = () => {
    const [company, setCompany] = useState({
        companyName: '',
        companyAddress: '',
        companyInstagramUrl: '',
        companyFacebookUrl: '',
        companyTwitterUrl: '',
        companyImageUrl: '',
    });

    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompany({
            ...company,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await registerCompany(company);
            if (response) {
                setIsSuccess(true);
                setTimeout(() => {
                    // Redirigir al login o a la página deseada
                    window.location.href = '/login';
                }, 2000);
            } else {
                setError('Error al registrar la compañía');
            }
        } catch (err) {
            setError('Error en la comunicación con el servidor');
        }
    };

    return (
        <Container>
            <Logo src="/path-to-logo.jpg" alt="Logo" />
            <Title>Registro de Compañía</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la Compañía"
                    value={company.companyName}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="text"
                    name="companyAddress"
                    placeholder="Dirección de la Compañía"
                    value={company.companyAddress}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="url"
                    name="companyInstagramUrl"
                    placeholder="URL de Instagram"
                    value={company.companyInstagramUrl}
                    onChange={handleInputChange}
                />
                <Input
                    type="url"
                    name="companyFacebookUrl"
                    placeholder="URL de Facebook"
                    value={company.companyFacebookUrl}
                    onChange={handleInputChange}
                />
                <Input
                    type="url"
                    name="companyTwitterUrl"
                    placeholder="URL de Twitter"
                    value={company.companyTwitterUrl}
                    onChange={handleInputChange}
                />
                <Input
                    type="url"
                    name="companyImageUrl"
                    placeholder="URL de la Imagen de la Compañía"
                    value={company.companyImageUrl}
                    onChange={handleInputChange}
                    required
                />
                <Button type="submit">Registrar Compañía</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {isSuccess && <p style={{ color: 'green' }}>Compañía registrada con éxito!</p>}
            </Form>
        </Container>
    );
};

export default RegisterCompaForm;
