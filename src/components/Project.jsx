import React from "react";

import projPortfolio from "../assets/portfolio/projPortfolio.png";
import projTaxAPI from "../assets/portfolio/projTaxAPI.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: projPortfolio,
      skills: "React.js/Tailwind CSS",
      title: "Personal Portfolio",
      details: "Personal Portfolio built with React and Tailwind that showcases my contact information, skills, experience, and projects. Contains an about me page and features such as darkmode.",
    },
    {
      id: 2,
      src: projTaxAPI,
      skills: "Java/HTML/CSS/JavaScript/REST",
      title: "atVenu Tax Rate API",
      details: "Capstone project made with three other group members during my diploma. Built a tax rate API that retrieved a request that contained a location code from atVenu customer form and sent back a appropriate tax rate based on the location code.",
    },
  ];

  return (
    <div name="projects" className=" w-full md:h-screen ">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 sm:px-0">
          {projects.map(({ id, src, skills, title, details }) => (
            <div key={id} className="shadow-lg shadow-cyan-900 ">
              <img src={src} alt="" className="rounded-md duration-500 hover:scale-110" />
              <p className="flex items-center justify-center font-bold py-2">{title}</p>
              <p className="px-2">{details}</p>
              <div className="flex items-center justify-center">
                <p className="py-2 duration-200 hover:scale-105  text-cyan-700 dark:text-amber-500">{skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
