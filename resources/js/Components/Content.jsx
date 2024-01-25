import React from "react";
import Job from "./Job";

const Content = () => {
    return (
        <div className="mt-24 ml-7">
            <p>
                Experienced Web Developer adept in all stages of advanced web
                development. Profcient in an assortment of technologies,
                including Html, Css, JavaScript, and MySQL. My competence
                extends to utilizing cutting-edge frameworks like React,
                Laravel, and Next.js, ensuring that I can deliver dynamic and
                responsive web solutions.
            </p>
            <br />
            <p>
                As an ambitious and detail-oriented individual, I am capable of
                managing multiple tasks and prioritizing work effectively. I
                thrive in collaborative project teams and am dedicated to
                delivering high-quality results. Additionally, my excellent
                English skills allow for clear communication and understanding
                of project requirements.
            </p>
            <br />
            <span className="text-3xl font-bold">What I do?</span>
            <Job />
        </div>
    );
};

export default Content;
