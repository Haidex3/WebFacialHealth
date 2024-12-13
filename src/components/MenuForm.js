import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBook, FaShoppingCart, FaUserFriends, FaInfoCircle, FaQuestionCircle, FaSignOutAlt, FaBars, FaChartLine, FaUser } from 'react-icons/fa';

export default function MenuForm() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userInfoOpen, setUserInfoOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleUserInfo = () => {
        setUserInfoOpen(!userInfoOpen);
    };

    const user=null;
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const user = JSON.parse(storedUserData);
    }


    return (
        <Container>
            {/* Barra superior */}
            <TopBar>
                <UserButton onClick={toggleUserInfo}>
                    <FaUser size={24} color="#fff" />
                </UserButton>
            </TopBar>

            {userInfoOpen && (
                <UserInfo>
                    <p><strong>Nombre de usuario:</strong> {user[0]}</p>
                    <p><strong>Email:</strong> {user[2]}</p>
                    <p><strong>Edad:</strong> {user[3]}</p>
                    <p><strong>Género:</strong> {user[4]}</p>
                </UserInfo>
            )}

            {/* Menú lateral */}
            <Sidebar isOpen={sidebarOpen}>
                {/* Menú vertical que se despliega al hacer clic en el botón */}
                <MenuItem onClick={() => navigate('/twit')}>
                    <FaUserFriends size={20} />
                    <Text isOpen={sidebarOpen}>Social</Text>
                </MenuItem>
                <MenuItem onClick={() => window.open('https://app.jotform.com/glowify/glowify', '_blank')}>
                    <FaInfoCircle size={20} />
                    <Text isOpen={sidebarOpen}>Información</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/legal')}>
                    <FaQuestionCircle size={20} />
                    <Text isOpen={sidebarOpen}>Acerca de</Text>
                </MenuItem>
                <MenuItem onClick={() => navigate('/analisis')}>
                    <FaChartLine size={20} />
                    <Text isOpen={sidebarOpen}>Análisis</Text>
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

const TopBar = styled.div`
    width: 100%;
    background-color: #333;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 50px; /* Añadido para fijar la altura */
`;

const UserButton = styled.div`
    cursor: pointer;
    margin-right: 20px;
`;

const UserInfo = styled.div`
    position: fixed;
    top: 50px;
    right: 20px;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 150;
`;

const MenuBar = styled.nav`
    width: 100%;
    background-color: rgba(178, 218, 250, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    top: 50px; 
    left: 0;
    z-index: 100;
    border-bottom: 1px solid #ccc;
    height: 50px;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    margin-bottom: 20px;
    padding-left: 20px;

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
    top: 80px;
    left: 20px;
    z-index: 2000;
`;

const Sidebar = styled.div`
    position: fixed;
    top: 64px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-270px')};
    height: 100%;
    width: 175px;
    background-color: rgba(232, 218, 213, 1);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: left 0.3s ease-in-out;
    padding-top: 20px;
    padding-left: 20px;
    overflow: hidden;
`;

const Text = styled.span`
    margin-left: 10px;
    font-size: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'inline-block' : 'none')};
`;
