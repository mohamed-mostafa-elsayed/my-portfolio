import React from "react";
import { Code2, Palette, Rocket } from "lucide-react";
import { Element } from "react-scroll";

export default function About() {

    const features = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable and scalable code following best practices"
        },
        {
            icon: Palette,
            title: "Creative Design",
            description: "Crafting beautiful user interfaces with attention to detail"
        },
        {
            icon: Rocket,
            title: "Fast Performance",
            description: "Optimizing for speed and delivering exceptional user experiences"
        }
    ];

    return (
        <Element
        name={"#about"}
        className={" flex flex-col justify-center items-center mt-40 space-y-10 "}>

            <div className={" text-neutral-50 text-4xl md:text-6xl lg:text-7xl font-bold mt-96 "}>
                abo <span className={"gradient-text"} >me</span>
            </div>

            <div className={"text-neutral-100 text-2xl md:text-3xl text-center"} >
                Passionate about creating exceptional digital experiences</div>

            <div className={"glass-card rounded-3xl mb-12 animate-slide-up text-2xl text-neutral-200 text-center p-8 md:p-12 w-[70%]"}>

                <p className="mb-10">
                    I'm a creative developer with a passion for building beautiful and functional web applications. With expertise in modern technologies and a keen eye for design, I bring ideas to life through code.
                </p>

                <p className="">
                    My approach combines technical excellence with creative thinking to deliver solutions that not only work flawlessly but also provide delightful user experiences.
                </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-52 w-[70%]">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 md:p-12 glass-card rounded-2xl hover:scale-105 hover:glow-effect transition-transform duration-300 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <feature.icon className=" w-16 h-16 text-[var(--primary)] mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-neutral-100">{feature.title}</h3>
                        <p className="text-xl text-neutral-200">{feature.description}</p>
                    </div>
                ))}
            </div>

        </Element>
    );
};