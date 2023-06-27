import React from "react";
import { TypeAnimation } from "react-type-animation";

const TopBanner = () => {
    return (
        <div className=" bg-[url('https://raw.githubusercontent.com/ashikur-rahman-10/portfolio/main/src/assets/Images/home_background.jpg')] bg-cover bg-fixed w-full lg:h-screen pt-[60px] lg:pt-0">
            <div className=" bg-gradient-to-r from-[#272728bd] to-[#aaadae11] w-full max-w-7xl h-full py-10 flex items-center ">
                <div className="pl-10 lg:pl-52   text-white">
                    <h1 className="text-5xl font-bold my-3">
                        Md.Ashikur Rahman
                    </h1>
                    <p className="text-3xl">
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
                                ]}
                                speed={1}
                                omitDeletionAnimation={true}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
