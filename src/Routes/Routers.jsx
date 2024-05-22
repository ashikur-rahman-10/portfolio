import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddProjects from "../Pages/AddProjects/AddProjects";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Login from "../Pages/Login/Login";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import AddAskill from "../Pages/AddASkill/AddAskill";
import Skills from "../Pages/Skills/Skills";
import UpdateProject from "../Pages/UpdateProjects/UpdateProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-project",
        element: <AddProjects></AddProjects>,
      },
      {
        path: "/update/:id",
        element: <UpdateProject></UpdateProject>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/all-projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/add-skill",
        element: <AddAskill></AddAskill>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;
