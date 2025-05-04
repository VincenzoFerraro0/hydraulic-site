import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import ContactWidget from "../components/ContactWidget";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm transition-all duration-300`}
            >
                <div className="mx-auto max-w-[96%] flex items-center justify-between gap-8 px-2 sm:px-4 lg:px-6">

                    {/* Logo + Mobile Contact Icons */}
                    <div className="flex items-center gap-3">
                        <Link className="text-teal-600 flex-shrink-0" to={'/'}>
                            <img
                                className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-20 lg:h-28'}`}
                                src='/images/logos/logo-01.png'
                                alt="Logo"
                            />
                        </Link>

                        
                    </div>

                    {/* Navigation & Menu Toggle */}
                    <div className="flex items-center gap-3">
                        <MainNav className="hidden lg:block" />

                        {/* Mobile-only contact icons */}
                        <div className="block lg:hidden ">
                           <ContactWidget/>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="block rounded-sm transition lg:hidden"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10  text-gray-500 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-gray-500 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Offset for fixed header */}
            <div className={`${isScrolled ? 'h-20' : 'h-28'} lg:h-28`} />

            {/* Mobile Slide-in Menu */}
            <div className="lg:hidden">
                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-opacity-50 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                {/* Sliding Panel */}
                <div
                    className={`p-4 fixed top-20 right-0 z-50 h-full w-[100%] bg-amber-600 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <MainNav mobile closeMenu={() => setIsMenuOpen(false)} />
                </div>
            </div>
        </>
    );
}