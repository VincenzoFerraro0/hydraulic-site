import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";
import BannerIntervento from "../components/BannerIntervento";

export default function ContactUsPage() {
    return (
        <div className="mx-auto pt-20">
            <section className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#212D5F] mb-16 leading-tight">
                    pronto intervento <br className="md:hidden" /> h24
                </h2>
            </section>

            <section className="bg-[#F3F3F3] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mb-20">
                <a
                    href="tel:+393518500172"
                    className="w-full md:w-80 aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                    <div className="flex flex-col items-center gap-4 text-center">
                        <FontAwesomeIcon icon={faPhone} className="text-[#212D5F] text-6xl" />
                        <h4 className="text-2xl font-bold">Telefono</h4>
                        <hr className="w-16 border-t-4 border-orange-500" />
                        <span className="text-lg font-medium">+39 3518500172</span>
                    </div>
                </a>

                <a
                    href="mailto:ferrarosrls01@gmail.com"
                    className="w-full md:w-80 aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                    <div className="flex flex-col items-center gap-4 text-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#212D5F] text-6xl" />
                        <h4 className="text-2xl font-bold">Email</h4>
                        <hr className="w-16 border-t-4 border-orange-500" />
                        <span className="text-lg font-medium break-words">
                            ferrarosrls01@gmail.com
                        </span>
                    </div>
                </a>
            </section>

            <section className="text-center m-auto pt-10 px-4 mb-8">
                <ContactForm />
            </section>

            <section className="bg-amber-700">
                <BannerIntervento />
            </section>
        </div>
    );
}