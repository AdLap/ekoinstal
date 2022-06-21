import React from "react";
import { Link } from "react-router-dom";

export const Realizations = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/o-nas'>About</Link>
                <Link to='/oferta'>Oferta</Link>
                <Link to='/kontakt'>Kontakt</Link>
            </nav>
            <main>
                <h2>Realizacje</h2>
            </main>
        </>
    );
}
