import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAbout from "../../Hooks/UseAbout";

const UpdateAbout = () => {
  const about = UseAbout();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const degree = form.degree.value;
    const description = form.description.value;

    const update = {
      name: "Md.Ashikur Rahman",
      email,
      phone,
      city,
      degree,
      description,
      image: about?.image,
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
          toast.success("Update Successfully!!");
          setTimeout(() => {
            navigate(`/#about`);
          }, 500);
        } else {
          toast.error("Not Updated!!");
        }
      });
  };
  return (
    <div className="flex w-full max-w-3xl px-4 min-h-screen items-center justify-center mx-auto ">
      <form onSubmit={handleUpdate}>
        <h1 className="text-center text-2xl font-medium pb-6 text-white">
          Update About
        </h1>
        <div className="py-8 px-6  rounded-2xl shadow-2xl  ">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              required
              defaultValue={about?.email}
              placeholder="email"
              name="email"
              className="input input-bordered w-[340px] md:w-[400px]"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-white">Phone</span>
            </label>
            <input
              type="number"
              required
              defaultValue={about?.phone}
              placeholder="phone"
              name="phone"
              className="input input-bordered w-[340px] md:w-[400px]"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-white">City</span>
            </label>
            <input
              type="text"
              required
              defaultValue={about?.city}
              placeholder="city"
              name="city"
              className="input input-bordered w-[340px] md:w-[400px]"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-white">Degree</span>
            </label>
            <input
              type="text"
              required
              defaultValue={about?.degree}
              placeholder="degree"
              name="degree"
              className="input input-bordered w-[340px] md:w-[400px]"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              type="text"
              required
              defaultValue={about?.description}
              placeholder="description"
              name="description"
              className="text-area text-area-bordered rounded-md px-4 py-1 h-28 w-[340px] md:w-[400px]"
            />
          </div>
          <div className="w-full pt-4 text-center">
            <input
              className="text-center cursor-pointer text-white bg-green-500 px-3 py-2 text-xs rounded-md hover:bg-green-600 uppercase font-medium"
              type="submit"
              value={"Update"}
            />
          </div>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateAbout;
