import React from "react";
import { FaGithub, FaGithubAlt, FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div>
            <div className="card lg:card-side bg-base-100 shadow-2xl bg-transparent ">
                <div className="card-body md:w-[55%]">
                    <h2 className="card-title">{projectName}</h2>
                    <p>{details}</p>
                    <p className="flex gap-3 w-60 lg:w-96 flex-wrap">
                        {technologies.map((technology, index) => (
                            <span
                                key={index}
                                className="bg-gray-500 w-fit rounded-md text-white px-2"
                            >
                                {technology}
                            </span>
                        ))}
                    </p>
                    <div className="flex gap-4 mt-5">
                        <Link
                            to={frontendGit}
                            target="blank"
                            className="bg-[#0D6EFD] w-fit px-3 py-1 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-sky-500"
                        >
                            Frontend <FaGithub></FaGithub>
                        </Link>
                        <Link
                            href={backendGit}
                            target="blank"
                            className="bg-[#0D6EFD] w-fit px-3 py-1 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-sky-500"
                        >
                            Backend <FaGithub></FaGithub>
                        </Link>
                    </div>
                    <div>
                        <a
                            href={websiteLink}
                            target="blank"
                            className="flex gap-1 w-fit items-center text-yellow-800 hover:text-error underline "
                        >
                            <FaShareSquare></FaShareSquare>Live Preview
                        </a>
                    </div>

                    <div className="card-actions justify-end">
                        <Link className="bg-[#0D6EFD] w-fit px-3 py-1 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-sky-500">
                            View Details
                        </Link>
                    </div>
                </div>
                <figure>
                    <img
                        className="h-full w-full "
                        src={thumbnail}
                        alt={projectName}
                    />
                </figure>
            </div>
        </div>
    );
};

export default ProjectCard;
