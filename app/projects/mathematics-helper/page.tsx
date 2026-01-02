"use client";

import { classNames } from "@/components/styles";
import Image from "next/image";

export default function MathematicsHelperPage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-3xl sm:text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    Mathematics Helper
                </h1>
                <p className="text-lg text-gray-400 mt-4 break-all">
                    A Java-based application for solving mathematical problems.
                </p>
            </header>
            <Image
                src="../projects/mathshelpjava.png"
                alt="Mathematics Helper"
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
                    The Mathematics Helper is a comprehensive Java-based application designed to assist users in solving a wide range of mathematical problems. It provides a user-friendly interface to perform calculations and learn mathematical concepts.
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
                                Arithmetic Operations:
                            </span>{" "}
                            Perform basic and advanced arithmetic calculations.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Algebra Solver:
                            </span>{" "}
                            Solve algebraic equations and expressions.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Geometry Calculator:
                            </span>{" "}
                            Calculate properties of geometric shapes.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Trigonometry Functions:
                            </span>{" "}
                            Evaluate trigonometric functions and identities.
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
                        The application is built entirely in Java, leveraging object-oriented principles and mathematical libraries.
                    </p>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Core Java:
                            </span>{" "}
                            Utilizes fundamental Java concepts for logic and computations.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Modular Design:
                            </span>{" "}
                            The code is organized into modules for different mathematical domains, making it easy to extend.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Mathematical Libraries:
                            </span>{" "}
                             Integrates with libraries like Apache Commons Math for complex calculations.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/Mathematics-Helper" 
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