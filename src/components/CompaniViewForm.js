import React, { Component } from "react";
import { Link } from "react-router-dom"; // Para manejar las rutas
import "../styles/App.css";

class CompanyViewForm extends Component {
    render() {
        return (
            <div className="app">
                {/* Header */}
                <header className="header">
                    <div className="menu-icon">&#9776;</div>
                    <div className="logo">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-loreal-paris.png"
                            alt="L'Oreal Logo"
                        />
                    </div>
                </header>

                {/* Profile Section */}
                <section className="profile">
                    <div className="profile-image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/73/Logo.png" // Replace with actual L'Oreal profile image
                            alt="L'Oreal Paris"
                        />
                    </div>
                    <h1 className="profile-name">L'OREAL PARIS</h1>
                    <div className="social-icons">
                        <span className="icon">💖</span>
                        <span className="icon">💬</span>
                        <span className="icon">📹</span>
                        <span className="icon">📷</span>
                    </div>
                </section>

                {/* Menu Section */}
                <section className="menu">
                    <div className="menu-item">
                        <Link to="/seguidores">Seguidores</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/foro">Foro</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/mis-productos">Mis Productos</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/mensajes">Mensajes</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default CompanyViewForm;
