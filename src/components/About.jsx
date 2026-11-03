
import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">About</h2>
        </div>

        <p className="text-md sm:text-xl my-2">
          Hi! My name is <span className="text-cyan-700 dark:text-amber-400 font-bold">Parker</span>, and I'm a software developer currently finishing my <span className="text-cyan-700 dark:text-amber-400 font-bold">Bachelor of Science in Computer Science</span> at the <span className="text-cyan-700 dark:text-amber-400 font-bold">University of Lethbridge</span>. I also graduated from SAIT's Software Development program in 2023.
        </p>

        <p className="text-md sm:text-xl my-2">
          Through my co-op experience at <span className="text-cyan-700 dark:text-amber-400 font-bold">Interpro Pipe & Steel</span>, I've gained hands-on experience maintaining and improving internal applications using <span className="text-cyan-700 dark:text-amber-400 font-bold">C#, Visual Basic, and SQL</span>. My work has included implementing new features, troubleshooting issues, and working with databases in a professional development environment.
        </p>

        <p className="text-md sm:text-xl my-2">
          Outside of programming, I enjoy keeping up with technology, gaming, watching movies, and staying active. With graduation approaching in December 2026, I'm excited to take the next step in my career and am currently looking for <span className="text-cyan-700 dark:text-amber-400 font-bold">full-time software development opportunities</span>.
        </p>

        <p className="text-md sm:text-xl my-2">Let's Connect!</p>
      </div>
    </div>
  );
};

export default About;
