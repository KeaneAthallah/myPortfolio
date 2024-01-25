import { Card, Link } from "@nextui-org/react";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { PiArrowCircleRightFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className="mt-24 mb-10 mx-7 flex-col gap-9 flex">
            <Link
                href="https://github.com/KeaneAthallah"
                className="flex flex-row text-black dark:text-white"
            >
                <Card className="flex-2 mr-4 rounded-lg">
                    <BiLogoGithub className="justify-self-center p-2 size-10 lg:size-16" />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm lg:text-md font-semibold">GitHub</p>
                    <p className="text-sm lg:text-md -mt-1 lg:mt-0">
                        github.com/KeaneAthallah
                    </p>
                </div>
            </Link>
            <Link
                href="https://www.linkedin.com/in/keane-athallah-290082275/"
                className="flex flex-row text-black dark:text-white"
            >
                <Card className="flex-2 mr-4 rounded-lg">
                    <FaLinkedin className="justify-self-center p-2 size-10 lg:size-16" />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm lg:text-md font-semibold">Linkedin</p>
                    <p className="text-sm lg:text-md -mt-1 lg:mt-0">
                        Keane Athallah
                    </p>
                </div>
            </Link>
            <Link
                href="https://www.jobstreet.co.id/id/profile/keane-athallah-Mkblykrmvw"
                className="flex flex-row text-black dark:text-white"
            >
                <Card className="flex-2 mr-4 rounded-lg">
                    <PiArrowCircleRightFill className="justify-self-center p-2 size-10 lg:size-16" />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm lg:text-md font-semibold">
                        JobStreet
                    </p>
                    <p className="text-sm lg:text-md -mt-1 lg:mt-0">
                        Keane Athallah
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Contact;
