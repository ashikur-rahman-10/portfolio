import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import useLoader from "../../Components/UseLoader/useLoader";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // Default to descending order

  useEffect(() => {
    axios
      .get("https://porfolio-server-five.vercel.app/projects")
      .then(function (response) {
        const sortedProjects = response.data.sort((a, b) => {
          const dateA = new Date(a.completionDate);
          const dateB = new Date(b.completionDate);
          return sortOrder === "desc"
            ? dateB - dateA // Descending order (newest first)
            : dateA - dateB; // Ascending order (oldest first)
        });
        setProjects(sortedProjects); // Set sorted projects
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sortOrder]); // Re-fetch and sort when sortOrder changes

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (loading) {
    return useLoader();
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="px-4 md:px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
      <SectionTitle title={"All Projects"}></SectionTitle>

      {/* Dropdown menu to toggle sort order */}
      <div className="text-center text-xs mb-5 w-full flex justify-end">
        <select
          onChange={handleSortChange}
          value={sortOrder}
          className="rounded-md w-fit text-xs px-2 py-1"
        >
          <option value="desc">Sort Descending</option>
          <option value="asc">Sort Ascending</option>
        </select>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
