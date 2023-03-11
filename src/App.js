import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Socials from "./components/Socials";

function App() {
  const [theme, setTheme] = useState(null);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button type="button" onClick={handleThemeSwitch} className="fixed invisible"></button>
      <div className="bg-stone-300 text-stone-700 dark:text-white dark:bg-gradient-to-r from-cyan-900 to-cyan-700  ">
        <Navbar />
        <Home />
        <Socials />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
