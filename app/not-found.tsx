"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { classNames } from "@/components/styles";
import { fadeInUp, staggerContainer } from "@/components/animations";

export default function NotFound() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center justify-center text-center px-4 py-40"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full max-w-md p-8 bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500"
            >
                <motion.h1
                    variants={fadeInUp}
                    className={`text-9xl font-bold text-purple-500 ${classNames.textGlowEffect}`}
                    style={{ fontFamily: "var(--font-oxanium)" }}
                >
                    404
                </motion.h1>
                <motion.h2
                    variants={fadeInUp}
                    className="mt-4 text-3xl font-semibold"
                >
                    Page Not Found
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-4 text-gray-400">
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                </motion.p>
                <motion.div variants={fadeInUp} className="mt-8">
                    <Link
                        href="/"
                        className={`px-6 py-3 bg-purple-600/50 text-white font-semibold rounded-lg border border-purple-600 hover:bg-purple-700/70 hover:border-purple-500 transition-all duration-300 ease-in-out ${classNames.textGlowEffect}`}
                    >
                        Go Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}