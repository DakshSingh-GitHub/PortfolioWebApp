
import Image from "next/image";

export const classNames = {
    cardparent_divisions: "w-full md:w-1/2 flex justify-center flex-col items-center p-4 md:p-10 md:pl-20 cursor-default",
    cardparent_division_h1: "text-4xl text-center underline",
    cardparent_division_p: "text-left",
    textGlowEffect: "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,2.0)]",
    spanText: "font-bold",
    cardparent_list: "list-disc list-inside",
    cardparent_list_span: "font-bold",
};

export default function HomeCard() {
    return (
        <div className="homecard">
            <div className="cardparent flex flex-col md:flex-row items-center justify-center h-full">
                <div className={`${classNames.cardparent_divisions}`}>
                    <h1
                        className={`${classNames.cardparent_division_h1} ${classNames.textGlowEffect}`}
                    >
                        Hi, I&apos;m Daksh Singh
                    </h1>{" "}
                    <br />
                    <p className={classNames.cardparent_division_p}>
                        <span className={`${classNames.spanText} ${classNames.textGlowEffect}`}>Hey Everyone</span>, <br /> I currenty am taking a
                        gap year after Class 12 to build strong skills before
                        college. This year, I&apos;ve been focusing on learning
                        programming and problem-solving to create a solid
                        foundation in computer science. I work with Java and
                        Python, primarily for data structures, algorithms, and
                        console-based projects, and I&apos;m also exploring
                        JavaScript as I move toward web development
                    </p>
                    <br />
                    <ul
                        className={classNames.cardparent_list}
                    >
                        <li className="flex flex-col md:flex-row mb-2">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                Java:
                            </span>
                            <span className="md:w-3/4">
                                I learnt Java programming language when I was in
                                8th Standard
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row mb-2">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                Python:
                            </span>
                            <span className="md:w-3/4">
                                I learnt Python programming language afterwards.
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                JavaScript:
                            </span>
                            <span className="md:w-3/4">
                                Currently Learning
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={classNames.cardparent_divisions}>
                    <Image
                        src="/daksh.jpg"
                        width={350}
                        height={350}
                        alt="Daksh Singh"
                        className={`${classNames.textGlowEffect}`}
                        style={{ borderRadius: 20 }}
                    />
                </div>
            </div>
        </div>
    );
}
