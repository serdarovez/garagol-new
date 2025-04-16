import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Pricing = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // If already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      // If not on homepage, navigate with state to indicate where to scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };
  return (
    <div className="bg-[#242424] py-16 my-10">
      <div className="container text-white">
        <div className="text-xl lg:text-2xl xl:text-2xl">
          Plan your budget confidently by requesting a detailed project estimate
          today. Need answers first or want personalized advice? Ask a question
          – our team is here to provide the guidance you need.
        </div>
        <div className="flex mt-5 items-center gap-5 ">
          <Link to={`/estimate`}>
            <Button
              variant="primary"
              title="Get estimate"
              class="cursor-pointer"
            />
          </Link>
          <div onClick={() => scrollToSection("inquiry")}>
            <Button
              variant="primary"
              title="Ask a question"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
