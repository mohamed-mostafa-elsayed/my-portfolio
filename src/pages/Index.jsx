import React from "react";
import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";

export default function Index () {
    return(
        <div className={"relative w-screen h-screen"}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(@/assets/images/hero-bg.jpg)] filter blur-sm brightness-50"></div>

            <div className={"relative z-10 w-screen h-screen"}>
                <Header/>
                <main className="pt-16">
                    <Home />
                    <About />
                    <Project />
                </main>
            </div>

        </div>
    );
}