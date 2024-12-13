import React from 'react';
import styled from 'styled-components';
import MenuForm from './MenuForm'; // Menú horizontal

export default function ProductsForm() {
    const products = [
        {
            name: "Medipiel - Skincare",
            link: "https://www.medipiel.com.co/skincare",
        },
        {
            name: "Loto del Sur - Mousse Limpiador",
            link: "https://www.lotodelsur.com/mousse-cremoso-limpiador-moringa-y-tea-tree-10-4600023/p?skuId=536",
        },
        {
            name: "Éxito - Espuma Limpiadora Ponds",
            link: "https://www.exito.com/espuma-limpiador-facial-diario-ponds-50-gr-3059960/p?srsltid=AfmBOoo-c9zTQchAm4eA9fpWAlmP0XivFTz-GzB11oKyFUKFDpq5FNci628",
        },
    ];

    return (
        <>
            <MenuForm /> {/* Menú horizontal */}
            <MainContent>
                <h1>Productos de Cuidado de la Piel</h1>
                <ProductsList>
                    {products.map((product, index) => (
                        <ProductCard key={index}>
                            <ProductName>{product.name}</ProductName>
                            <ProductLink href={product.link} target="_blank" rel="noopener noreferrer">
                                Ver producto
                            </ProductLink>
                        </ProductCard>
                    ))}
                </ProductsList>
            </MainContent>
        </>
    );
}

const MainContent = styled.div`
    margin-left: -20px;
    margin-right: -20px;
    margin-top: 40px;  /* Deja espacio para el menú superior */
    padding: 20px;
    background-image: url('/background-image.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el contenido horizontalmente */
    justify-content: flex-start; /* Alinea desde la parte superior */
`;

const ProductsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    align-items: center; /* Centra las tarjetas de productos */
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8); /* Fondo más suave */
    border-radius: 10px;
    box-shadow: none; /* Sin borde o sombra */
    transition: transform 0.3s ease;
    width: 100%; /* Asegura que las tarjetas ocupen todo el ancho disponible */
    max-width: 600px; /* Define un ancho máximo para las tarjetas */
    &:hover {
        transform: translateY(-5px);
    }
`;

const ProductName = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin: 0 0 10px 0;
    text-align: center; /* Centra el nombre del producto */
`;

const ProductLink = styled.a`
    font-size: 1rem;
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
    &:hover {
        color: #45a049;
    }
`;
