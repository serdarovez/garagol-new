import useScrollToElement from "../hooks/useScrollToElement";
import Cards from "../components/Cards";
import ConnectUs from "../components/ConnectUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gurantee from "../components/Gurantee";
import Home from "../components/Home";
import InfiniteScrollingText from "../components/InfinitiveText";
import Pricing from "../components/Pricing";

const Main = () => {
  // useScrollToElement();

  return (
    <div className="z-0">
      <Home />
      <Cards />
      <Pricing />
      <ConnectUs />
      <InfiniteScrollingText />
      <Gurantee />
      <Contact />
      <Footer type="black" />
    </div>
  );
};

export default Main;
