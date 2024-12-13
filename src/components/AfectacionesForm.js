// afectaciones.js
import React from 'react';
import { Link } from 'react-router-dom';

const Afectaciones = () => {
    return (
        <div>
            <h1>La tecnología al servicio de tu piel: personalizada, exclusiva y diseñada para realzar tu bienestar.</h1>
            <p>
                El tratamiento adecuado de las enfermedades cutáneas es fundamental para mantener la salud de la piel y evitar complicaciones a largo plazo.
                Las afecciones como el acné, la dermatitis o la urticaria no solo afectan la apariencia estética, sino que también pueden causar molestias físicas como picazón, enrojecimiento e inflamación.
                Además, si no se abordan de manera eficaz, pueden empeorar con el tiempo, llevando a la aparición de cicatrices, infecciones secundarias o la pérdida de la función de la barrera cutánea.
                El tratamiento oportuno y específico de estas condiciones ayuda a aliviar los síntomas, restaurar la salud de la piel y prevenir daños adicionales. Es crucial que cada persona adapte su rutina de cuidado según las necesidades particulares de su piel y busque asesoría profesional para encontrar los productos adecuados, asegurando una piel más sana y equilibrada.
            </p>

            <div>
                <h2>Afectaciones Comunes</h2>
                <ul>
                    <li>
                        <Link to="/acne">
                            <button>Acné</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dermatitis-atopica">
                            <button>Dermatitis Atópica</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/psoriasis">
                            <button>Psoriasis</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/urticaria">
                            <button>Urticaria</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rosacea">
                            <button>Rosaea</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Afectaciones;
