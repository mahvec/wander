import { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', path: 'home' },
        { name: 'About Us', path: 'about' },
        { name: 'Mission', path: 'mission' },
        { name: 'Contact Us', path: 'contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const isActive = (path: string) => activeSection === path;

    return (
        <nav className="sticky top-0 z-50 bg-[#1C77C3] shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="shrink-0">
                        <Link to="/home" className="text-white text-sm font-bold hover:text-[#F39237] transition-colors">
                            WANDERLEARN
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => scrollToSection(item.path)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.path)
                                        ? 'bg-[#D63230] text-white'
                                        : 'text-white hover:bg-[#F39237] hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#F39237] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1C77C3]">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => scrollToSection(item.path)}
                            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive(item.path)
                                ? 'bg-[#D63230] text-white'
                                : 'text-white hover:bg-[#F39237] hover:text-white'
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
