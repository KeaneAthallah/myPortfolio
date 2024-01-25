import Certificate from "@/Components/Certificate";
import Projects from "@/Components/Projects";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const CertificatesPage = () => {
    return (
        <>
            <Head title="Certificate" />
            <Title title={"My Certificate"} />
            <div>
                <Projects />
            </div>
        </>
    );
};

export default CertificatesPage;
