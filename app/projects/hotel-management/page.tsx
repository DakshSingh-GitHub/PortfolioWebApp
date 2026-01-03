
"use client";

import { classNames } from "@/components/styles";
import Image from "next/image";

export default function HotelManagementPage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-3xl sm:text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    Hotel Management System
                </h1>
                <p className="text-lg text-gray-400 mt-4 break-all">
                    A CLI-based hotel management system using Python, Colorama, and MySQL.
                </p>
            </header>
            <Image
                src="../projects/hotel_management.png"
                alt="Hotel Management"
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
                    The Hotel Management System is a command-line interface (CLI) application built with Python to streamline hotel operations. It leverages a MySQL database to manage guest information, room bookings, and staff details. The application features a user-friendly, color-coded interface powered by the Colorama library, making it intuitive and efficient for hotel staff to perform their daily tasks.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Core Functionalities
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Guest Management:
                            </span>{" "}
                            Add, update, and view guest information, including personal details and stay history.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Room Booking:
                            </span>{" "}
                            Check room availability, book rooms for guests, and manage check-in and check-out processes.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Staff Management:
                            </span>{" "}
                            Maintain a database of hotel staff, including their roles and contact information.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Billing and Invoicing:
                            </span>{" "}
                            Generate bills for guests based on their stay and services availed.
                        </li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Technical Deep Dive
                    </h3>
                    <p className="text-gray-300 mb-4 break-all">
                        The application is built with Python and relies on a few key libraries for its functionality.
                    </p>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Python:
                            </span>{" "}
                            The core logic of the application is written in Python.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                MySQL:
                            </span>{" "}
                            A MySQL database is used for data persistence, storing all guest, booking, and staff information.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Colorama:
                            </span>{" "}
                            The Colorama library is used to add color to the command-line interface, making it more visually appealing and user-friendly.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                CLI:
                            </span>{" "}
                            The application is entirely command-line based, ensuring it is lightweight and can run in various environments.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/Hotel-Management-CLI"
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
