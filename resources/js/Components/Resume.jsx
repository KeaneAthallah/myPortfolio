import React from "react";
import { Button, Image } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Resume = () => {
    return (
        <div className="my-24 mx-7 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <Image
                width={400}
                height={200}
                alt="NextUI hero Image with delay"
                src="/asset/img/Screenshot 2024-01-19 180027.png"
                className="mb-3"
            />
            <p className="text-xs my-4 italic">
                Last updated on January 12, 2024.
            </p>
            <Link
                href="https://drive.google.com/file/d/1muebztVHrgEK-xj2A45lz3DiicRY15nM/view?usp=drive_link"
                className=""
            >
                <Button className="my-auto mx-auto">
                    <FaDownload />
                    <p>Download</p>
                </Button>
            </Link>
        </div>
    );
};
export default Resume;
