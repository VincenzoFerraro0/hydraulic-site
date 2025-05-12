import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import BannerIntervento from "../components/BannerIntervento";

export default function AboutUsPage() {
  return (
    <div className="mx-auto pt-20">
      {/* Intestazione */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#212D5F] mb-16 leading-tight">
          Chi Siamo
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-16">
          Ferraro S.R.L.S. è un’impresa giovane e affidabile, specializzata in impianti idraulici. Con oltre 15 anni di esperienza, offriamo soluzioni moderne e complete per l’installazione, la manutenzione e la ristrutturazione, garantendo qualità, sicurezza e rispetto delle normative.
        </p>
      </section>

      {/* Sezione Servizi */}
      <section className="bg-[#F3F3F3] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mb-20">
        <div className="w-full md:w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-[#212D5F] text-6xl mb-4" />
          <h4 className="text-2xl font-bold mb-2">Affidabilità</h4>
          <p className="text-lg font-medium">Offriamo servizi rapidi e professionali con un team altamente qualificato.</p>
        </div>
        <div className="w-full md:w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-[#212D5F] text-6xl mb-4" />
          <h4 className="text-2xl font-bold mb-2">Innovazione</h4>
          <p className="text-lg font-medium">Utilizziamo le tecnologie più moderne per garantire la qualità dei nostri impianti.</p>
        </div>
        <div className="w-full md:w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-[#212D5F] text-6xl mb-4" />
          <h4 className="text-2xl font-bold mb-2">Sicurezza</h4>
          <p className="text-lg font-medium">Ci assicuriamo che tutti i lavori siano conformi alle normative di sicurezza vigenti.</p>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="text-center mb-16">
        <h3 className="text-3xl font-bold text-[#212D5F] mb-6">Cosa Dicono i Nostri Clienti</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full md:w-80 bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg text-gray-700 italic mb-4">"Servizio eccellente! Hanno risolto rapidamente il mio problema con l’impianto idraulico." - Cliente soddisfatto</p>
          </div>
          <div className="w-full md:w-80 bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg text-gray-700 italic mb-4">"Affidabili, precisi e molto professionali. Consiglio vivamente!" - Cliente felice</p>
          </div>
        </div>
      </section>

      {/* Banner Intervento */}
      <section className="bg-amber-700">
        <BannerIntervento />
      </section>
    </div>
  );
}