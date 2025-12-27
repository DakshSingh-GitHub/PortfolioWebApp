import Link from "next/link";

import { classNames } from "@/components/styles";
import Card from "@/components/global/Card";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaDiscord,
} from "react-icons/fa";

const schoolList = [
    {
        name: "Shri Gulab Rai Montessori School",
        image: "./schl.jpg",
        desc: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
        href: "https://grmschool.com/Default.aspx",
        key: 0,
    },
];

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

export default function AboutPage() {
    const schoolMap = schoolList.map((school) => (
        <Link key={school.key} href={school.href} target="_blank" className="flex justify-center">
            <Card
                image={school.image}
                text={school.name}
                paragraph={school.desc}
                board={true}
            />
        </Link>
    ));

    return (
        <div className="p-4 md:p-10 cursor-default">
            <div className="toplevel flex flex-col items-center w-full md:w-3/4 mx-auto pb-10 px-2 md:px-0">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Get to know me better :)
                </h1>
                <p className="text-sm md:text-lg text-left md:text-justify">
                    Since you&apos;ve made it here, I&apos;d like to take this
                    opportunity to share a bit about my educational background.
                    I completed both my Secondary (10th Grade) and Senior
                    Secondary (12th Grade) education at&nbsp;
                    <span
                        className={`${classNames.textGlowEffect} ${classNames.spanText}`}
                    >
                        Shri Gulab Rai Montessori School
                    </span>
                    , which is affiliated with the CBSE Board. My time at this
                    institution has been instrumental in shaping my academic
                    journey and personal growth. I am proud to have achieved
                    commendable scores in both examinations, reflecting my
                    dedication and hard work throughout these formative years.
                    As I continue to pursue my interests and career goals, I
                    carry forward the values and knowledge imparted to me during
                    my schooling. Since the childhood, I have been deeply
                    passionate about technology and I&apos;ve started to learn
                    about them at a young age. This passion has driven me to
                    explore various facets of the tech world, from software
                    development to understanding the latest advancements in
                    technology. I am excited to continue this journey,
                    leveraging my educational foundation to further my skills
                    and contribute meaningfully to the tech community.
                </p>
                <div className="linkbox border-2 px-6 md:px-10 py-4 rounded-4xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_45px_rgba(76,5,119,1)] mt-5 hover:border-purple-500 w-full md:w-auto border-purple-500/30 bg-gray-900/50">
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
            </div>
            <hr />
            <div className="schoolList mt-10 px-2 md:px-0">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Education...
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    {schoolMap}
                </div>
            </div>
        </div>
    );
}
