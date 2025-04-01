import Button from "../components/Button";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <div className="flex min-h-screen text-white bg-[#242424] flex-col">
      <div className="grow container mt-30">
        <div className="text-4xl md:text-5xl lg:text-6xl font-[700]  mb-5 font-[AtkinsonBold] text-[#EDD750]">
          Project Cost Calculator
        </div>
        <div className="text-xl md:text-2xl lg:text-2xl font-[400]  mb-3">
          Get a free estimate in minutes by answering five quick questions:
        </div>
        <ul className="text-xl md:text-2xl lg:text-2xl font-[400]" >
          <li><span className="text-[#EDD750]" >•</span> Approximate cost of your project development</li>
          <li><span className="text-[#EDD750]">•</span> Team size required for</li>
          <li><span className="text-[#EDD750]">•</span> Estimated time to launch</li>
        </ul>
        <Button title='Let’s start!' variant="primary" class="w-max my-20 cursor-pointer"  />
      </div>
      <Footer type="purple" />
    </div>
  );
}

export default FAQ;
