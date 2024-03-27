import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-8">
          <h2 className="text-3xl sm:text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">Contact</h2>
        </div>

        <p className="text-md sm:text-xl p-4 my-2">Ready to take the next step in my career journey, I'm currently seeking full-time opportunities for 2024. If you have something in mind or just want to chat, please don't hesitate to reach out!</p>
        <a href="mailto:parkerhewitt95@gmail.com" className="text-white text-md sm:text-xl bg-cyan-700 dark:bg-orange-400 px-6 py-6 my-8 mx-auto rounded-md hover:scale-110 duration-500">
          Connect with Me!
        </a>
      </div>
    </div>
  );
};

export default Contact;
