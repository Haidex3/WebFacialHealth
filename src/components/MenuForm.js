import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBook, FaShoppingCart, FaUserFriends, FaInfoCircle, FaQuestionCircle, FaSignOutAlt, FaAngleRight, FaBars } from 'react-icons/fa';

export default function MenuForm() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Container>
            {/* Menú lateral */}
            <Sidebar isOpen={sidebarOpen}>
                {/* Menú vertical que se despliega al hacer clic en el botón */}
                <MenuItem onClick={() => navigate('/twit')}>
                    <FaUserFriends size={20} />
                    <Text isOpen={sidebarOpen}>Social</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/Info')}>
                    <FaInfoCircle size={20} />
                    <Text isOpen={sidebarOpen}>Información</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/about')}>
                    <FaQuestionCircle size={20} />
                    <Text isOpen={sidebarOpen}>Acerca de</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/login')}>
                    <FaSignOutAlt size={20} />
                    <Text isOpen={sidebarOpen}>Salir</Text>
                </MenuItem>
            </Sidebar>

            <SidebarToggle onClick={toggleSidebar}>
                <FaBars size={30} color="#000" />
            </SidebarToggle>

            <MenuBar>
                <MenuItem onClick={() => navigate('/twit')}>
                    <FaHome size={24} />
                    <span>Inicio</span>
                </MenuItem>
                <MenuItem onClick={() => navigate('/tutorials')}>
                    <FaBook size={24} />
                    <span>Tutoriales</span>
                </MenuItem>
                <MenuItem onClick={() => navigate('/products')}>
                    <FaShoppingCart size={24} />
                    <span>Productos</span>
                </MenuItem>
            </MenuBar>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MenuBar = styled.nav`
    width: 100%;
    background-color: rgba(226, 176, 249, 255);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    border-bottom: 1px solid #ccc;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;  /* Alineación horizontal de ícono y texto */
    justify-content: center;
    cursor: pointer;
    color: #000;
    text-decoration: none;

    &:hover {
        color: #4CAF50;
    }

    span {
        margin-left: 10px;
        font-size: 0.9rem;
    }
`;

const SidebarToggle = styled.div`
    cursor: pointer;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 2000;
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '-px' : '0')};  /* Mover un poco más a la izquierda */
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    background-color: rgba(232, 218, 213, 1);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    padding-top: 20px;
    padding-left: 10px;
    overflow: hidden;
`;

const Text = styled.span`
    margin-left: 10px;
    font-size: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'inline-block' : 'none')};
`;
