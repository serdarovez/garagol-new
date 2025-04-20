// components/Question.tsx
interface QuestionProps {
  index: number;
  question: string;
}

const Question = ({ index, question }: QuestionProps) => {
  return (
    <div className="relative mb-10 p-3">
      <span className="absolute text-[#EDD750] font-[AtkinsonItalic] text-8xl left-0 -top-5">
        {index + 1}
      </span>
      <div className="text-3xl z-2 relative font-[700]">{question}</div>
    </div>
  );
};

export default Question;
