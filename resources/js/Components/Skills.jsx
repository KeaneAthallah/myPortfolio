import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import {
    FaCss3,
    FaHtml5,
    FaLaravel,
    FaPhp,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoGit } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
    return (
        <div className="mt-24 mb-10 mx-7">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:text-medium text-xs tracking-tighter lg:tracking-normal">
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">HTML</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaHtml5 className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Semantic writing for HTML.</li>
                        <li>Forms and validations development.</li>
                        <li>SEO development.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">CSS</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaCss3 className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Layout Techniques.</li>
                        <li>Pseudo-classes & Pseudos-elements.</li>
                        <li>Media Queries.</li>
                        <li>Animations & Transitions.</li>
                        <li>CSS Frameworks.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">JavaScript</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <IoLogoJavascript className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>DOM manipulation.</li>
                        <li>Advanced Functions.</li>
                        <li>Asynchronous Programming</li>
                        <li>Modern JavaScript features</li>
                        <li>Debugging & Error Handling.</li>
                        <li>Object-Oriented Programming (OOP).</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">PHP</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaPhp className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Object-Oriented Programming (OOP).</li>
                        <li>Advanced Arrays & Data Structures.</li>
                        <li>Sessions & Cookies.</li>
                        <li>Error Handling & Security.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">Python</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaPython className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Basic Syntax.</li>
                        <li>Data Structures.</li>
                        <li>Modules and Packages.</li>
                        <li>Object-Oriented Programming (OOP).</li>
                        <li>Data Science and Machine Learning.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">Git</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <BiLogoGit className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Basic Concepts.</li>
                        <li>Visualizing Git History.</li>
                        <li>Branching & Merging.</li>
                        <li>Remote Repositories.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">React</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaReact className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Basic React.</li>
                        <li>Building Components.</li>
                        <li>State Management.</li>
                        <li>Hooks.</li>
                        <li>Routing & Navigation.</li>
                        <li>Forms & Data Handling.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">Laravel</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <FaLaravel className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>MVC architecture.</li>
                        <li>Routing & Controllers.</li>
                        <li>Blade Templating.</li>
                        <li>Database Interaction with Eloquent.</li>
                        <li>Authentication & Authorization.</li>
                        <li>Middleware & Events.</li>
                        <li>Collections & Helpers.</li>
                    </CardFooter>
                </Card>
                <Card className="border-1">
                    <CardHeader className="flex-col items-center border-b-1">
                        <h4 className="font-bold text-large">Next Js</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-4">
                        <SiNextdotjs className="size-16 lg:size-24" />
                    </CardBody>
                    <CardFooter className="flex-col items-start min-h-48 border-t-1">
                        <li>Routing & Data Fetching.</li>
                        <li>Building Pages & Components.</li>
                        <li>API Routes & Data Management.</li>
                        <li>State Management & Authentication.</li>
                        <li>Advanced Routing & Optimization.</li>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Skills;
