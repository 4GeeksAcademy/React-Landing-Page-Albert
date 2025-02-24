import React from "react";

const Footer = () => {
    return (
        <div className="custom-footer container-fluid d-flex justify-content-between flex-row pb-5" 
             style={{ maxWidth: "80vw", fontSize: "0.8em" }}>
            <div>
                <p className="pt-5 text-light">Smite 2 - Juego de Batalla Épica</p>
                <p className="text-light">Explora el mundo de los dioses, conquista el campo de batalla y demuestra tu destreza.</p>
                <p className="text-light">© 2025 Smite 2. Todos los derechos reservados.</p>
            </div>
            <div>
                <p className="pt-5 text-light">Síguenos en nuestras redes sociales para más noticias y actualizaciones.</p>
                <p className="text-light">Facebook | Twitter | Instagram | YouTube | Twitch</p>
                <p className="text-light">Política de privacidad | Términos y condiciones</p>
            </div>             
        </div>
    );
};


export default Footer;