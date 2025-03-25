import { useEffect, useRef } from "react";
import web from "../assets/web.png";
import ui from "../assets/ui.png";
import devops from "../assets/devops.png";
import cyber from "../assets/cyber.png";
import it from "../assets/it.png";

const Cards = () => {
  const services = [
    {
      title: "Web & Mobile Development",
      description:
        "Build secure, high-performance digital experiences tailored to your brand’s unique goals.",
      features: [
        "Custom websites & mobile apps",
        "Cross-platform compatibility",
        "User-focused development",
      ],
      background: "#2C3E50",
      image: web,
    },
    {
      title: "UI/UX Design & Branding",
      description:
        "Create user-centered designs that enhance engagement and build brand loyalty.",
      features: [
        "Intuitive interfaces",
        "Brand identity design",
        "Usability optimization",
      ],
      background: "#D6654F",
      image: ui,
    },
    {
      title: "DevOps & Cloud Solutions",
      description:
        "Accelerate delivery with automated, scalable, and secure cloud systems.",
      features: [
        "CI/CD pipelines",
        "Automated deployments",
        "Cloud optimization",
      ],
      background: "#8A9A5B",
      image: devops,
    },
    {
      title: "Cybersecurity & Compliance",
      description:
        "Protect your digital assets with comprehensive security frameworks and testing.",
      features: ["Threat analysis", "Compliance audits", "Penetration testing"],
      background: "#4A4A4A",
      image: cyber,
    },
    {
      title: "Data Science & Analytics",
      description:
        "Unlock insights and drive decisions through advanced data analysis and AI.",
      features: [
        "Machine learning models",
        "Business intelligence dashboards",
        "Predictive analytics",
      ],
      background: "#9C89B8",
      image: cyber,
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Align your technology with business goals through expert strategy and insights.",
      features: [
        "Digital transformation",
        "Emerging tech guidance",
        "Sustainable IT practices",
      ],
      background: "#E1A631",
      image: it,
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
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
          const rotate = -5 * (1 - overlap);
          const translateY = -20 * (1 - overlap);
          card.style.transform = `scale(${scale}) rotate(${
            index % 2 == 0 ? `${rotate}` : -rotate
          }deg) translateY(${translateY}px)`;
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
    <div className="flex  items-center flex-col justify-center max-w-7xl mx-auto">
      <div className="">
        <div className="title">Built from the ground up</div>
        <div className="paragraph">
          All of our services are designed to help your business stand out.
        </div>
      </div>
      <div ref={containerRef} className="w-full  flex flex-col gap-5 ">
        {services.map((service, index) => (
          <div
            ref={(el: any) => (serviceRefs.current[index] = el)}
            style={{ backgroundColor: service.background }}
            className=" sticky top-30 -z-10 rounded-[100px] p-10 shadow-md font-[400] w-full text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="p-6 flex-1 ">
              <h3 className="text-3xl font-bold  mb-5">{service.title}</h3>
              <div className=" items-start lg:flex-row xl:flex-row md:flex gap-5 flex-col justify-between">
                <div>
                  <p className=" mb-4 text-2xl">{service.description}</p>

                  <ul className="space-y-2 list-disc list-inside">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className=" ">
                        <span className="text-2xl">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <img src={service.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
