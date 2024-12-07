import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  const [project, setProject] = useState({});
  const params = useParams();
  const id = params?.id;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://porfolio-server-five.vercel.app/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);

  const { register, handleSubmit } = useForm();

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

    const usedTechnology = technologies.split(",");
    const websiteFeatures = features.split(",");
    const updatedProject = {
      projectName,
      frontendGit,
      backendGit,
      websiteLink,
      technologies: usedTechnology,
      features: websiteFeatures,
      details,
      completionDate, // Adding the completion date
    };

    fetch(`https://porfolio-server-five.vercel.app/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Project updated successfully!");
          setTimeout(() => {
            navigate(`/projects/${id}`);
          }, 500);
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
      <SectionTitle title={"Update a project"}></SectionTitle>
      <div className="w-fit mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4 md:p-10 shadow-2xl rounded-2xl"
        >
          <h1 className="text-center text-2xl md:text-4xl py-5 md:mb-4">
            Update Your Project
          </h1>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="Project Name"
                defaultValue={project?.projectName}
                {...register("projectName", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Frontend GitHub Link</span>
              </label>
              <input
                type="text"
                placeholder="Frontend GitHub Link"
                defaultValue={project?.frontendGit}
                {...register("frontendGit", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Backend GitHub Link</span>
              </label>
              <input
                type="text"
                placeholder="Backend GitHub Link"
                defaultValue={project?.backendGit}
                {...register("backendGit", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Live Website Link</span>
              </label>
              <input
                type="text"
                placeholder="Live Website Link"
                defaultValue={project?.websiteLink}
                {...register("websiteLink", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10">
            <div>
              <label className="label">
                <span className="label-text">Technologies</span>
              </label>
              <input
                type="text"
                placeholder="Used Technologies (comma-separated)"
                defaultValue={project?.technologies}
                {...register("technologies", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Completion Date</span>
              </label>
              <input
                type="date"
                {...register("completionDate", { required: true })}
                defaultValue={project?.completionDate?.slice(0, 10)}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Features</span>
              </label>
              <textarea
                type="text"
                {...register("features", { required: true })}
                placeholder="Features (use newline for separation)"
                defaultValue={project?.features}
                className="textarea textarea-bordered textarea-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                type="text"
                {...register("details", { required: true })}
                defaultValue={project?.details}
                placeholder="Project Details"
                className="textarea textarea-bordered textarea-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
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
