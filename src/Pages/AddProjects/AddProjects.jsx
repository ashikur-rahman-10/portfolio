import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import wait from "../../assets/tony-talks-iamtonytalks.gif";

const AddProjects = () => {
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_HOSTING_KEY
  }`;
  console.log(imageHostingUrl);
  const [imgUrl, setImgUrl] = useState("");

  const onSubmit = (data) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", data.thumbnail[0]);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          setImgUrl(imgUrl);

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
          const project = {
            projectName,
            frontendGit,
            backendGit,
            websiteLink,
            technologies: usedTechnology,
            features: websiteFeatures,
            details,
            thumbnail: imgUrl,
            uploadDate: new Date(),
          };
          fetch("https://porfolio-server-five.vercel.app/projects", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                setUploading(false);
                toast.success("Project Added Successfully!!");
                reset();
              }
            });
        }
      });
  };

  if (uploading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <img className="w-96" src={wait} alt="" />
      </div>
    );
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="px-10 w-full min-h-screen pt-10 md:pt-0 pb-10">
      <SectionTitle title={"Add a project"}></SectionTitle>
      <div className="w-fit mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4 md:p-10 shadow-2xl rounded-2xl"
        >
          <h1 className="text-center text-2xl md:text-4xl py-5 md:mb-4">
            Add Your Project
          </h1>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="project name"
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
                className="input input-bordered input-primary w-full md:w-96 max-w-md"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4 md:gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Screenshorts</span>
              </label>
              <input
                type="file"
                {...register("thumbnail", { required: true })}
                className="file-input file-input-bordered w-full md:w-96 max-w-md"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Technologies</span>
              </label>
              <input
                type="text"
                placeholder="Used technology"
                {...register("technologies", {
                  required: true,
                })}
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

export default AddProjects;
