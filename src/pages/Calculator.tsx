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
    Record<number, string | string[]>
  >({});
  const [selectedSvgs, setSelectedSvgs] = useState<Record<number, string>>({});
  const [showQuestions, setShowQuestions] = useState(true);
  const [validationError, setValidationError] = useState(false);

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
      multiSelect: false,
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
      multiSelect: false,
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
      multiSelect: true,
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
      multiSelect: false,
    },
    {
      id: 5,
      question: "Will you need ongoing support and scalability planning?",
      answers: [
        "Yes, definitely",
        "Maybe—let's discuss",
        "No, just a one-time project",
      ],
      multiSelect: false,
    },
  ];

  const svgImages = [random1, random2, random3, random4, random5, random6];

  const handleAnswerSelect = (answer: string) => {
    const randomSvg = svgImages[Math.floor(Math.random() * svgImages.length)];
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.multiSelect) {
      const currentSelection =
        (selectedAnswers[currentQuestionIndex] as string[]) || [];
      const newSelection = currentSelection.includes(answer)
        ? currentSelection.filter((item) => item !== answer)
        : [...currentSelection, answer];

      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: newSelection,
      }));

      if (newSelection.length > 0) {
        setSelectedSvgs((prev) => ({
          ...prev,
          [currentQuestionIndex]: randomSvg,
        }));
      }
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: answer,
      }));

      setSelectedSvgs((prev) => ({
        ...prev,
        [currentQuestionIndex]: randomSvg,
      }));
    }

    if (validationError) {
      setValidationError(false);
    }
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = selectedAnswers[currentQuestionIndex];

    if (
      (!currentQuestion.multiSelect && !currentAnswer) ||
      (currentQuestion.multiSelect &&
        (!currentAnswer || (currentAnswer as string[]).length === 0))
    ) {
      setValidationError(true);
      return;
    }

    window.scrollTo({
      top: 0,
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setValidationError(false);
    } else {
      setShowQuestions(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setValidationError(false);
    }
  };

  const isAnswerSelected = (answer: string) => {
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    if (questions[currentQuestionIndex].multiSelect) {
      return (currentAnswer as string[])?.includes(answer);
    }
    return currentAnswer === answer;
  };

  // Animation variants
  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const answerItemVariants = {
    tap: { scale: 0.98 },
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
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
      <div className="min-h-screen  send">
        <AnimatePresence mode="wait">
          {showQuestions ? (
            <motion.div
              key="questions"
              className="grow  flex container justify-center lg:items-start items-center min-h-screen mt-40 mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={questionVariants}
            >
              <div className="md:w-4/7">
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
                      animate={validationError ? "shake" : "visible"}
                      whileTap="tap"
                      className={`w-full p-3 h-12 border-box hover:bg-[#242424] hover:border-0 cursor-pointer hover:text-white text-[#242424] border flex justify-between items-center ${
                        isAnswerSelected(answer)
                          ? "bg-[#EDD750]" // Added !important flag to override other background classes
                          : validationError
                          ? "border-[#F85B4C] text-[#F85B4C] bg-white"
                          : "bg-white"
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
                <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col my-10 items-center gap-5">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="w-full lg:w-max xl:w-max"
                  >
                    <Button
                      title={
                        currentQuestionIndex < questions.length - 1
                          ? "Next question"
                          : "Get results"
                      }
                      variant="primary"
                      class="lg:w-max xl:w-max text-center w-full text-xl font-[400] cursor-pointer"
                    />
                  </motion.div>
                  {currentQuestionIndex > 0 && (
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePrevious}
                      className="w-full  "
                    >
                      <Button
                        title="Previous question"
                        variant="primary"
                        class="lg:w-max xl:w-max text-center hidden lg:block xl:block md:block  w-full text-xl font-[400] cursor-pointer"
                      />
                      <Button
                        title="Previous question"
                        variant="dark"
                        class="lg:w-max xl:w-max text-center block lg:hidden xl:hidden md:hidden  w-full text-xl font-[400] cursor-pointer"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="send-container"
              initial="hidden"
              animate="visible"
              variants={sendContainerVariants}
              className="grow  flex items-center  h-screen relative "
            >
              <div className="w-[95vw] md:w-3/7 text-center mx-auto">
                <motion.h1
                  variants={formItemVariants}
                  custom={0}
                  className="text-3xl font-bold mb-5"
                >
                  You're just one step away!
                </motion.h1>
                <motion.p
                  variants={formItemVariants}
                  custom={1}
                  className="text-xl mb-12"
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
      </div>
      <Footer type="black" />
    </div>
  );
};

export default Calculator;
