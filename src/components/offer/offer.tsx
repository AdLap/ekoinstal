import React from "react";
import { Link } from "react-router-dom";

export const Offer = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/o-nas'>About</Link>
                <Link to='/realizacje'>Realizacje</Link>
                <Link to='/kontakt'>Kontakt</Link>
            </nav>
            <main>
                <h2>Oferta</h2>
            </main>
        </>
    );
}
