import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 100; // match your fixed navbar height

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scrollToElement = () => {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: y,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };

    // Delay ensures DOM + animations are ready
    requestAnimationFrame(() => {
      setTimeout(scrollToElement, 80);
    });
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
