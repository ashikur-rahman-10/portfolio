import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/projects")
            .then(function (response) {
                setProjects(response.data.splice(0, 3));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

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
            <div className="my-10 w-full flex justify-center">
                <Link
                    to={"/all-projects"}
                    className="bg-[#0D6EFD] text-white px-5 py-2 font-medium rounded-md hover:bg-sky-500 hover:shadow-lg"
                >
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Projects;
