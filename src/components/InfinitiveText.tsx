import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InfiniteScrollingText = () => {
  const textLine1 =
    "24/7 Support. Custom Solutions. Faster Delivery. Achieve More. Build Better Faster. Seamless Integration. Agile Execution. Scalable Performance. Secure Infrastructure. Trusted Expertise. Innovative Strategies. Data-Driven Decisions.";
  const textLine2 =
    "Rapid Prototyping. Future-Proof Tech. End-to-End Service. Optimized Workflows. Performance Guaranteed. Cutting-Edge Tech. Reliable Results. Streamlined Operations. Business-First Focus. Strategic Innovation. Empower Your Business. Garagol Is Built for Business.";

  const sentences1 = textLine1.split(". ").map((s) => (s.endsWith(".") ? s : s + "."));
  const sentences2 = textLine2.split(". ").map((s) => (s.endsWith(".") ? s : s + "."));

  const repeatedText1 = Array(3).fill(sentences1).flat();
  const repeatedText2 = Array(3).fill(sentences2).flat();

  const [highlightedSentence1, setHighlightedSentence1] = useState<number | null>(null);
  const [highlightedSentence2, setHighlightedSentence2] = useState<number | null>(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // Track if component is still mounted
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const interval1 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences1.length);
      setHighlightedSentence1(randomIndex);
    }, 3000);

    const interval2 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences2.length);
      setHighlightedSentence2(randomIndex);
    }, 3000);

    const animateLine1 = async () => {
      while (mounted.current) {
        await controls1.start({
          x: [0, -textLine1.length * 30],
          transition: { duration: 50, ease: "linear" },
        });
        await controls1.start({
          x: [-textLine1.length * 30, 0],
          transition: { duration: 50, ease: "linear" },
        });
      }
    };

    const animateLine2 = async () => {
      while (mounted.current) {
        await controls2.start({
          x: [-textLine2.length * 30, 0],
          transition: { duration: 50, ease: "linear" },
        });
        await controls2.start({
          x: [0, -textLine2.length * 30],
          transition: { duration: 50, ease: "linear" },
        });
      }
    };

    animateLine1();
    animateLine2();

    return () => {
      mounted.current = false;
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [controls1, controls2, sentences1.length, sentences2.length, textLine1.length, textLine2.length]);

  const renderText = (sentences: string[], originalSentences: string[], highlightedIndex: number | null) => {
    return sentences.map((sentence, i) => {
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
      <motion.div
        className="whitespace-nowrap lg:text-5xl xl:text-5xl text-3xl font-bold mb-3"
        animate={controls1}
      >
        {renderText(repeatedText1, sentences1, highlightedSentence1)}
      </motion.div>

      <motion.div
        className="whitespace-nowrap lg:text-5xl xl:text-5xl text-3xl font-bold"
        animate={controls2}
      >
        {renderText(repeatedText2, sentences2, highlightedSentence2)}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingText;
