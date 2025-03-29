import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteScrollingText = () => {
  const textLine1 = "Custom Solutions. Faster Delivery. 24/7 Support.";
  const textLine2 = "Drives Your Business Forward. Garagol Consulting";

  // Repeat the text multiple times to create a seamless loop
  const repeatedText1 = Array(5).fill(textLine1).join(" ");
  const repeatedText2 = Array(5).fill(textLine2).join(" ");

  // State to track which word is highlighted for each line
  const [highlightedWord1, setHighlightedWord1] = useState(null);
  const [highlightedWord2, setHighlightedWord2] = useState(null);

  useEffect(() => {
    // Split the original text into words (without the repetitions)
    const words1 = textLine1.split(" ");
    const words2 = textLine2.split(" ");

    // Set up intervals to change the highlighted word every 3 seconds
    const interval1 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words1.length);
      //@ts-ignore
      setHighlightedWord1(randomIndex);
    }, 3000);

    const interval2 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words2.length);
      //@ts-ignore
      setHighlightedWord2(randomIndex);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Function to render text with highlighted words
  //@ts-ignore
  const renderText = (text, originalText, highlightedIndex) => {
    const words = originalText.split(" ");

    //@ts-ignore
    return text.split(" ").map((word, i) => {
      // Find which original word this corresponds to (modulo operation)
      const originalWordIndex = i % words.length;
      const shouldHighlight = originalWordIndex === highlightedIndex;

      return (
        <span
          key={`${word}-${i}`}
          style={{
            color: shouldHighlight ? "#FFD700" : "white",
            transition: "color 0.3s ease",
          }}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      className="text-white font-[700] mt-30 bg-black"
    >
      {/* First line - moves to the right */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "64px", marginBottom: "10px" }}
        animate={{
          x: [0, -textLine1.length * 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {renderText(repeatedText1, textLine1, highlightedWord1)}
      </motion.div>

      {/* Second line - moves to the left */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "64px" }}
        animate={{
          x: [-textLine2.length * 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {renderText(repeatedText2, textLine2, highlightedWord2)}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingText;
