import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteScrollingText = () => {
  const textLine1 =
    "24/7 Support. Custom Solutions. Faster Delivery. Achieve More. Build Better Faster. Seamless Integration. Agile Execution. Scalable Performance. Secure Infrastructure. Trusted Expertise. Innovative Strategies. Data-Driven Decisions.";
  const textLine2 =
    "Rapid Prototyping. Future-Proof Tech. End-to-End Service. Optimized Workflows. Performance Guaranteed. Cutting-Edge Tech. Reliable Results. Streamlined Operations. Business-First Focus. Strategic Innovation. Empower Your Business. Garagol Is Built for Business.";

  // Split text into sentences
  const sentences1 = textLine1
    .split(". ")
    .map((s) => (s.endsWith(".") ? s : s + "."));
  const sentences2 = textLine2
    .split(". ")
    .map((s) => (s.endsWith(".") ? s : s + "."));

  // Repeat the text multiple times to create a seamless loop
  const repeatedText1 = Array(3).fill(sentences1).flat();
  const repeatedText2 = Array(3).fill(sentences2).flat();

  // State to track which sentence is highlighted for each line
  const [highlightedSentence1, setHighlightedSentence1] = useState<
    number | null
  >(null);
  const [highlightedSentence2, setHighlightedSentence2] = useState<
    number | null
  >(null);

  // Animation controls for each line
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    // Set up intervals to change the highlighted sentence every 3 seconds
    const interval1 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences1.length);
      setHighlightedSentence1(randomIndex);
    }, 3000);

    const interval2 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences2.length);
      setHighlightedSentence2(randomIndex);
    }, 3000);

    // Animation sequences
    const animateLine1 = async () => {
      while (true) {
        await controls1.start({
          x: [0, -textLine1.length * 30], // Right to left
          transition: { duration: 50, ease: "linear" },
        });
        await controls1.start({
          x: [-textLine1.length * 30, 0], // Left to right
          transition: { duration: 50, ease: "linear" },
        });
      }
    };

    const animateLine2 = async () => {
      while (true) {
        await controls2.start({
          x: [-textLine2.length * 30, 0], // Left to right
          transition: { duration: 50, ease: "linear" },
        });
        await controls2.start({
          x: [0, -textLine2.length * 30], // Right to left
          transition: { duration: 50, ease: "linear" },
        });
      }
    };

    animateLine1();
    animateLine2();

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [controls1, controls2, sentences1.length, sentences2.length]);

  // Function to render text with highlighted sentences
  const renderText = (
    sentences: string[],
    originalSentences: string[],
    highlightedIndex: number | null
  ) => {
    return sentences.map((sentence, i) => {
      // Find which original sentence this corresponds to
      const originalSentenceIndex = i % originalSentences.length;
      const shouldHighlight = originalSentenceIndex === highlightedIndex;

      return (
        <span
          key={`${sentence}-${i}`}
          className={`transition-colors duration-300 ${
            shouldHighlight ? "text-[#EDD750]" : "text-white"
          }`}
        >
          {sentence}{" "}
        </span>
      );
    });
  };

  return (
    <div className="overflow-hidden w-full py-5 bg-[#242424]">
      {/* First line - alternates between right-to-left and left-to-right */}
      <motion.div
        className="whitespace-nowrap text-3xl font-bold mb-3"
        animate={controls1}
      >
        {renderText(repeatedText1, sentences1, highlightedSentence1)}
      </motion.div>

      {/* Second line - alternates between left-to-right and right-to-left */}
      <motion.div
        className="whitespace-nowrap text-3xl font-bold"
        animate={controls2}
      >
        {renderText(repeatedText2, sentences2, highlightedSentence2)}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingText;
