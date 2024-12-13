import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TwitForm from './components/TwitForm';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Button = styled.button`
    background: none;
    border: none;
    color: #007bff;
    text-decoration: underline;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    &:hover {
        color: #0056b3;
    }
`;

function AppWithRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/twit" element={<TwitForm />} />
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default AppWithRouter;
