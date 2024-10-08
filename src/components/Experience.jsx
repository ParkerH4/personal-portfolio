import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mySQL from "../assets/mySQL.png";
import linux from "../assets/linux.png";
import vmware from "../assets/vmware.png";
import bootstrap from "../assets/bootstrap.png";
import nodejs from "../assets/nodejs.png";
import cplusplus from "../assets/c++.png";
import rails from "../assets/rails.png";

const Experience = () => {
  const languages = [
    {
      id: 1,
      src: html,
      title: "HTML",
      border: "shadow-red-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      border: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      border: "shadow-yellow-400",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      border: "shadow-yellow-400",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      border: "shadow-amber-500",
    },
    {
      id: 6,
      src: reactLogo,
      title: "React",
      border: "shadow-sky-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      border: "shadow-sky-400",
    },
    {
      id: 8,
      src: rails,
      title: "Ruby on Rails",
      border: "shadow-red-500",
    },
    {
      id: 9,
      src: c,
      title: "C",
      border: "shadow-blue-600",
    },
    {
      id: 10,
      src: cplusplus,
      title: "C++",
      border: "shadow-blue-600",
    },
    {
      id: 11,
      src: mySQL,
      title: "MySQL",
      border: "shadow-amber-500",
    },
    {
      id: 12,
      src: linux,
      title: "Linux",
      border: "shadow-yellow-400",
    },
    {
      id: 13,
      src: vmware,
      title: "VMware",
      border: "shadow-amber-500",
    },
    {
      id: 14,
      src: bootstrap,
      title: "Bootstrap",
      border: "shadow-purple-500",
    },
    {
      id: 15,
      src: nodejs,
      title: "Node",
      border: "shadow-green-400",
    },
    {
      id: 16,
      src: vscode,
      title: "VSCode",
      border: "shadow-sky-500",
    },
    {
      id: 17,
      src: github,
      title: "GitHub",
      border: "shadow-white",
    },
  ];

  return (
    <div name="experience" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold border-b-4 border-cyan-700 dark:border-amber-500 inline">Experience</h2>
          <p className=" text-md sm:text-xl py-6">Here are some languages/libraries and technologies I have worked with:</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-5 gap-8 text-center py-6 px-12 sm:px-0">
          {languages.map(({ id, src, title, border }) => (
            <div key={id} className={`bg-cyan-900  text-white hover:scale-110 duration-500 sm:py-3 shadow-lg ${border}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-3 text-sm sm:text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
