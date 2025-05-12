import caricature from '../assets/img/10173253_8481.svg';
import CTAButton from './CTAButton';

export default function HeroCarousel() {
    return (
        <section className="bg-[#F9FAFB] py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Immagine */}
                <figure className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={caricature} 
                        alt="Tecnico che ripara dispositivi" 
                        className="max-w-xs md:max-w-md w-full h-auto"
                    />
                </figure>

                {/* Testo e CTA */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#212D5F] mb-6 leading-tight">
                        Riparazioni <span className="text-orange-500">Professionali</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Servizi rapidi e affidabili per i tuoi dispositivi elettronici. Siamo pronti ad aiutarti!
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <CTAButton />
                    </div>
                </div>
            </div>
        </section>
    );
}