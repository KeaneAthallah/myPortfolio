import Skills from "@/Components/Skills";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const SkillsPage = () => {
    return (
        <div>
            <Head title="Skills" />
            <Title title={"My Skills"} />
            <div className="">
                <Skills />
            </div>
        </div>
    );
};

export default SkillsPage;
