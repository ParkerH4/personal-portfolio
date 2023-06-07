import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4  fixed">
      <div>
        <h1 className="sm:text-7xl text-4xl ml-4 ">
          Parker Hewitt
          <button className=" mx-4 rounded-3xl" onClick={handleThemeSwitch}>
            {theme === "dark" ? <MdOutlineDarkMode size={30} /> : <MdDarkMode size={30} />}
          </button>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-bold  hover:scale-110 duration-200">
            <Link to={link} smooth duration={700}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-cyan-700 dark:text-amber-400 md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-stone-300 text-cyan-700 dark:text-amber-400 dark:bg-gradient-to-r from-cyan-900 to-cyan-700">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={700}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
