import { createContext, useContext } from "react"; // Importa le funzioni necessarie per creare un context e usarlo
import { useState, useEffect } from "react"; // Importa i hook per gestire lo stato (useState) e gli effetti collaterali (useEffect)

const GlobalContext = createContext(); // Crea un nuovo context che sarà condiviso tra i componenti

// Questo è il Provider del context, che fornirà lo stato globale ai componenti figli
const GlobalProvider = ({ children }) => {
    // Dichiarazione di variabili di stato per gestire l'apertura del menu e il fatto che la pagina sia scorsa
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per determinare se il menu è aperto o chiuso (inizializzato a false)
    const [isScrolled, setIsScrolled] = useState(false); // Stato per determinare se la pagina è stata scrollata (inizializzato a false)

    // useEffect per gestire gli effetti collaterali. In questo caso, per rilevare lo scroll della finestra
    useEffect(() => {
        // Funzione che si attiva ogni volta che la finestra viene scrollata
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Se lo scroll supera i 10px, setta isScrolled a true, altrimenti false
        };

        // Aggiunge un listener per l'evento di scroll della finestra
        window.addEventListener("scroll", handleScroll);

        // Cleanup: rimuove il listener quando il componente viene smontato
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // L'array vuoto [] fa sì che l'effetto venga eseguito solo una volta al montaggio


    // Funzione per gestire l'invio del modulo
    const handleSubmit = (e) => {
        const form = e.target;

        // Se il form non è valido, previene l'invio e mostra i messaggi di errore
        if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity(); // Mostra i messaggi di validazione nativi del browser
        } else {
            e.preventDefault();
            // Azione da eseguire se il form è valido (es. invio dati a un server)
            console.log('Form valido, procedi con l\'invio');
        }
    };


    // Oggetto `value` che contiene tutte le variabili di stato e le funzioni che si vogliono rendere disponibili ai componenti figli
    const value = {
        isMenuOpen,     // Stato che indica se il menu è aperto
        setIsMenuOpen,  // Funzione per aggiornare lo stato di apertura/chiusura del menu
        isScrolled,
        handleSubmit    // Stato che indica se la pagina è stata scrollata
    };

    return (
        // Il Provider rende disponibili i valori definiti sopra ai componenti figli
        <GlobalContext.Provider value={value}>
            {children}  {/* I componenti figli riceveranno l'accesso al GlobalContext */}
        </GlobalContext.Provider>
    );
};

// Funzione hook custom per utilizzare facilmente il context nei componenti
const useGlobalContext = () => useContext(GlobalContext);  // Restituisce il contesto utilizzando `useContext` per accedere ai dati

export { GlobalProvider, useGlobalContext }; // Esportazione del GlobalProvider e dell'hook per utilizzarli in altre parti dell'applicazione