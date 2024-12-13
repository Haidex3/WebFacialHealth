import React from 'react';
import styled from 'styled-components';
import MenuForm from './MenuForm';

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
            <MenuForm /> {/* Agrega el menú */}
            <Container>
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
            </Container>
        </>
    );
}

// Estilos usando styled-components
const Container = styled.div`
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
    padding-top: 80px;
`;

const ProductsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

const ProductName = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin: 0 0 10px 0;
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
