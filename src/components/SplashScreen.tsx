import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/logo.json";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  // const [fillColor] = useState("transparent");
  const animationDuration = 1;
  const [lottieCompleted, setLottieCompleted] = useState(false);
  const [svgCompleted, setSvgCompleted] = useState(false);

  // Unified: Only call onComplete when both animations done
  const checkComplete = () => {
    if (lottieCompleted && svgCompleted) {
      setTimeout(() => onComplete(), 200);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#242424] z-50 flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center w-full mt-auto gap-5">
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setSvgCompleted(true);
            checkComplete();
          }}
        >
          {/* Your SVG code here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            className="transition-transform duration-300"
          >
            <g clipPath="url(#clip0_139_139)">
              {/* Paths with motion */}
              {/* (paths code stays same) */}
            </g>
            <defs>
              <clipPath id="clip0_139_139">
                <rect width="62.2" height="62.2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: animationDuration }}
        className="flex items-center mt-auto justify-center"
      >
        <div className="w-64 h-auto">
          <Lottie
            animationData={loadingAnimation}
            loop={false}
            style={{ width: "100%", height: "100%" }}
            onComplete={() => {
              setLottieCompleted(true);
              checkComplete();
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
