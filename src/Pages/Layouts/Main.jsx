import React, { useContext } from "react";
import {
  FaBars,
  FaEdit,
  FaEnvelope,
  FaEnvelopeOpen,
  FaHome,
  FaPaperclip,
  FaPuzzlePiece,
  FaServer,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiCog6Tooth } from "react-icons/hi2";
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
      .then((result) => {})
      .catch((error) => {});
  };
  return (
    <div>
      <ParticlesBackground />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="bg-[#040B14] bg-opacity-75 z-10 w-fit h-[60px] absolute lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button text-xl border w-fit m-[12px] text-white p-2 rounded-xl absolute lg:hidden"
          >
            <FaBars></FaBars>
          </label>
        </div>
        <div className="drawer-content  bg-gradient-to-b from-fuchsia-500 to-violet-300">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full pt-20 lg:pt-10 bg-[#040B14] text-[#737373] font-medium ">
            {/* Sidebar content here */}

            <div className="w-1/2 rounded-full mx-auto p-2 bg-[#202020] mb-10">
              <img className="rounded-full border mx-auto" src={about?.image} />
            </div>
            <div className="flex flex-col justify-end w-full pl-10">
              {/* For All Users */}
              {location.pathname === "/" ? (
                <>
                  <li className="hover:text-blue-400">
                    <a href="#home">
                      <FaHome></FaHome> Home
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#about">
                      <FaUserAlt></FaUserAlt> About
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#skills">
                      <GiSkills></GiSkills> Skills
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="#projects">
                      <FaServer></FaServer> Projects
                    </a>
                  </li>

                  <li className="hover:text-blue-400">
                    <a href="/#contact">
                      <FaEnvelopeOpen></FaEnvelopeOpen> Contact
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-blue-400">
                    <a href="/">
                      <FaHome></FaHome> Home
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/about">
                      <FaUserAlt></FaUserAlt> About
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/skills">
                      <GiSkills></GiSkills> Skills
                    </a>
                  </li>
                  <li className="hover:text-blue-400">
                    <a href="/projects">
                      <FaServer></FaServer> Projects
                    </a>
                  </li>

                  <li className="hover:text-blue-400">
                    <a href="/contact">
                      <FaEnvelopeOpen></FaEnvelopeOpen> Contact
                    </a>
                  </li>
                </>
              )}
            </div>
            <div className="divider"></div>

            <div className="pl-10">
              {user?.email == "ashikur.rahman3912@gmail.com" && (
                <>
                  <li className="hover:text-blue-400">
                    <Link to={"/add-project"}>
                      <FaPuzzlePiece></FaPuzzlePiece> Add a Projects
                    </Link>
                  </li>
                  <li className="hover:text-blue-400">
                    <Link to={"/add-skill"}>
                      <GiSkills></GiSkills> Add a Skill
                    </Link>
                  </li>
                </>
              )}

              {!user ? (
                <li className="hover:text-blue-400">
                  <Link to={"/login"}>
                    <FaSignInAlt></FaSignInAlt>Admin Login
                  </Link>
                </li>
              ) : (
                <li onClick={handleSignOut} className="hover:text-blue-400">
                  <a href="#contact">
                    <FaSignOutAlt></FaSignOutAlt> Log Out
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
