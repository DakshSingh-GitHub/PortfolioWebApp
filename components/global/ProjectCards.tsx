import Image from "next/image";
import { classNames } from "../styles";

interface CardProps {
    image: string;
    text: string;
    paragraph: string;
}

export default function ProjectCards({ image, text, paragraph }: CardProps ) {
    return (
        <div className={`${classNames.card} w-full max-w-[80%] mx-auto h-87.5 cursor-default flex flex-col md:flex-row`}>
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
                <h1 className="text-center mb-4 text-xl">{text}</h1>
                <hr className="mt-4 mb-4" />
                <p className="text-center text-wrap">{paragraph}</p>
            </div>
            <div className="md:w-1/2">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt={text}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>
        </div>
    );
};
