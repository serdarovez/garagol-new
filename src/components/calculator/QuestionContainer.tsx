// components/QuestionsForm.tsx
import { motion } from "framer-motion";
import Question from "./Question";
import AnswerItem from "./AnswerItem";
import Button from "../Button";

interface QuestionsFormProps {
  questions: Array<{
    id: number;
    question: string;
    answers: string[];
    multiSelect: boolean;
  }>;
  currentQuestionIndex: number;
  selectedAnswers: Record<number, string | string[]>;
  selectedSvgs: Record<number, string>;
  validationError: boolean;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const QuestionContainer = ({
  questions,
  currentQuestionIndex,
  selectedAnswers,
  selectedSvgs,
  validationError,
  onAnswerSelect,
  onNext,
  onPrevious,
}: QuestionsFormProps) => {
  const currentQuestion = questions[currentQuestionIndex];

  const isAnswerSelected = (answer: string) => {
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    if (currentQuestion.multiSelect) {
      return (currentAnswer as string[])?.includes(answer);
    }
    return currentAnswer === answer;
  };

  return (
    <motion.div
      key="questions"
      className="grow flex container justify-center lg:items-start items-center min-h-screen lg:mt-40 xl:mt-40 mt-20 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md:w-4/7">
        <Question 
          index={currentQuestionIndex} 
          question={currentQuestion.question} 
        />

        <div className="flex flex-col mt-10 gap-3">
          {currentQuestion.answers.map((answer) => (
            <AnswerItem
              key={answer}
              answer={answer}
              isSelected={isAnswerSelected(answer)}
              hasError={validationError}
              svgIcon={selectedSvgs[currentQuestionIndex]}
              onClick={() => onAnswerSelect(answer)}
            />
          ))}
        </div>

        <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col my-10 items-center gap-5">
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="w-full lg:w-max xl:w-max"
          >
            <Button
              title={
                currentQuestionIndex < questions.length - 1
                  ? "Next question"
                  : "Get results"
              }
              variant="primary"
              class="lg:w-max xl:w-max order-1 lg:order-2 xl:order-2 text-center w-full text-xl font-[400] cursor-pointer"
            />
          </motion.div>
          {currentQuestionIndex > 0 && (
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={onPrevious}
              className="w-full"
            >
              <Button
                title="Previous question"
                variant="primary"
                class="lg:w-max xl:w-max text-center order-2 lg:order-1 xl:order-1 hidden lg:block xl:block md:block w-full text-xl font-[400] cursor-pointer"
              />
              <Button
                title="Previous question"
                variant="dark"
                class="lg:w-max xl:w-max text-center block order-2 lg:order-1 xl:order-1 lg:hidden xl:hidden md:hidden w-full text-xl font-[400] cursor-pointer"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionContainer;