import React from "react";

export default function About() {
  return (
    <div id="about" className="py-6 md:py-16 md:h-screen flex bg-white">
      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-1/2  md:flex md:space-x-4">
        <svg
                  className="w-1/2 text-green-600 md:mx-0 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 1L2 7V17L12 23L22 17V7L12 1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 13H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
          <div className="flex-1 md:p-4">
            <h3 className="text-green-500 md:px-0 px-2 text-xl font-bold uppercase mt-4 md:mt-0">
              About Me
            </h3>
            <h1 className="text-gray-700 md:px-0 px-2 text-2xl font-bold mt-4">
              A dedicated Full-Stack Developer based in the USA 📌
            </h1>
            <p className="text-md md:px-0 px-2 text-gray-600 font-semibold mt-4">
              Hi, I&apos;m 2x1, a young full-stack developer with a passion for
              backend development. With expertise in TypeScript, JavaScript,
              MongoDB, React, Tailwind, and other programming languages and
              tools, I am skilled at building robust and scalable web
              applications. As an avid learner, I am always exploring new
              technologies and staying up to date with the latest industry
              trends. Despite my age, I am always a driven and dedicated
              developer who is committed to honing my skills and creating
              innovative solutions to complex problems.
            </p>
          </div>
        </div>
      </div>    
    </div>
  );
}
