import Cards from "../components/Cards";
import ConnectUs from "../components/ConnectUs";
import Contact from "../components/Contact";
import Gurantee from "../components/Gurantee";
import Home from "../components/Home";

const Main = () => {
  return (
    <div className="min-h-screen ">
      <Home />
      <Cards />
      <ConnectUs />
      <Gurantee/>
      <Contact/>
    </div>
  );
};

export default Main;
