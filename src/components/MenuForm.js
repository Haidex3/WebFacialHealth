import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBook, FaShoppingCart } from 'react-icons/fa';

export default function MenuForm() {
    const navigate = useNavigate();

    return (
        <MenuBar>
            <MenuItem onClick={() => navigate('/twit')}>
                <FaHome size={24} />
                <span>Inicio</span>
            </MenuItem>
            <MenuItem onClick={() => navigate('/tutorialsForm')}>
                <FaBook size={24} />
                <span>Tutoriales</span>
            </MenuItem>
            <MenuItem onClick={() => navigate('/productsForm')}>
                <FaShoppingCart size={24} />
                <span>Productos</span>
            </MenuItem>
        </MenuBar>
    );
}

const MenuBar = styled.nav`
    width: 100%;
    background-color: rgba(226, 176, 249, 255); 
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #ccc;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
    text-decoration: none;

    &:hover {
        color: #4CAF50; 
    }

    span {
        margin-top: 5px;
        font-size: 0.9rem;
    }
`;
