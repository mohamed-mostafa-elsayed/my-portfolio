import React from "react";
import { Element, Link } from "react-scroll";
import { skills } from "@/data/portfolio";

export default function Skills() {
    return (
        <Element name={"#skills"}>
            <div className="py-20 px-4 text-neutral-300">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-neutral-100">
                    Skills & <span className="gradient-text">Technologies</span>
                </h2>
                <p className="text-center text-neutral-200 mb-16 max-w-2xl mx-auto text-2xl">
                    Technologies I work with to bring ideas to life
                </p>

                <div className="flex flex-col items-center w-[70%] mx-auto space-y-16">
                    {skills.map((group, groupIndex) => (
                        <div key={groupIndex} className="w-full flex flex-col items-center">

                            {/* Technologies */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {group.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className={`text-2xl cursor-default 
                                            glass-card hover:glow-effect
                                            px-6 py-3 rounded-full 
                                            transition-all duration-300 animate-slide-up`}
                                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                                    >
                                        <span className="text-foreground font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Divider line (not after the last group) */}
                            {groupIndex < skills.length - 1 && (
                                <div className="bg-neutral-500/40 h-0.5 w-[70%] mx-auto mt-16 rounded-full"></div>
                            )}
                        </div>
                    ))}
                </div>


            </div>

        </Element>
    );
};