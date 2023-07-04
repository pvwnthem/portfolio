import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects, project as ProjectType } from "@/constants/projects";

interface ProjectBoxProps {
  project: ProjectType;
  index: number;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ project, index }) => {
  const isEvenIndex = index % 2 === 0;
  const flexRowClass = isEvenIndex ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <div className={`flex flex-col md:flex-row ${flexRowClass} bg-white rounded-xl mt-6 h-auto md:h-96`}>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img src={project.imageLink} alt="project image" className="rounded-xl py-4 w-full md:px-8" />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h1 className="font-bold text-lg uppercase text-gray-700 text-center mt-2">{project.title}</h1>
        <div className="mt-4 text-gray-500 break-words overflow-y-auto max-h-48">{project.description}</div>
        {project.liveDemo && (
          <a className="mt-2 text-blue-600 hover:underline" href={project.liveDemo}>
            {project.liveDemo}
          </a>
        )}
        <div className="mt-4 flex flex-wrap">
          {project.tags.map((tag, index) => (
            <span key={index} className="p-2 bg-white shadow-xl rounded-md mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex w-full mt-4 justify-center">
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 hover:text-gray-700 transition"
          >
            <FaGithub className="text-4xl" />
            <span className="ml-2 px-2">Source</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
