import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full bg-white p-3 z-50  top-0 flex justify-between items-center">
      <img src={logo} alt="" className="w-58" />
      <div>
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
          <div
            className="
          hover:text-blue-500
          "
          >
            Showcase
          </div>
          <div  className="hover:text-blue-500">
            Services
          </div>
          <div  className="hover:text-blue-500">
            Process
          </div>
          <div  className="hover:text-blue-500">
            Guarentees
          </div>
          <Button title="Book a call" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
