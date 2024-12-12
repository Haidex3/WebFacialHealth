// App.js
import React, { useState } from 'react';
import { login, register } from './api/script';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <h1>Bienvenido</h1>
            <div>
                <button onClick={() => setIsLogin(true)}>Inicio de Sesión</button>
                <button onClick={() => setIsLogin(false)}>Registro</button>
            </div>
            <div>
                {isLogin ? <login /> : <register />}
            </div>
        </div>
    );
};

export default App;
