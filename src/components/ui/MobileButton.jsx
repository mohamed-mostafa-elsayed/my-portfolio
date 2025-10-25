import React from "react";
import { Menu, X } from "lucide-react";

export default function MobileButton({isMobileMenuOpen, setIsMobileMenuOpen}) {
    return (
         <button
            onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}}
            className={"cursor-pointer rounded-2xl text-amber-50 md:hidden h-10 w-10 hover:bg-[var(--accent)] hover:text-black flex justify-center items-center"}
            >
               {isMobileMenuOpen ? <X /> : <Menu />}

            </button>
    );
};