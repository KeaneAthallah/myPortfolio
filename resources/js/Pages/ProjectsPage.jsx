import Projects from "@/Components/Projects";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const ProjectsPage = () => {
    return (
        <>
            <Head title="About" />
            <Title title={"My Projects"} />
            <div>
                <Projects />
            </div>
        </>
    );
};

export default ProjectsPage;
