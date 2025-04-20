// components/AnswerItem.tsx
import { motion } from "framer-motion";

interface AnswerItemProps {
  answer: string;
  isSelected: boolean;
  hasError: boolean;
  svgIcon?: string;
  onClick: () => void;
}

const AnswerItem = ({
  answer,
  isSelected,
  hasError,
  svgIcon,
  onClick,
}: AnswerItemProps) => {
  return (
    <motion.div
      variants={{
        tap: { scale: 0.98 },
        shake: {
          x: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.5 },
        },
      }}
      animate={hasError ? "shake" : "visible"}
      whileTap="tap"
      className={`w-full p-3 h-12 border-box hover:bg-[#242424] hover:border-0 cursor-pointer hover:text-white text-[#242424] border flex justify-between items-center ${
        isSelected
          ? "bg-[#EDD750]"
          : hasError
          ? "border-[#F85B4C] text-[#F85B4C] bg-white"
          : "bg-white"
      }`}
      onClick={onClick}
    >
      {answer}
      {isSelected && svgIcon && (
        <motion.div
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          className=""
        >
          <img src={svgIcon} alt="Selected" className="w-8 h-8" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnswerItem;
