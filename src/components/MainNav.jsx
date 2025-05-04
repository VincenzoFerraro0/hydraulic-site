import { NavLink, useNavigate } from "react-router-dom";

export default function MainNav({ mobile, closeMenu, className }) {
    const navigate = useNavigate();
    const navItems = [
        { to: '/', text: 'Home' },
        { to: '/about-us', text: 'Chi siamo' },
    ];

    return (
        <nav aria-label="Global" className={className}>
            <ul className={` ${mobile ? "space-y-4 flex-col justify-items-center" : "flex items-center gap-6 text-sm"}`}>
                {navItems.map((item) => (
                    <li key={item.to} className={`${mobile ? "w-full " : ""}`}>
                        <NavLink
                            to={item.to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block ${isActive ? 'text-teal-600' : 'text-gray-500 hover:text-gray-700'} 
     ${mobile ? 'text-base w-full text-left' : 'text-sm'}`
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
                            navigate("/contact-us");
                        }}
                        className={`
                            uppercase font-bold border rounded-4xl lg:bg-amber-600 lg:text-white lg:py-3 border-amber-800 lg:border-amber-600  bg-white text-black lg:hover:bg-white hover:text-amber-600 transition-all duration-300
                            ${mobile ? 'w-full text-base py-2 ' : 'w-auto text-sm px-4 py-1'}
                        `}
                    >
                        pronto intervento
                    </button>
                </li>
            </ul>
        </nav>
    );
}