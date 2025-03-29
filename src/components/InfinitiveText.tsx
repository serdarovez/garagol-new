import { motion } from "framer-motion";

const InfiniteScrollingText = () => {
  const textLine1 = "Custom Solutions. Faster Delivery. 24/7 Support.";
  const textLine2 = "Drives Your Business Forward. Garagol Consulting";

  // Repeat the text multiple times to create a seamless loop
  const repeatedText1 = Array(5).fill(textLine1).join(" ");
  const repeatedText2 = Array(5).fill(textLine2).join(" ");

  return (
    <div style={{ overflow: "hidden", width: "100%" }} className="text-[#8675F2] font-[700] mt-30 bg-white" >
      {/* First line - moves to the right */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "64px", marginBottom: "10px" }}
        animate={{
          x: [0, -textLine1.length * 10], // Adjust the multiplier based on your font size
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedText1}
      </motion.div>

      {/* Second line - moves to the left */}
      <motion.div
        style={{ whiteSpace: "nowrap", fontSize: "64px" }}
        animate={{
          x: [-textLine2.length * 10, 0], // Adjust the multiplier based on your font size
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedText2}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingText;
