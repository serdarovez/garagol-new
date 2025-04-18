import { motion } from "framer-motion";

const Button = ({
  title,
  class: className,
  variant,
  clickable = true,
}: {
  title: string;
  clickable?: boolean;
  class?: string;
  variant: string;
}) => {
  const handleClick = () => {
    if (!clickable) return;

    // Trigger haptic feedback if available
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(50); // Vibrate for 50ms
    }

    if (onclick) {
      //@ts-ignore
      onclick();
    }
  };
  const variantStyles: any = {
    primary:
      "bg-[#EDD750] text-[#242424] hover:bg-[#8675F2] hover:text-white  border border-2 cursor-pointer border-[#242424] ",
    outline:
      "border border-[#EDD750]  hover:bg-[#8675F2] z-1  bg-transparent border-2  cursor-pointer text-white",
    secondary:
      "bg-[#8675F2] text-white  hover:bg-[#EDD750] hover:text-[#242424] border-2 cursor-pointer border border-[#242424]",
    dark: "bg-[#242424] text-white  hover:bg-[#8675F2] hover:text-white border-2 cursor-pointer border border-[#242424]",
  };
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`   py-2 px-5  ${className || ""} ${variantStyles[variant]} `}
      onClick={handleClick}
    >
      {title}
    </motion.div>
  );
};

export default Button;
