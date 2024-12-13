const apiUrl = 'http://localhost:8081';

export async function login(credentials) {
    try {
        const url = `${apiUrl}/auth/login`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Inicio de sesión exitoso:", data);
            return data;
        } else {
            const errorData = await response.text();
            console.error("Error al hacer login:", errorData);
            throw new Error(errorData);
        }
    } catch (error) {
        console.error("Hubo un problema con la petición:", error);
        throw error;
    }
}


export async function register(userData) {
    try {
        const url = `${apiUrl}/auth/register`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,
                email: userData.email,
                age: userData.age,
                gender: userData.gender
            }),
        };
        const response = await fetch(url, options);
        console.log(response);

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('Server responded with error:', response.status, errorDetails);
            throw new Error(`Registration failed: ${response.status} - ${errorDetails}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}

