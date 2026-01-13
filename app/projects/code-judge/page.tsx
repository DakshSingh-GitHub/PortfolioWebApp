
import { classNames } from "@/components/styles";
import Image from "next/image";

export default function CodeJudgePage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-3xl sm:text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    ⚖️ Mini Online Judge (Flask Backend)
                </h1>
                <p className="text-lg text-gray-400 mt-4 break-all">
                    A lightweight Online Code Judge built using Flask that executes user-submitted Python code, evaluates it against test cases, and returns verdicts — just like Codeforces, but pocket-sized 😎
                </p>
            </header>
            <Image
                src="../projects/code_judge.png"
                alt="Code Judge"
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
                    ✨ Features
                </h2>
                <ul
                    className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                >
                    <li><span className={classNames.cardparent_list_span}>✅ Execute Python code submissions</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Accept custom input (stdin)</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Compare output with expected output</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Verdict system</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Execution time limits</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Clean REST API</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ JSON-based request/response</span></li>
                    <li><span className={classNames.cardparent_list_span}>✅ Beginner-friendly but system-level logic</span></li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        🧠 How It Works (High Level)
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>User sends Python code via API</li>
                        <li>Code is written to a temporary file</li>
                        <li>Code is executed using <code>subprocess</code></li>
                        <li>Input is piped through stdin</li>
                        <li>Output is captured from stdout</li>
                        <li>Output is compared with expected output</li>
                        <li>Judge returns a verdict</li>
                        <li className="text-sm text-yellow-400">⚠️ Code execution is sandboxed only at a basic level (timeouts). Advanced isolation (Docker, seccomp) is planned.</li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        🛠 Tech Stack
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li><span className={classNames.cardparent_list_span}>🐍 Python</span></li>
                        <li><span className={classNames.cardparent_list_span}>🌶 Flask</span></li>
                        <li><span className={classNames.cardparent_list_span}>⚙️ subprocess</span></li>
                        <li><span className={classNames.cardparent_list_span}>📄 tempfile</span></li>
                        <li><span className={classNames.cardparent_list_span}>🧪 Postman (for API testing)</span></li>
                    </ul>
                </div>
            </div>
            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Verdict system
                </h2>
                <ul className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}>
                    <li><span className={`${classNames.cardparent_list_span} text-green-500`}>🟢 AC — Accepted</span></li>
                    <li><span className={`${classNames.cardparent_list_span} text-red-500`}>🔴 WA — Wrong Answer</span></li>
                    <li><span className={`${classNames.cardparent_list_span} text-yellow-500`}>⚠️ RE — Runtime Error</span></li>
                    <li><span className={`${classNames.cardparent_list_span} text-blue-500`}>⏱ TLE — Time Limit Exceeded</span></li>
                </ul>
            </div>

            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/CodeJudge"
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