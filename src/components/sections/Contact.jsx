import React from "react";
import { Element } from "react-scroll";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
    return (
        <Element name="#contact">
            <div className={`flex flex-col justify-center items-center py-20 px-4`}>
                <h2 className="text-3xl md:text-6xl font-bold text-center mb-4 text-neutral-100">
                    Get In & <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-center text-neutral-200 mb-16 max-w-2xl mx-auto text-lg md:text-3xl mt-10">
                    Have a project in mind? Let's work together to create something amazing
                </p>


                <div className={`flex flex-col gap-10 `}>

                    <a
                        onClick={() => { window.location.href = "mailto:mohammed.mostafa.elsied@gmail.com" }}
                        className="p-4 md:p-10 glass-card rounded-2xl hover:scale-105 hover:glow-effect transition-transform duration-300 animate-slide-up cursor-pointer"
                    >
                        <div className={`flex justify-start items-center gap-5 md:gap-15`}>
                            <Mail className={`
                                    w-14 h-14 md:h-20 md:w-20
                                    text-neutral-200  mb-4 p-4 rounded-2xl
                                    bg-[var(--accent)]
                                    `} />
                            <div>
                                <h3 className="text-lg md:text-2xl font-bold mb-2 text-neutral-50">Email Me</h3>
                                <p className=" text-sm md:text-xl font-semibold text-neutral-300">{personalInfo.email}</p>
                                
                            </div>

                        </div>

                    </a>

                    <a
                        href={personalInfo.social.whatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-10 glass-card rounded-2xl hover:scale-105 hover:glow-effect transition-transform duration-300 animate-slide-up"
                    >
                        <div className={`flex justify-start items-center gap-5 md:gap-15`}>
                            <MessageCircleMore  className={`  
                                    w-14 h-14 md:h-20 md:w-20
                                    text-neutral-200  mb-4 p-4 rounded-2xl
                                    bg-[var(--accent)]
                                    `} />
                            <div>
                                <h3 className=" text-lg md:text-2xl  font-bold mb-2 text-neutral-50">Let's Chat</h3>
                                <p className="  md:text-xl font-semibold text-neutral-300 mb-1">{personalInfo.phone}</p>

                                <p className="md:text-xl text-neutral-300">Available for freelance</p>
                            </div>

                        </div>
                    </a>

                    <div className="flex justify-around text-neutral-100">
                        <a
                            href={personalInfo.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                        >
                            <Twitter  className="w-6 h-6 md:w-10 md:h-10"/>
                        </a>

                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={` hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                        >
                            <Linkedin  className="w-6 h-6 md:w-10 md:h-10" />
                        </a>

                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={` hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                        >
                            <Github  className="w-6 h-6 md:w-10 md:h-10" />
                        </a>
                    </div>

                </div>


            </div>
        </Element>
    );
};