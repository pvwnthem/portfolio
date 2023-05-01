/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About () {
  return (
    <>
     <div className="w-full h-screen py-16 bg-white md:flex flex-col items-center justify-center">
        <div className="md:w-1/2 w-full md:space-x-14 space-x-2 md:px-0 px-2 border md:flex">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Placeholder image"
              className="w-lg md:mx-0 mx-auto shadow-lg rounded-xl"
            />
            <div className="flex-col md:p-4">
              <h3 className=" uppercase mt-4 text-green-500 text-xl font-bold">about me</h3>
              <h1 className="mt-4 font-bold text-gray-700 text-2xl">A dedicated Full-Stack Developer based in the USA 📌</h1>
              <p className="mt-4 text-md text-gray-600 font-semibold">
              Hi im 2x1, a 13-year-old full stack developer with a passion for backend development. With expertise in TypeScript, JavaScript, MongoDB, React, Tailwind, and other programming languages and tools, I am skilled at building robust and scalable web applications. As an avid learner, i am always exploring new technologies and staying up to date with the latest industry trends. Despite my age, I am always a driven and dedicated developer who is committed to honing my skills and creating innovative solutions to complex problems.
              </p>
            </div>
            
        </div>
     </div>
    </>
  );
}
