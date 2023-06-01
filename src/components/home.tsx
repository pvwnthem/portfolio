/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home () {
  return (
    <>
      <div id="home" className="flex flex-col bg-gray-100 justify-center h-screen">
        <div className="flex justify-center">
          <div className="md:w-1/2 w-full md:flex items-center">
            <img
              src="pfp1.jpg"
              alt="Placeholder image"
              className="w-1/3 shadow-lg mx-auto transform transition duration-300 ease-in hover:scale-110 hover:shadow-xl rounded-full"
            />
            <div className="md:ml-14 md:text-left text-center md:mt-0 mt-4 space-y-2">
              <h1 className="text-4xl font-bold break-words text-green-500 mb-2">
                Hey! I&apos;m 2x1 <img className="wave w-12 " alt="hand" src="hand.png"/>
              </h1>
              <p className="text-md font-semibold py-2 text-gray-700 break-words">
                I&apos;m a dedicated fullstack developer from the United States with over 2 years of experience. 
              </p>
              <div className="flex py-2 space-x-4 md:justify-normal justify-center ">
                <a href="">
                  <FaGithub className="text-4xl transform transition duration-300 ease-in hover:scale-125 rounded-full"/>
                </a>
                <a>
                  <FaLinkedin className="text-4xl transform transition duration-300 ease-in hover:scale-125  "/>
                </a>
                <a>
                  <FaYoutube className="text-4xl transform transition duration-300 ease-in hover:scale-125 "/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center flex flex-wrap justify-center items-center mt-4">
        <div className="text-xl font-semibold px-2">
            Tech Stack
          </div>
          <span className="font-bold text-xl mr-4 px-2">|</span>
  <div className="flex flex-wrap justify-center md:space-x-4 space-x-2 items-center">
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/ts.png" className="w-8" alt="TypeScript" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/js.png" className="w-8" alt="JavaScript" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/react.png" className="w-8" alt="React" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/nect.png" className="w-8" alt="Next.js" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/tw.png" className="w-8" alt="Tailwind CSS" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/python.png" className="w-8" alt="Python" />
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
      <img src="tech-stack/mongo.png" className="w-8" alt="MongoDB" />
    </div>
  </div>
</div>

      </div>
    </>
  );
}
