import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Toaster, toast } from "react-hot-toast";
import UseAbout from "../../Hooks/UseAbout";

const Contact = () => {
  const about = UseAbout();
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_tm5wqqw",
  //       "template_429qmrp",
  //       form.current,
  //       "KMPL-ZDeUbmcN_--C"
  //     )
  //     .then(
  //       (result) => {
  //         e.target.reset();
  //         toast.success("Email sent successfully!");
  //       },
  //       (error) => {
  //         console.error("EmailJS Error:", error.text);
  //         toast.error("Failed to send email. Please try again.");
  //       }
  //     );
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const subject = form.subject.value;
    const body = form.body.value;

    const messege = {
      user_name,
      user_email,
      subject,
      body,
      date: new Date(),
      readStatus: false,
    };

    fetch("https://porfolio-server-five.vercel.app/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messege),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Sent Successfully!!");
          form.reset();
        }
      });
  };
  return (
    <div className="px-4 pt-10 md:pt-0  bg-gradient-to-b from-fuchsia-500 to-violet-300 dark:from-gray-800 dark:to-gray-900">
      <SectionTitle title={"Get In Touch"}></SectionTitle>
      <div className="min-h-[80vh]  w-full flex justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row gap-20 md:justify-evenly items-center ">
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
                className="input input-bordered w-full md:w-96 text-sm"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="email"
                className="input input-bordered w-full md:w-96  text-sm"
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="subject"
                className="input input-bordered w-full md:w-96  text-sm"
              />
              <textarea
                className="textarea textarea-bordered w-full h-24 md:w-96  text-sm"
                required
                placeholder="your message"
                name="body"
              ></textarea>
              <input
                type="submit"
                value={"Send Message"}
                className=" w-fit bg-[#0d6efd] text-white font-semibold py-2 rounded-xl text-sm hover:bg-[#1c4a8e] px-5 cursor-pointer"
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
