import React from 'react';
import styled from 'styled-components';
import MenuForm from './MenuForm'; // Menú horizontal
import IzqMenuForm from './IzqMenuForm'; // Menú vertical

export default function TutorialsForm() {
    const videos = [
        "https://www.youtube.com/embed/JD1fHjrDmgM?si=0oOY6kZJjnrAAEzO",
        "https://www.youtube.com/embed/Ca902HtbX6Q?si=p6UmWBHExfMoq4-3",
        "https://www.youtube.com/embed/a9liloVjTP8?si=pR4utVX08_maPHbY"
    ];

    return (
        <>
            <MenuForm /> {/* Menú horizontal */}
            <IzqMenuForm /> {/* Menú vertical */}
            <MainContent>
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
        </>
    );
}

const MainContent = styled.div`
    margin-left: 60px;
    margin-top: 60px;
    padding: 20px;
    background-image: url('/background-image.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el contenido horizontalmente */
    justify-content: flex-start; /* Alinea el contenido desde el inicio */
`;

const VideoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    align-items: center; /* Centra los videos dentro de la lista */
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
