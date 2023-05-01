import React from "react";

export default function About() {
  return (
    <div id="about" className="py-6 md:py-16 bg-white">
      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-1/2 border md:flex md:space-x-4">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Placeholder image"
            className="w-full md:w-auto mx-auto md:mx-0 shadow-lg rounded-xl"
          />
          <div className="flex-1 md:p-4">
            <h3 className="text-green-500 text-xl font-bold uppercase mt-4 md:mt-0">
              About Me
            </h3>
            <h1 className="text-gray-700 text-2xl font-bold mt-4">
              A dedicated Full-Stack Developer based in the USA 📌
            </h1>
            <p className="text-md text-gray-600 font-semibold mt-4">
              Hi, I&apos;m 2x1, a 13-year-old full-stack developer with a passion for
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
      <style jsx>{`
        #about {
          min-height: calc(100vh - 64px);
        }

        @media screen and (max-width: 640px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
