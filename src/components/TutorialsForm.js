import React from 'react';
import styled from 'styled-components';
import MenuForm from './MenuForm';  // Importa el componente MenuForm

export default function TutorialsForm() {
    const videos = [
        "https://www.youtube.com/embed/JD1fHjrDmgM?si=0oOY6kZJjnrAAEzO",
        "https://www.youtube.com/embed/Ca902HtbX6Q?si=p6UmWBHExfMoq4-3",
        "https://www.youtube.com/embed/a9liloVjTP8?si=pR4utVX08_maPHbY"
    ];

    return (
        <MainContent>
            {/* Incluir el menú en la página de tutoriales */}
            <MenuForm />

            <h1>Tutoriales de Cuidado de la Piel</h1>
            <VideoList>
                {videos.map((video, index) => (
                    <VideoItem key={index}>
                        <iframe
                            width="560"
                            height="315"
                            src={video}
                            title={`Video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </VideoItem>
                ))}
            </VideoList>
        </MainContent>
    );
}

const MainContent = styled.div`
    margin-top: 60px;
    margin-left: -20px;
    margin-right: -20px;
    padding: 90px;
    background-image: url('/background-image.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start;
`;

const VideoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    align-items: center;
`;

const VideoItem = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    iframe {
        border-radius: 10px;
    }
`;
