import React from "react";
import { projects, type project } from "@/constants/projects";
import { FaGithub } from 'react-icons/fa'

export default function ProjectBox({ project, index }: { project: project, index: number }) {
  return (
    <div className={`flex flex-col ${ index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-xl mt-6 h-96`}>
      
      <div className="md:w-1/2 p-4  flex justify-center items-center">
        {/* add project image or video */}
      </div>
      <div className="md:w-1/2 p-4  flex flex-col justify-center">
        <h1 className="font-bold text-lg uppercase text-gray-700 text-center mt-2">{project.title}</h1>
        <p className="mt-4 text-gray-500 px-8 break-words">{project.description}</p>
        <div className="mt-8 space-x-2 mx-auto">
          {project.tags.map((tag) => <span key={1} className="p-2 bg-white shadow-xl rounded-md ">{tag}</span>)}
        </div>
        <div className="flex w-full mt-4 h-full justify-end items-end">   
          <a href={project.sourcelink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-gray-700 transition">
            <FaGithub className="text-4xl" />
            <span className="ml-2">Source</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 ml-1">
              <path fill="currentColor" d="M16.59 9H9.41c-.65 0-1.18.53-1.18 1.18v4.64c0 .65.53 1.18 1.18 1.18h2.35v2.35c0 .65.53 1.18 1.18 1.18h1.18c.65 0 1.18-.53 1.18-1.18v-2.35h2.35c.65 0 1.18-.53 1.18-1.18v-4.64c0-.65-.53-1.18-1.18-1.18zm-6.35 6.35v-2.35h-2.35v2.35h2.35z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
