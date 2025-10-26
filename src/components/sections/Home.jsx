import React from "react";
import { personalInfo } from "@/data/portfolio";
import { Link } from "react-scroll";

export default function Home() {

    const OpenPdfButton = () => {
        const pdfUrl = "./src/data/Mohammed-Mostafa-CV.pdf";
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
    }

    return (
        <div className={" flex flex-col justify-center items-center mt-96 space-y-10 "}>

            <div
                className={" text-neutral-50 text-4xl md:text-6xl lg:text-7xl font-bold "}
            >
                Hi, I'm <span className={"gradient-text"}>{personalInfo.name}</span>
            </div>

            <div className={"text-3xl md:text-4xl lg:text-6xl text-neutral-200"}
            >
                {personalInfo.title}
            </div>

            <div className={" text-3xl text-center text-neutral-400 w-[40ch] md:w-[50ch] lg:w-[60ch]"}
            >
                {personalInfo.bio}
            </div>

            <div className={" flex justify-center gap-7 md:gap-15 w-full"}>
                <Link>
                    <button 
                    onClick={() => {OpenPdfButton()}}
                    className={"cursor-pointer transition-all duration-300 hover:brightness-90 h-15 text-lg px-8 md:text-xl md:px-10  font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-neutral-50 rounded-2xl"}
                    >
                        View My CV
                    </button>
                </Link>

                <Link to={"#contact"}>
                    <button className={"cursor-pointer transition-all duration-300 hover:bg-[var(--accent)] h-15 text-lg px-8 md:text-xl md:px-10  bg-black text-neutral-50 font-bold rounded-2xl border border-neutral-400"}>
                        Get In Touch
                    </button>
                </Link>
            </div>
        </div>
    );
};