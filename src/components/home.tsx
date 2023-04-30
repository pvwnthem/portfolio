import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube, FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa'

export default function Home () {
    return (
        <>
        <div className="flex justify-center items-center h-screen ">
            <div className="w-1/2 md:flex items-center ">
            <img
        src="https://via.placeholder.com/300x300"
        alt="Placeholder image"
        className="w-lg shadow-lg  transform transition duration-300 ease-in hover:scale-110 hover:shadow-xl  rounded-full"
      />
      <div className="ml-14 space-y-2">
        <h1 className="text-4xl font-bold break-words text-green-500 mb-2">
          Hey! I'm 2x1 <img className="wave w-12 " src="hand.png"/>
        </h1>
        <p className="text-sm text-gray-700 break-all">
          I'm a dedicated fullstack developer from the United States with over 2 years of experience. 
        </p>
        <div className="flex mt-2 space-x-4">
          <a href="">
            <FaGithub className="text-3xl transform transition duration-300 ease-in hover:scale-125 shadow-lg rounded-full"/>
          </a>
          <a>
            <FaLinkedin className="text-3xl transform transition duration-300 ease-in hover:scale-125 shadow-lg "/>
          </a>
          <a>
            <FaYoutube className="text-3xl transform transition duration-300 ease-in hover:scale-125 shadow-lg "/>
          </a>
        </div>
      </div>
            </div>
        </div>
        </>
    )
}