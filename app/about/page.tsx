
import Link from "next/link";

import { classNames } from "@/components/styles";
import Card from "@/components/global/Card";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";

const DescriptionString = {
    school: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
};

const schoolList = [
    {
        name: "Shri Gulab Rai Montessori School",
        image: "/schl.jpg",
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
    }
];

export default function AboutPage() {

    const schoolMap = schoolList.map((school) => (
        <Link key={school.key} href={school.href} target="_blank">
            <Card
                image={school.image}
                text={school.name}
                paragraph={DescriptionString.school}
                board={true}
            />
        </Link>
    ));

    return (
        <div className="p-10 cursor-default">
            <div className="toplevel flex flex-col items-center w-3/4 mx-auto pb-10">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Get to know me better :)
                </h1>
                <p className="text-lg text-justify">
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
                <div className="linkbox border-2 px-10 py-4 rounded-4xl  transition-shadow duration-300 ease-in-out hover:shadow-[0_0_45px_rgba(76,5,119,1)] mt-5 hover:border-purple-500">
                    <h1 className="text-xl text-center">Reach me out at these handles</h1>{" "}
                    <br />
                    <div className="flex gap-15">
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
            <div className="schoolList mt-10">
                <h1 className={`${classNames.aboutHeader}`}>Education...</h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10">
                    {schoolMap}
                </div>
            </div>
        </div>
    );
};
