import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">About</h2>
        </div>

        <p className="text-xl my-2">
          Hi! my name is <span className="text-cyan-700 dark:text-amber-400 font-bold">Parker</span>, and I'm a software developer with a passion for solving complex problems. I'm in my last semester of a Software Development diploma at the <span className="text-cyan-700 dark:text-amber-400 font-bold">Southern Alberta Institute of Technology</span>, where I've gained a strong foundation in <span className="text-cyan-700 dark:text-amber-400 font-bold">Java</span>, <span className="text-cyan-700 dark:text-amber-400 font-bold">HTML/CSS</span>, and <span className="text-cyan-700 dark:text-amber-400 font-bold">JavaScript</span>.
        </p>

        <p className="text-xl my-2">When I'm not coding, you can find me exploring the latest tech trends, gaming, or binging my favorite TV shows.</p>
        <p className="text-xl my-2">Let's Connect! Currently looking for full-time opportunities for 2023!</p>
      </div>
    </div>
  );
};

export default About;
