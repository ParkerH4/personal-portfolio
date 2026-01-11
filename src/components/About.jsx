import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">About</h2>
        </div>

        <p className="text-md sm:text-xl my-2">
          Hi! My name is <span className="text-cyan-700 dark:text-amber-400 font-bold">Parker</span>, and I'm a software developer with a passion for solving complex problems. I'm currently in my last year pursuing a <span className="text-cyan-700 dark:text-amber-400 font-bold">Bachelor of Science in Computer Science</span> at the <span className="text-cyan-700 dark:text-amber-400 font-bold">University of Lethbridge</span>. I have proficiency in object-oriented languages such as <span className="text-cyan-700 dark:text-amber-400 font-bold">Java</span>, and <span className="text-cyan-700 dark:text-amber-400 font-bold">C#</span>. Also a solid foundation in <span className="text-cyan-700 dark:text-amber-400 font-bold">SQL</span>,<span className="text-cyan-700 dark:text-amber-400 font-bold">HTML/CSS</span>, and <span className="text-cyan-700 dark:text-amber-400 font-bold">JavaScript</span>.
        </p>

        <p className="text-md sm:text-xl my-2">
          In addition to software development, you can find me exploring the latest tech trends, gaming, or binging my favorite TV shows. I'm currently seeking <span className="text-cyan-700 dark:text-amber-400 font-bold">Full-Time/Co-op </span> software development opportunities for 2026/2027, where I can apply my skills and continue to grow as a developer.
        </p>

        <p className="text-md sm:text-xl my-2">Let's Connect!</p>
      </div>
    </div>
  );
};

export default About;