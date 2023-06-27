import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/projects")
            .then(function (response) {
                setProjects(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
            <SectionTitle title={"Projects"}></SectionTitle>
            <div className="space-y-10">
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
