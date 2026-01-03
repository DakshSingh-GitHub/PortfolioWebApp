/* eslint-disable react/no-unescaped-entities */

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
            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Detailed Information
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed break-all">
                    A comprehensive Command Line Interface (CLI) based Hotel Management System written in Python. This application facilitates the management of hotel bookings, customers, rooms, and billing with a connection to a MySQL database.
                </p>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Features</h3>
                
                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>User Management</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Authentication:</strong> Secure login system for Admin and Staff users.</li>
                    <li><strong>User Roles:</strong>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-8 max-w-full break-all">
                            <li><strong>Admin:</strong> Full access including user creation/deletion, room management, and fare adjustments.</li>
                            <li><strong>Staff (Front End):</strong> Access to booking, billing, and customer management features.</li>
                        </ul>
                    </li>
                    <li><strong>Local Storage:</strong> User credentials (excluding the hardcoded Admin) are stored locally in users.been using Python's pickle module.</li>
                    <li><strong>Session Timer:</strong> Includes a login session countdown.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Booking & Reservations</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Create Booking:</strong> Streamlined process to book rooms, capturing guest details (Name, Address, Age, Gender).</li>
                    <li><strong>Availability Check:</strong> Automatically checks for room availability based on dates and room type (Normal 'np' / Super 's').</li>
                    <li><strong>Cancel Booking:</strong> Allows cancellation with logic for refund/charges based on check-in dates (e.g., 30% charge if cancelled after check-in).</li>
                    <li><strong>View Bookings:</strong> Retrieve bookings for a specific day or a date range.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Room & Tariff Management</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Add Rooms:</strong> Admin can add new rooms to the inventory.</li>
                    <li><strong>Fare Management:</strong> Update tariffs for specific rooms or room types.</li>
                    <li><strong>Room Types:</strong> Supports different categories.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Billing & Finance</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Bill Calculation:</strong> Automated bill generation including room tariff, service charges, and discounts. Handles tariff changes during a stay.</li>
                    <li><strong>GST Calculation:</strong> Dynamic GST application based on the total bill amount (&gt;7500 implies 18%, else 12%).</li>
                    <li><strong>Payment Tracking:</strong> Update paid amounts and check payment status (Fully Paid/Pending).</li>
                    <li><strong>Daily Summary:</strong> View daily statistics on check-ins, check-outs, total revenue, and collected revenue.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Reporting</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Occupancy:</strong> Check room occupancy for specific dates.</li>
                    <li><strong>Booking Counts:</strong> Analyze booking volume over a period.</li>
                    <li><strong>Customer List:</strong> View all customers and their billing status.</li>
                </ul>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Prerequisites</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li>Python 3.x</li>
                    <li>MySQL Server</li>
                </ul>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Python Libraries</h3>
                <p  className="text-base text-gray-300 leading-relaxed mb-3 break-all">Install the required dependencies using pip:</p>
                <code className="block whitespace-pre-wrap bg-gray-800 p-4 rounded-lg">pip install mysql-connector-python colorama</code>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Database Setup</h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">The application requires a MySQL database named <strong>hotel</strong>. Ensure the following tables/views exist (inferred from code):</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>customer:</strong> Stores guest details.</li>
                    <li><strong>booking:</strong> Stores booking links between guests and rooms.</li>
                    <li><strong>room:</strong> Stores room inventory and tariffs.</li>
                    <li><strong>bill:</strong> Stores billing information.</li>
                    <li><strong>av_room:</strong> View or table used to check room availability.</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed mt-4 mb-3 break-all">Note: You may need to adjust the database connection parameters in <code>main.py</code>:</p>
                <code className="block whitespace-pre-wrap bg-gray-800 p-4 rounded-lg">
                    conn = sql.connect(<br/>
                    &nbsp;&nbsp;host="localhost",<br/>
                    &nbsp;&nbsp;user="DakshSingh",      # Change to your MySQL username<br/>
                    &nbsp;&nbsp;password="dakshsingh",  # Change to your MySQL password<br/>
                    &nbsp;&nbsp;database="hotel",<br/>
                    )
                </code>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Usage</h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">Start the Application: Run the main script:</p>
                <code className="block whitespace-pre-wrap bg-gray-800 p-4 rounded-lg">python main.py</code>
                <p className="text-base text-gray-300 leading-relaxed mt-4 mb-3 break-all"><strong>Login:</strong></p>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">Default Admin Credentials:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li>User: DakshSingh</li>
                    <li>Password: dakshsingh</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed mt-4 mb-3 break-all">You can create new users via the Admin menu.</p>
                <p className="text-base text-gray-300 leading-relaxed mt-4 mb-3 break-all"><strong>Navigation:</strong></p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li>Follow the on-screen numbered menu to access different features.</li>
                    <li>Use <code>!END</code> in input prompts to exit specific operations.</li>
                </ul>

                <h3 className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}>Important Notes</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Hardcoded Paths:</strong> The script contains a hardcoded path for restarting the application in <code>main.py</code>. You should update this to match your Python installation path if the restart feature fails.</li>
                    <li><strong>Date Formats:</strong> The system generally expects dates in <code>YYYY-MM-DD</code> format</li>
                </ul>
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
