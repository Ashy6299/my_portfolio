// src/App.jsx
import React from "react";
import { useMediaQuery } from "@mui/material";

import NavbarMobileView from "./Component/sideBar/NavbarMobileView";
import SideBar from "./Component/sideBar/SideBar";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import TechStack from "./Component/TechStack/TechStack";
import Education from "./Component/Education/Education";
import Project from "./Component/projects/Project";
import Contact from "./Component/contact/Contact";

const App = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");

  if (isDesktop) {
    return (
      <SideBar>
        <Home />
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
        <Contact />
      </SideBar>
    );
  }

  // Mobile: top navbar + stacked sections
  return (
    <>
      <NavbarMobileView />
      <Home />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Contact />
    </>
  );
};

export default App;
