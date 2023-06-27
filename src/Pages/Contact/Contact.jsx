import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div className="px-10 pt-10 md:pt-0 bg-gradient-to-r from-violet-300 to-fuchsia-500">
            <SectionTitle title={"Get In Touch"}></SectionTitle>
            <div className="min-h-[80vh]  w-full flex justify-center items-center">
                <div className="w-full flex flex-col lg:flex-row gap-20 lg:justify-evenly items-center ">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-medium py-3">
                            My Contacts
                        </h1>
                        <p className="text-lg flex gap-2 items-center pb-1">
                            <FaPhone></FaPhone> +88 01644976404
                        </p>
                        <p className="text-lg flex gap-2 items-center pb-1">
                            <FaEnvelope></FaEnvelope>{" "}
                            ashikur.rahman3912@gmail.com
                        </p>
                        <p className="text-lg flex gap-2 items-center">
                            <FaMapMarkerAlt></FaMapMarkerAlt>{" "}
                            Mirpur,Dhaka,Bangladesh
                        </p>
                    </div>
                    <div>
                        <form className="flex flex-col gap-4 w-full max-w-lg  lg:p-10 p-4 rounded-lg shadow-2xl  items-center ">
                            <h1 className="text-2xl font-medium text-white">
                                Want to send me a message?
                            </h1>
                            <input
                                type="text"
                                placeholder="your name"
                                className="input input-bordered w-72 lg:w-96"
                            />
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-72 lg:w-96"
                            />
                            <textarea
                                className="textarea textarea-bordered w-72 lg:w-96"
                                placeholder="your message"
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
        </div>
    );
};

export default Contact;
