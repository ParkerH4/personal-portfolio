import React from "react";

import projPortfolio from "../assets/portfolio/projPortfolio.png";
import projTaxAPI from "../assets/portfolio/projTaxAPI.jpg";
import projNetflixStats from "../assets/portfolio/projNetflixStats.jpg";
import projShowtimeDB from "../assets/portfolio/projShowtimeDB.png";
import projTwitter from "../assets/portfolio/projTwitter.png";
import projMagicSearch from "../assets/portfolio/projMagicSearch.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: projTaxAPI,
      skills: "Java/HTML/CSS/JavaScript/REST",
      title: "atVenu Tax Rate API (Capstone Project)",
      details: "Led a team in developing the AtVenu Tax Rate API, enhancing user experience and functionality. Designed and implemented a scalable backend for efficient processing of thousands of zip codes and tax rate data. Integrated REST functionality with JWT token-based authentication for secure API access. Managed a database automating tax rate population, reducing manual entry and ensuring accuracy. Demonstrated seamless integration between backend and frontend components in a demo.",
      link: "https://github.com/ParkerH4/taxrateAPI",
    },
    {
      id: 2,
      src: projTwitter,
      skills: "Ruby on Rails/HTML/CSS/JavaScript/SQL",
      title: "Twitter Clone: A Ruby on Rails Showcase",
      details: "Twitter Clone: A Ruby on Rails Showcase is a dynamic web application mirroring the essence of Twitter, built with Ruby on Rails. Emulating key features like posting tweets, following users, and a dynamic feed, this project showcases robust CRUD operations, an intuitive UI, and optimized database interactions. Dive into the codebase to explore implementation details and Ruby on Rails best practices. ",
      link: "https://github.com/ParkerH4/twitter-clone",
    },
    {
      id: 3,
      src: projMagicSearch,
      skills: "React/Node/Express/TypeScript/Tailwind",
      title: "Magic The Gathering Card Search",
      details: "The goal of this project was to create a basic full-stack application using TypeScript, React, Node, Express, and integrating with the Scryfall API for Magic cards. The project includes a backend that serves as a REST endpoint to fetch Magic cards based on a user-provided search string. The frontend, built with React, enables users to search for cards and displays card information such as images, names, set names, numbers, and rarities.",
      link: "https://github.com/ParkerH4/MagicTheGathering-Card-Search",
    },
    {
      id: 4,
      src: projPortfolio,
      skills: "React/Tailwind CSS",
      title: "Personal Portfolio",
      details: "Personal Portfolio built with React and Tailwind that showcases my contact information, skills, experience, and projects. Contains an about me page and features such as darkmode.",
      link: "https://www.parkerhewitt.com",
    },
    {
      id: 5,
      src: projNetflixStats,
      skills: "Python",
      title: "Netflix Data/Stats Tracker",
      details: " Python data visualization project that analyzes my personal Netflix viewing information. Then deploys it into a dashboard filled with neat statistics about my data using the Dash Python package. Dashboard is styled with HTML/CSS.",
      link: "https://github.com/ParkerH4/netflix-stats-tracker",
    },
    {
      id: 6,
      src: projShowtimeDB,
      skills: "React/HTML/CSS",
      title: "ShowtimeDB",
      details: "ShowtimeDB is a React-based web app that lets users explore movies and TV shows. Using the TMDb (The Movie Database) API, it offers information on popular movies, top-rated TV shows, and allows searching for specific content. Users can view content details or watch trailers.",
      link: "https://github.com/ParkerH4/movie-tv-db",
    },
  ];
  return (
    <div name="projects" className="w-full min-h-screen mb-20">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full mt-20 pt-20 pb-20">
        <div className="pb-8">
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map(({ id, src, skills, title, details, link }) => (
            <div key={id} className="shadow-lg shadow-cyan-900 flex flex-col">
              <img src={src} alt="" className="w-full h-40 object-cover object-center" />
              <div className="flex-grow flex flex-col justify-between p-4">
                <div>
                  <p className="text-xl font-semibold mb-2">{title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{details}</p>
                </div>
                <div className="mt-4">
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
