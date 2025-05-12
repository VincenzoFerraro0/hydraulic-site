import icon24_7 from '../assets/img/24-hours.svg';
import CTAButton from './CTAButton';

export default function BannerIntervento() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 text-white">
            <figure className="w-26 md:w-32">
                <img src={icon24_7} alt="icona 24 ore su 7" className="w-full h-auto" />
            </figure>
            <div className="text-center md:text-left max-w-xl">
                <p className="text-3xl md:text-3xl font-semibold mb-2">
                    Intervento H24 - 7 giorni su 7
                </p>
                <p className="mb-4">
                    Siamo reperibili tutti i giorni della settimana per qualsiasi emergenza.
                </p>
               <CTAButton/>
            </div>
        </div>
    );
}