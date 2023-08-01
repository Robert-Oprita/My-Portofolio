import React from "react";
import CardProjects from "../components/CardProjects";

const Projects = () => {
  return (
    <div
      className="projects bg-neutral-800  h-auto  w-auto flex flex-col items-center justify-center pb-24 pt-20 "
      id="projects"
    >
      <h1 className="text-center mb-12 text-5xl text-slate-50 ">Projects</h1>
      <p className="text-white m-6 text-2xl  mb-9">My latest work</p>
      <div className="contains   md:grid grid-cols-2 gap-8 ">
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
      </div>
    </div>
  );
};
export default Projects;

