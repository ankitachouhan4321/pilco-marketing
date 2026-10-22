
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        let attempts = 0;
        let timeoutId;

        const scrollToSection = () => {
            const id = decodeURIComponent(hash.slice(1));
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else if (attempts < 20) {
                attempts++;
                timeoutId = setTimeout(scrollToSection, 100);
            }
        };

        scrollToSection();

        return () => clearTimeout(timeoutId);
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;