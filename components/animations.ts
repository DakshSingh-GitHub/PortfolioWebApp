"use client";

import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const blurIn: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.4, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export const bounceIn: Variants = {
    hidden: { opacity: 0, scale: 0.3, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 24,
        },
    },
};
