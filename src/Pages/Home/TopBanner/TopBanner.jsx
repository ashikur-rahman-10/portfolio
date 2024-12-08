import React, { useContext } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SocialIcon from "../../../Components/SocialIcon/SocialIcon";

import facebook from "../../../assets/icons/facebook.svg";
import github from "../../../assets/icons/github.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import gmail from "../../../assets/icons/gmail.svg";
import message from "../../../assets/icons/message.svg";
import { AuthContext } from "../../../Providers/AuthProviders";
import UseUnreadMessage from "../../../Hooks/UseUnreadMessage";

const TopBanner = () => {
  const { user, loading } = useContext(AuthContext);
  const unread = UseUnreadMessage();
  return (
    <div className="">
      {" "}
      <div className="bg-[url('https://i.ibb.co/kBHtHfH/flat-lay-workstation-with-copy-space-laptop-mobile-view.jpg')] lg:bg-[url('https://i.ibb.co/phkpN2w/flat-lay-workstation-with-copy-space-laptop.jpg')] bg-cover bg-fixed w-full h-screen">
        <div className=" bg-gradient-to-r from-[#272728bd] to-[#aaadae11] w-full max-w-7xl h-full py-10 flex items-center ">
          <div className=" lg:pl-52 w-full  text-white">
            <div className=" pl-10">
              <h1 className="text-3xl md:text-5xl font-semibold md:font-bold my-3">
                Md.Ashikur Rahman
              </h1>
              <p className="md:text-3xl text-2xl">
                I'm{" "}
                <span className="border-b-[3px] border-blue-500">
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Frontend Developer",
                      2000,
                      "React Developer",
                      2000,
                      "MERN Stack Developer",
                      2000,
                    ]}
                    speed={1}
                    omitDeletionAnimation={true}
                    repeat={Infinity}
                  />
                </span>
              </p>
              <div className="my-10  w-fit">
                <a
                  href="/Md_Ashikur_Rahman_Resume.pdf"
                  download={true}
                  className="z-30 md:text-base text-xs bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-purple-500 px-4 py-2 font-semibold flex  items-center gap-1 rounded-md "
                >
                  Download Resume <FaCloudDownloadAlt></FaCloudDownloadAlt>
                </a>
              </div>
            </div>

            <div className="w-fit flex justify-center mx-auto pt-5 md:hidden ">
              <ul className="flex justify-center items-center mx-auto gap-2 w-fit ">
                <li>
                  <Link
                    to={"https://www.facebook.com/ashik.xuvo.0"}
                    className="flex "
                  >
                    <img
                      className="bg-base-100 bg-opacity-20 rounded-full p-2 w-14 hover:bg-opacity-20 "
                      src={facebook}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://github.com/ashikur-rahman-10"}
                    className="flex"
                  >
                    <img
                      className="bg-base-100 bg-opacity-20 rounded-full p-2 w-14 hover:bg-opacity-20 "
                      src={github}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.linkedin.com/in/ashikur404"}
                    className=""
                  >
                    <img
                      className="bg-base-100 bg-opacity-20 rounded-full p-2 w-14 hover:bg-opacity-20 "
                      src={linkedin}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <a href="mailto:ashikur.rahman3912@gmail.com">
                    <img
                      className="bg-base-100 bg-opacity-20 rounded-full p-2 w-14 hover:bg-opacity-20 "
                      src={gmail}
                      alt=""
                    />
                  </a>
                </li>
                {user?.email == "ashikur.rahman3912@gmail.com" && (
                  <li className="relative">
                    <Link to={"/messeges"}>
                      <img
                        className="bg-base-100 bg-opacity-20 rounded-full p-2 w-14 hover:bg-opacity-20 "
                        src={message}
                        alt=""
                      />
                      {unread.length > 0 && (
                        <span className="absolute badge badge-xs badge-error text-white top-1 font-semibold left-[30px] rounded-full p-[2px] z-50">
                          {unread?.length}
                        </span>
                      )}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <SocialIcon></SocialIcon>
      </div>
    </div>
  );
};

export default TopBanner;
