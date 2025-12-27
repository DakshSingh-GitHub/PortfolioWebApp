
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
            <h1 className={`${classNames.aboutHeader}`}>
                Get to know me better :)
            </h1>
            <div className="schoolList">
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10">
                    {schoolMap}
                </div>
            </div>
        </div>
    );
};
