import React, { useState, useRef, useEffect } from "react";

type AccordionProps = {
  question: string;
  answer: string | React.ReactNode;
  defaultOpen?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | string>(isOpen ? "auto" : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
        const timer = setTimeout(() => {
          setHeight("auto");
        }, 300);
        return () => clearTimeout(timer);
      } else {
        const currentHeight = contentRef.current.scrollHeight;
        setHeight(currentHeight);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight(0);
          });
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`group hover:bg-[#EDD750] hover:text-[#242424] mb-4 transition-colors duration-200 ${
        isOpen ? "bg-[#EDD750]" : "bg-transparent"
      }`}
    >
      <button
        className="w-full p-4 text-left flex gap-5 items-center focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M26.7075 12.7074L16.7075 22.7074C16.6146 22.8004 16.5043 22.8742 16.3829 22.9245C16.2615 22.9748 16.1314 23.0007 16 23.0007C15.8686 23.0007 15.7385 22.9748 15.6171 22.9245C15.4957 22.8742 15.3854 22.8004 15.2925 22.7074L5.29251 12.7074C5.10487 12.5198 4.99945 12.2653 4.99945 11.9999C4.99945 11.7346 5.10487 11.4801 5.29251 11.2924C5.48015 11.1048 5.73464 10.9994 6.00001 10.9994C6.26537 10.9994 6.51987 11.1048 6.70751 11.2924L16 20.5862L25.2925 11.2924C25.3854 11.1995 25.4957 11.1258 25.6171 11.0756C25.7385 11.0253 25.8686 10.9994 26 10.9994C26.1314 10.9994 26.2615 11.0253 26.3829 11.0756C26.5043 11.1258 26.6146 11.1995 26.7075 11.2924C26.8004 11.3854 26.8741 11.4957 26.9244 11.617C26.9747 11.7384 27.0006 11.8686 27.0006 11.9999C27.0006 12.1313 26.9747 12.2614 26.9244 12.3828C26.8741 12.5042 26.8004 12.6145 26.7075 12.7074Z"
            className={`transition-colors duration-200 ${
              isOpen
                ? "fill-[#242424]"
                : "fill-white group-hover:fill-[#242424]"
            }`}
          />
        </svg>
        <span
          className={`text-xl md:text-2xl lg:text-2xl font-[700] transition-colors duration-200 ${
            isOpen ? "text-[#242424]" : "text-white group-hover:text-[#242424]"
          }`}
        >
          {question}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div className="p-4 flex gap-5">
          <div style={{ width: 32 }}></div>
          <div className="text-xl md:text-2xl lg:text-2xl text-[#242424] font-[400]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
