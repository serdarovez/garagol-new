import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location) return;

    const scrollToSection = (id: string) => {
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn(`Element #${id} not found!`);
        }
      };

      // Try scrolling after 1 animation frame + fallback
      requestAnimationFrame(() => {
        setTimeout(tryScroll, 0);
      });
    };

    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      scrollToSection(sectionId);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash) {
      const sectionId = location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [location]);
};

export default useScrollToElement;
