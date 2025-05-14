// Importazione delle icone da FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Componente ContactWidget
export default function ContactWidget() {
    // Array di oggetti contenente le informazioni di contatto
    const contacts = [
        {
            name: "Telefono",
            icon: faPhone,
            link: "tel:+393518500172", // Click apre l'app di chiamata
        },
        {
            name: "Email",
            icon: faEnvelope,
            link: "mailto:ferrarosrls01@gmail.com", // Click apre il client email
        },
        {
            name: "WhatsApp",
            icon: faWhatsapp,
            link: "https://wa.me/393518500172", // Click apre WhatsApp Web o app
        },
    ];

    return (
        // Contenitore flessibile orizzontale con spaziatura tra gli elementi
        <div className="flex items-center space-x-4">
            {contacts.map((contact, index) => (
                <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.name} // Accessibilità: descrive l'icona per gli screen reader
                    className="bg-green-600 rounded-full p-3 hover:bg-green-700 transition duration-200 cursor-pointer flex items-center justify-center w-12 h-12"
                >
                    <FontAwesomeIcon
                        icon={contact.icon}
                        // Dimensione dell'icona variabile in base al tipo di contatto
                        className={`text-white ${contact.name === "WhatsApp" ? "text-3xl" : "text-2xl"}`}
                    />
                </a>
            ))}
        </div>
    );
}