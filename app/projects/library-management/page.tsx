"use client";

import { classNames } from "@/components/styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import "../../markdown.css";

export default function LibraryManagementPage() {
    const [readmeContent, setReadmeContent] = useState("");

    useEffect(() => {
        fetch("/readme/README.md")
            .then((response) => response.text())
            .then((text) => setReadmeContent(text));
    }, []);

    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    Library Management System
                </h1>
                <p className="text-lg text-gray-400 mt-4">
                    A comprehensive CLI-based solution for efficient library
                    operations.
                </p>
            </header>

            <div className="flex justify-center my-10">
                <Image
                    src="./projects/library_management.png"
                    alt="Library Management System CLI"
                    width={800}
                    height={450}
                    className={`rounded-lg shadow-2xl border-4 border-purple-500/50 ${classNames.textGlowEffect}`}
                />
            </div>

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    The Library Management System is a robust console-based
                    application developed in Python, designed to streamline and
                    automate the essential functions of a library. Born out of a
                    passion for organization and efficiency, this project serves
                    as a powerful tool for librarians to manage their book
                    inventory and member activities without the need for a
                    graphical user interface. Its lightweight and fast nature
                    makes it ideal for environments where performance and
                    simplicity are paramount.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Core Functionalities
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Book Management:
                            </span>{" "}
                            Easily add, update, search, and delete books from
                            the inventory. Each book is tracked with a unique
                            ID, title, author, and quantity.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Member Management:
                            </span>{" "}
                            Maintain a database of library members, including
                            their contact information and borrowing history.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Issue & Return Books:
                            </span>{" "}
                            Seamlessly handle the process of issuing books to
                            members and processing returns, with automatic
                            updates to inventory levels.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Inventory Control:
                            </span>{" "}
                            Keep a real-time count of available books and get
                            alerts for low stock, ensuring popular books are
                            always available.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Search & Discovery:
                            </span>{" "}
                            A powerful search feature allows librarians and
                            members to find books quickly by title or author.
                        </li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Technical Deep Dive
                    </h3>
                    <p className="text-gray-300 mb-4">
                        The application is built entirely in Python, leveraging
                        fundamental data structures and programming concepts.
                    </p>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Data Structures:
                            </span>{" "}
                            Utilizes dictionaries and lists to efficiently store
                            and manage data for books and members in memory,
                            aallowing for rapid access and modification.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Command-Line Interface (CLI):
                            </span>{" "}
                            The user interface is designed to be intuitive and
                            easy to navigate, with clear prompts and a
                            structured menu system built using simple print and
                            input statements.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Modular Design:
                            </span>{" "}
                            The code is organized into logical functions,
                            separating concerns and making the application easy
                            to maintain and extend with new features.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Data Persistence:
                            </span>{" "}
                            While the base version uses in-memory data, the
                            architecture is designed to be easily adaptable for
                            future enhancements like file handling (CSV, JSON)
                            or database integration (MySQL) for persistent data
                            storage.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    README.md for LIBRARY MANAGEMENT
                </h2>
                <div className="markdown-container">
                    <ReactMarkdown>
                        {readmeContent}
                    </ReactMarkdown>
                </div>
            </div>

            <div className="text-center my-12">
                <a
                    href="https://github.com/your-username/library-management" // Replace with actual link
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
