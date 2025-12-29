"use client";
import React from "react";
import { classNames } from "../styles";
import Image from "next/image";

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    pdfUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
    title,
    issuer,
    date,
    pdfUrl,
}) => {
    return (
        <div
            className={`${classNames.card} bg-gray-900/50 border-purple-500/30 hover:border-purple-500 hover:shadow-purple-500/50`}
        >
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <div className="p-4">
                    <h3
                        className={`text-lg font-bold ${classNames.textGlowEffect}`}
                    >
                        {title}
                    </h3>
                    <p className="text-gray-400">{issuer}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                    <div className="flex items-center mt-4">
                        <Image
                            src="./file.svg"
                            alt="File Icon"
                            width={20}
                            height={20}
                        />
                        <span className={`ml-2 ${classNames.textGlowEffect}`}>
                            View Certificate
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

const certificates = [
    {
        title: "Roadmap To Become An AI-Powered Full Stack Developer In 2026",
        issuer: "WSCube Tech",
        date: "Issued Dec 2025",
        pdfUrl: "https://drive.google.com/file/d/1lfeFznZM7dwUKYpjuJ1atOJfzfCMwFWh/view?usp=sharing",
    },
    {
        title: "ReactJS Foundations for NextJS",
        issuer: "Vercel",
        date: "Issued Nov 2025",
        pdfUrl: "https://drive.google.com/file/d/1q4iYZ7gpiqOGCZe5T5aeVimALCx9QJcD/view?usp=sharing",
    },
    {
        title: "JavaScript for Beginners",
        issuer: "Simplilearn",
        date: "Issued Sept 2024",
        pdfUrl: "https://drive.google.com/file/d/1Iv5KWxPLjKpw2yfK56lKN6iWkrbiFony/view?usp=sharing",
    },
];

const Certificate: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
                <CertificateCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    pdfUrl={cert.pdfUrl}
                />
            ))}
        </div>
    );
};

export default Certificate;
