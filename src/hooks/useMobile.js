import React, { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export default function useMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    const handleOnChange = (event) => {
        console.log("🚀 ~ handleOnChange ~ event:", event)
        setIsMobile(event.matches);
    };

    useEffect(() => {
        const mlq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

        mlq.addEventListener("change", handleOnChange);

        return () => {
            mlq.removeEventListener("change", handleOnChange);
        };
    },[]);

    return {isMobile};
}