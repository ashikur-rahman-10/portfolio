import React from "react";

const SectionTitle = ({ title }) => {
    return (
        <div className="w-fit py-10">
            <h1 className="text-3xl text-[#173b6c] font-semibold uppercase">
                {title}
            </h1>
            <progress
                className="progress progress-info h-1 "
                value="70"
                max="100"
            ></progress>
        </div>
    );
};

export default SectionTitle;
