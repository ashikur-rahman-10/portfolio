import React, { useContext } from "react";
import {
  FaBars,
  FaEnvelopeOpen,
  FaHome,
  FaServer,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useLoader from "../../Components/UseLoader/useLoader";
import ParticlesBackground from "../../Components/ParticleBackground/ParticlesBackground";
import UseAbout from "../../Hooks/UseAbout";

const Main = () => {
  const location = useLocation();
  const { user, logOut, loading } = useContext(AuthContext);
  const about = UseAbout();

  if (loading) {
    return useLoader();
  }

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="dark:bg-gray-900 bg-white transition-all duration-500">
      <ParticlesBackground />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* Mobile Menu */}
        <div className="bg-opacity-75 z-10 w-fit h-[60px] absolute lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button text-xl border w-fit m-[12px] p-2 rounded-xl absolute text-gray-800 dark:text-white"
          >
            <FaBars />
          </label>
        </div>
        {/* Main Content */}
        <div className="drawer-content transition-all duration-500 bg-gradient-to-b from-fuchsia-500 to-violet-300 dark:from-gray-800 dark:to-gray-900">
          <Outlet />
        </div>
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full pt-20 lg:pt-0 bg-gray-900 text-gray-300 ">
            {/* Profile Image */}
            <div className="w-[60%] mx-auto avatar mask mask-circle">
              <img src={about?.image || "/default-avatar.png"} alt="Profile" />
            </div>
            {/* Navigation */}
            <div className="flex flex-col text-sm justify-end w-full pl-10">
              {location.pathname === "/" ? (
                <>
                  <li className="hover:text-blue-400">
                    <a href="#home">
                      <FaHome /> Home
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#about">
                      <FaUserAlt /> About
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#skills">
                      <GiSkills /> Skills
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#projects">
                      <FaServer /> Projects
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/#contact">
                      <FaEnvelopeOpen /> Contact
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-blue-400">
                    <a href="/">
                      <FaHome /> Home
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/about">
                      <FaUserAlt /> About
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/skills">
                      <GiSkills /> Skills
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/projects">
                      <FaServer /> Projects
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/contact">
                      <FaEnvelopeOpen /> Contact
                    </a>
                  </li>
                </>
              )}
            </div>
            <div className="divider"></div>
            {/* Admin Links */}
            <div className="pl-10 text-sm">
              {user?.email === "ashikur.rahman3912@gmail.com" && (
                <>
                  <li className="hover:text-blue-400">
                    <Link to={"/add-project"}>Add a Project</Link>
                  </li>
                  <li className="hover:text-blue-400">
                    <Link to={"/add-skill"}>Add a Skill</Link>
                  </li>
                </>
              )}
              {/* Auth Links */}
              {!user ? (
                <li className="hover:text-blue-400">
                  <Link to={"/login"}>
                    <FaSignInAlt /> Admin Login
                  </Link>
                </li>
              ) : (
                <li onClick={handleSignOut} className="hover:text-blue-400">
                  <a href="#contact">
                    <FaSignOutAlt /> Log Out
                  </a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
