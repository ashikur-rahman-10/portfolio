import React, { useState } from "react";
import UseAbout from "../../Hooks/UseAbout";
import wait from "../../assets/wait_please.gif";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateDP = () => {
  const [uploading, setUploading] = useState(false);
  const about = UseAbout();
  const navigate = useNavigate();

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_HOSTING_KEY
  }`;
  const onSubmit = (data) => {
    setUploading(true);
    data.preventDefault();
    const image = data.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          console.log(imgUrl);
          const update = {
            email: about?.email,
            phone: about?.phone,
            city: about?.city,
            degree: about?.degree,
            description: about?.description,
            image: imgUrl,
          };
          fetch(
            `https://porfolio-server-five.vercel.app/about-me/664da373a402cecf4ecde2df`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(update),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                setUploading(false);
                toast.success("Update Successfully!!");
                setTimeout(() => {
                  navigate(`/#about`);
                }, 500);
              } else {
                toast.error("Not Updated!!");
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
  return (
    <div className="flex w-full max-w-3xl mx-auto items-center justify-center min-h-screen">
      <form onSubmit={onSubmit}>
        <div className="py-8 px-6  rounded-2xl shadow-2xl  mx-auto ">
          <h1 className="text-center text-white text-xl pb-4">Image</h1>
          <div className="form-control w-full max-w-2xl">
            <input
              type="file"
              required
              placeholder="email"
              name="image"
              className="file-input  w-[340px] md:w-[400px]"
            />
          </div>
          <div className="w-full pt-4 text-center">
            <input
              className="text-center cursor-pointer text-white bg-green-500 px-3 py-2 text-xs rounded-md hover:bg-green-600 uppercase font-medium"
              type="submit"
              value={"Upload"}
            />
          </div>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateDP;
