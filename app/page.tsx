"use client";

import HomeCard from "@/components/pagecomponent/HomeCard";
import Projects from "./projects/page";

import { classNames } from "@/components/styles";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";

export default function Home() {

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className=""
        >
            <HomeCard />
            <motion.div variants={fadeInUp} className="mt-10">
                <h1
                    className={`text-center text-4xl underline ${classNames.textGlowEffect}`}
                >
                    Brief about my Education
                </h1>
                <div className="flex flex-col items-center mt-10 space-y-4">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-3/4 p-6 bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500"
                    >
                        <p
                            className={`text-center text-lg ${classNames.textGlowEffect}`}
                        >
                            <span className={classNames.spanText}>
                                Secondary class (10th Grade)
                            </span>{" "}
                            from Shri Gulab Rai Montessori school - CBSE Board
                            (2023) -{" "}
                            <span className={`font-bold`}>
                                89.8% | B5: 93.8%
                            </span>
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-3/4 p-6 bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500"
                    >
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
                    </motion.div>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10">
                <h1 className={`text-center text-4xl underline`}>
                    I&apos;ve Worked On
                </h1>
                <Projects />
            </motion.div>
        </motion.div>
    );
}
