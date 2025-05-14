import { useNavigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function MainNav({ mobile, closeMenu, className }) {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { to: '/', text: 'Home' },
        { to: '/chi-siamo', text: 'Chi siamo' },
    ];

    const handleNavClick = (to) => {
        closeMenu?.();
        if (location.pathname !== to) {
            navigate(to);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav aria-label="Global" className={className}>
            <ul
                className={`${mobile
                        ? 'space-y-4 flex-col justify-items-center'
                        : 'flex items-center gap-6 text-sm'
                    }`}
            >
                {navItems.map((item) => (
                    <li key={item.to} className={`${mobile ? 'w-full' : ''}`}>
                        <button
                            onClick={() => handleNavClick(item.to)}
                            className={`
                                block 
                                text-lg
                                text-[#4c4c4c]
                                cursor-pointer
                                ${location.pathname === item.to ? 'lg:text-amber-600' : 'hover:text-[#6c6c6c] hover:bg-gray-100'} 
                                ${mobile ? 'w-full text-left py-1.5 shadow-[inset_0_-0.5px_0_#f2f2f2]' : 'text-sm'}
                                transition-colors duration-200 rounded-md
                            `}
                        >
                            {item.text}
                        </button>
                    </li>
                ))}
                <li className={`${mobile ? 'w-full' : ''}`}>
                    <button
                        onClick={() => handleNavClick('/contatti')}
                        className={`
                            uppercase font-bold border rounded-4xl 
                            lg:bg-amber-600 lg:text-white lg:py-3 border-amber-800 lg:border-amber-600  
                            bg-white text-black 
                            cursor-pointer
                            lg:hover:bg-white hover:text-amber-600 hover:bg-gray-100
                            transition-all duration-300
                            ${mobile ? 'w-full text-base py-2' : 'w-auto text-sm px-4 py-1'}
                        `}
                    >
                        pronto intervento
                    </button>
                </li>
            </ul>
        </nav>
    );
}