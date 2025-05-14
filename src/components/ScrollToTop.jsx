// Import dei React Hook necessari
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente ScrollToTop: forza lo scroll in alto quando cambia la route
export default function ScrollToTop() {
    // useLocation restituisce l'oggetto location della route corrente
    const { pathname } = useLocation();

    // useEffect viene eseguito ogni volta che cambia il valore di 'pathname'
    useEffect(() => {
        // Forza lo scroll della finestra in alto
        window.scrollTo(0, 0);
    }, [pathname]); // Il codice dentro l'useEffect si attiva solo quando cambia il percorso

    // Questo componente non rende nulla a schermo
    return null;
}