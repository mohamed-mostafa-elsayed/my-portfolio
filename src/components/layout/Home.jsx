import React from "react";

export default function Home() {
    return(
        <div className={" flex flex-col justify-center items-center mt-96 space-y-10 "}>

            <div
            className={" text-neutral-50 text-4xl md:text-6xl lg:text-7xl font-bold "}
            >
                Hi, I'm <span className={"gradient-text"}>Mohammed Mostafa</span>
            </div>

            <div className={"text-3xl md:text-4xl lg:text-6xl text-neutral-200"}
            >
               Full Stack Developer
            </div>

            <div className={" text-3xl text-center text-neutral-400"}
            >
                Building beautiful digital experiences with modern web technologies
            </div>

            <div className={" flex justify-center gap-7 md:gap-15 w-full"}>

                <button className={"cursor-pointer transition-all duration-300 hover:brightness-90 h-15 text-lg px-8 md:text-xl md:px-10  font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-neutral-50 rounded-2xl"}
                >
                    View My Work
                </button>

                <button className={"cursor-pointer transition-all duration-300 hover:bg-[var(--accent)] h-15 text-lg px-8 md:text-xl md:px-10  bg-black text-neutral-50 font-bold rounded-2xl"}>
                    Get In Touch
                </button>
            </div>
        </div>
    );
};