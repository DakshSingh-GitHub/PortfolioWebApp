/* eslint-disable react/no-unescaped-entities */
"use client";

import { classNames } from "@/components/styles";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <Link href="/">
                    <h1
                        className={`text-3xl sm:text-5xl font-extrabold ${classNames.textGlowEffect}`}
                    >
                        My Portfolio Website (This Website)
                    </h1>
                </Link>
                <p className="text-lg text-gray-400 mt-4 break-all">
                    A personal portfolio website built with Next.js and Tailwind
                    CSS.
                </p>
            </header>
            <Image
                src="../projects/portfolio.png"
                alt="Portfolio"
                height={200}
                width={600}
                className={`rounded-4xl mx-auto mt-10 border-4 border-purple-500/50 shadow-lg shadow-purple-500/20 ${classNames.textGlowEffect} hover:border-purple-500`}
            />

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed break-all">
                    This portfolio website is a showcase of my skills and
                    projects. It is designed to be a central hub for my
                    professional and personal work, providing visitors with a
                    comprehensive overview of my capabilities as a software
                    developer. The website is built with modern web
                    technologies, focusing on performance, user experience, and
                    aesthetics.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Key Features
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Project Showcase:
                            </span>{" "}
                            Detailed pages for each project, including
                            descriptions, technologies used, and links to the
                            code and live demos.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                About Me:
                            </span>{" "}
                            A dedicated section to learn more about my
                            background, skills, and experience.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Contact Information:
                            </span>{" "}
                            Easy access to my contact details and social media
                            profiles.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Responsive Design:
                            </span>{" "}
                            The website is fully responsive, providing an
                            optimal viewing experience across all devices.
                        </li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Technologies Used
                    </h3>
                    <p className="text-gray-300 mb-4 break-all">
                        The website is built with a modern tech stack, ensuring
                        a high-quality and maintainable codebase.
                    </p>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Next.js:
                            </span>{" "}
                            A React framework for building server-side rendered
                            and statically generated web applications.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                TypeScript:
                            </span>{" "}
                            A typed superset of JavaScript that enhances code
                            quality and developer productivity.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Tailwind CSS:
                            </span>{" "}
                            A utility-first CSS framework for creating custom
                            designs without writing traditional CSS.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Github Pages:
                            </span>{" "}
                            The website is published on github pages, a platform
                            for hosting and scaling Next.js applications.
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Folder Structure
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed break-all">
                    The folder structure is organized to be intuitive and
                    scalable. It follows the standard conventions of a Next.js
                    application, with some customizations to suit the needs of
                    this project.
                </p>
                <div
                    className="bg-gray-800 p-4 rounded-lg mt-4 text-white"
                    style={{ whiteSpace: "pre" }}
                >
                    <div>/app</div>
                    <div>|-- /about</div>
                    <div>| `-- page.tsx</div>
                    <div>|-- /contact-me</div>
                    <div>| `-- page.tsx</div>
                    <div>|-- /projects</div>
                    <div>| |-- /hotel-management</div>
                    <div>| | `-- page.tsx</div>
                    <div>| |-- /library-management</div>
                    <div>| | `-- page.tsx</div>
                    <div>| |-- /mathematics-helper</div>
                    <div>| | `-- page.tsx</div>
                    <div>| `-- /portfolio</div>
                    <div>| `-- page.tsx</div>
                    <div>| -- favicon.ico</div>
                    <div>| -- globals.css</div>
                    <div>| -- layout.tsx</div>
                    <div>| -- markdown.css</div>
                    <div>` -- page.tsx</div>
                    <br />
                    <div>/components</div>
                    <div>| -- /global</div>
                    <div>| |-- Card.tsx</div>
                    <div>| |-- Footer.tsx</div>
                    <div>| `-- Navbar.tsx</div>
                    <div>| -- /pagecomponent</div>
                    <div>| |-- Certificate.tsx</div>
                    <div>| |-- HomeCard.tsx</div>
                    <div>| |-- ProjectCards.tsx</div>
                    <div>| |-- ReachMeOut.tsx</div>
                    <div>| `-- /logos</div>
                    <div>| `-- Image_Lib.tsx</div>
                    <div>` -- styles.tsx</div>
                    <br />
                    <div>/public</div>
                    <div>| -- /daksh</div>
                    <div>| |-- daksh-logo.png</div>
                    <div>| `-- daksh.jpg</div>
                    <div>| -- /education</div>
                    <div>| `-- schl.jpg</div>
                    <div>| -- /projects</div>
                    <div>| |-- hotel_management.png</div>
                    <div>| |-- library_management.png</div>
                    <div>| `-- mathshelpjava.png</div>
                    <div>| -- /readme</div>
                    <div>| `-- README.md</div>
                    <div>| -- file.svg</div>
                    <div>| -- globe.svg</div>
                    <div>| -- next.svg</div>
                    <div>| -- vercel.svg</div>
                    <div>` -- window.svg</div>
                </div>
            </div>
            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 ${classNames.textGlowEffect}`}
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
