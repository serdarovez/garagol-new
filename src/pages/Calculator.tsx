import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Button from "../components/Button";
import random1 from "../assets/1.svg";
import random2 from "../assets/2.svg";
import random3 from "../assets/3.svg";
import random4 from "../assets/4.svg";
import random5 from "../assets/5.svg";
import random6 from "../assets/6.svg";

const Calculator = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [selectedSvgs, setSelectedSvgs] = useState<Record<number, string>>({});
  const [showQuestions, setShowQuestions] = useState(true);

  const questions = [
    {
      id: 1,
      question: "Which of these best describes your business?",
      answers: [
        "Startup",
        "Small/Medium Business (SMB)",
        "Enterprise",
        "Not sure / Other",
      ],
    },
    {
      id: 2,
      question: "What is the primary goal of your project?",
      answers: [
        "Launch a new product or service",
        "Revamp an existing website or app",
        "Enhance security and compliance",
        "Improve data analytics and insights",
        "Other / Not sure",
      ],
    },
    {
      id: 3,
      question: "Which platforms or services do you need?",
      answers: [
        "Web Development",
        "Mobile App Development (iOS/Android)",
        "UI/UX Design & Branding",
        "DevOps & Cloud Solutions",
        "Cybersecurity & Compliance",
        "Data Science & Analytics",
        "IT Consulting & Strategy",
        "Not sure yet",
      ],
    },
    {
      id: 4,
      question: "What's your ideal timeline?",
      answers: [
        "Within 1 month",
        "1-3 months",
        "3-6 months",
        "Flexible / Not sure",
      ],
    },
    {
      id: 5,
      question: "Will you need ongoing support and scalability planning?",
      answers: [
        "Yes, definitely",
        "Maybe—let's discuss",
        "No, just a one-time project",
      ],
    },
  ];

  const svgImages = [random1, random2, random3, random4, random5, random6];

  const handleAnswerSelect = (answer: string) => {
    const randomSvg = svgImages[Math.floor(Math.random() * svgImages.length)];

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));

    setSelectedSvgs((prev) => ({
      ...prev,
      [currentQuestionIndex]: randomSvg,
    }));
  };

  const handleNext = () => {
    window.scrollTo({
      top: 0,
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuestions(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isAnswerSelected = (answer: string) => {
    return selectedAnswers[currentQuestionIndex] === answer;
  };

  // Animation variants
  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const answerItemVariants = {
    tap: { scale: 0.98 },
  };

  const checkmarkVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const sendContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="flex min-h-screen text-white bg-[#8675F2] flex-col">
      <AnimatePresence mode="wait">
        {showQuestions ? (
          <motion.div
            key="questions"
            className="grow mt-40 container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={questionVariants}
          >
            {/* Question */}
            <div className="relative mb-10 p-3">
              <span className="absolute text-[#EDD750] font-[AtkinsonItalic] text-8xl left-0 -top-5">
                {currentQuestionIndex + 1}
              </span>
              <div className="text-3xl z-2 relative font-[700]">
                {questions[currentQuestionIndex]?.question}
              </div>
            </div>

            {/* Answers */}
            <div className="flex flex-col mt-10 gap-3">
              {questions[currentQuestionIndex].answers.map((answer) => (
                <motion.div
                  key={answer}
                  variants={answerItemVariants}
                  whileTap="tap"
                  className={`w-full p-3 h-12 border-box hover:bg-[#242424] hover:border-0 cursor-pointer hover:text-white text-[#242424] border flex justify-between items-center ${
                    isAnswerSelected(answer) ? "bg-[#EDD750]" : "bg-white"
                  }`}
                  onClick={() => handleAnswerSelect(answer)}
                >
                  {answer}
                  {isAnswerSelected(answer) && (
                    <motion.div
                      variants={checkmarkVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white p-1 border"
                    >
                      <img
                        src={selectedSvgs[currentQuestionIndex]}
                        alt="Selected"
                        className="w-5 h-5"
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex my-10 items-center gap-5">
              {currentQuestionIndex > 0 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevious}
                >
                  <Button
                    title="Previous question"
                    variant="primary"
                    class="w-max text-xl font-[400] cursor-pointer"
                  />
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
              >
                <Button
                  title={
                    currentQuestionIndex < questions.length - 1
                      ? "Next question"
                      : "Get results"
                  }
                  variant="primary"
                  class="w-max text-xl font-[400] cursor-pointer"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="send-container"
            initial="hidden"
            animate="visible"
            variants={sendContainerVariants}
            className="grow pt-40 relative h-screen send"
          >
            <div className="w-3/4 md:w-3/7 text-center mx-auto">
              <motion.h1
                variants={formItemVariants}
                custom={0}
                className="text-5xl font-bold mb-5"
              >
                You're just one step away!
              </motion.h1>
              <motion.p
                variants={formItemVariants}
                custom={1}
                className="text-2xl mb-12"
              >
                Fill out the form to get complete details and pricing.
              </motion.p>
              <motion.div className="flex flex-col gap-5">
                <motion.div variants={formItemVariants} custom={2}>
                  <input
                    className="w-full p-3 h-12 bg-white text-[#242424] border-box border"
                    type="text"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={formItemVariants} custom={3}>
                  <input
                    className="w-full p-3 h-12 bg-white text-[#242424] border-box border"
                    type="text"
                    placeholder="Email"
                  />
                </motion.div>
                <motion.div variants={formItemVariants} custom={4}>
                  <input
                    className="w-full p-3 h-12 bg-white text-[#242424] border-box border"
                    type="text"
                    placeholder="Company name"
                  />
                </motion.div>
                <motion.div variants={formItemVariants} custom={5}>
                  <Button
                    variant="primary"
                    title="Submit"
                    class="w-full cursor-pointer"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer type="black" />
    </div>
  );
};

export default Calculator;
