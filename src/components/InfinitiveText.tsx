import { motion, useAnimation } from "framer-motion";
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

  // Animation controls for each line
  const controls1 = useAnimation();
  const controls2 = useAnimation();

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

    // Animation sequences
    const animateLine1 = async () => {
      while (true) {
        await controls1.start({
          x: [0, -textLine1.length * 30], // Right to left
          transition: { duration: 15, ease: "linear" },
        });
        await controls1.start({
          x: [-textLine1.length * 30, 0], // Left to right
          transition: { duration: 15, ease: "linear" },
        });
      }
    };

    const animateLine2 = async () => {
      while (true) {
        await controls2.start({
          x: [-textLine2.length * 30, 0], // Left to right
          transition: { duration: 15, ease: "linear" },
        });
        await controls2.start({
          x: [0, -textLine2.length * 30], // Right to left
          transition: { duration: 15, ease: "linear" },
        });
      }
    };

    animateLine1();
    animateLine2();

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [controls1, controls2]);

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
      className="text-white font-[700]  bg-[#242424]"
    >
      {/* First line - alternates between right-to-left and left-to-right */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "48px", marginBottom: "10px" }}
        animate={controls1}
      >
        {renderText(repeatedText1, textLine1, highlightedWord1)}
      </motion.div>

      {/* Second line - alternates between left-to-right and right-to-left */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "48px" }}
        animate={controls2}
      >
        {renderText(repeatedText2, textLine2, highlightedWord2)}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingText;
