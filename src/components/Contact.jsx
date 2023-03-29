import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-8">
          <h2 className="text-4xl text-cyan-700 dark:text-white font-bold inline border-b-4 border-cyan-700 dark:border-amber-500">Contact</h2>
        </div>

        <div className="flex justify-center items-center py-5">
          <form name="contact" method="POST" netlify data-netlify="true" onSubmit="submit" className=" flex flex-col md:w-1/2">
            <input type="text" name="name" required placeholder="Enter your name" className="p-2 bg-white border-2  text-black focus:outline-none" />
            <input type="email" name="email" required placeholder="Enter your email" className="my-4 p-2 bg-white border-2  text-black focus:outline-none" />
            <textarea name="message" placeholder="Enter your message" required rows="10" className="p-2 bg-white border-2  text-black focus:outline-none"></textarea>
            <button type="submit" className="text-white bg-cyan-700 dark:bg-orange-400 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-500">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
