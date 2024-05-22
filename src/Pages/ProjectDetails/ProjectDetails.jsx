import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import useLoader from "../../Components/UseLoader/useLoader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaGithub, FaShareSquare, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const ProjectDetails = () => {
  const { user } = useContext(AuthContext);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://porfolio-server-five.vercel.app/projects/${id}`)
      .then(function (response) {
        setProject(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const {
    _id,
    projectName,
    frontendGit,
    backendGit,
    websiteLink,
    technologies,
    features,
    details,
    thumbnail,
  } = project;

  if (loading) {
    return useLoader();
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://porfolio-server-five.vercel.app/projects/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/all-projects");
            Swal.fire({
              icon: "success",
              title: "Your project has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
      <SectionTitle title={"Project Details"}></SectionTitle>
      <div className="max-w-4xl mx-auto">
        <div>
          <img className="w-full" src={thumbnail} />
          {user?.email == "ashikur.rahman3912@gmail.com" && (
            <div className="flex gap-4 mt-5">
              <Link
                to={`/update/${_id}`}
                className="bg-amber-400 w-fit px-3 py-2 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-amber-700"
              >
                Edit <FiEdit></FiEdit>
              </Link>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="bg-red-500 w-fit px-3 py-2 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-red-700"
              >
                Delete <FaTrash></FaTrash>
              </button>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl pt-5">{projectName}</h1>
          <p>{details}</p>
          <p className="flex gap-3 w-full py-5 flex-wrap">
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
              Frontend <FaGithub className="text-black"></FaGithub>
            </Link>
            <Link
              to={backendGit}
              target="blank"
              className="bg-[#0D6EFD] w-fit px-3 py-1 rounded-md text-white font-semibold flex items-center gap-1 hover:bg-sky-500"
            >
              Backend <FaGithub className="text-black"></FaGithub>
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
          <h2 className="text-2xl  md:text-3xl">Features:</h2>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className=" text-[#4e4d4d] list-disc ml-5">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
