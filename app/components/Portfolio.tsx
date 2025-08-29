"use client"

import { useState } from "react";


import Image from "next/image";

const baseProjects = [
    {
        id: 1,
        year: 2025,
        title: "Project 1",
        description: "react_essentiel",
        image: "/assets_perso/react_essentiel.png",
    },
    {
        id: 2,
        year: 2025,
        title: "Project 2",
        description: "invest_react",
        image: "/assets_perso/invest_react.png",
    },

];

const projects = [...baseProjects];

export const Portfolio = () => {
    const [selectProjects, setSelectProjects] = useState(baseProjects[0]);
    return (
        <section id="portfolio" className="text-white py-24 bg-gray-950 ">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10  ">
            <div className=" shadow-blue-950 shadow-lg rounded-xl p-4 ">
                <h2 className="text-6xl font-bold md-10 md:text-4xl ">Selected <span className="text-gray-400">Projects</span></h2>
                    {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectProjects(project)}
                        className="cursor-pointer group  mb-8 "
                    >
                        <p className="text-gray-400 text-lg mb-2 " >{project.year}</p>
                        <h3 className={`text-3xl font-semibold group-hover:text-blue-100 transition-colors
                        ${selectProjects.id === project.id ? "text-blue-950-" : ""} duration-500`}>
                            {project.title}
                        </h3>
                        {selectProjects.id === project.id && (
                            <div className="border-b-2 border-white my-4 "></div>
                        )}
                        {selectProjects.id === project.id && (
                            <p className=" text-blue-100 transition-all duration-500 ease-in-out ">
                                {project.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>

                <Image
                   src={selectProjects.image}
                   alt={selectProjects.title}
                   width={800}
                   height={450}
                   className="rounded-xl hover:scale-105 transition-all duration-500 "
                />
            </div>
        </section>
    );
}