import { Link } from "@inertiajs/react";
import React from "react";

const BottomNavigation = () => {
    return (
        <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-slate-200 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl">
            <div className="grid h-full max-w-lg grid-cols-6 mx-auto font-semibold">
                <Link
                    href={route("about")}
                    type="button"
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        About
                    </span>
                </Link>
                <Link
                    href={route("resume")}
                    type="button"
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Resume
                    </span>
                </Link>
                <Link
                    type="button"
                    href={route("projects")}
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Projects
                    </span>
                </Link>
                <Link
                    type="button"
                    href={route("certificates")}
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Certificate
                    </span>
                </Link>
                <Link
                    type="button"
                    href={route("skills")}
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Skills
                    </span>
                </Link>
                <Link
                    type="button"
                    className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavigation;
