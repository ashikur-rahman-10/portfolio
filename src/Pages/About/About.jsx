import React, { useEffect } from "react";
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

const About = () => {
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
            <p data-aos="zoom-in">
                Hi! My name is Md.Ashikur Rahman. I am a Web Developer, and I'm
                very passionate and dedicated to my work. I have acquired the
                skills and knowledge necessary to make your project a success. I
                enjoy every step of the design process, from discussion and
                collaboration to concept and execution, but I find the most
                satisfaction in seeing the finished product do everything for
                you that it was created to do.
            </p>
            <div className="flex justify-around space-y-10 lg:space-y-0 items-center flex-col lg:flex-row my-10">
                <div data-aos="zoom-out">
                    <img
                        className="w-96"
                        src="https://raw.githubusercontent.com/ashikur-rahman-10/portfolio/main/src/assets/Images/avater.png"
                        alt=""
                    />
                </div>
                <div>
                    <div className="flex lg:gap-20 w-full max-w-xs lg:max-w-2xl lg:pr-20">
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-1">
                                    <FaBirthdayCake></FaBirthdayCake>
                                    <strong>Birthday:</strong>
                                    <span className="text-[#737373]">
                                        19 Oct 1999
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <FaPhoneAlt></FaPhoneAlt>
                                    <strong>Phone:</strong>
                                    <span className="text-[#737373]">
                                        +880 16449 76404
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <FaLocationArrow></FaLocationArrow>
                                    <strong>City:</strong>
                                    <span className="text-[#737373]">
                                        Mirpur,Dhaka,Bangladesh
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <FaGraduationCap></FaGraduationCap>
                                    <strong>Degree:</strong>
                                    <span className="text-[#737373]">
                                        Bsc in CSE {"(7th semester running)"}
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <FaEnvelope></FaEnvelope>
                                    <strong>Email:</strong>
                                    <span>
                                        <a className="link link-info">
                                            ashikur.rahman3912@gmail.com
                                        </a>
                                    </span>
                                </li>
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
