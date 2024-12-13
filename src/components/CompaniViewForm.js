import React, { useState } from "react";

const CompaniViewForm = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonContainer}>
                {sections.map((section) => (
                    <div key={section.name}>
                        <button
                            style={styles.button}
                            onClick={() => toggleSection(section.name)}
                        >
                            <span>{section.label}</span>
                            <span style={styles.arrow}>&#x2192;</span>
                        </button>
                        {openSection === section.name && (
                            <div style={styles.content}>{section.content}</div>
                        )}
                    </div>
                ))}
            </div>
            <div style={styles.socialMediaContainer}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"
                         style={styles.icon}/>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X"
                         style={styles.icon}/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                         alt="Facebook" style={styles.icon}/>
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

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#fff",
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
    },
    arrow: {
        marginLeft: "10px",
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
};

export default CompaniViewForm;
