import Certificate from "@/Components/Certificate";

import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const CertificatesPage = () => {
    return (
        <>
            <Head title="Certificate" />
            <Title title={"My Certificate"} />
            <div>
                <Certificate />
            </div>
        </>
    );
};

export default CertificatesPage;
