import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div>
          <h2 className="sm:text-8xl text-4xl font-bold">
            Hi I'm <span className="text-cyan-700 dark:text-amber-400">Parker</span>!
          </h2>
          <h3 className="sm:text-4xl text-2xl my-6 font-bold">Software Developer</h3>

          <div>
            <Link to="about" smooth duration={700} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-700 dark:bg-orange-400 cursor-pointer">
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/3">
          <img src={heroImage} alt="profilePic" className=" shadow-lg shadow-cyan-700 dark:shadow-orange-400 rounded-full w-3/4  mx-auto md:w-half " />
        </div>
      </div>
    </div>
  );
};

export default Home;
