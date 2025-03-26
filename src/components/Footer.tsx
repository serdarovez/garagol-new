import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full   p-3 z-50  top-0 flex flex-col gap-5 justify-between items-center">
      <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
        <div className="hover:text-blue-500">Services</div>
        <div className="hover:text-blue-500">Process</div>
        <div className="hover:text-blue-500">Guarentees</div>
      </div>
      <img src={logo} alt="" className="w-48" />
    </div>
  );
};

export default Footer;
