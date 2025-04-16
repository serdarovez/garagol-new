import { useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import ConnectUs from "../components/ConnectUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gurantee from "../components/Gurantee";
import Home from "../components/Home";
import InfiniteScrollingText from "../components/InfinitiveText";
import { useEffect } from "react";
import Pricing from "../components/Pricing";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    // Handle scrolling after navigation from another page
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }

      // Clear the navigation state to prevent scrolling on browser back/forward
      window.history.replaceState({}, document.title);
    }
    // Also handle direct URL navigation with hash
    else if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="z-0 ">
      {/* <Navbar//> */}
      <Home />
      <Cards />
      <Pricing/>
      <ConnectUs />
      <InfiniteScrollingText />
      <Gurantee />
      <Contact />
      <Footer type="black" />
    </div>
  );
};

export default Main;
