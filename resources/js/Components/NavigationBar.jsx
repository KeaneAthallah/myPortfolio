import NavLink from "@/Components/NavLink";
import React from "react";

const NavigationBar = () => {
    return (
        <nav className="relative">
            <div className="hidden lg:flex absolute z-10 right-0 bg-slate-600  gap-12 font-bold p-4 rounded-bl-2xl ">
                <NavLink href={route("about")}>About</NavLink>
                <NavLink href={route("resume")}>Resume</NavLink>
                <NavLink href={route("projects")}>Projects</NavLink>
                <NavLink href={route("certificates")}>Certificate</NavLink>
                <NavLink href={route("skills")}>Skills</NavLink>
                <NavLink>Contact</NavLink>
            </div>
        </nav>
    );
};

export default NavigationBar;
