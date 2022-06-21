import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/o-nas'>About</Link>
                <Link to='/oferta'>Oferta</Link>
                <Link to='/realizacje'>Realizacje</Link>
            </nav>
            <main>
                <h2>Kontakt</h2>
            </main>
        </>
    );
}
