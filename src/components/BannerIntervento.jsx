// Importa un'icona SVG che rappresenta la disponibilità 24/7
import icon24_7 from '../assets/img/24-hours.svg';

// Importa un componente CTA (Call To Action) personalizzato, presumibilmente un bottone
import CTAButton from './CTAButton';

// Componente funzionale per mostrare un banner di intervento urgente
export default function BannerIntervento() {
    return (
        // Container flessibile: colonna su mobile, riga su schermi medi e superiori
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 text-white">
            
            {/* Sezione immagine: icona 24/7 */}
            <figure className="w-26 md:w-32">
                <img 
                    src={icon24_7} 
                    alt="icona 24 ore su 7" 
                    className="w-full h-auto" 
                />
            </figure>

            {/* Testo e bottone CTA */}
            <div className="text-center md:text-left max-w-xl">
                
                {/* Titolo principale del banner */}
                <p className="text-3xl md:text-3xl font-semibold mb-2">
                    Intervento H24 - 7 giorni su 7
                </p>

                {/* Descrizione breve dell'intervento di emergenza */}
                <p className="mb-4">
                    Siamo reperibili tutti i giorni della settimana per qualsiasi emergenza.
                </p>

                {/* Bottone di chiamata all'azione (es: "Contattaci") */}
                <CTAButton/>
            </div>
        </div>
    );
}