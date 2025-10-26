import React from "react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="text-2xl py-8 text-center text-neutral-100 border-t border-neutral-400">
            <p>© 2025 {personalInfo.name}. Built with React & Tailwind CSS</p>
        </footer>
    );
};