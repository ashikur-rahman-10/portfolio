import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import facebook from "../../assets/icons/facebook.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

const SocialIcon = () => {
    return (
        <div className="fixed md:flex flex-col top-[35%] text-white right-0 hidden">
            <ul>
                <li className="flex items-center  font-medium text-lg px-5 w-60 bg-gray-700 -mr-44 hover:-mr-0 duration-500 hover:rounded-tl-lg border-b h-14">
                    <Link
                        to={"https://www.facebook.com/ashik.xuvo.0"}
                        className="flex items-center gap-8 w-full"
                    >
                        <img className="w-8" src={facebook} alt="" /> Facebook
                    </Link>
                </li>
                <li className="flex items-center  font-medium text-lg px-5 w-60 bg-gray-700 -mr-44 hover:-mr-3 duration-500 border-b h-14">
                    <Link
                        to={"https://github.com/ashikur-rahman-10"}
                        className="flex items-center gap-8 w-full"
                    >
                        <img className="w-8" src={github} alt="" /> Github
                    </Link>
                </li>
                <li className="flex items-center  font-medium text-lg px-5 w-60 bg-gray-700 -mr-44 hover:-mr-3 duration-500 hover:rounded-bl-lg border-b  h-14">
                    <Link
                        to={"https://www.linkedin.com/"}
                        className="flex items-center gap-8 w-full"
                    >
                        <img className="w-8" src={linkedin} alt="" /> Linkedin
                    </Link>
                </li>
                <li className="flex items-center  font-medium text-lg px-5 w-60 bg-gray-700 -mr-44 hover:-mr-3 duration-500 hover:rounded-bl-lg border-b  h-14">
                    <a
                        to={"https://www.linkedin.com/"}
                        href="mailto:ashikur.rahman3912@gmail.com"
                        className="flex items-center gap-8 w-full"
                    >
                        <img className="w-8" src={gmail} alt="" /> Email
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcon;
