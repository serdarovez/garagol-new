import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const buttons = [
    "Web & Mobile Development",
    "Design & Branding",
    "Data & Cloud Solutions",
    "Security & IT Consulting",
    "Something else",
  ];

  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className=" min-h-screen  bg-[#8675F2] p-10 text-white  flex flex-col">
        <div className="p-10  ">
          <h3 className=" text-4xl md:text-5xl lg:text-6xl font-[700] mb-5">
            How can we help you?
          </h3>
          <p className=" mb-4 font-[400] text-xl">
            Tell us what you need, and we’ll go the extra mile to help you
            succeed.
          </p>
          <div className="grid mt-20 grid-cols-2 gap-5">
            <div className="">
              <div className="relative mb-10 p-3 ">
                <span className="absolute text-[#EDD750] font-[AtkinsonItalic] z-1 text-8xl  left-0 -top-5 ">
                  1
                </span>
                <div className="text-3xl z-2 font-[700]">
                  I’m interested in...
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                {buttons.map((button) => (
                  <div
                    className={` w-full p-3 text-black cursor-pointer border ${
                      selected === button ? "bg-[#EDD750]" : "bg-white"
                    } `}
                    onClick={() => setSelected(button)}
                  >
                    {button}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative mb-10 p-3 ">
                <span className="absolute text-[#EDD750] text-8xl  left-0 -top-5 ">
                  2
                </span>
                <div className="text-3xl  font-[700]">Add more details</div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <input
                  className="bg-white  text-black p-3 border"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="bg-white  text-black p-3 border"
                  type="text"
                  placeholder="Email"
                />
                <textarea
                  className="bg-white border text-black h-42 p-3"
                  placeholder="Is there anything else we should know or get ready?"
                />
                <Button
                  variant="primary"
                  title="Send message"
                  class=" text-center w-full"
                />
              </div>
            </div>
          </div>
          {/* <Button title="Send us a message" class=" mt-10" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
