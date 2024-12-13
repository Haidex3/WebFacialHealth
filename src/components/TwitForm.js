import React, { useState, useEffect } from 'react';
import { getAllTwits, createTwit } from '../api/script';
import styled from 'styled-components';

export default function TwitForm() {
    const [twits, setTwits] = useState([]);
    const [username, setUsername] = useState('');
    const [details, setDetails] = useState('');

    useEffect(() => {
        const fetchTwits = async () => {
            const allTwits = await getAllTwits();
            setTwits(allTwits);
        };

        fetchTwits();
    }, []);

    const handleCreateTwit = async () => {
        const newTwit = await createTwit(username, details);

        if (newTwit) {
            setTwits(prevTwits => [...prevTwits, newTwit]);
            setUsername('');
            setDetails('');
        }
    };

    return (
        <Container>
            <Header>TwitForm</Header>

            <FormContainer>
                <Input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Textarea
                    placeholder="Escribe tu mensaje"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
                <Button onClick={handleCreateTwit}>Crear Twit</Button>
            </FormContainer>

            <TwitsContainer>
                <h2>Lista de Twits</h2>
                <TwitsList>
                    {twits.map((twit, index) => (
                        <TwitItem key={index}>
                            <strong>{twit.username}</strong>
                            <Content>{twit.details}</Content>
                        </TwitItem>
                    ))}
                </TwitsList>
            </TwitsContainer>
        </Container>
    );
}

// Estilos usando styled-components
const Container = styled.div`
    background-color: rgba(232, 218, 213, 1); /* Nuevo color */
    color: #000;                              /* Negro */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

const Header = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const TwitsContainer = styled.div`
    width: 80%;
    max-width: 600px;
`;

const TwitsList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TwitItem = styled.li`
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1.1rem;
`;

const Content = styled.p`
    margin: 5px 0 0;
    font-size: 1rem;
`;