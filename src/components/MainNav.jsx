import { NavLink, useNavigate } from "react-router-dom";

export default function MainNav({ mobile, closeMenu, className }) {
    const navigate = useNavigate();
    const navItems = [
        { to: '/', text: 'Home' },
        { to: '/chi-siamo', text: 'Chi siamo' },
    ];

    return (
        <nav aria-label="Global" className={className}>
            <ul className={`${mobile ? "space-y-4 flex-col justify-items-center" : "flex items-center gap-6 text-sm"}`}>
                {navItems.map((item) => (
                    <li key={item.to} className={`${mobile ? "w-full" : ""}`}>
                        <NavLink
                            to={item.to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `
                                block 
                                text-lg
                                text-[#4c4c4c]
                                ${isActive ? 'lg:text-amber-600 ' : 'text-[#4c4c4c] hover:text-[#6c6c6c]'} 
                                ${mobile ? ' w-full text-left py-1.5 shadow-[inset_0_-0.5px_0_#f2f2f2]' : 'text-sm'}
                                transition-colors duration-200
                                `
                            }
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
                <li className={`${mobile ? "w-full" : ""}`}>
                    <button
                        onClick={() => {
                            closeMenu?.();
                            navigate("/contatti");
                        }}
                        className={`
                            uppercase font-bold border rounded-4xl lg:bg-amber-600 lg:text-white lg:py-3 border-amber-800 lg:border-amber-600  
                            bg-white text-black lg:hover:bg-white hover:text-amber-600 transition-all duration-300
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