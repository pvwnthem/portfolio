import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube, FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa'

export default function Home () {
  return (
    <>
      <div className="flex flex-col bg-gray-100 justify-center h-screen">
        <div className="flex justify-center">
          <div className="md:w-1/2 w-full md:flex items-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Placeholder image"
              className="w-lg shadow-lg mx-auto transform transition duration-300 ease-in hover:scale-110 hover:shadow-xl rounded-full"
            />
            <div className="md:ml-14 md:text-left text-center md:mt-0 mt-4 space-y-2">
              <h1 className="text-4xl font-bold break-words text-green-500 mb-2">
                Hey! I&apos;m 2x1 <img className="wave w-12 " src="hand.png"/>
              </h1>
              <p className="text-md font-semibold py-2 text-gray-700 break-words">
                I&aposm a dedicated fullstack developer from the United States with over 2 years of experience. 
              </p>
              <div className="flex py-2 space-x-4 md:justify-normal justify-center ">
                <a href="">
                  <FaGithub className="text-4xl transform transition duration-300 ease-in hover:scale-125 shadow-lg rounded-full"/>
                </a>
                <a>
                  <FaLinkedin className="text-4xl transform transition duration-300 ease-in hover:scale-125 shadow-lg "/>
                </a>
                <a>
                  <FaYoutube className="text-4xl transform transition duration-300 ease-in hover:scale-125 shadow-lg "/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center space-y-2 flex flex-wrap justify-center items-center mt-4">
        <div className="text-xl mt-2 font-semibold px-2">
            Tech Stack
          </div>
          <span className="font-bold text-xl mr-4 px-2">|</span>
  <div className="flex flex-wrap justify-center items-center">
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
