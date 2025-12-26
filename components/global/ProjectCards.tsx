import Image from "next/image";

interface CardProps {
    image: string;
    text: string;
    paragraph: string;
    details: string[];
}

export default function ProjectCards({ image, text, paragraph, details }: CardProps ) {
    return (
        <div className="w-full max-w-[80%] mx-auto my-4 cursor-default flex flex-col md:flex-row border border-gray-700/50 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
                <h1 className="text-center mb-4 text-xl">{text}</h1>
                <hr className="mt-4 mb-4" />
                <p className="text-center text-wrap">{paragraph}</p>{" "}
                <hr className="mt-2 mb-2" />
                <ul>
                    {details.map((detail, index) => (
                        <li
                            key={index}
                            className="text-center text-wrap list-disc list-inside"
                        >
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:w-1/2 min-h-0">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt={text}
                    className="w-full h-64 md:h-full object-cover"
                    loading="eager"
                />
            </div>
        </div>
    );
};
