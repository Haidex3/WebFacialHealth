const apiUrl = 'http://localhost:8081'; // Actualizamos la URL para coincidir con el backend

export async function login(credentials) {
    try {
        const url = `${apiUrl}/auth/login`; // Rutas de login del backend
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials), // Credenciales a enviar
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            const errorDetails = await response.text(); // Leer detalles del error
            console.error('Server responded with error:', response.status, errorDetails);
            throw new Error(`Login failed: ${response.status} - ${errorDetails}`);
        }

        return await response.json(); // Devuelve los datos si la respuesta es exitosa
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

export async function register(userData) {
    try {
        const url = `${apiUrl}/auth/register`; // Rutas de registro del backend
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Datos de usuario a enviar
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            const errorDetails = await response.text(); // Leer detalles del error
            console.error('Server responded with error:', response.status, errorDetails);
            throw new Error(`Registration failed: ${response.status} - ${errorDetails}`);
        }

        return await response.json(); // Devuelve los datos si la respuesta es exitosa
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}
