import PracticeRepoCard from "@/components/pagecomponent/PracticeRepoCard";
import { classNames } from "@/components/styles";

const Repositories = [
    {
        repo_key: 1,
        repo_name: "JavaScript Interview Questions",
        repo_desc:
            "A collection of commonly asked JavaScript interview questions with answers and explanations. I practice these questions to enhance my understanding of JavaScript concepts and prepare for technical interviews.",
        repo_lang: ["JavaScript", "TypeScript", "HTML", "CSS"],
        repo_url: "https://github.com/DakshSingh-GitHub/InterviewQuestions",
    },
];

export default function PracticeCodes() {

    const repo_map = Repositories.map((repo) => (
        <PracticeRepoCard
            key={repo.repo_key}
            repo_url={repo.repo_url}
            repo_name={repo.repo_name}
            repo_desc={repo.repo_desc}
            repo_lang={repo.repo_lang}
        />
    ));

    return (
        <div className="practice-code">
            <div className="head-not my-4">
                <h1
                    className={`text-center ${classNames.textGlowEffect} text-5xl font-bold`}
                >
                    Practice Codes
                </h1>
                <p className="text-center">
                    This section will contain practice codes and exercises.
                    Repositories with practice codes will be linked here. I
                    prefer coding and sharing my progress as I learn the
                    concepts, Hence, I like to share the codes on which I
                    practice.
                </p>
            </div>
            <hr />
            <div className="repo mx-10 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repo_map}
            </div>
        </div>
    );
};
