import { useGlobalContext } from "../context/GlobalContext";


export default function ContactForm() {

    const { handleSubmit } = useGlobalContext()

    return (
        // Contenitore del form con sfondo arancione, padding, testo bianco e larghezza massima
        <div className="bg-[#FF9732] mx-auto rounded-md text-white px-6 py-10 w-full max-w-[800px]">
            {/* Titolo e descrizione */}
            <h2 className="text-4xl font-bold text-center mb-4">CONTATTACI</h2>
            <p className="text-center text-base md:text-lg mb-8 leading-relaxed">
                Scrivici tramite il form qui sotto per ricevere aiuto subito, fissare un appuntamento o chiedere qualsiasi informazione.
            </p>

            {/* Form con validazione manuale tramite JavaScript */}
            <form onSubmit={handleSubmit} className="space-y-5 text-sm text-black" noValidate>

                {/* Campo paese */}
                <input
                    type="text"
                    placeholder="PAESE*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                    title="Inserisci un nome paese valido (almeno 3 caratteri)"
                />

                {/* Select tipo intervento */}
                <select
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                    defaultValue=""
                >
                    <option value="" disabled>INTERVENTO</option>
                    <option value="elettricista">Elettricista</option>
                    <option value="idraulico">Idraulico</option>
                    <option value="altro">Altro</option>
                </select>

                {/* Nome e cognome */}
                <input
                    type="text"
                    placeholder="Nome e Cognome*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                    title="Inserisci nome e cognome separati da uno spazio"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                    title="Inserisci un indirizzo email valido"
                />

                {/* Telefono con validazione pattern */}
                <input
                    type="tel"
                    placeholder="Telefono*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                    pattern="^\+?[0-9\s\-]{8,}$"
                    title="Inserisci un numero di telefono valido (almeno 8 cifre)"
                />

                {/* Messaggio aggiuntivo opzionale */}
                <textarea
                    placeholder="Informazioni aggiuntive"
                    className="w-full p-3 bg-white rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    minLength="10"
                    title="Inserisci almeno 10 caratteri"
                />

                {/* Checkbox per accettazione privacy con link */}
                <div className="flex items-start gap-2 text-white text-xs">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 cursor-pointer"
                        title="Devi accettare l'informativa sulla privacy"
                    />
                    <label className="leading-snug">
                        Dichiaro di aver preso visione e di accettare{" "}
                        <a href="#" className="underline">
                            l'informativa sulla privacy
                        </a>
                    </label>
                </div>

                {/* Bottone di invio */}
                <button
                    type="submit"
                    className="uppercase bg-white text-[#FF9732] font-bold rounded-full px-10 py-3 mt-4 mx-auto block hover:bg-gray-100 transition cursor-pointer"
                >
                    invia
                </button>
            </form>
        </div>
    );
}