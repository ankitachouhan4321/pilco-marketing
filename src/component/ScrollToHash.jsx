
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        let timeoutId;

        if (hash) {
            const scrollToSection = (attempt = 0) => {
                const id = decodeURIComponent(hash.substring(1));
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                } else if (attempt < 20) {
                    timeoutId = setTimeout(
                        () => scrollToSection(attempt + 1),
                        100
                    );
                }
            };

            scrollToSection();
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }

        return () => clearTimeout(timeoutId);
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;
