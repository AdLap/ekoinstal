import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <nav>
                <Link to='/o-nas'>About</Link>
                <Link to='/oferta'>Oferta</Link>
                <Link to='/realizacje'>Realizacje</Link>
                <Link to='/kontakt'>Kontakt</Link>
            </nav>
            <main>
                <h2>Ekoinstal</h2>
            </main>
        </>
    );
}
