import React from "react";
import { Element } from "react-scroll";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
    return (
        <Element name="#contact">
            <div className={`flex flex-col justify-center items-center py-20 px-4`}>
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-neutral-100">
                    Get In & <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-center text-neutral-200 mb-16 max-w-2xl mx-auto text-2xl mt-15">
                    Have a project in mind? Let's work together to create something amazing
                </p>

                <div className={` flex flex-row  `}>
                    <div className={`flex flex-col justify-between gap-10`}>

                        <a
                            onClick={() => { window.location.href = "mailto:mohammed.mostafa.elsied@gmail.com"}}
                            className="p-10 glass-card rounded-2xl hover:scale-105 hover:glow-effect transition-transform duration-300 animate-slide-up cursor-pointer"
                        >
                            <div className={`flex justify-center items-center gap-15`}>
                                <Mail size={70} className={`
                                    text-neutral-200  mb-4 p-4 rounded-2xl
                                    bg-[var(--accent)]
                                    `} />
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-neutral-50">Email Me</h3>
                                    <p className="text-xl font-semibold text-neutral-300">{personalInfo.email}</p>
                                </div>

                            </div>

                        </a>

                        <a
                            href={personalInfo.social.whatsApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-10 glass-card rounded-2xl hover:scale-105 hover:glow-effect transition-transform duration-300 animate-slide-up"
                        >
                            <div className={`flex justify-start items-center gap-15`}>
                                <MessageCircleMore size={70} className={`
                                    text-neutral-200  mb-4 p-4 rounded-2xl
                                    bg-[var(--accent)]
                                    `} />
                                <div>
                                    <h3 className="text-2xl  font-bold mb-2 text-neutral-50">Let's Chat</h3>
                                    <p className="text-xl font-semibold text-neutral-300 mb-1">{personalInfo.phone}</p>

                                    <p className="text-xl text-neutral-300">Available for freelance</p>
                                </div>

                            </div>
                        </a>

                        <div className="flex justify-around text-neutral-100">
                            <a
                                href={personalInfo.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={` hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                            >
                                <Twitter size={45} />
                            </a>

                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={` hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                            >
                                <Linkedin size={45} />
                            </a>

                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={` hover:text-[var(--accent)] hover:scale-105 hover:glow-effect`}

                            >
                                <Github size={45} />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </Element>
    );
};