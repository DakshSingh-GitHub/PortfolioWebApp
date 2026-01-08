"use client";

import PracticeRepoCard from "@/components/pagecomponent/PracticeRepoCard";
import { classNames } from "@/components/styles";
import { motion } from "framer-motion";
import { staggerContainer, bounceIn } from "@/components/animations";

const Repositories = [
    {
        repo_key: 1,
        repo_name: "JavaScript Interview Questions",
        repo_desc: 
            "A collection of commonly asked JavaScript interview questions with answers and explanations. I practice these questions to enhance my understanding of JavaScript concepts and prepare for technical interviews.",
        repo_lang: ["JavaScript", "TypeScript", "HTML", "CSS"],
        repo_url: "https://github.com/DakshSingh-GitHub/InterviewQuestions",
    },
    {
        repo_key: 2,
        repo_name: "Python Practice Problems",
        repo_desc: "A repository containing various Python practice problems and their solutions. This repo helps me improve my problem-solving skills and gain proficiency in Python programming.",
        repo_lang: ["Python"],
        repo_url: "https://github.com/DakshSingh-GitHub/PyQuestions",
    },
    {
        repo_key: 3,
        repo_name: "TypeScript Playground",
        repo_desc: "A collection of TypeScript code snippets and exercises that I use to practice and learn TypeScript features and concepts. This repository serves as a playground for experimenting with TypeScript code.",
        repo_lang: ["TypeScript", "JavaScript"],
        repo_url: "https://github.com/DakshSingh-GitHub/TypeScript",
    }
];

export default function PracticeCodes() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="practice-code p-4 md:p-10 cursor-default"
        >
            <div className="head-not flex flex-col items-center w-full md:w-3/4 mx-auto pb-10 px-2 md:px-0">
                <h1
                    className={`text-center ${classNames.textGlowEffect} text-5xl font-bold`}
                >
                    Practice Codes
                </h1>
                <p className="text-sm md:text-lg text-center mt-5 md:text-justify">
                    This section will contain practice codes and exercises.
                    Repositories with practice codes will be linked here. I
                    prefer coding and sharing my progress as I learn the
                    concepts, Hence, I like to share the codes on which I
                    practice.
                </p>
            </div>
            <hr />
            <div className="repo flex flex-col md:flex-row items-center justify-between h-full w-full mt-10 gap-4 md:gap-0">
                {Repositories.map((repo) => (
                    <motion.div key={repo.repo_key} variants={bounceIn} className="w-full" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <PracticeRepoCard
                            repo_url={repo.repo_url}
                            repo_name={repo.repo_name}
                            repo_desc={repo.repo_desc}
                            repo_lang={repo.repo_lang}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

