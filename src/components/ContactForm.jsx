export default function ContactForm() {
    return (
        <div className="bg-[#FF9732] mx-auto rounded-md text-white px-6 py-10 w-full max-w-[800px]">
            <h2 className="text-4xl font-bold text-center mb-4">CONTATTACI</h2>
            <p className="text-center text-base md:text-lg mb-8 leading-relaxed">
                Scrivici tramite il form qui sotto per ricevere aiuto subito, fissare un appuntamento o chiedere qualsiasi informazione.
            </p>

            <form className="space-y-5 text-sm text-black">
                <input
                    type="text"
                    placeholder="PAESE*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                />
                <select className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]" required>
                    <option value="">INTERVENTO</option>
                    <option value="elettricista">Elettricista</option>
                    <option value="idraulico">Idraulico</option>
                    <option value="altro">Altro</option>
                </select>
                <input
                    type="text"
                    placeholder="Nome e Cognome*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                />
                <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                />
                <input
                    type="tel"
                    placeholder="Telefono*"
                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                    required
                />
                <textarea
                    placeholder="Informazioni aggiuntive"
                    className="w-full p-3 bg-white rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#212D5F]"
                />

                <div className="flex items-start gap-2 text-white text-xs">
                    <input type="checkbox" required />
                    <label className="leading-snug">
                        Dichiaro di aver preso visione e di accettare{" "}
                        <a href="#" className="underline">
                            l'informativa sulla privacy
                        </a>
                    </label>
                </div>

                <button
                    type="submit"
                    className=" uppercase bg-white text-[#FF9732] font-bold rounded-full px-10 py-3 mt-4 mx-auto block hover:bg-gray-100 transition"
                >
                    invia
                </button>
            </form>
        </div>
    );
}