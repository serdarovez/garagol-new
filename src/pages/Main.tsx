import Cards from "../components/Cards";
import ConnectUs from "../components/ConnectUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gurantee from "../components/Gurantee";
import Home from "../components/Home";
import InfiniteScrollingText from "../components/InfinitiveText";

const Main = () => {
  return (
    <div className="z-0 ">
      {/* <Navbar//> */}
      <Home />
      <Cards />
      <InfiniteScrollingText />
      <ConnectUs />
      <Gurantee />
      <Contact />
      <Footer type='black'/>
    </div>
  );
};

export default Main;
