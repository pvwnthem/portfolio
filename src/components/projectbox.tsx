import React from "react";
import { projects, type project } from "@/constants/projects";
import { FaGithub } from 'react-icons/fa'

export default function ProjectBox({ project, index }: { project: project, index: number }) {
  return (
    <div className={`flex flex-col ${ index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-xl mt-6 h-96`}>
      
      <div className="md:w-1/2 p-4  flex justify-center items-center">
        <img src={project.imageLink} className="rounded-xl" />
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
            <span className="ml-2 px-2">Source</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

          </a>
        </div>
      </div>
    </div>
  )
}
