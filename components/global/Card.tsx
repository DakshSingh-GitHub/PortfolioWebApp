
import Image from "next/image";

import { classNames } from "../styles";

interface CardProps { image: string; text: string; paragraph: string; board:boolean }

export default function Card( { image, text, paragraph, board }: CardProps ) {
    return (
        <div className={`${classNames.card} w-97.5 h-135 cursor-default`}>
            <Image
                src={image}
                width={350}
                height={350}
                alt={text}
                className="w-full h-auto"
                loading="eager"
            />
            <div className="p-4">
                <h1 className={`text-center mb-4 text-xl ${classNames.textGlowEffect}`}>{text}</h1>
                <hr className="" style={{ color: "white" }} />
                <p className="mt-4 text-center">{paragraph}</p>
            </div>
            {board ? (
                <ul className="text-center">
                    <h1 className={`font-bold mb-3 text-xl ${classNames.textGlowEffect}`}>Results are as follows:</h1>
                    <li>
                        <span className={`${classNames.spanText} ${classNames.textGlowEffect}`} >
                            10th CBSE Board
                        </span>{" "}
                        - 89.8% | B5: 95.2%
                    </li>
                    <li>
                        <span className={`${classNames.spanText} ${classNames.textGlowEffect}`} >
                            12th CBSE Board
                        </span>{" "}
                        - 91.0%
                    </li>
                </ul>
            ) : (
                <div className=""></div>
            )}
        </div>
    );
};
