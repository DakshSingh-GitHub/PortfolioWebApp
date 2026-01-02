/* eslint-disable react/no-unescaped-entities */
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
            {/* <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/Mathematics-Helper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 ${classNames.textGlowEffect}`}
                >
                    View on GitHub
                </a>
            </div> */}

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Project Classes
                </h2>

                <h3
                    className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}
                >
                    sequences.progression
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    This project provides classes for handling mathematical progressions.
                </p>
                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>ArithematicProgression</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents an arithmetic progression (AP) of double values. An arithmetic progression is a sequence of numbers where the difference between consecutive terms is constant.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all">
                    Instance States:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Empty:</strong> Created with ArithematicProgression(). Has no terms.</li>
                    <li><strong>Uninitialized:</strong> Created with ArithematicProgression(firstTerm). The common difference is unknown until a second term is added.</li>
                    <li><strong>Initialized:</strong> Created with ArithematicProgression(firstTerm, secondTerm). The common difference is known, and the sequence can be extended.</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Key Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>insertTerm(double number):</strong> Adds a new term, initializing or validating the sequence.</li>
                    <li><strong>insertTillNthTerm(int n):</strong> Extends the sequence to a total of &apos;n' terms.</li>
                    <li><strong>safeInsertNextTerm():</strong> Automatically calculates and adds the next correct term.</li>
                    <li><strong>sumOfAP():</strong> Calculates the sum of the current terms.</li>
                    <li><strong>projectedSumOfAP(int n):</strong> Calculates the sum of the first 'n' terms.</li>
                    <li><strong>predictTerm():</strong> Predicts the next term without adding it to the sequence.</li>
                    <li><strong>removeLastTerm():</strong> Removes the last term from the sequence.</li>
                    <li><strong>clearAP() / resetAP():</strong> Manages the sequence's lifecycle.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>GeometricProgression</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a geometric progression (GP) of double values. A geometric progression is a sequence where each term after the first is found by multiplying the previous one by a fixed, non-zero number (the common ratio).
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all">
                    Instance States:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Empty:</strong> Created with GeometricProgression(). Has no terms.</li>
                    <li><strong>Uninitialized:</strong> Created with GeometricProgression(firstTerm). The common ratio is unknown.</li>
                    <li><strong>Initialized:</strong> Created with GeometricProgression(firstTerm, secondTerm). The common ratio is known.</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Method Overview:
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-2">
                    Modification:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>insertTerm(double n):</strong> Inserts a term, initializing or validating the GP.</li>
                    <li><strong>insertTillNthTerm(int n):</strong> Extends the sequence to 'n' terms.</li>
                    <li><strong>safeInsertNextTerm():</strong> Automatically calculates and adds the next term.</li>
                    <li><strong>removeLastTerm():</strong> Removes the last term.</li>
                    <li><strong>clearGP() / resetGP() / updateGP():</strong> Manages the sequence's lifecycle.</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-2">
                    Calculation & Prediction:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>predictTerm():</strong> Returns the value of the next term without adding it.</li>
                    <li><strong>predictTerm(int n):</strong> Calculates the value of the nth term.</li>
                    <li><strong>sumOfGP():</strong> Returns the sum of all terms currently in the sequence.</li>
                    <li><strong>projectedSumOfGP(int n):</strong> Calculates the sum of the first 'n' terms.</li>
                </ul>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-2">
                    State & Validation:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>getCurrentSequence():</strong> Returns a copy of the current sequence.</li>
                    <li><strong>getRemovedHeap():</strong> Returns a history of all cleared sequences.</li>
                    <li><strong>isValidGP(ArrayList&lt;Double&gt; sequence):</strong> A static method to check if any list of doubles is a valid GP.</li>
                </ul>
                
                <h3
                    className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}
                >
                    pnc.base
                </h3>
                
                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Factorial</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    A simple class to calculate the factorial of a non-negative integer.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Factorial(int num):</strong> Constructor that calculates the factorial of num.</li>
                    <li><strong>int getFactorial():</strong> Returns the calculated factorial.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Combination</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                This class calculates combinations (nCr), which represents the number of ways to choose 'r' items from a set of 'n' items where order does not matter.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Combination(int n, int c):</strong> Calculates nCr upon instantiation.</li>
                    <li><strong>Combination(int n):</strong> Initializes with 'n' but defers calculation.</li>
                    <li><strong>long combineWithVariableValue(int value):</strong> Calculates nCr with a variable 'r' value.</li>
                    <li><strong>long getCombination():</strong> Returns the pre-calculated combination value.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Permutation</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                This class calculates permutations (nPr), which represents the number of ways to arrange 'r' items from a set of 'n' items where order matters.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Permutation(int totalobjectsN, int waystorearrangeC):</strong> Calculates nPr upon instantiation.</li>
                    <li><strong>Permutation(int totalobjectsN):</strong> Initializes with 'n' but defers calculation.</li>
                    <li><strong>long permuteWithVariableValue(int value):</strong> Calculates nPr with a variable 'r' value.</li>
                    <li><strong>long getPermutations():</strong> Returns the pre-calculated permutation value.</li>
                </ul>

                <h3
                    className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}
                >
                    pnc.solver
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    This package provides a solver for permutation and combination problems.
                </p>
                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>PncSolver</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    A class that simplifies solving permutation and combination problems based on user input.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>PncSolver(int totalobjectsN, String method):</strong> Initializes the solver with the total number of objects and the method ("permutation" or "combination").</li>
                    <li><strong>PncSolver(int totalobjectsN, String method, String title):</strong> An overloaded constructor that includes an optional title for the problem.</li>
                    <li><strong>long calculatePermutation():</strong> Calculates the factorial of 'n' (n!).</li>
                    <li><strong>long calculateCombination(int waystoselectC):</strong> Calculates nCr.</li>
                    <li><strong>static void getHelp():</strong> Displays general help information.</li>
                    <li><strong>static void getHelp(String method):</strong> Provides help for a specific method.</li>
                    <li><strong>static void getExamplesOfMethods():</strong> Shows real-life examples of when to use permutation vs. combination.</li>
                </ul>

                <h3
                    className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}
                >
                    geometry.base
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    This package provides the basic building blocks for geometric calculations.
                </p>
                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Point</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a point in 2D or 3D space.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Point(double x, double y):</strong> Creates a 2D point.</li>
                    <li><strong>Point(double x, double y, double z):</strong> Creates a 3D point.</li>
                    <li><strong>static double distance(Point p1, Point p2):</strong> Calculates the distance between two points.</li>
                    <li><strong>ArrayList&lt;Double&gt; getCoordinates2D():</strong> Returns the 2D coordinates of the point.</li>
                </ul>
                
                <h3
                    className={`text-lg sm:text-2xl font-semibold mt-8 mb-3 ${classNames.spanText} break-all`}
                >
                    geometry.shapes
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    This package provides classes for various geometric shapes.
                </p>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Circle</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a circle in 2D space.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Circle(Point center):</strong> Creates a circle with a given center and no defined radius.</li>
                    <li><strong>Circle(Point center, Point anyPoint):</strong> Creates a circle with a given center and a point on its circumference.</li>
                    <li><strong>void updateRadiusWithNewPoint(Point secondPoint):</strong> Updates the circle's radius using a new point.</li>
                    <li><strong>void addPointonCircle(Point p):</strong> Adds a point to the circle's definition if it lies on the circumference.</li>
                    <li><strong>boolean checkPointOnCircle(Point p):</strong> Checks if a given point lies on the circle.</li>
                    <li><strong>double circumference():</strong> Calculates the circumference of the circle.</li>
                    <li><strong>double area():</strong> Calculates the area of the circle.</li>
                    <li><strong>String getEquationOfCircle():</strong> Returns the equation of the circle.</li>
                    <li><strong>int checkPositionOfPoint(Point p):</strong> Determines if a point is inside, outside, or on the circle.</li>
                    <li><strong>int checkPositionOfLine(Line2D line):</strong> Determines if a line is a tangent, secant, or outside the circle.</li>
                    <li><strong>ArrayList&lt;Point&gt; getIntersectionPointsWithLine(Line2D line):</strong> Calculates the intersection points of the circle and a line.</li>
                    <li><strong>ArrayList&lt;String&gt; equationOfTangent(double slope):</strong> Returns the equations of tangents with a given slope.</li>
                    <li><strong>ArrayList&lt;String&gt; equationOfTangent(Point p):</strong> Returns the equation of the tangent at a specific point on the circle.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Line2D</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a line in 2D space.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Line2D(Point p1, Point p2):</strong> Creates a line defined by two points.</li>
                    <li><strong>Line2D(Point p1, double slope):</strong> Creates a line defined by a point and a slope.</li>
                    <li><strong>void updateSlope(double slope):</strong> Updates the slope of the line.</li>
                    <li><strong>void addPointOnLine(Point p):</strong> Adds a point to the line's definition if it lies on the line.</li>
                    <li><strong>Map&lt;String, String&gt; LineEquations():</strong> Returns the general and slope-intercept equations of the line.</li>
                    <li><strong>double distanceFromPoint(Point p):</strong> Calculates the perpendicular distance from a point to the line.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Triangle</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a triangle in 2D or 3D space.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Triangle(Point p1, Point p2, Point p3):</strong> Creates a triangle from three points, with validation.</li>
                    <li><strong>double area():</strong> Calculates the area of the triangle.</li>
                    <li><strong>Point centroid():</strong> Calculates the centroid of the triangle.</li>
                    <li><strong>Point orthocenter3D():</strong> Calculates the orthocenter of the triangle in 3D space.</li>
                </ul>

                <h4 className={`text-md sm:text-xl font-semibold mt-6 mb-2 ${classNames.spanText} break-all`}>Parabola</h4>
                <p className="text-base text-gray-300 leading-relaxed mb-3 break-all">
                    Represents a parabola in 2D space.
                </p>
                <p className="text-base text-gray-300 leading-relaxed font-semibold mb-3 break-all mt-4">
                    Methods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 max-w-full break-all">
                    <li><strong>Parabola(Point vertex, double a, String type):</strong> Creates a parabola with a given vertex, 'a' value, and type ("horizontal" or "vertical").</li>
                    <li><strong>Parabola(Point vertex):</strong> Creates a parabola with a given vertex but no defined 'a' value or type.</li>
                    <li><strong>String generateEquation():</strong> Generates and returns the equation of the parabola.</li>
                    <li><strong>void updateLatusRectum(double a):</strong> Updates the latus rectum of the parabola.</li>
                    <li><strong>void addPointOnParabola(Point point):</strong> Adds a point to the parabola's definition if it lies on the curve.</li>
                    <li><strong>int checkPositionOfPoint(Point p):</strong> Determines if a point is inside, outside, or on the parabola. Returns 1 for inside, 0 for outside, 2 for on the parabola.</li>
                    <li><strong>String equationOfTangent(double slope):</strong> Returns the equation of a tangent line with a given slope.</li>
                    <li><strong>ArrayList&lt;Point&gt; getUsedPointsOnParabola():</strong> Returns the list of points that have been added to the parabola.</li>
                </ul>
            </div>
            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/MathematicsHelper"
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