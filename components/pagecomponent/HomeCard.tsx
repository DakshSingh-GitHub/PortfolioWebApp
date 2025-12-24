
import Image from "next/image";

export const classNames = {
    cardparent_divisions: "w-1/2 flex justify-center flex-col items-center p-10 pl-20 cursor-default",
    cardparent_division_h1: "text-4xl text-center underline",
    cardparent_division_p: "text-left",
    textGlowEffect: "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,2.0)]",
    spanText: "underline font-bold",
    cardparent_list: "",
    cardparent_list_span: "font-bold",
};

export default function HomeCard() {
    return (
        <div className="homecard">
            <div className="cardparent flex flex-row items-center">
                <div className={`${classNames.cardparent_divisions}`}>
                    <h1
                        className={`${classNames.cardparent_division_h1} ${classNames.textGlowEffect}`}
                    >
                        This is Daksh Singh
                    </h1>{" "}
                    <br />
                    <p className={classNames.cardparent_division_p}>
                        Hey Everyone, I am &nbsp;
                        <span
                            className={`${classNames.spanText} ${classNames.textGlowEffect}`}
                        >
                            Daksh Singh
                        </span>
                        . Currently on a gap year from college. Not in any
                        college at the moment. I took this year in order to gain
                        some good valueable skills, before I join any college.
                        Currently I&apos;m good at Programming Languages, Java
                        and Python, both for Data Structure and Algorithms and
                        console
                    </p>
                    <br />
                    <ul className={classNames.cardparent_list} style={{ listStyle: "disc" }}>
                        <li>
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect}`}
                            >
                                Java
                            </span>{" "}
                            - I learnt Java programming language when I was in
                            8th Standard
                        </li>
                        <li>
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect}`}
                            >
                                Python
                            </span>{" "}
                            - I learnt Python programming language afterwards.
                        </li>
                        <li>
                            <span className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect}`}>
                                JavaScript
                            </span>{" "}
                            - Currently Learning
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
