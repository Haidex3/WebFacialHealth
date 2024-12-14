import React, { useState, useEffect } from 'react';
import { getCompanyByName } from '../api/script';
import styled from 'styled-components';

const handleBackToTwit = () => {
    window.location.href = '/twit';
};

const handleRegisterRedirect = () => {
    window.location.href = '/registerCompa';
};

const handleLoginRedirect = () => {
    window.location.href = '/login';
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-image: url('/FondoInicio.jpg');
    background-size: cover;
    background-position: center;
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

const RegisterLink = styled.span`
    margin-top: 15px;
    color: #5c9ded;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: #4a8bc2;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
`;

const LoginButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    padding: 0;
    img {
        width: 30px;
        height: auto;
    }
`;

function LoginCompani() {
    const [companyName, setCompanyName] = useState('');
    const [error, setError] = useState('');
    const [companyExists, setCompanyExists] = useState(false);
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        const storedCompanyData = localStorage.getItem('companyData');
        if (storedCompanyData) {
            setCompanyData(JSON.parse(storedCompanyData));
        }
    }, []);

    const handleInputChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const companyData = await getCompanyByName(companyName);
            if (companyData) {
                setCompanyExists(true);
                localStorage.setItem('companyData', JSON.stringify(companyData));
                window.location.href = '/CompaniView';
            } else {
                setError('Compañía no encontrada');
                setCompanyExists(false);
            }
        } catch (err) {
            setError('Error al verificar la compañía');
        }
    };

    return (
        <Container>
            <Logo src={companyData?.companyImageUrl || "/path-to-logo.jpg"} alt="Logo" />
            <Title>{companyData ? companyData.companyName : 'SKINGLOW - Iniciar sesión como Compañía'}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la Compañía"
                    value={companyName}
                    onChange={handleInputChange}
                />
                <Button type="submit">Iniciar sesión</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <RegisterLink onClick={handleRegisterRedirect}>Registrarse</RegisterLink>
                <LoginButton onClick={handleLoginRedirect}>
                    <img src="/User.jpg" alt="User Icon" />
                </LoginButton>
            </Form>
            {companyData && (
                <div>
                    <a href={companyData.companyInstagramUrl} target="_blank" rel="noopener noreferrer">
                    </a>
                    <a href={companyData.companyFacebookUrl} target="_blank" rel="noopener noreferrer">
                    </a>
                    <a href={companyData.companyTwitterUrl} target="_blank" rel="noopener noreferrer">
                    </a>
                </div>
            )}
        </Container>
    );
}

export default LoginCompani;
