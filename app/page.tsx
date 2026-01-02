import HomeCard from "@/components/pagecomponent/HomeCard";
import ProjectCards from "@/components/pagecomponent/ProjectCards";

import { classNames } from "@/components/styles";

import Link from "next/link";
import Image from "next/image";


const projectDetails = {
    hotelManagement: [
        "Developed a console-based application using Python to manage hotel operations.",
        "Implemented features such as room booking, customer management, and billing.",
        "Utilized file handling for data storage and retrieval.",
    ],
    libraryManagement: [
        "Created a command-line interface (CLI) application in Python for library management.",
        "Implemented functionalities like book issuance, return, and inventory management.",
        "Used data structures to efficiently manage and search for books.",
    ],
    mathematicsHelper: [
        "Developed a Java library to assist students with mathematical computations.",
        "Included classes for various mathematical concepts such as algebra, and geometry.",
        "Provided methods for solving equations, calculating derivatives, and performing matrix operations.",
    ],
};

const ProjectDesc = [
    {
        title: "Hotel Management",
        desc: "Python Application, Single Filed, for a software of Hotel Management, This was made as my school project during my 12th Grade",
        href: "projects/hotel-management",
        img: "./projects/hotel_management.png",
        key: 0,
        details: projectDetails.hotelManagement,
    },
    {
        title: "Library Management",
        desc: "A simple CLI based Library Management Software, has all the management functionalities.",
        href: "projects/library-management",
        img: "./projects/library_management.png",
        key: 1,
        details: projectDetails.libraryManagement,
    },
    {
        title: "Mathematics Helper",
        desc: "Java Library/Project where, Many of the mathematical objects are compiled to classes for, Help of students of our beloved Mathematics Stream. I'll keep on Adding new classes as I learn.",
        href: "projects/mathematics-helper",
        img: "./projects/mathshelpjava.png",
        key: 2,
        details: projectDetails.mathematicsHelper,
    },
];

export default function Home() {
    const Projects = ProjectDesc.map((project) => (
        <Link key={project.key} href={project.href} className="w-full">
            <ProjectCards
                image={project.img}
                text={project.title}
                paragraph={project.desc}
                details={project.details}
            />
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
                <div className="flex flex-col items-center mt-10 space-y-4">
                    <div className="w-3/4 p-6 bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500">
                        <p
                            className={`text-center text-lg ${classNames.textGlowEffect}`}
                        >
                            <span className={classNames.spanText}>
                                Secondary class (10th Grade)
                            </span>{" "}
                            from Shri Gulab Rai Montessori school - CBSE Board
                            (2023) -{" "}
                            <span className={`font-bold`}>
                                89.8% | B5: 95.2%
                            </span>
                        </p>
                    </div>
                    <div className="w-3/4 p-6 bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500">
                        <p
                            className={`text-center text-lg ${classNames.textGlowEffect}`}
                        >
                            <span className={classNames.spanText}>
                                Secondary class (12th Grade)
                            </span>{" "}
                            from Shri Gulab Rai Montessori school - CBSE Board
                            (2025) -{" "}
                            <span className={`font-bold`}>91.0%</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className={`text-center text-4xl underline`}>
                    I&apos;ve Worked On
                </h1>
                <div className="flex flex-col items-center mt-10 w-full">
                    {Projects}
                </div>
            </div>
        </div>
    );
}
