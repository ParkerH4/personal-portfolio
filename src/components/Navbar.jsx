import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
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
    <div className="flex justify-between items-center w-full h-20 px-4 fixed">
      <div>
        <h1 className="sm:text-7xl text-4xl ml-6 ">
          Parker <span className="text-cyan-700 dark:text-amber-400">Hewitt</span>
          <button className="p-4 mx-4 rounded-3xl" onClick={handleThemeSwitch}>
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
    </div>
  );
};

export default Navbar;
