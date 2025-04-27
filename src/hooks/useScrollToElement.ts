import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Optional fallback: scroll to top if element not found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
      // Only clear the history once
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash) {
      const sectionId = location.hash.substring(1);
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    }
  }, [location]);
};

export default useScrollToElement;
