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
            setDetails('');
            setIsFormVisible(false);
            window.location.reload();
        }
    };

    return (
        <>
            <MenuForm /> {/* Menú horizontal */}
            <Container>
                {/* Columna izquierda para imágenes informativas */}
                <SideImageLeft>
                    <img src="/informativo1.jpg" alt="Informativo 1" />
                    <img src="/informativo2.jpg" alt="Informativo 2" />
                    <img src="/informativo3.jpg" alt="Informativo 3" />
                    <img src="/informativo4.WEBP" alt="Informativo 4" />
                </SideImageLeft>

                {/* Sección central con los Twits */}
                <MainContent>
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
                        <h1>Social</h1>
                        <TwitsList>
                            {twits.map((twit, index) => (
                                <TwitItem key={index}>
                                    <TwitUsername>{twit.username}</TwitUsername>
                                    <Content>{twit.details}</Content>
                                </TwitItem>
                            ))}
                        </TwitsList>
                    </TwitsContainer>
                </MainContent>

                {/* Columna derecha para imágenes publicitarias */}
                <SideImageRight>
                    <img src="/publicidad1.WEBP" alt="Publicidad 1"/>
                    <img src="/publicidad2.avif" alt="Publicidad 2"/>
                    <img src="/publicidad3.jpg" alt="Publicidad 3"/>
                    <img src="/publicidad4.WEBP" alt="Publicidad 4"/>
                    <img src="/publicidad5.WEBP" alt="Publicidad 5"/>
                </SideImageRight>
            </Container>
        </>
    );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background-image: url('/background-image.jpg');
    background-size: 120% 120%;
    background-position: center;
    background-repeat: no-repeat;  /* Evita que el fondo se repita */
    color: #000;
    padding-top: 120px;
    width: 100%;
`;

const SideImageLeft = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const SideImageRight = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const MainContent = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
`;

const CreateTwitButton = styled.button`
    position: fixed;
    bottom: 30px;
    left: 200px;
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
    padding: 15px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.7); /* Fondo blanco con opacidad de 70% */
    border: 1px solid #ccc; /* Opcional: agrega un borde si lo deseas */
    border-radius: 8px; /* Bordes redondeados */
    font-size: 1.1rem;
    backdrop-filter: blur(5px); /* Agrega un efecto de desenfoque si lo deseas */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Agrega una sombra suave para más contraste */
`;

const TwitUsername = styled.strong`
    font-size: 1.5rem; /* Ajusta este valor para el tamaño del nombre */
    font-weight: bold;
`;

const Content = styled.p`
    margin: 5px 0 0;
    font-size: 1.4rem; /* Ajusta este valor para el tamaño del mensaje */
`;
