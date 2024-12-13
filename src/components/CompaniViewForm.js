import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompanyViewForm = () => {
    const [companyData, setCompanyData] = useState(null);
    const [openSection, setOpenSection] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('companyData');

        if (data) {
            setCompanyData(JSON.parse(data));
        } else {
            console.error("No se encontraron datos de la compañía en el almacenamiento local");
        }
    }, []);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleLogout = () => {
        navigate("/loginCompa");
    };

    if (!companyData) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={styles.container}>
            <button onClick={handleLogout} style={styles.logoutButton}>
                <span style={styles.arrow}>➤</span>
                <span style={styles.logoutText}>Cerrar sesión</span>
            </button>
            <div style={styles.logoContainer}>
                <img
                    src={companyData.data.companyImageUrl || "/default-logo.png"}
                    alt="Company Logo"
                    style={styles.logo}
                />
            </div>
            <h1 style={{ ...styles.companyName, color: 'black' }}>{companyData.data.companyName}</h1>
            <div style={styles.buttonContainer}>
                {sections.map((section) => (
                    <div key={section.name}>
                        <button
                            style={{
                                ...styles.button,
                                width: openSection === section.name ? '300px' : '200px',
                            }}
                            onClick={() => toggleSection(section.name)}
                        >
                            <span>{section.label}</span>
                            <span style={styles.arrow}>{openSection === section.name ? '▲' : '▼'}</span>
                        </button>
                        {openSection === section.name && (
                            <div style={styles.content}>
                                {section.name === "followers" ? (
                                    <ul>
                                        {randomFollowers.map((follower, index) => (
                                            <li key={index}>{follower}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    section.content
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div style={styles.socialMediaContainer}>
                <a
                    href={companyData.data.companyInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                        style={styles.icon}
                    />
                </a>
                <a
                    href={companyData.data.companyTwitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                        alt="Twitter"
                        style={styles.icon}
                    />
                </a>
                <a
                    href={companyData.data.companyFacebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook"
                        style={styles.icon}
                    />
                </a>
            </div>
        </div>
    );
};

const sections = [
    {
        name: "followers",
        label: "Seguidores",
        content: "Aquí puedes ver a tus seguidores y sus estadísticas.",
    },
    {
        name: "forums",
        label: "Foros",
        content: "Explora y administra tus foros.",
    },
    {
        name: "products",
        label: "Mis Productos",
        content: "Lista y administra tus productos.",
    },
];

const randomFollowers = [
    "Juan Pérez", "Ana García", "Carlos López", "Laura Martínez", "Pedro Rodríguez",
    "Sofía Hernández", "Luis González", "María Sánchez", "José Díaz", "Marta Pérez",
    "David López", "Carmen García", "Javier Martín", "Elena Jiménez", "Antonio Rodríguez",
    "Paula Fernández", "Manuel Ruiz", "Raquel Torres", "Francisco Vargas", "Beatriz Moreno"
];

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        backgroundImage: `url('fondo2.avif')`, // Cambié la extensión a AVIF
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logoContainer: {
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        border: "5px solid #f9f9f9",
        overflow: "hidden",
        marginBottom: "10px",
    },
    logo: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    companyName: {
        color: "#fff",
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
    },
    button: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#fff",
        borderRadius: "5px",
        cursor: "pointer",
        textAlign: "left",
        transition: "width 0.3s ease",
    },
    arrow: {
        marginLeft: "10px",
        fontSize: "20px",
    },
    content: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    socialMediaContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
    },
    socialIcon: {
        textDecoration: "none",
    },
    icon: {
        width: "35px",
        height: "35px",
    },
    logoutButton: {
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "10px 20px",
        backgroundColor: "#FF4D4D",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        transition: "width 0.3s ease",
    },
    logoutText: {
        display: "none", // Inicialmente oculto
        marginLeft: "10px",
        fontSize: "16px",
    },
    logoutButtonHover: {
        width: "150px", // Se expandirá cuando el mouse pase por encima
    },
    logoutButtonHoverText: {
        display: "inline", // Muestra el texto cuando el mouse pasa por encima
    },
};

export default CompanyViewForm;
