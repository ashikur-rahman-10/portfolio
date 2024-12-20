import React from "react";
import { Helmet } from "react-helmet-async";
import TopBanner from "../TopBanner/TopBanner";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import ProjectsForHome from "./ProjecsForHome";

const Home = () => {
  return (
    <div className="pb-10">
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
        <ProjectsForHome></ProjectsForHome>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
