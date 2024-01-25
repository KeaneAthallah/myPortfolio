import React from "react";

const Title = ({ title }) => {
    return (
        <div>
            <span className="z-10 text-4xl font-bold absolute top-5 left-10 ">
                {title}
            </span>
        </div>
    );
};

export default Title;
