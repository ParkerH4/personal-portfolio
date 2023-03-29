import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Socials = () => {
  const links = [
    {
      id: 1,
      icon: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/parkerh4",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/parker--hewitt/",
    },

    {
      id: 3,
      icon: (
        <>
          Resume <BsFillFileEarmarkPersonFill size={30} />
        </>
      ),
      href: "/resume.pdf",
    },
    {
      id: 4,
      icon: (
        <>
          Contact
          <MdOutlineEmail size={30} />
        </>
      ),
      href: "mailto:parkerhewitt95@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed">
      <ul>
        {links.map(({ id, icon, href, style }) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-8px] hover:rounded-md duration-500 bg-cyan-700 dark:bg-orange-400" + " " + style}>
            <a href={href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
