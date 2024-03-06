import Contact from "@/Components/Contact";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import React from "react";

const ContactPage = () => {
    return (
        <div>
            <Head title="Contact" />
            <Title title={"My Kontak"} />
            <div className="">
                <Contact />
            </div>
        </div>
    );
};

export default ContactPage;
