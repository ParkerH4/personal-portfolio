
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
      src: projMagicSearch,
      skills: "React/Node/Express/TypeScript/Tailwind",
      title: "Magic The Gathering Card Search",
      details: "Built a full-stack application using React, TypeScript, Node.js, and Express that allows users to search for Magic: The Gathering cards. Integrated the Scryfall API to retrieve and display card information, including images, names, sets, and rarities.",
      link: "https://github.com/ParkerH4/MagicTheGathering-Card-Search",
    },
    {
      id: 2,
      src: projTaxAPI,
      skills: "Java/HTML/CSS/JavaScript/REST",
      title: "Capstone Project – Tax Rate API",
      details: "Led a team in collaboration with AtVenu to develop a Tax Rate API capable of processing tax information for thousands of ZIP codes. Developed backend functionality using Java, integrated REST endpoints with JWT authentication, and automated tax rate population to improve accuracy.",
      link: "https://github.com/ParkerH4/taxrateAPI",
    },
    {
      id: 3,
      src: projNetflixStats,
      skills: "Python",
      title: "Netflix Data/Stats Tracker",
      details: "Developed a Python application to analyze and visualize my personal Netflix viewing history. Used Dash to create an interactive dashboard displaying viewing statistics and trends, styled with HTML and CSS.",
      link: "https://github.com/ParkerH4/netflix-stats-tracker",
    },
    {
      id: 4,
      src: projShowtimeDB,
      skills: "React/HTML/CSS",
      title: "ShowtimeDB",
      details: "Built a React application that uses the TMDb API to explore movies and TV shows. Users can search for titles, browse popular and top-rated content, view details, and watch trailers.",
      link: "https://github.com/ParkerH4/movie-tv-db",
    },
    {
      id: 5,
      src: projPortfolio,
      skills: "React/Tailwind CSS",
      title: "Personal Portfolio",
      details: "Designed and developed this personal portfolio using React and Tailwind CSS to showcase my projects, technical skills, and professional experience. Features responsive layouts and a customizable dark mode.",
      link: "https://www.parkerhewitt.com",
    },
    {
      id: 6,
      src: projTwitter,
      skills: "Ruby on Rails/HTML/CSS/JavaScript/SQL",
      title: "Twitter Clone",
      details: "Developed a Twitter-inspired web application using Ruby on Rails, featuring user posts, following functionality, and a dynamic feed. Implemented CRUD operations and database interactions to support core social media features.",
      link: "https://github.com/ParkerH4/twitter-clone",
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
              <img src={src} alt={title} className="w-full h-40 object-cover object-center" />
              <div className="flex-grow flex flex-col justify-between p-4">
                <div>
                  <p className="text-xl font-semibold mb-2">{title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{details}</p>
                </div>
                <div className="mt-4">
                  <p className="duration-200 hover:scale-105 text-cyan-700 dark:text-amber-500 text-sm">{skills}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="duration-200 hover:scale-105 text-white text-sm px-2 py-1 my-2 mx-2 flex items-center rounded-md bg-cyan-700 dark:bg-orange-400 cursor-pointer w-fit">
                    {link.includes("github.com") ? "GitHub" : "View Website"}
                  </a>
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
