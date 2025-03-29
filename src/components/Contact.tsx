import { Squircle } from "react-ios-corners";
import Button from "./Button";

const Contact = () => {
  return (
    <div>
      <Squircle radius={80} className="  rounded-[100px] p-10 shadow-md font-[400] max-w-7xl mx-auto my-30 w-full bg-[#E1A631] text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="p-10 flex-1 w-3/5 ">
          <h3 className="text-3xl font-bold  mb-5">
            Ready to build something secure, scalable, and extraordinary?
          </h3>
          <p className=" mb-4 text-xl">
            Get in touch with our global team to see how we can deliver
            innovative solutions that fit your budget and protect your data at
            every step.
          </p>

          {/* <Button title="Send us a message" class=" mt-10" /> */}
        </div>
      </Squircle>
    </div>
  );
};

export default Contact;
