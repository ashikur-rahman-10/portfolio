import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import useLoader from "../../Components/UseLoader/useLoader";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/projects")
            .then(function (response) {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    if (loading) {
        return useLoader();
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
            <SectionTitle title={"All Projects"}></SectionTitle>
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

export default AllProjects;
