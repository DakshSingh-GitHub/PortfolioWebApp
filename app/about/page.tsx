"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { classNames } from "@/components/styles";
import Card from "@/components/global/Card";
import ReachMeOut from "@/components/pagecomponent/ReachMeOut";
import { staggerContainer, blurIn, bounceIn } from "@/components/animations";

import Certificate from "@/components/pagecomponent/Certificate";

const schoolList = [
    {
        name: "Shri Gulab Rai Montessori School",
        image: "./education/schl.jpg",
        desc: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
        href: "https://grmschool.com/Default.aspx",
        key: 0,
    },
];

export default function AboutPage() {
    const schoolMap = schoolList.map((school) => (
        <motion.div key={school.key} variants={bounceIn} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
                href={school.href}
                target="_blank"
                className="flex justify-center"
            >
                <Card
                    image={school.image}
                    text={school.name}
                    paragraph={school.desc}
                    board={true}
                />
            </Link>
        </motion.div>
    ));

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="p-4 md:p-10 cursor-default"
        >
            <div className="toplevel overflow-hidden flex flex-col items-center w-full md:w-3/4 mx-auto pb-10 px-2 md:px-0">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Get to know me better :)
                </h1>
                <motion.p
                    variants={blurIn}
                    className="text-sm md:text-lg text-left md:text-justify"
                >
                    Since you&apos;ve made it here, I&apos;d like to take this
                    opportunity to share a bit about my educational background.
                    I completed both my Secondary (10th Grade) and Senior
                    Secondary (12th Grade) education at&nbsp;
                    <span
                        className={`${classNames.textGlowEffect} ${classNames.spanText}`}
                    >
                        Shri Gulab Rai Montessori School
                    </span>
                    , which is affiliated with the CBSE Board. My time at this
                    institution has been instrumental in shaping my academic
                    journey and personal growth. I am proud to have achieved
                    commendable scores in both examinations, reflecting my
                    dedication and hard work throughout these formative years.
                    As I continue to pursue my interests and career goals, I
                    carry forward the values and knowledge imparted to me during
                    my schooling. Since the childhood, I have been deeply
                    passionate about technology and I&apos;ve started to learn
                    about them at a young age. This passion has driven me to
                    explore various facets of the tech world, from software
                    development to understanding the latest advancements in
                    technology. I am excited to continue this journey,
                    leveraging my educational foundation to further my skills
                    and contribute meaningfully to the tech community.
                </motion.p>
                <motion.div
                    variants={bounceIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <ReachMeOut />
                </motion.div>
            </div>
            <hr />
            <div className="schoolList mt-10 px-2 md:px-0 mb-10">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Education...
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    {schoolMap}
                </div>
            </div>
            <hr />
            <div className="mt-10 px-2 md:px-0">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Certifications of Mine...
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    <Certificate />
                </div>
            </div>
        </motion.div>
    );
}
