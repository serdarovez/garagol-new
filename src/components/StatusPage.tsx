import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

type StatusType = "success" | "error" | "warning" | "info";

interface Props {
  title: string;
  body: string;
  buttonLink: string;
  buttonTitle: string;
  status: StatusType;
}

const StatusPage = ({
  title,
  body,
  buttonLink,
  buttonTitle,
  status,
}: Props) => {
  // Status-based configurations
  const statusConfig = {
    success: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80">
          <motion.path
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.path
            d="M22 4 12 14.01l-3-3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </svg>
      ),
      bgGradient: "from-green-900/10 to-transparent",
    },
    error: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#f87171">
          <motion.path
            d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 0 5 5 0 0 0-5-5 4 4 0 0 1 0-5Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.path
            d="m15 9-6 6m0-6 6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </svg>
      ),
      bgGradient: "from-red-900/10 to-transparent",
    },
    warning: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24">
          <motion.path
            d="M12 2L2 22h20L12 2Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.path
            d="M12 8v6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
          <motion.path
            d="M12 16h0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
        </svg>
      ),
      bgGradient: "from-yellow-900/10 to-transparent",
    },
    info: {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa">
          <motion.path
            d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 0 5 5 0 0 0-5-5 4 4 0 0 1 0-5Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.path
            d="M12 8v6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
          <motion.path
            d="M12 16h0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
        </svg>
      ),
      bgGradient: "from-blue-900/10 to-transparent",
    },
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={`flex w-full justify-center items-center flex-col h-screen bg-gradient-to-b ${statusConfig[status].bgGradient}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Status Icon */}
      <motion.div className="mb-8" variants={iconVariants}>
        <svg width="80" height="80" strokeWidth="2" strokeLinecap="round">
          {statusConfig[status].icon}
        </svg>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
        variants={itemVariants}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-white/90 mb-12 max-w-md text-center"
        variants={itemVariants}
      >
        {body}
      </motion.p>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={buttonLink}>
          <Button variant={"primary"} title={buttonTitle} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default StatusPage;
