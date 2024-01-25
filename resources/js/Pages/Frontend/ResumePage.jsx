import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";
import Resume from "@/Components/Resume";

const ResumePage = () => {
    return (
        <div>
            <Head title="Resume" />
            <Title title={"My Resume"} />
            <div className="pb-4">
                <Resume />
            </div>
        </div>
    );
};

export default ResumePage;
