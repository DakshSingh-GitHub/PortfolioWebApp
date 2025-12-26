import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]";

    const socialLinks = [
        {
            href: "https://github.com/dakshsinghrathore",
            icon: <FaGithub size={24} />,
        },
        {
            href: "https://linkedin.com/in/daksh-singh-rathore",
            icon: <FaLinkedin size={24} />,
        },
        {
            href: "https://twitter.com/daksh_786",
            icon: <FaTwitter size={24} />,
        },
    ];

    return (
        <footer className="bg-black/50 text-white backdrop-blur-sm border-t border-gray-700/50 mt-10">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className={`text-lg font-bold ${textGlowEffect}`}>
                            Meet Daksh Singh
                        </p>
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hover:text-gray-300 ${textGlowEffect}`}
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
