import React, { useState } from 'react';
import styled from 'styled-components';

export default function AnalisisForm1() {
    const [image, setImage] = useState(null);
    const [imperfection, setImperfection] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                generateImperfection();
            };
            reader.readAsDataURL(file);
        }
    };

    const generateImperfection = () => {
        if (image) {
            const randomX = Math.random() * 80 + 10; // Genera un valor aleatorio entre 10% y 90% del ancho
            const randomY = Math.random() * 80 + 10; // Genera un valor aleatorio entre 10% y 90% de la altura
            const randomScore = Math.floor(Math.random() * 10) + 1; // Genera una puntuación aleatoria entre 1 y 10

            setImperfection({
                x: randomX,
                y: randomY,
                score: randomScore,
                message: `¡Imperfección detectada! Puntuación: ${randomScore}/10. Controlado: ${randomScore < 5 ? 'Bajo' : 'Alto'}`,
            });
        }
    };

    return (
        <Container>
            <h2>Análisis de Imagen</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && (
                <ImageContainer>
                    <Image src={image} alt="Imagen subida" />
                    {imperfection && (
                        <ImperfectionIndicator
                            style={{
                                top: `${imperfection.y}%`,
                                left: `${imperfection.x}%`,
                            }}
                        >
                            <ImperfectionText>{imperfection.message}</ImperfectionText>
                        </ImperfectionIndicator>
                    )}
                </ImageContainer>
            )}
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    padding: 20px;
`;

const ImageContainer = styled.div`
    position: relative;
    display: inline-block;
    max-width: 100%;
    max-height: 80vh;
    margin-top: 20px;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const ImperfectionIndicator = styled.div`
    position: absolute;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: 10;
`;

const ImperfectionText = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;
