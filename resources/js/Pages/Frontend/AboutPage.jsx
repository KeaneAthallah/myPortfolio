import Content from "@/Components/Content";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const Homepage = () => {
    return (
        <>
            <Head title="About" />
            <Title title={"About me"} />
            <div className="pb-4">
                <Content />
            </div>
        </>
    );
};

export default Homepage;
