import { useEffect, useRef } from "react";
import Button from "./Button";

const Cards = () => {
  const services = [
    {
      title: "Build & Launch",
      description: "Design and develop web, mobile, and cloud-based products.",
      features: [
        "Web & Mobile Development",
        "UI/UX Design",
        // "QA & Testing",
        "Cloud Solutions",
      ],
      background: "#8675F2",
      type: "primary",
    },
    {
      title: "Optimize & Secure",
      description: "Improve speed, performance, and security.",
      features: ["DevOps", "Performance Tuning", "Cybersecurity", "Automation"],
      background: "#EDD750",
      type: "secondary",
    },
    {
      title: "Data & Insights",
      description: "Make data work for you.",
      features: ["Data Science", "Analytics", "Machine Learning"],
      background: "#8675F2",
      type: "primary",
    },
    {
      title: "Strategy & Support",
      description: "Plan for growth and scale confidently.",
      features: [
        "IT Consulting",
        "Branding",
        "Remote Work",
        "Digital Strategy",
      ],
      background: "#EDD750",
      type: "secondary",
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || serviceRefs.current.length === 0) return;

      const cards = serviceRefs.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const rect = card.getBoundingClientRect();
        const nextRect = cards[index + 1].getBoundingClientRect();

        const overlap = Math.max(
          0,
          Math.min(1, (nextRect.top - rect.top) / rect.height)
        );

        if (overlap < 1) {
          const scale = 0.9 + 0.1 * overlap;
          const translateY = -10 * (1 - overlap);
          card.style.transform = `scale(${scale})  translateY(${translateY}px)`;
        } else {
          card.style.transform = "none";
          // card.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="services" className="container pb-20">
      <div
        ref={titleRef}
        className="sticky  lg:w-3/5 xl:w-3/5 w-full lg:mt-20 xl:mt-30 mt-10 lg:top-30 xl:top-30 top-20"
      >
        <div className="title">Our Services</div>
        <div className="paragraph">
          Tailored, high-performance solutions designed and developed with your
          business in mind.
        </div>
      </div>
      <div ref={containerRef} className="w-full  flex flex-col gap-5 ">
        {services.map((service, index) => (
          <div
            ref={(el: any) => (serviceRefs.current[index] = el)}
            className=" sticky top-70 font-[400] w-full text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div
              style={{ backgroundColor: service.background }}
              className={`lg:p-14  xl:p-14 p-0 ${
                service.type !== "primary" ? "text-[#242424]" : "text-white"
              } `}
            >
              <div className="p-6 flex justify-between lg:flex-row xl:flex-row flex-col lg:items-end xl:items-end items-center">
                <div className="  xl:w-3/5 w-full lg:w-3/5">
                  <h3 className="text-3xl md:text-3xl lg:text-6xl font-[700]  mb-8 font-[AtkinsonBold]">
                    {service.title}
                  </h3>
                  <p className=" text-xl md:text-xl lg:text-xl font-[400]  mb-4 ">
                    {service.description}
                  </p>
                </div>
                <div className="xl:w-2/5 mt-5 lg:mt-0 xl:mt-0 w-full lg:w-2/5">
                  <div className="flex lg:w-2/3 xl:w-2/3  lg:mx-auto xl:mx-auto lg:justify-end xl:justify-end flex-wrap gap-3 ">
                    {service.features.map((feature: string, index: number) => (
                      <Button
                        //@ts-ignore
                        variant={service.type}
                        title={feature}
                        key={index}
                      >
                        {/* <span className="text-xl">{feature}</span> */}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
