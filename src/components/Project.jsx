import React from "react";

import projPortfolio from "../assets/portfolio/projPortfolio.png";
import projTaxAPI from "../assets/portfolio/projTaxAPI.jpg";
import projNetflixStats from "../assets/portfolio/projNetflixStats.jpg";
import projShowtimeDB from "../assets/portfolio/projShowtimeDB.png";
import projBootstrapPlayground from "../assets/portfolio/projBootstrapPlayground.png";
import projMagicSearch from "../assets/portfolio/projMagicSearch.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: projPortfolio,
      skills: "React.js/Tailwind CSS",
      title: "Personal Portfolio",
      details: "Personal Portfolio built with React and Tailwind that showcases my contact information, skills, experience, and projects. Contains an about me page and features such as darkmode.",
      link: "https://www.parkerhewitt.com",
    },
    {
      id: 2,
      src: projTaxAPI,
      skills: "Java/HTML/CSS/JavaScript/REST",
      title: "atVenu Tax Rate API",
      details: "Capstone project made with three other group members during my diploma. Built a tax rate API that retrieved a request that contained a location code from atVenu customer form and sent back a appropriate tax rate based on the location code.",
      link: "https://github.com/ParkerH4/taxrateAPI",
    },
    {
      id: 3,
      src: projNetflixStats,
      skills: "Python",
      title: "Netflix Data/Stats Tracker",
      details: " Python data visualization project that analyzes my personal Netflix viewing information. Then deploys it into a dashboard filled with neat statistics about my data using the Dash Python package. Dashboard is styled with HTML/CSS.",
      link: "https://github.com/ParkerH4/netflix-stats-tracker",
    },
    {
      id: 4,
      src: projShowtimeDB,
      skills: "React.js/HTML/CSS",
      title: "ShowtimeDB",
      details: "ShowtimeDB is a React-based web app that lets users explore movies and TV shows. Using the TMDb (The Movie Database) API, it offers information on popular movies, top-rated TV shows, and allows searching for specific content. Users can view content details or watch trailers.",
      link: "https://github.com/ParkerH4/movie-tv-db",
    },
    {
      id: 5,
      src: projBootstrapPlayground,
      skills: "HTML/CSS (Bootstrap)",
      title: "Bootstrap Playground",
      details: "This is a demo project called Bootstrap Playground where I was testing out the functionality of Bootstrap. I was following a guide and used the official Bootstrap Documentation to make this sample project. This project is simply a fake book store where I was showcasing a best selling book that I wrote.",
      link: "https://github.com/ParkerH4/bootstrap-playground",
    },
    {
      id: 6,
      src: projMagicSearch,
      skills: "React, Node, Express, TypeScript, Tailwind CSS",
      title: "Magic The Gathering Card Search",
      details: "The goal of this project was to create a basic full-stack application using TypeScript, React, Node, Express, and integrating with the Scryfall API for Magic cards. The project includes a backend that serves as a REST endpoint to fetch Magic cards based on a user-provided search string. The frontend, built with React, enables users to search for cards and displays card information such as images, names, set names, numbers, and rarities.",
      link: "https://github.com/ParkerH4/MagicTheGathering-Card-Search",
    },
  ];
  return (
    <div name="projects" className=" w-full md:h-screen ">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center h-full mt-10">
        <div className="pb-8">
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map(({ id, src, skills, title, details, link }) => (
            <div key={id} className="shadow-lg shadow-cyan-900 ">
              <img src={src} alt="" className="w-full h-40 object-cover object-center" />
              <div className="px-4">
                <p className="text-xl font-semibold mb-2">{title}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{details}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="duration-200 hover:scale-105 text-cyan-700 dark:text-amber-500 text-sm">{skills}</p>
                  <button className="duration-200 hover:scale-105 text-white text-sm px-2 py-1 my-2 mx-2 flex items-center rounded-md bg-cyan-700 dark:bg-orange-400 cursor-pointer ">
                    <a href={link}>Link</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
