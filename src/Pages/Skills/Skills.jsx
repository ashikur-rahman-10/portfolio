import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import html from "../../assets/icons/Skills/html.svg";
import css3 from "../../assets/icons/Skills/css3.svg";
import tailwindcss from "../../assets/icons/Skills/tailwindcss.svg";
import bootstrap from "../../assets/icons/Skills/bootstrap.svg";
import javascript from "../../assets/icons/Skills/javascript.svg";
import react_js from "../../assets/icons/Skills/react_js.svg";
import firebase from "../../assets/icons/Skills/firebase.svg";
import mongodb from "../../assets/icons/Skills/mongodb.svg";
import nodejs from "../../assets/icons/Skills/nodejs.svg";
import express_js from "../../assets/icons/Skills/express_js.svg";

const Skills = () => {
    let skills;
    skills = [
        { icon: html, name: "HTML5", border: "#FF6D00" },
        { icon: css3, name: "CSS3", border: "#039BE5" },
        { icon: tailwindcss, name: "Tailwind CSS", border: "#039BE5" },
        { icon: bootstrap, name: "Bootstrap", border: "#673AB7" },
        { icon: javascript, name: "JavaScript", border: "#FFD600" },
        { icon: react_js, name: "React.js", border: "#8BB7F0" },
        { icon: firebase, name: "Firebase", border: "#FFC400" },
        { icon: mongodb, name: "MongoDB", border: "#4CAF50" },
        { icon: nodejs, name: "Node.js", border: "#37474F" },
        { icon: express_js, name: "Express.js", border: "#000000" },
    ];
    return (
        <div className="px-10 w-full pt-10 md:pt-0 pb-10">
            <SectionTitle title={"My skills"}></SectionTitle>
            <div className="w-full min-h-[70vh] flex justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-5 w-full md:gap-12 gap-3">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="px-10 py-6 rounded-xl  text-white font-medium flex items-center border-b-[6px]  justify-center hover:scale-125 duration-500 bg-black bg-opacity-10"
                            style={{
                                borderBottomColor: skill.border,
                                boxShadow: `1px 1px 0px ${skill.border}`,
                            }}
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-12 mb-3"
                                    src={skill.icon}
                                    alt=""
                                />
                                <h1 className="text-xs md:text-base">
                                    {skill.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
