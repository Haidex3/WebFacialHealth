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

        console.log(response.ok);

        if (response.ok) {
            return response;
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
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            return data;
        } else {
            const text = await response.text();
            console.log('Respuesta no JSON:', text);
            throw new Error('La respuesta no es JSON');
        }

    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}


