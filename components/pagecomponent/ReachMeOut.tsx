import Link from "next/link";
import { classNames } from "@/components/styles";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaDiscord,
} from "react-icons/fa";

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
    },
];

export default function ReachMeOut() {
    return (
        <div className="linkbox border-2 px-6 md:px-10 py-4 rounded-4xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_45px_rgba(76,5,119,1)] mt-10 hover:border-purple-500 w-full md:w-auto border-purple-500/30 bg-gray-900/50">
            <h1 className="text-lg md:text-xl text-center">
                Reach me out at these handles
            </h1>{" "}
            <br />
            <div className="flex gap-6 md:gap-15 justify-center flex-wrap">
                {socialLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-gray-300 ${classNames.textGlowEffect}`}
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}