import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function FAQ() {
  const [randomGif, setRandomGif] = useState("");

  const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDE3azA0cHozM3Q2bmMyaGI3dmswMnp2aDdwM2g4MmNleGszeDFoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWhSt6azAiDYhW9VhG/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm54aHJ6ZnN2czZyc3N4OTZ3MGxyMDZhZjN5MGdpc2tpZ3YxMWFjMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lHfxDepSGlzom6f65K/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXpxZjB5M2h3azc0aW82ZzgyeHl0a3loZTIwdXd3bTU0ZW0zazY3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4lmReBFtv3KPU4/giphy.gif",
  ];

  useEffect(() => {
    // Select a random GIF when component mounts
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setRandomGif(gifs[randomIndex]);
  }, []); // Empty dependency array means this runs once on mount

  const questions = [
    {
      id: "1",
      question: "What is the Get Estimate calculator, and who is it for?",
      answer:
        "A quick tool for SMBs, startups, and larger companies to estimate project budget and timeline.",
    },
    {
      id: "2",
      question: "What details should I have ready before using the calculator?",
      answer:
        "Have a clear idea of your project’s main features, goals, and growth plans for the most accurate estimate.",
    },
    {
      id: "3",
      question: "Does the estimate include ongoing support and scalability?",
      answer:
        "Yes! We factor in future growth and long-term maintenance for a realistic outlook.",
    },
    {
      id: "4",
      question: "Is there any charge or obligation to use the calculator?",
      answer: "No—using it is completely free, with no commitment required.",
    },
    {
      id: "5",
      question:
        "How do I get a more detailed proposal after seeing my initial estimate?",
      answer:
        "Contact us to discuss your project, and we’ll refine your estimate with specifics.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen text-white bg-[#242424] flex-col">
      <div className="grow container mb-20 mt-40">
        <div className="flex lg:flex-row xl:flex-row flex-col items-center justify-between">
          <div>
            <div className="text-3xl md:text-3xl lg:text-6xl font-[700]  mb-5 font-[AtkinsonBold] text-[#EDD750]">
              Project Cost Calculator
            </div>
            <div className="text-xl md:text-xl w-4/5 lg:text-xl font-[400]  mb-3">
              Answer five quick questions about your business, vision, and
              service needs to get a tailored estimate that highlights:
            </div>
            <ul className="text-xl md:text-xl lg:text-xl font-[400]">
              <li>
                <span className="text-[#EDD750]">•</span> Business & Goals
              </li>
              <li>
                <span className="text-[#EDD750]">•</span> Service Mix
              </li>
              <li>
                <span className="text-[#EDD750]">•</span> Timeline & Resources
              </li>
            </ul>
            <Link to={`/calculator`}>
              <Button
                title="Let’s start!"
                variant="primary"
                class="w-max my-20 text-xl font-[700]  cursor-pointer"
              />
            </Link>
          </div>
          <div className=" md:flex  p-1  items-center mb-20 lg:mb-0 xl:mb-0 justify-center  bg-[#EDD750] ">
            {/* place gif here  */}
            <img
              src={randomGif}
              alt="Animation showing calculator process"
              className="w-full -translate-4  max-w-[400px] h-auto "
            />
          </div>
        </div>
        {questions.map((question, index) => (
          <Accordion
            key={index}
            question={question.question}
            answer={question.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <Footer type="purple" />
    </div>
  );
}

export default FAQ;
