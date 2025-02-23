import React from "react";

const Jumbotron = () => {
    return (
            <div className="jmb text-centered d-flex justify-content-center align-items-center flex-column">
                <h1 className="pb-5 text-light">Smite 2</h1>
                <p className="pb-5 text-center text-light">Smite 2 es la secuela de Smite, un juego MOBA en tercera persona que enfrenta a equipos de jugadores en batallas intensas con dioses de diferentes mitologías. Con mecánicas mejoradas, nuevos mapas y personajes, Smite 2 lleva la acción a un nivel más alto. Los jugadores controlan a dioses con habilidades únicas, luchando por destruir al titán enemigo y controlar objetivos estratégicos. Con gráficos más pulidos y jugabilidad renovada, Smite 2 ofrece una experiencia más dinámica y accesible, manteniendo su esencia de estrategia y acción frenética.</p>
                <button type="button" class="btn btn-primary">See more</button>
            </div>
    );
};

export default Jumbotron;