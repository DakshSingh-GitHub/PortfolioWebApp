
import Link from "next/link";

import { classNames } from "@/components/styles";
import Card from "@/components/global/Card";

const DescriptionString = {
    school: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
};

const schoolList = [
    {
        name: "Shri Gulab Rai Montessori School",
        image: "/schl.jpg",
        href: "https://grmschool.com/Default.aspx",
        key: 0,
    },
];

export default function AboutPage() {

    const schoolMap = schoolList.map((school) => (
        <Link key={school.key} href={school.href} target="_blank">
            <Card
                image={school.image}
                text={school.name}
                paragraph={DescriptionString.school}
                board={true}
            />
        </Link>
    ));

    return (
        <div className="p-10">
            <div className="toplevel flex flex-col items-center w-3/4 mx-auto pb-10">
                <h1
                    className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                >
                    Get to know me better :)
                </h1>
                <p className="text-lg text-justify">
                    Since you&apos;ve made it here, I&apos;d like to take this
                    opportunity to share a bit about my educational background.
                    I completed both my Secondary (10th Grade) and Senior
                    Secondary (12th Grade) education at&nbsp;
                    <span className={`${classNames.textGlowEffect} ${classNames.spanText}`}>Shri Gulab Rai Montessori School</span>, which is affiliated
                    with the CBSE Board. My time at this institution has been
                    instrumental in shaping my academic journey and personal
                    growth. I am proud to have achieved commendable scores in
                    both examinations, reflecting my dedication and hard work
                    throughout these formative years. As I continue to pursue my
                    interests and career goals, I carry forward the values and
                    knowledge imparted to me during my schooling. Since the
                    childhood, I have been deeply passionate about technology
                    and I&apos;ve started to learn about them at a young age.
                    This passion has driven me to explore various facets of the
                    tech world, from software development to understanding the
                    latest advancements in technology. I am excited to continue
                    this journey, leveraging my educational foundation to
                    further my skills and contribute meaningfully to the tech
                    community.
                </p>
            </div>
            <hr />
            <div className="schoolList mt-10">
                <h1 className={`${classNames.aboutHeader}`}>Education...</h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10">
                    {schoolMap}
                </div>
            </div>
        </div>
    );
};
