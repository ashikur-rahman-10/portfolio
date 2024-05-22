import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const AddAskill = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_HOSTING_KEY
    }`;
    const [imgUrl, setImgUrl] = useState("");

    const onSubmit = (data) => {
        if (!data.image || data.image.length === 0) {
            toast.error("Please select an image.");
            return;
        }

        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(imageHostingUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    setImgUrl(imgUrl);

                    const { skillName, borderColor } = data;

                    const skill = {
                        skillName,
                        borderColor,
                        image: imgUrl,
                    };

                    // Rest of your code for adding the skill...
                } else {
                    throw new Error("Image upload failed");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to upload image. Please try again.");
            });
    };

    return (
        <div className="px-10 w-full pt-10 md:pt-0 pb-10">
            <SectionTitle title={"Add a skill"}></SectionTitle>
            <div className="max-w-xl mx-auto mt-16">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body md:p-10 shadow-2xl rounded-lg"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Skill Logo</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Border Color</span>
                        </label>
                        <input
                            type="color"
                            {...register("borderColor", { required: true })}
                            placeholder="skill name"
                            className="input input-bordered w-28"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Skill Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="skill name"
                            {...register("skillName", { required: true })}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="mt-6 w-full flex justify-center">
                        <button className="w-fit md:text-base text-xs bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-purple-500 px-10 py-2 font-semibold flex items-center gap-1 rounded-md text-center text-white">
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddAskill;
