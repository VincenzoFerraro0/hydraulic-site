import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactWidget() {
    const contacts = [
        {
            name: "Telefono",
            icon: faPhone,
            link: "tel:+393518500172",
        },
        {
            name: "Email",
            icon: faEnvelope,
            link: "mailto:ferrarosrls01@gmail.com",
        },
        {
            name: "WhatsApp",
            icon: faWhatsapp,
            link: "https://wa.me/393518500172",
        },
    ];

    return (
        <div className="flex items-center space-x-4">
            {contacts.map((contact, index) => (
                <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.name}
                    className="bg-green-600 rounded-full p-3 hover:bg-green-700 transition duration-200 cursor-pointer flex items-center justify-center w-12 h-12"
                >
                    <FontAwesomeIcon
                        icon={contact.icon}
                        className={`text-white ${
                            contact.name === "WhatsApp" ? "text-3xl" : "text-2xl"
                        }`}
                    />
                </a>
            ))}
        </div>
    );
}