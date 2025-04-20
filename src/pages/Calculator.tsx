// components/Calculator.tsx
import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import random1 from "../assets/1.svg";
import random2 from "../assets/2.svg";
import random3 from "../assets/3.svg";
import random4 from "../assets/4.svg";
import random5 from "../assets/5.svg";
import random6 from "../assets/6.svg";
import QuestionContainer from "../components/calculator/QuestionContainer";
import ContactForm from "../components/calculator/ContactForm";
import emailjs from "@emailjs/browser";


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

const Calculator = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string | string[]>
  >({});
  const [selectedSvgs, setSelectedSvgs] = useState<Record<number, string>>({});
  const [showQuestions, setShowQuestions] = useState(true);
  const [validationError, setValidationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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

    console.log("selected answers", selectedAnswers);
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

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    company: string;
    message?: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Format calculator answers for email
      const formattedAnswers = Object.entries(selectedAnswers).map(
        ([key, value]) => ({
          question: questions[Number(key)].question,
          answer: Array.isArray(value) ? value.join(", ") : value,
        })
      );

      // Prepare email data
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        calculator_answers: formattedAnswers
          .map((item) => `${item.question}: ${item.answer}`)
          .join("\n\n"),
      };

      // Send email using EmailJS
      //@ts-ignore
      await emailjs.send(
        "service_hssl9mg",
        "template_tawpqaq",
        templateParams,
        "V08MdMTqLq65ILtaE"
      );

      setSubmitStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex min-h-screen text-white bg-[#8675F2] flex-col">
      <div className="min-h-screen send">
        <AnimatePresence mode="wait">
          {showQuestions ? (
            <QuestionContainer
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              selectedAnswers={selectedAnswers}
              selectedSvgs={selectedSvgs}
              validationError={validationError}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          ) : (
            <ContactForm
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer type="black" />
    </div>
  );
};

export default Calculator;
