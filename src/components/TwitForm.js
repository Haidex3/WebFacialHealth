import React, { useState, useEffect } from 'react';
import { getAllTwits, createTwit } from '../api/script';
import styled from 'styled-components';
import MenuForm from './MenuForm';
import { FaPen } from 'react-icons/fa';

export default function TwitForm() {
    const [twits, setTwits] = useState([]);
    const [details, setDetails] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchTwits = async () => {
            const allTwits = await getAllTwits();
            setTwits(allTwits);
        };

        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const user = JSON.parse(storedUserData);
            console.log(user)
            setUsername(user[0]);
        }

        fetchTwits();
    }, []);

    const handleCreateTwit = async () => {
        if (!details.trim()) {
            alert('El mensaje no puede estar vacío.');
            return;
        }

        const newTwit = await createTwit(username, details);

        if (newTwit) {
            setTwits((prevTwits) => [...prevTwits, newTwit]);
            setDetails('');
            setIsFormVisible(false); // Ocultar el formulario después de crear el twit
        }
    };

    return (
        <>
            <MenuForm /> {/* Menú horizontal */}
            <Container>
                {/* Botón de lápiz para mostrar/ocultar el formulario */}
                <CreateTwitButton onClick={() => setIsFormVisible(!isFormVisible)}>
                    <FaPen />
                </CreateTwitButton>

                {isFormVisible && (
                    <FormContainer>
                        <UserDisplay>
                            <span>Usuario:</span> <strong>{username}</strong>
                        </UserDisplay>
                        <Textarea
                            placeholder="Escribe tu mensaje"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                        <Button onClick={handleCreateTwit}>Crear Twit</Button>
                    </FormContainer>
                )}

                <TwitsContainer>
                    <h1>Lista de Twits</h1>
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
        </>
    );
}

const Container = styled.div`
    margin-left: -20px;
    margin-right: -8px;
    background-image: url('/background-image.jpg');
    background-size: cover;
    background-position: center;
    color: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    padding-top: 500px;
    width: 100%;
`;

const CreateTwitButton = styled.button`
    position: fixed;
    bottom: 30px;
    left: 200px; /* Mover el botón hacia la derecha */
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #45a049;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin-bottom: 20px;
    align-items: center;
`;

const UserDisplay = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
    span {
        font-weight: bold;
    }
`;

const Textarea = styled.textarea`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    &:hover {
        background-color: #45a049;
    }
`;

const TwitsContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin-top: 20px;
    text-align: center;
`;

const TwitsList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TwitItem = styled.li`
    padding: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
`;

const Content = styled.p`
    margin: 5px 0 0;
    font-size: 1rem;
`;
