import React from "react";
import { Helmet } from "react-helmet-async";
import TopBanner from "../TopBanner/TopBanner";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";

const Home = () => {
    return (
        <div className=" bg-gradient-to-r from-violet-300 to-fuchsia-500 pb-10">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div id="home">
                <TopBanner></TopBanner>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="skills">
                <Skills></Skills>
            </div>
            <div id="projects">
                <Projects></Projects>
            </div>
            <div id="contact">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;
