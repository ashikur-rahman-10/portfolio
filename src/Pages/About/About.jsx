import React, { useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaGraduationCap,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/UseAdmin";
import UseAbout from "../../Hooks/UseAbout";

const About = () => {
  const { admin } = useAdmin();
  const about = UseAbout();
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="w-full px-10 lg:h-screen pb-10 ">
      <SectionTitle title={"About"}></SectionTitle>

      <h1 className="text-2xl font-medium pb-6">
        I am <span className="text-[#037fff]">Md. Ashikur Rahman</span>
      </h1>

      <p>{about?.description}</p>
      <div className="flex justify-around space-y-10 lg:space-y-0 items-center flex-col md:flex-row my-10">
        <div>
          {" "}
          <div className="avatar w-96 h-96">
            <img
              className="w-96  mask mask-hexagon-2"
              src={about?.image}
              alt=""
            />
          </div>
          {admin && (
            <div className="  w-full flex justify-center pt-2">
              <Link
                to={`/update-dp`}
                className="px-2 py-1 bg-info hover:bg-blue-600 text-white font-medium uppercase rounded-md text-xs"
              >
                Update Photo
              </Link>
            </div>
          )}
        </div>
        <div>
          <div className="flex lg:gap-20 w-full max-w-xs lg:max-w-2xl lg:pr-20">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-1">
                  <FaBirthdayCake></FaBirthdayCake>
                  <strong>Birthday:</strong>
                  <span className="text-gray-600">19 Oct 1999</span>
                </li>

                <li className="flex items-center gap-1">
                  <FaPhoneAlt></FaPhoneAlt>
                  <strong>Phone:</strong>
                  <span className="text-gray-600">+88 {about?.phone}</span>
                </li>
                <li className="flex items-center gap-1">
                  <FaLocationArrow></FaLocationArrow>
                  <strong>City:</strong>
                  <span className="text-gray-600">{about?.city}</span>
                </li>

                <li className="flex items-center gap-1">
                  <FaGraduationCap></FaGraduationCap>
                  <strong>Degree:</strong>
                  <span className="text-gray-600">{about?.degree}</span>
                </li>
                <li className="flex items-center gap-1">
                  <FaEnvelope></FaEnvelope>
                  <strong>Email:</strong>
                  <span>
                    <a href="mailto:{about?.email}" className="link link-info">
                      {about?.email}
                    </a>
                  </span>
                </li>
                {admin && (
                  <div className="  w-fit">
                    <Link
                      to={"/update-about"}
                      className="px-2 py-1 bg-warning hover:bg-orange-400 text-white font-medium uppercase rounded-md text-xs"
                    >
                      Update About
                    </Link>
                  </div>
                )}
              </ul>
            </div>
            <div>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
