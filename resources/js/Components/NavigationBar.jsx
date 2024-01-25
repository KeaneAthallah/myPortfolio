import NavLink from "@/Components/NavLink";
import { Link } from "@nextui-org/react";
import React from "react";

const NavigationBar = () => {
    const routing = {
        about: route("about"),
        resume: route("resume"),
        projects: route("projects"),
        certificates: route("certificates"),
        skills: route("skills"),
        contact: route("contact"),
    };
    return (
        <nav className="relative">
            <div className="hidden lg:flex absolute z-10 right-0 bg-slate-600  gap-12 font-bold p-4 rounded-bl-2xl ">
                <NavLink href={routing.about}>About</NavLink>
                <NavLink href={routing.resume}>Resume</NavLink>
                <NavLink href={routing.projects}>Projects</NavLink>
                <NavLink href={routing.certificates}>Certificate</NavLink>
                <NavLink href={routing.skills}>Skills</NavLink>
                <NavLink href={routing.contact}>Contact</NavLink>
            </div>
            <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-slate-200 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl">
                <div className="grid h-full max-w-lg grid-cols-6 mx-auto font-semibold">
                    <Link
                        href={routing.about}
                        type="button"
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            About
                        </span>
                    </Link>
                    <Link
                        href={routing.resume}
                        type="button"
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            Resume
                        </span>
                    </Link>
                    <Link
                        type="button"
                        href={routing.projects}
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            Projects
                        </span>
                    </Link>
                    <Link
                        type="button"
                        href={routing.certificates}
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            Certificate
                        </span>
                    </Link>
                    <Link
                        type="button"
                        href={routing.skills}
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            Skills
                        </span>
                    </Link>
                    <Link
                        type="button"
                        href={routing.contact}
                        className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
