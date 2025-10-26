import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Element } from "react-scroll";
import { projects } from "@/data/portfolio";

export default function Projects() {

    return (
        <Element name="#projects" className="py-20 px-4 bg-card/30 w-full h-full">
            <div className="w-[70%] mx-auto">

                <div className="text-4xl md:text-6xl font-bold text-center mb-4 text-neutral-100">
                    Featured <span className="gradient-text">Projects</span>
                </div>

                <p className="text-center text-neutral-200 mb-16 max-w-2xl mx-auto text-2xl">
                    Some of my recent work and side projects
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group animate-slide-up"
                        >
                            <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-6 group-hover:w-full transition-all duration-500`}></div>

                            <h3 className="text-2xl font-semibold mb-3 text-neutral-100">{project.title}</h3>
                            <p className="text-xl mb-4 leading-relaxed text-neutral-200">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 text-[var(--primary)]">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 text-neutral-200 text-2xs rounded-full border border-[var(--primary)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-around">
                                <a
                                    href={project.hrefGitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                      bg-black text-neutral-50 font-bold
                                        border border-neutral-400 rounded-2xl
                                        cursor-pointer 
                                        transition-all duration-300 hover:bg-[var(--accent)] 
                                        h-12 text-lg px-3 py-2
                                        lg:text-xl lg:px-8 lg:py-2`}
                                >
                                    <button className={`flex items-center justify-center lg:gap-3`}>
                                        <Github className="w-6 h-6 md:w-5 md:h-5" />
                                        <div className="md:hidden xl:flex">Code</div>
                                    </button>
                                </a>


                                <a
                                    href={project.hrefDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-neutral-50
                                        cursor-pointer rounded-2xl font-bold
                                        transition-all duration-300 hover:brightness-75 
                                        h-12 text-lg px-3 py-2
                                        lg:text-xl lg:px-8 lg:py-2 `}

                                >
                                    <button className={`flex items-center justify-center lg:gap-3`}>
                                        <ExternalLink className="w-6 h-6 md:w-4 md:h-4" />
                                        <div className="md:hidden lg:hidden xl:flex">Demo</div>
                                    </button>
                                </a>


                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
};