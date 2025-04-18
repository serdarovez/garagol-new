import { motion } from "framer-motion";

const ConnectUs = () => {
  const services = [
    {
      title: "Connect",
      description: "Define your vision, challenges, and goals.",
    },
    {
      title: "Collaborate",
      description: "Design and develop custom solutions.",
    },
    {
      title: "Create",
      description: "Test, refine, and launch seamlessly.",
    },
    {
      title: "Support",
      description: "Receive ongoing optimization and 24/7 support.",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 1 }, // Keep container visible to track scroll
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust stagger timing
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: {
      y: 100, // Start further down
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  return (
    <div id="process" className="bg-white">
      <div className="lg:pt-20 xl:pt-20 lg:pb-30 xl:pb-30 pb-20 container overflow-hidden">
        <div className="title">Our process</div>

        <motion.div
          className="flex flex-col md:flex-row xl:mt-20 mt-10 lg:mt-20 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px 0px", // Adjust trigger point
            amount: 0.2, // Triggers when 20% is visible
          }}
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#8675F2] w-full z-10 p-8 shadow-lg font-normal text-white flex flex-col"
              viewport={{
                once: true,
                margin: "0px 0px -100px 0px", // Individual items trigger when entering from bottom
              }}
            >
              <div className="p-2 flex-1 flex flex-col">
                <div className="relative mb-10 p-3">
                  <span className="absolute text-[#EDD750] font-[AtkinsonItalic] -z-1 text-8xl left-0 -top-5">
                    {index + 1}
                  </span>
                  <h3 className="text-3xl z-2 font-[700] mb-6">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="">
                    <p className="mb-4 text-xl text-start">
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
