import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Toaster, toast } from "react-hot-toast";
import UseAbout from "../../Hooks/UseAbout";

const Contact = () => {
  const about = UseAbout();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tm5wqqw",
        "template_429qmrp",
        form.current,
        "KMPL-ZDeUbmcN_--C"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="px-10 pt-10 md:pt-0 bg-gradient-to-r from-violet-300 to-fuchsia-500">
      <SectionTitle title={"Get In Touch"}></SectionTitle>
      <div className="min-h-[80vh]  w-full flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row gap-20 md:justify-evenly items-center ">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium py-3">
              My Contacts
            </h1>
            <p className="text-lg flex gap-2 items-center pb-1">
              <FaPhone></FaPhone> +88 {about?.phone}
            </p>
            <p className="text-lg flex gap-2 items-center pb-1">
              <FaEnvelope></FaEnvelope> {about?.email}
            </p>
            <p className="text-lg flex gap-2 items-center">
              <FaMapMarkerAlt></FaMapMarkerAlt> {about?.city}
            </p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full max-w-lg  md:p-10 p-4 rounded-lg shadow-2xl  items-center "
            >
              <h1 className="text-2xl font-medium text-white">
                Want to send me a message?
              </h1>
              <input
                type="text"
                required
                placeholder="your name"
                name="user_name"
                className="input input-bordered w-72 md:w-96"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="email"
                className="input input-bordered w-72 md:w-96"
              />
              <textarea
                className="textarea textarea-bordered w-72 md:w-96"
                required
                placeholder="your message"
                name="message"
              ></textarea>
              <input
                type="submit"
                value={"Send Message"}
                className=" w-fit bg-[#0d6efd] text-white font-semibold py-2 rounded-xl hover:bg-[#1c4a8e] px-5 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Contact;
