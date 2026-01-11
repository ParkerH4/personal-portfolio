import React, { useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import java from "../assets/java.png";
import csharp from "../assets/c#.png";
import python from "../assets/python.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import SQL from "../assets/sql.png";
import linux from "../assets/linux.png";
import vmware from "../assets/vmware.png";
import bootstrap from "../assets/bootstrap.png";
import cplusplus from "../assets/c++.png";
import rails from "../assets/rails.png";
import VB from  "../assets/visualbasic.png";
import visualstudio from  "../assets/visualstudio.png";
import powerbi from "../assets/powerbi.png";

const Experience = () => {
  const [showSkills, setShowSkills] = useState(true);

  const languages = [
    { id: 1, src: java, title: "Java", border: "shadow-amber-500" },
    { id: 2, src: csharp, title: "C#", border: "shadow-purple-500" },
    { id: 3, src: cplusplus, title: "C++", border: "shadow-blue-500" },
    { id: 4, src: python, title: "Python", border: "shadow-yellow-400" },
    { id: 5, src: SQL, title: "SQL", border: "shadow-amber-500" },
    { id: 6, src: html, title: "HTML", border: "shadow-red-500" },
    { id: 7, src: css, title: "CSS", border: "shadow-blue-600" },
    { id: 8, src: javascript, title: "JavaScript", border: "shadow-yellow-400" },
    { id: 9, src: VB, title: "Visual Basic", border: "shadow-blue-600" },
    { id: 10, src: reactLogo, title: "React", border: "shadow-sky-400" },
    { id: 11, src: rails, title: "Ruby on Rails", border: "shadow-red-500" },
    { id: 12, src: tailwind, title: "Tailwind", border: "shadow-sky-400" },
    { id: 13, src: bootstrap, title: "Bootstrap", border: "shadow-purple-500" },
    { id: 14, src: vscode, title: "VSCode", border: "shadow-sky-500" },
    { id: 15, src: visualstudio, title: "Visual Studio", border: "shadow-purple-500" },
    { id: 16, src: github, title: "GitHub", border: "shadow-white" },
    { id: 17, src: powerbi, title: "Power BI", border: "shadow-yellow-500" },
    { id: 18, src: linux, title: "Linux", border: "shadow-yellow-400" },
    { id: 19, src: vmware, title: "VMware", border: "shadow-amber-500" },

  ];

  const workHistory = [
    {
      id: 1,
      role: "IT Software Developer Co-op",
      duration: "May 2025 – Dec 2025",
      company: "Interpro Pipe & Steel",
      location: "Calgary, AB",
      description: [
        "Maintained and enhanced legacy production applications by refactoring code, converting VB screens to C#, implementing quality-of-life improvements, and updating large SQL-backed databases.",
        "Diagnosed and resolved application bugs by analyzing existing codebases and database interactions, improving system stability, correctness, and usability.",
        "Developed SQL-based reports to provide relevant system and operational data for developers and business stakeholders.",
        " Documented completed work through concise task-level technical summaries and collaborated with team members using a centralized version control system.",
      ],
    },
  ];

  return (
    <div name="experience" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold border-b-4 border-cyan-700 dark:border-amber-500 inline">
            Experience
          </h2>

          {/* Toggle buttons */}
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setShowSkills(false)}
              className={`group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer
                ${
                  !showSkills
                    ? "bg-gray-700 dark:bg-orange-400"
                    : "bg-cyan-700 dark:bg-gray-800"
                }`}
            >
              Work History
            </button>

            <button
              onClick={() => setShowSkills(true)}
              className={`group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer
                ${
                  showSkills
                    ? "bg-gray-700 dark:bg-orange-400"
                    : "bg-cyan-700 dark:bg-gray-800"
                }`}
            >
              Tech Stack
            </button>
          </div>

          {showSkills ? (
            <>
              <p className="text-md sm:text-xl py-6">
                Here are some languages, libraries, and technologies I have
                worked with:
              </p>

              <div className="w-full grid grid-cols-4 sm:grid-cols-5 gap-8 text-center py-6 px-12 sm:px-0">
                {languages.map(({ id, src, title, border }) => (
                  <div
                    key={id}
                    className={`bg-cyan-900 text-white hover:scale-110 duration-500 sm:py-3 shadow-lg ${border}`}
                  >
                    <img src={src} alt={title} className="w-20 mx-auto" />
                    <p className="mt-3 text-sm sm:text-xl">{title}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-md sm:text-xl py-6">
                Here is my professional work experience:
              </p>

              <div className="workHistory">
                {workHistory.map(({ id, role, duration, company, location, description }) => (
                  <div
                    key={id}
                    className="bg-cyan-900 text-white p-6 rounded shadow-lg"
                  >
                    <h3 className="text-xl font-semibold">{role}</h3>
                    <h4 className="italic">{company} - {location}</h4>
                    <p className="text-sm mb-3">{duration}</p>
                    <ul className="list-disc list-inside workHistory-y-1">
                      {description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
