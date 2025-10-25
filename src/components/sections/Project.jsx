import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Element } from "react-scroll";

export default function Project() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with cart, payments, and admin dashboard",
            tags: ["React", "Node.js", "MongoDB"],
            gradient: "from-[var(--primary)] to-[var(--secondary)]"
        },
        {
            title: "Task Management App",
            description: "Collaborative task manager with real-time updates and team features",
            tags: ["React", "Firebase", "Tailwind"],
            gradient: "from-[var(--secondary)] to-[var(--accent)]"
        },
        {
            title: "Portfolio Generator",
            description: "Tool to create beautiful portfolio websites with customizable templates",
            tags: ["React", "TypeScript", "CSS"],
            gradient: "from-[var(--accent)] to-[var(--primary)]"
        },
        {
            title: "Weather Dashboard",
            description: "Beautiful weather app with forecasts, maps, and location-based data",
            tags: ["React", "API", "Charts"],
            gradient: "from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]"
        },
        {
            title: "Social Media App",
            description: "Modern social platform with posts, comments, and real-time messaging",
            tags: ["React", "GraphQL", "PostgreSQL"],
            gradient: "from-[var(--secondary)] to-[var(--primary)]"
        },
        {
            title: "Fitness Tracker",
            description: "Track workouts, nutrition, and progress with beautiful analytics",
            tags: ["React", "Charts", "PWA"],
            gradient: "from-[var(--accent)] via-[var(--primary)] to-[var(--secondary)]"
        },
    ];


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

                            <div className="flex md:gap-1 lg:justify-around">
                                <button
                                    className=" border border-neutral-400 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[var(--accent)] h-12 text-lg px-3 md:px-1  bg-black text-neutral-50 font-bold rounded-2xl lg:text-xl lg:px-8"
                                >
                                    <Github className="w-8 h-8 md:w-5 md:h-5" />
                                    <div>Code</div>
                                </button>

                                <button
                                    className="flex items-center justify-center lg:gap-3 cursor-pointer transition-all duration-300 hover:brightness-75 h-12 text-lg px-3 md:p-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-neutral-50 font-bold rounded-2xl lg:text-xl lg:px-8"
                                >
                                    <ExternalLink className="w-8 h-8 md:w-5 md:h-5" />
                                    <div>Demo</div>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
};