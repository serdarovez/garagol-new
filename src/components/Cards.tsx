import { useEffect, useRef } from "react";
import Button from "./Button";

const Cards = () => {
  const services = [
    {
      title: "Full-Service Digital Solutions",
      description:
        "From custom web and mobile development to data science and cloud optimization, we deliver secure, user-centered solutions tailored to your business needs.",
      features: [
        "Web & Mobile Development",
        "Data Science",
        "Analytics",
        "Cloud  Solutions",
      ],
      background: "#8675F2",
      type: "primary",
    },
    {
      title: "Design, Build, Secure, and Optimize",
      description:
        "We craft intuitive digital experiences, develop scalable solutions, ensure cybersecurity compliance, and provide expert IT consulting to keep your business ahead.",
      features: [
        "UI/UX Design",
        "Cybersecurity",
        // "Usability optimization",
      ],
      background: "#EDD750",
      type: "secondary",
    },
    {
      title: "Innovative Technology & Design Services",
      description:
        "Empowering your business with cutting-edge web and mobile development, user-focused design, advanced data analytics, and secure, scalable cloud infrastructure.",
      features: ["Analytics", "Data Science", "DevOps"],
      background: "#8675F2",
      type: "primary",
    },
    {
      title: "End-to-End Digital Transformation",
      description:
        "We guide your business through digital evolution—offering bespoke development, brand-focused design, data insights, cybersecurity, and strategic consulting.",
      features: ["Strategy", "Branding", "IT Consulting"],
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
    <div className="container pb-20">
      <div ref={titleRef} className="sticky  w-3/5 mt-20 top-30">
        <div className="title">Our services</div>
        <div className="paragraph">
          We design, develop, and deliver secure, high-performance solutions
          tailored to your business needs.
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
              className={`p-14 ${
                service.type !== "primary" ? "text-black" : "text-white"
              } `}
            >
              <div className="p-6 flex justify-between items-end ">
                <div className=" w-3/5">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-[700]  mb-8 font-[AtkinsonBold]">{service.title}</h3>
                  <p className=" text-xl md:text-2xl lg:text-2xl font-[400]  mb-4 ">
                    {service.description}
                  </p>
                </div>
                <div className="2/5">
                  <div className="flex w-2/3 mx-auto justify-end flex-wrap gap-3 ">
                    {service.features.map((feature: string, index: number) => (
                      <Button
                        variant={service.type}
                        title={feature}
                        key={index}
                      >
                        {/* <span className="text-2xl">{feature}</span> */}
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
