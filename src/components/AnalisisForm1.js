import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuForm from './MenuForm';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function AnalisisForm1() {
    const [image, setImage] = useState(null);
    const [imperfection, setImperfection] = useState(null);
    const [showGraph, setShowGraph] = useState(false);
    const [showBarGraph, setShowBarGraph] = useState(false);

    // Datos para la gráfica de líneas (progreso)
    const [graphData, setGraphData] = useState({
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
        datasets: [
            {
                label: 'Progreso',
                data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    });

    // Datos para la gráfica de barras (Eficacia de productos)
    const [barGraphData, setBarGraphData] = useState({
        labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
        datasets: [
            {
                label: 'Eficacia (%)',
                data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color de las barras
            },
        ],
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateImperfection = () => {
        const randomX = Math.random() * 80 + 10;
        const randomY = Math.random() * 80 + 10;
        const randomScore = Math.floor(Math.random() * 10) + 1;

        setImperfection({
            x: randomX,
            y: randomY,
            score: randomScore,
            message: `¡Imperfección detectada! Puntuación: ${randomScore}/10. ${randomScore < 5 ? 'Controlable' : 'Tomar medidas rápidamente'}`,
        });
    };

    useEffect(() => {
        if (image) {
            generateImperfection();
        }
    }, [image]);

    const toggleGraph = () => {
        setShowGraph((prev) => !prev);
    };

    const toggleBarGraph = () => {
        setShowBarGraph((prev) => !prev);
    };

    return (
        <Container>
            <MenuForm />
            <Content>
                <h2>Análisis de Imagen</h2>
                <FileInput type="file" accept="image/*" onChange={handleImageUpload} />
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
            </Content>
            <RightSidebar>
                <GraphButton onClick={toggleGraph}>
                    {showGraph ? 'Ocultar Gráfica de Progreso' : 'Mostrar Gráfica de Progreso'}
                </GraphButton>
                {showGraph && (
                    <GraphContainer>
                        <h3>Progreso del Usuario</h3>
                        <Line data={graphData} />
                    </GraphContainer>
                )}
                <GraphButton onClick={toggleBarGraph}>
                    {showBarGraph ? 'Ocultar Gráfica de Eficacia' : 'Mostrar Gráfica de Eficacia'}
                </GraphButton>
                {showBarGraph && (
                    <GraphContainer>
                        <h3>Eficacia de Productos</h3>
                        <Bar data={barGraphData} />
                    </GraphContainer>
                )}
            </RightSidebar>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    position: relative;
    background-image: url('fondoAnalisis.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;


const Content = styled.div`
    padding: 20px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
`;

const FileInput = styled.input`
    margin-top: 20px;
    padding: 10px;
    font-size: 1rem;
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

const RightSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    margin-top: 100px;
`;

const GraphButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    margin-bottom: 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: #45a049;
    }
`;

const GraphContainer = styled.div`
    width: 300px;
    height: 300px;
    max-width: 100%;
`;
