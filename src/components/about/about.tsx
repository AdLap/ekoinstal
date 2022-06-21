import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/oferta'>Oferta</Link>
                <Link to='/realizacje'>Realizacje</Link>
                <Link to='/kontakt'>Kontakt</Link>
            </nav>
            <main>
                <h2>Leszek Miedziak</h2>
            </main>
        </>
    );
}
