import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTwits } from '../api/script';
import { FaSignOutAlt } from "react-icons/fa";


const CompanyViewForm = () => {
    const [companyData, setCompanyData] = useState(null);
    const [openSection, setOpenSection] = useState(null);
    const [twits, setTwits] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('companyData');
        if (data) {
            setCompanyData(JSON.parse(data));
        } else {
            console.error("No se encontraron datos de la compañía en el almacenamiento local");
        }
    }, []);

    useEffect(() => {
        const fetchTwits = async () => {
            const allTwits = await getAllTwits();
            setTwits(allTwits);
        };
        fetchTwits();

        setFollowers([
            "Carlos García", "Ana López", "Luis Pérez", "María Fernández", "Javier Rodríguez",
            "Lucía Gómez", "Pedro Martínez", "Sara Sánchez", "Raúl Hernández", "Paula Torres",
            "David Díaz", "Marta Rodríguez", "Antonio López", "Elena Ruiz", "Juan García",
            "Verónica Sánchez", "Rafael Pérez", "Isabel Martínez", "Fernando Gómez", "Cristina Torres"
        ]);

        // Definimos los productos
        setProducts([
            { name: "Medipiel - Skincare", link: "https://www.medipiel.com.co/skincare" },
            { name: "Loto del Sur - Mousse Limpiador", link: "https://www.lotodelsur.com/mousse-cremoso-limpiador-moringa-y-tea-tree-10-4600023/p?skuId=536" },
            { name: "Éxito - Espuma Limpiadora Ponds", link: "https://www.exito.com/espuma-limpiador-facial-diario-ponds-50-gr-3059960/p?srsltid=AfmBOoo-c9zTQchAm4eA9fpWAlmP0XivFTz-GzB11oKyFUKFDpq5FNci628" }
        ]);
    }, []);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleLogout = () => {
        navigate("/loginCompa");
    };

    if (!companyData) return <div>Cargando...</div>;

    return (
        <div style={styles.container}>
            <button onClick={handleLogout} style={styles.logoutButton}>
                <FaSignOutAlt style={{color: "#000", fontSize: "20px"}}/>
            <span style={styles.logoutText}>Cerrar sesión</span>
        </button>
    <div style={styles.logoAndNameContainer}>
        <div style={styles.logoContainer}>
            <img
                src={companyData.data.companyImageUrl || "/default-logo.png"}
                        alt="Company Logo"
                        style={styles.logo}
                    />
                </div>
                <h1 style={{ ...styles.companyName, color: 'black' }}>{companyData.data.companyName}</h1>
            </div>
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
                                        {followers.map((follower, index) => (
                                            <li key={index}>{follower}</li>
                                        ))}
                                    </ul>
                                ) : section.name === "forums" ? (
                                    <ul>
                                        {twits.map((twit, index) => (
                                            <li key={index}>
                                                <strong>{twit.username}</strong>
                                                <p>{twit.details}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : section.name === "products" ? (
                                    <div style={styles.productsList}>
                                        {products.map((product, index) => (
                                            <div key={index} style={styles.productCard}>
                                                <h2 style={styles.productName}>{product.name}</h2>
                                                <a href={product.link} target="_blank" rel="noopener noreferrer" style={styles.productLink}>
                                                    Ver producto
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    section.content
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div style={styles.socialMediaContainer}>
                {["companyInstagramUrl", "companyTwitterUrl", "companyFacebookUrl"].map((platform, index) => (
                    <a
                        key={index}
                        href={companyData.data[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.socialIcon}
                    >
                        <img
                            src={platform === "companyInstagramUrl" ? "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" :
                                platform === "companyTwitterUrl" ? "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" :
                                    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"}
                            alt={platform}
                            style={styles.icon}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

const sections = [
    { name: "followers", label: "Seguidores", content: "Aquí puedes ver a tus seguidores y sus estadísticas." },
    { name: "forums", label: "Foros", content: "Explora y administra tus foros." },
    { name: "products", label: "Mis Productos", content: "Lista y administra tus productos." },
];

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#c0c0c0",
        padding: "0",
        margin: "0",
        marginLeft: "-8px",
        marginRight: "-8px",
        marginTop: "-8px",
        marginBottom: "-100px",
        backgroundImage: `url('fondo2.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    logoAndNameContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "30px",
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
        backgroundColor: "#c0c0c0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
        transition: "width 0.3s ease, transform 0.3s ease",
    },
    arrow: {
        marginLeft: "10px",
        fontSize: "20px",
    },
    content: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#d2c4aa",
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

    },
    logoutText: {
        display: "none",
        marginLeft: "10px",
        fontSize: "16px",
    },
    productsList: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
        width: "100%",
        maxWidth: "800px",
        alignItems: "center",
    },
    productCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "rgba(247,244,239,255)",
        borderRadius: "10px",
        boxShadow: "none",
        width: "100%",
        maxWidth: "600px",
        transition: "transform 0.3s ease",
    },
    productName: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
        textAlign: "center",
    },
    productLink: {
        fontSize: "1rem",
        color: "#4CAF50",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default CompanyViewForm;
