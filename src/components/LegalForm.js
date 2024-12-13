import React from 'react';
import MenuForm from './MenuForm';

const LegalForm = () => {
    return (
        <div style={{
            backgroundImage: 'url(fondoLegal.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            paddingTop: '50px',
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
        }}>
            <MenuForm />

            <div style={{
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '20px auto',
            }}>
                <h1>Términos y Condiciones</h1>

                <h2>1. Aceptación de los Términos</h2>
                <p>
                    Al acceder y utilizar nuestra aplicación, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, te recomendamos no utilizar la aplicación.
                </p>

                <h2>2. Uso de la Aplicación</h2>
                <p>
                    La aplicación está destinada a proporcionar recomendaciones de cuidado de la piel. No reemplaza el consejo médico profesional. Los usuarios deben consultar a un dermatólogo para diagnósticos y tratamientos específicos.
                </p>

                <h2>3. Registro y Seguridad</h2>
                <p>
                    Para utilizar ciertas funciones, debes registrarte y proporcionar información precisa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
                </p>

                <h2>4. Privacidad y Protección de Datos</h2>
                <p>
                    Nos comprometemos a proteger tu información personal conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. Consulta nuestra Política de Privacidad para más detalles.
                </p>

                <h2>5. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido de la aplicación, incluyendo textos, gráficos y logotipos, es propiedad de la empresa y está protegido por leyes de propiedad intelectual.
                </p>

                <h2>6. Limitación de Responsabilidad</h2>
                <p>
                    No somos responsables por daños directos o indirectos derivados del uso de la aplicación. La aplicación se proporciona "tal cual sin garantías de ningún tipo".
                </p>

                <h2>7. Modificaciones de los Términos</h2>
                <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas una vez publicadas en la aplicación.
                </p>

                <h2>8. Ley Aplicable y Jurisdicción</h2>
                <p>
                    Estos términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los tribunales competentes de Colombia.
                </p>
            </div>
        </div>
    );
};

export default LegalForm;
