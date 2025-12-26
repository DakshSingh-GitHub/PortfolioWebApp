import HomeCard from "@/components/pagecomponent/HomeCard";
import Card from "@/components/global/Card";
import { classNames } from "@/components/styles";
import ProjectCards from "@/components/global/ProjectCards";

import Link from "next/link";

const DescriptionString = {
    school: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
};

const ProjectDesc = [
    {
        title: "Hotel Management",
        desc: "Python Application, Single Filed, for a software of Hotel Management, This was made as my school project during my 12th Grade",
        href: "projects/hotel-management",
        img: "/hotel_management.png",
        key: 0,
    },
    {
        title: "Library Management",
        desc: "A simple CLI based Library Management Software, has all the management functionalities.",
        href: "projects/library-management",
        img: "/library_management.png",
        key: 1,
    },
    {
        title: "Mathematics Helper",
        desc: "Java Library/Project where, Many of the mathematical objects are compiled to classes for, Help of students of our beloved Mathematics Stream. I'll keep on Adding new classes as I learn.",
        href: "projects/mathematics-helper",
        img: "/mathshelpjava.png",
        key: 2,
    },
];

export default function Home() {
    const Projects = ProjectDesc.map((project) => (
        <Link key={project.key} href={project.href} className="w-full">
            <ProjectCards image={project.img} text={project.title} paragraph={project.desc} />
        </Link>
    ));

    return (
        <div className="">
            <HomeCard />
            <div className="mt-10">
                <h1
                    className={`text-center text-4xl underline ${classNames.textGlowEffect}`}
                >
                    Brief about my Education
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10">
                    <Link href="https://grmschool.com/Default.aspx">
                        <Card
                            image="/schl.jpg"
                            text="Shri Gulab Rai Montessori School"
                            paragraph={DescriptionString.school}
                            board={true}
                        />
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <h1
                    className={`text-center text-4xl underline ${classNames.textGlowEffect}`}
                >
                    I&apos;ve Worked On
                </h1>
                <div className="flex flex-col items-center mt-10 w-full">
                    {Projects}
                </div>
            </div>
        </div>
    );
}
