"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isDesktopProjectsDropdownOpen, setIsDesktopProjectsDropdownOpen] =
        useState(false);
    const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] =
        useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDesktopProjectsDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]";

    const projectLinks = [
        {
            href: "/projects/library-management",
            name: "Library Management",
            className: "block px-4 py-2 hover:bg-purple-950 rounded-t-md",
        },
        {
            href: "/projects/portfolio",
            name: "Portfolio",
            className: "block px-4 py-2 hover:bg-purple-950",
        },
        {
            href: "/projects/mathematics-helper",
            name: "Mathematics helper",
            className: "block px-4 py-2 hover:bg-purple-950",
        },
        {
            href: "/projects/hotel-management",
            name: "Hotel management",
            className: "block px-4 py-2 hover:bg-purple-950 rounded-b-md",
        },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black/50 text-white backdrop-blur-sm border-b border-gray-700/50 transition-shadow duration-300 ease-in-out hover:shadow-[0_10px_25px_-5px_rgba(76,5,119,0.4)]">
            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className={`text-2xl font-bold ${textGlowEffect}`}
                    >
                        Meet Daksh Singh
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 items-center">
                        <Link
                            href="/about"
                            className={`hover:text-gray-300 ${textGlowEffect}`}
                        >
                            About
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() =>
                                    setIsDesktopProjectsDropdownOpen(
                                        !isDesktopProjectsDropdownOpen
                                    )
                                }
                                className={`hover:text-gray-300 ${textGlowEffect}`}
                            >
                                Projects
                            </button>
                            {isDesktopProjectsDropdownOpen && (
                                <div className="absolute top-full mt-2 w-56 bg-black/70 backdrop-blur-sm rounded-md shadow-lg">
                                    <ul>
                                        {projectLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={link.className}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/contact"
                            className={`hover:text-gray-300 ${textGlowEffect}`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4">
                        <Link
                            href="/about"
                            className={`block py-2 ${textGlowEffect}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setIsMobileProjectsDropdownOpen(
                                        !isMobileProjectsDropdownOpen
                                    )
                                }
                                className={`block w-full text-left py-2 ${textGlowEffect}`}
                            >
                                Projects
                            </button>
                            {isMobileProjectsDropdownOpen && (
                                <div className="pl-4">
                                    <ul>
                                        {projectLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={link.className}
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(
                                                            false
                                                        );
                                                        setIsMobileProjectsDropdownOpen(
                                                            false
                                                        );

                                                    }}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/contact"
                            className={`block py-2 ${textGlowEffect}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
