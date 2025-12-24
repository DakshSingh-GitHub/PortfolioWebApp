"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsProjectsDropdownOpen(false);
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black/50 text-white backdrop-blur-sm border-b border-gray-700/50 transition-shadow duration-300 ease-in-out hover:shadow-[0_10px_25px_-5px_rgba(76,5,119,0.4)]">
            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className={`text-2xl font-bold ${textGlowEffect}`}
                    >
                        Portfolio
                    </Link>
                    <div className="flex gap-6 items-center">
                        <Link
                            href="/about"
                            className={`hover:text-gray-300 ${textGlowEffect}`}
                        >
                            About
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() =>
                                    setIsProjectsDropdownOpen(
                                        !isProjectsDropdownOpen
                                    )
                                }
                                className={`hover:text-gray-300 ${textGlowEffect}`}
                            >
                                Projects
                            </button>
                            {isProjectsDropdownOpen && (
                                <div className="absolute top-full mt-2 w-56 bg-black/70 backdrop-blur-sm rounded-md shadow-lg">
                                    <Link
                                        href="/projects/library-management"
                                        className="block px-4 py-2 hover:bg-purple-950 rounded-t-md"
                                    >
                                        Library Management
                                    </Link>
                                    <Link
                                        href="/projects/portfolio"
                                        className="block px-4 py-2 hover:bg-purple-950"
                                    >
                                        Portfolio
                                    </Link>
                                    <Link
                                        href="/projects/mathematics-helper"
                                        className="block px-4 py-2 hover:bg-purple-950"
                                    >
                                        Mathematics helper
                                    </Link>
                                    <Link
                                        href="/projects/hotel-management"
                                        className="block px-4 py-2 hover:bg-purple-950 rounded-b-md"
                                    >
                                        Hotel management
                                    </Link>
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
                </div>
            </div>
        </nav>
    );
}
