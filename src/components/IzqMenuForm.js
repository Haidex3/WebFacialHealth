import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserFriends, FaInfoCircle, FaQuestionCircle, FaSignOutAlt, FaAngleRight } from 'react-icons/fa';

export default function IzqMenuForm() {
    const navigate = useNavigate();

    return (
        <Sidebar>
            <TopIconContainer>
                <FaAngleRight size={30} color="#000" />
            </TopIconContainer>
            <MenuItemContainer>
                <MenuItem onClick={() => navigate('/twit')}>
                    <FaUserFriends size={20} />
                    <Text>Social</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/Info')}>
                    <FaInfoCircle size={20} />
                    <Text>Información</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/about')}>
                    <FaQuestionCircle size={20} />
                    <Text>Acerca de</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/login')}>
                    <FaSignOutAlt size={20} />
                    <Text>Salir</Text>
                </MenuItem>
            </MenuItemContainer>
        </Sidebar>
    );
}

// Estilos usando styled-components
const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 60px; /* Ancho inicial del menú */
    background-color: rgba(232, 218, 213, 1); /* Color beige */
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: width 0.3s ease-in-out;
    padding-top: 20px;

    &:hover {
        width: 200px; /* Ancho completo del menú al pasar el mouse */
    }
`;

const TopIconContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 50%;
    width: 40px;
    margin-bottom: 20px;
`;

const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px;
    color: #000;
    width: 100%;
    border-radius: 5px;

    &:hover {
        background-color: #4CAF50;
        color: white;
    }

    svg {
        transition: color 0.3s ease;
    }

    &:hover svg {
        color: white;
    }
`;

const Text = styled.span`
    margin-left: 10px;
    font-size: 1rem;
    display: none; /* El texto estará oculto por defecto */

    ${MenuItem}:hover & {
        display: inline-block; /* Muestra el texto solo cuando se pasa el mouse */
    }
`;
