import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  const [project, setProject] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();
  const id = params?.id;
  const navigate = useNavigate();

  // Fetch project data
  useEffect(() => {
    fetch(`https://porfolio-server-five.vercel.app/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        // Populate the form with existing project data
        reset({
          projectName: data?.projectName,
          frontendGit: data?.frontendGit,
          backendGit: data?.backendGit,
          websiteLink: data?.websiteLink,
          technologies: data?.technologies?.join(", "),
          features: data?.features?.join(", "),
          details: data?.details,
          completionDate: data?.completionDate?.slice(0, 10),
        });
      })
      .catch((err) => {
        console.error("Failed to fetch project data:", err);
        toast.error("Failed to load project data. Please try again.");
      });
  }, [id, reset]);

  // Handle form submission
  const onSubmit = (data) => {
    const {
      backendGit,
      details,
      frontendGit,
      projectName,
      technologies,
      websiteLink,
      features,
      completionDate,
    } = data;

    const updatedProject = {
      projectName,
      frontendGit,
      backendGit,
      websiteLink,
      technologies: technologies.split(","),
      features: features.split(","),
      details,
      completionDate,
    };

    fetch(`https://porfolio-server-five.vercel.app/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Project updated successfully!");
          setTimeout(() => navigate(`/projects/${id}`), 500);
        } else {
          toast.error("No changes were made to the project.");
        }
      })
      .catch((err) => {
        console.error("Error updating project:", err);
        toast.error("Failed to update the project. Please try again.");
      });
  };

  return (
    <div className="px-4 w-full min-h-screen pt-10 md:pt-0 pb-10 text-xs">
      <SectionTitle title={"Update a project"}></SectionTitle>
      <div className="w-fit mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4 md:p-10 shadow-2xl rounded-2xl"
        >
          <h1 className="text-center text-2xl md:text-4xl py-5 md:mb-4">
            Update Your Project
          </h1>

          {/* Form Fields */}
          <div className="flex flex-col md:flex-row gap-4 w-80 md:w-fit  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="Project Name"
                {...register("projectName", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Frontend GitHub Link</span>
              </label>
              <input
                type="text"
                placeholder="Frontend GitHub Link"
                {...register("frontendGit", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-80 md:w-fit  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Backend GitHub Link</span>
              </label>
              <input
                type="text"
                placeholder="Backend GitHub Link"
                {...register("backendGit", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Live Website Link</span>
              </label>
              <input
                type="text"
                placeholder="Live Website Link"
                {...register("websiteLink", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-80 md:w-fit  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                placeholder="Project Details"
                {...register("details", { required: true })}
                className="rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1 h-16"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Features</span>
              </label>
              <textarea
                placeholder="Features (comma-separated)"
                {...register("features", { required: true })}
                className="rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1 h-16"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-80 md:w-fit  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Technologies</span>
              </label>
              <input
                type="text"
                placeholder="Used Technologies (comma-separated)"
                {...register("technologies", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Completion Date</span>
              </label>
              <input
                type="date"
                {...register("completionDate", { required: true })}
                className=" rounded-md dark:bg-gray-700 w-full md:w-96 max-w-md text-xs px-2 py-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <input
              className="bg-info px-5 py-2 rounded-lg text-white font-medium hover:bg-sky-600 cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateProject;
