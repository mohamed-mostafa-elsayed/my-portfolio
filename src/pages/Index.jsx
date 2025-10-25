import React from "react";
import Header from "@/components/layout/Header";
import Home from "@/components/layout/Home";

export default function Index () {
    return(
        <div className={"w-screen h-screen"}>
            <Header/>
            <main className="pt-16">
                <Home />
            </main>
        </div>
    );
}