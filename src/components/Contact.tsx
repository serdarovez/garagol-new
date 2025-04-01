import { useState } from "react";
import Button from "./Button";
import random1 from "../assets/1.svg";
import random2 from "../assets/2.svg";
import random3 from "../assets/3.svg";
import random4 from "../assets/4.svg";
import random5 from "../assets/5.svg";
import random6 from "../assets/6.svg";

const Contact = () => {
  const buttons = [
    "Web & Mobile Development",
    "Design & Branding",
    "Data & Cloud Solutions",
    "Security & IT Consulting",
    "Something else",
  ];

  const [svgImages] = useState([
    random1,
    random2,
    random3,
    random4,
    random5,
    random6,
  ]);
  const [selectedButtons, setSelectedButtons] = useState<
    { button: string; svg: any }[]
  >([]);
  const [usedSvgs, setUsedSvgs] = useState<any[]>([]);

  const getRandomSvg = () => {
    const availableSvgs = svgImages.filter((svg) => !usedSvgs.includes(svg));
    if (availableSvgs.length === 0) return null; // No more SVGs available

    const randomIndex = Math.floor(Math.random() * availableSvgs.length);
    const selectedSvg = availableSvgs[randomIndex];
    setUsedSvgs([...usedSvgs, selectedSvg]);
    return selectedSvg;
  };

  const returnSvgToPool = (svg: any) => {
    setUsedSvgs(usedSvgs.filter((s) => s !== svg));
  };

  const toggleButton = (button: string) => {
    const existingIndex = selectedButtons.findIndex(
      (item) => item.button === button
    );

    if (existingIndex >= 0) {
      // Button is already selected, so deselect it
      const removedItem = selectedButtons[existingIndex];
      returnSvgToPool(removedItem.svg);
      setSelectedButtons(
        selectedButtons.filter((item) => item.button !== button)
      );
    } else {
      // Button is not selected, so select it with a random SVG
      const randomSvg = getRandomSvg();
      if (randomSvg) {
        setSelectedButtons([...selectedButtons, { button, svg: randomSvg }]);
      }
    }
  };

  const isButtonSelected = (button: string) => {
    return selectedButtons.some((item) => item.button === button);
  };

  const getButtonSvg = (button: string) => {
    const selected = selectedButtons.find((item) => item.button === button);
    return selected ? selected.svg : null;
  };

  return (
    <div>
      <div className="min-h-screen bg-[#8675F2] p-10 text-white flex flex-col">
        <div className="p-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-[700] mb-5">
            How can we help you?
          </h3>
          <p className="mb-4 font-[400] text-xl">
            Tell us what you need, and we'll go the extra mile to help you
            succeed.
          </p>
          <div className="grid mt-20 grid-cols-2 gap-5">
            <div className="">
              <div className="relative mb-10 p-3">
                <span className="absolute text-[#EDD750] font-[AtkinsonItalic] text-8xl left-0 -top-5">
                  1
                </span>
                <div className="text-3xl z-2 relative font-[700]">
                  I'm interested in...
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {buttons.map((button) => (
                  <div
                    key={button}
                    className={`w-full p-3 h-12 border-box hover:bg-[#242424] hover:text-white hover:border-black text-black cursor-pointer border flex justify-between items-center ${
                      isButtonSelected(button) ? "bg-[#EDD750]" : "bg-white"
                    }`}
                    onClick={() => toggleButton(button)}
                  >
                    {button}
                    {isButtonSelected(button) && (
                      <div className="bg-white p-1 border">
                        <img
                          src={getButtonSvg(button)}
                          alt="Selected"
                          className="w-5 h-5"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative mb-10 p-3">
                <span className="absolute text-[#EDD750] text-8xl left-0 -top-5">
                  2
                </span>
                <div className="text-3xl relative font-[700]">
                  Add more details
                </div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <input
                  className="bg-white text-black p-3 border"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="bg-white text-black p-3 border"
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
                  class="text-center w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
