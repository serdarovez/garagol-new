import { motion } from "framer-motion";

const ConnectUs = () => {
  const services = [
    {
      title: "Connect",
      description:
        "Define your vision, challenges, and goals.",
    },
    {
      title: "Collaborate",
      description:
        "Design and develop custom solutions.",
    },
    {
      title: "Create",
      description:
        "Test, refine, and launch seamlessly.",
    },
    {
      title: "Support",
      description:
        "Receive ongoing optimization and 24/7 support.",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Faster stagger
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 }, // Smaller initial offset
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Faster duration
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white" > 
    <div className="pt-20 pb-30 container   overflow-hidden">
      <div className="title">Our process</div>
      
      <motion.div
        className="flex flex-col md:flex-row mt-20 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          margin: "-150px 0px", // Larger negative margin triggers earlier
          amount: 0.1 // Triggers when 10% is visible
        }}
        variants={container}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#8675F2] w-full z-10 p-8 shadow-lg font-normal text-white flex flex-col"
          >
            <div className="p-2 flex-1 flex flex-col">
              <div className="relative mb-10 p-3">
                <span className="absolute text-[#EDD750] font-[AtkinsonItalic] -z-1 text-8xl left-0 -top-5">
                  {index + 1}
                </span>
                <h3 className="text-4xl z-2 font-[700] mb-6">{service.title}</h3>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="">
                  <p className="mb-4 text-2xl text-start">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default ConnectUs;