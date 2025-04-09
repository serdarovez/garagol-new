import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import random1 from "../assets/1.svg";
import random2 from "../assets/2.svg";
import random3 from "../assets/3.svg";
import random4 from "../assets/4.svg";
import random5 from "../assets/5.svg";
import random6 from "../assets/6.svg";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/typing.json";
import { motion } from "framer-motion";

const Contact = () => {
  const buttons = [
    "Web & Mobile Development",
    "Design & Branding",
    "Data & Cloud Solutions",
    "Security & IT Consulting",
    "Discovery Call",
    "Something else",
  ];

  const serviceDescriptions: Record<string, string[]> = {
    "Web & Mobile Development": [
      "Do you need a brand-new build or an upgrade to an existing site/app?",
      "What platforms do you want to target—web, mobile, or both?",
      "Are there any competitor sites or apps that inspire your vision?",
    ],
    "Design & Branding": [
      "Are you looking for a complete rebrand or just a refresh of your current design?",
      "Do you have existing brand guidelines or visual assets that we should follow?",
      "Are there any brands or designs you admire as a reference?",
    ],
    "Data & Cloud Solutions": [
      "What are the primary data challenges you're currently facing?",
      "Are there specific cloud providers you prefer (AWS, Azure, Google Cloud)?",
      "What performance and scalability requirements do you have for your data systems?",
    ],
    "Security & IT Consulting": [
      "What are your main concerns regarding your current IT security setup?",
      "Are you looking for a one-time security assessment or ongoing IT support?",
      "Is your IT infrastructure hosted on-premises, in the cloud, or a hybrid solution?",
    ],
    "Discovery Call": [
      "What motivated you to schedule a discovery call with us today?",
      "Are there any particular projects or initiatives you'd like to discuss?",
      "How do you define success for your upcoming project?",
    ],
    "Something else": [
      "Can you briefly describe the project or idea you have in mind?",
      "What are the main goals you wish to achieve with this project?",
      "Are there any projects or designs that you find particularly inspiring?",
    ],
    multiple: [
      "What overall goals are you aiming to achieve with these combined services?",
      "What current challenges or pain points do you hope to address with this suite of services?",
      "Are there existing systems or workflows that need to be integrated or updated?",
    ],
  };

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
  const [textareaValue, setTextareaValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(
    "Is there anything else we should know or get ready?"
  );
  const [displayPlaceholder, setDisplayPlaceholder] = useState(
    "Is there anything else we should know or get ready?"
  );
  const [typingIndex, setTypingIndex] = useState(0);
  //@ts-ignore
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomQuestion = (questions: string[]) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  // Start the typing animation
  const startTypingAnimation = (text: string) => {
    // Clear any existing animation
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    setDisplayPlaceholder(""); // Clear current text
    setTypingIndex(0); // Reset typing index

    // Start new typing animation
    typingTimerRef.current = setInterval(() => {
      setTypingIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > text.length) {
          // Stop the animation when done
          if (typingTimerRef.current) {
            clearInterval(typingTimerRef.current);
          }
          return prevIndex;
        }
        setDisplayPlaceholder(text.substring(0, nextIndex));
        return nextIndex;
      });
    }, 15); // Speed of typing
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedButtons.length === 0) {
      const defaultText = "Is there anything else we should know or get ready?";
      setCurrentPlaceholder(defaultText);
      setDisplayPlaceholder(defaultText);
      return;
    }

    setIsLoading(true);
    setDisplayPlaceholder(""); // Clear the placeholder during loading

    const timer = setTimeout(() => {
      let newPlaceholder = "";
      if (selectedButtons.length === 1) {
        newPlaceholder = getRandomQuestion(
          serviceDescriptions[selectedButtons[0].button]
        );
      } else {
        newPlaceholder = getRandomQuestion(serviceDescriptions["multiple"]);
      }
      setCurrentPlaceholder(newPlaceholder);
      setIsLoading(false);

      // Start typing animation after loading
      startTypingAnimation(newPlaceholder);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, [selectedButtons]);

  const getRandomSvg = () => {
    const availableSvgs = svgImages.filter((svg) => !usedSvgs.includes(svg));
    if (availableSvgs.length === 0) return null;

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
      const removedItem = selectedButtons[existingIndex];
      returnSvgToPool(removedItem.svg);
      setSelectedButtons(
        selectedButtons.filter((item) => item.button !== button)
      );
    } else {
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

  // Check if we're currently typing
  const isTyping = typingIndex > 0 && typingIndex <= currentPlaceholder.length;

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const answerItemVariants = {
    tap: { scale: 0.98 },
  };

  const checkmarkVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <div className="bg-[#8675F2]">
      <div className="min-h-screen px-0 container p-10 text-white flex flex-col">
        <div className="p-10 px-0">
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
                  <motion.div
                    key={button}
                    variants={answerItemVariants}
                     whileTap="tap"
                    className={`w-full p-3 h-12 border-box hover:bg-[#242424] cursor-pointer hover:text-white hover:border-[#242424] text-[#242424] border flex justify-between items-center ${
                      isButtonSelected(button) ? "bg-[#EDD750]" : "bg-white"
                    }`}
                    onClick={() => toggleButton(button)}
                  >
                    {button}
                    {isButtonSelected(button) && (
                      <motion.div
                        variants={checkmarkVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white p-1 border"
                      >
                        <img
                          src={getButtonSvg(button)}
                          alt="Selected"
                          className="w-5 h-5"
                        />
                      </motion.div>
                    )}
                  </motion.div>
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
                  className="bg-white text-[#242424] p-3 h-12 border-box border"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="bg-white text-[#242424] p-3 h-12 border-box border"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="bg-white text-[#242424] p-3 h-12 border-box border"
                  type="text"
                  placeholder="Company name"
                />
                <div className="relative">
                  <textarea
                    className="bg-white border text-[#242424] h-46 p-3 w-full"
                    placeholder={displayPlaceholder}
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                  />
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                      <div className="absolute left-3 top-3 w-6 h-6">
                        <Lottie animationData={loadingAnimation} loop={true} />
                      </div>
                    </div>
                  )}
                  {isTyping && (
                    <div className="absolute right-3 bottom-3 w-2 h-5 bg-[#242424] animate-pulse"></div>
                  )}
                </div>
                <Button
                  variant="primary"
                  title="Send message"
                  class="text-center w-full cursor-pointer"
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
