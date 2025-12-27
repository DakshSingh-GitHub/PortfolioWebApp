import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord} from "react-icons/fa";

export default function Footer() {
    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]";

    const socialLinks = [
        {
            href: "https://github.com/DakshSingh-GitHub",
            icon: <FaGithub size={24} />,
        },
        {
            href: "https://www.linkedin.com/in/daksh-singh-116566331/",
            icon: <FaLinkedin size={24} />,
        },
        {
            href: "https://www.instagram.com/dtlz_564",
            icon: <FaInstagram size={24} />,
        },
        {
            href: "https://wa.me/+919045390564",
            icon: <FaWhatsapp size={24} />,
        },
        {
            href: "https://discord.com/users/daksh_dtlz_465",
            icon: <FaDiscord size={24} />,
        }
    ];

    return (
        <footer className="bg-black/50 text-white backdrop-blur-sm border-t border-gray-700/50 transition-shadow duration-300 ease-in-out hover:shadow-[0_-10px_25px_-5px_rgba(76,5,119,0.8)] mt-10 hover:border-purple-500">
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
