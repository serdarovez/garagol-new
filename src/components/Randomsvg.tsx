import random1 from "../assets/1.svg";
import random2 from "../assets/2.svg";
import random3 from "../assets/3.svg";
import random4 from "../assets/4.svg";
import random5 from "../assets/5.svg";
import random6 from "../assets/6.svg";
import random7 from "../assets/7.svg";
import random8 from "../assets/8.svg";
import random9 from "../assets/9.svg";
import random10 from "../assets/10.svg";
import random11 from "../assets/11.svg";
import random12 from "../assets/12.svg";
import random13 from "../assets/13.svg";
import random14 from "../assets/14.svg";

const Randomsvg = () => {
  // Create an array of all the imported SVGs
  const svgs = [
    random1,
    random2,
    random3,
    random4,
    random5,
    random6,
    random7,
    random8,
    random9,
    random10,
    random11,
    random12,
    random13,
    random14,
  ];

  // Select a random SVG from the array
  const randomSvg = svgs[Math.floor(Math.random() * svgs.length)];

  // Return the selected SVG as an image
  return <img src={randomSvg} alt="selected" className="w-8 h-8" />;
};

export default Randomsvg;
