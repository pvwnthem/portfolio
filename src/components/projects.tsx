import React from "react";
import { projects, type project } from "@/constants/projects";
import ProjectBox from "./projectbox";

export default function Projects () {
    return (
        <>
            <div id="projects" className="w-full py-16 bg-gray-100 md:flex flex-col items-center justify-center">
                <div className="md:w-1/2 w-full flex-col md:px-0 px-2">
                    <h3 className=" uppercase mt-4 text-green-500 text-xl font-bold">PORTFOLIO</h3>
                    <h1 className="mt-4 font-bold text-gray-700 text-2xl">A Collection Of My Public Projects 🧑‍💻</h1>
                    {projects.map((project: project, j: number) => {
                        return (
                            <>
                                <ProjectBox project={project} index={j}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}