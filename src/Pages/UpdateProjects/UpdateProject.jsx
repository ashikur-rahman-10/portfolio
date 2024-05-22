import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "autoprefixer";
import { settings } from "firebase/analytics";

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

  //   console.log(project);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const {
      backendGit,
      details,
      frontendGit,
      projectName,
      technologies,
      websiteLink,
      features,
    } = data;

    const usedTechnology = technologies.split(",");
    const websiteFeatures = features.split(".\n");
    const updatedProject = {
      projectName,
      frontendGit,
      backendGit,
      websiteLink,
      technologies: usedTechnology,
      features: websiteFeatures,
      details,
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
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Project update Successfully!!");
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
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="project name"
                defaultValue={project?.projectName}
                {...register("projectName", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Frontend Github link</span>
              </label>
              <input
                type="text"
                placeholder="frontend github link"
                defaultValue={project?.frontendGit}
                {...register("frontendGit", { required: true })}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Backend Github Link</span>
              </label>
              <input
                type="text"
                placeholder="backend github link"
                {...register("backendGit", { required: true })}
                defaultValue={project?.backendGit}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Live website Link</span>
              </label>
              <input
                type="text"
                placeholder="live website link"
                {...register("websiteLink", { required: true })}
                defaultValue={project?.websiteLink}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Screenshorts</span>
              </label>
              <input
                type="file"
                {...register("thumbnail", { required: true })}
                defaultValue={project?.thumbnail}
                className="file-input file-input-bordered w-full md:w-96 max-w-md"
              />
            </div> */}
            <div>
              <label className="label">
                <span className="label-text">Technologies</span>
              </label>
              <input
                type="text"
                placeholder="Used technology"
                {...register("technologies", { required: true })}
                defaultValue={project?.technologies}
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Features</span>
              </label>
              <textarea
                type="text"
                {...register("features", { required: true })}
                placeholder="features"
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
                placeholder="details"
                className="textarea textarea-bordered textarea-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <input
              className=" bg-info px-5 py-2 rounded-lg text-white font-medium hover:bg-sky-600 cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateProject;
