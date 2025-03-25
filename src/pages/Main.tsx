import Cards from "../components/Cards";
import ConnectUs from "../components/ConnectUs";
import Home from "../components/Home";

const Main = () => {
  return (
    <div className="min-h-screen ">
      <Home />
      <Cards />
      <ConnectUs />
    </div>
  );
};

export default Main;
