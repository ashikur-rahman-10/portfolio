import React from "react";

const ProjectCard = ({ project }) => {
    const {
        projectName,
        frontendGit,
        backendGit,
        websiteLink,
        technologies,
        features,
        details,
        thumbnail,
    } = project;
    return (
        <div className="flex flex-col md:flex-row gap-10 border">
            <div className="py-5 pl-5">
                <h1>{projectName}</h1>
                <p>{details}</p>
            </div>
            <div>
                <img src={thumbnail} alt="" />
            </div>
        </div>
    );
};

export default ProjectCard;
