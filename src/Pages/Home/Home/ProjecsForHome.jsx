import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import useLoader from "../../../Components/UseLoader/useLoader";

const ProjectsForHome = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://porfolio-server-five.vercel.app/projects")
      .then((response) => {
        // Filter and sort the projects by completionDate in descending order
        const filteredProjects = response.data
          .filter((p) => p.showHome === true)
          .sort(
            (a, b) => new Date(b.completionDate) - new Date(a.completionDate)
          ) // Sort descending by completionDate
          .slice(0, 3); // Limit to 3 projects
        setProjects(filteredProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  if (loading) {
    // Render loader as JSX, not a hook
    return <div>{useLoader()}</div>;
  }

  return (
    <div className="px-4 md:px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
      <SectionTitle title={"Projects"}></SectionTitle>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
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

export default ProjectsForHome;
