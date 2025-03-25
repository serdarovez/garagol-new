import Navbar from "./components/Navbar";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className=" ">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <Main />
    </div>
  );
};

export default App;
