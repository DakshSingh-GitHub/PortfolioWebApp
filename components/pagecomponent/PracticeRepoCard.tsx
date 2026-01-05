
import Link from "next/link";

interface PropsPracticeRepoCard {
    repo_name: string;
    repo_desc: string;
    repo_lang: string[] | string;
    repo_url: string;
}


export default function PracticeRepoCard({repo_name, repo_desc, repo_lang, repo_url}: PropsPracticeRepoCard) {
    return (
        <div className="w-full md:w-100 max-w-[95%] mx-auto my-4 cursor-default flex flex-col md:flex-row border shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border-purple-500/30 bg-gray-900/50 hover:shadow-purple-500/50 hover:border-purple-500">
            <Link
                href={repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full"
            >
                <div className="m-5">
                    <h2 className="text-2xl font-semibold mb-3">{repo_name}</h2>
                    <hr />
                    <p className="mb-5 mt-5">{repo_desc}</p>
                    {(Array.isArray(repo_lang) ? repo_lang : [repo_lang]).map(
                        (lang, index) => (
                            <span
                                key={index}
                                className="inline-block bg-purple-600 text-white text-sm px-2 py-1 rounded-full mr-2"
                            >
                                {lang}
                            </span>
                        )
                    )}
                </div>
            </Link>
        </div>
    );
}
