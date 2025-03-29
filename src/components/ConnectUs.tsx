import { Squircle } from "react-ios-corners";

const ConnectUs = () => {
  const services = [
    {
      title: "1. Connect",
      description:
        "Start with a discovery call where we dive deep into your vision, challenges, and business goals to lay a strong foundation for success.",
    },
    {
      title: "2. Collaborate",
      description:
        "We work closely with you through design and development, delivering custom solutions that align perfectly with your business needs.",
    },
    {
      title: "3. Create",
      description:
        "Through rigorous testing and careful deployment, we ensure a smooth, reliable launch that meets the highest standards of quality.",
    },
    {
      title: "4. Support",
      description:
        "Enjoy ongoing optimization and 24/7 support, keeping your business running smoothly while continuously improving your digital presence.",
    },
  ];

  return (
    <div className="mt-40 container px-4">
      <div className="title ">Our process</div>
      <div className="flex flex-col md:flex-row mt-20 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#8675F2]  w-full z-10 p-8 shadow-lg font-normal text-white overflow-hidden 
                       transition-all duration-300 flex flex-col "
            // roundness={1} // Controls the div effect (0 = square, 1 = circle)
          >
            <div className="p-2 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
              <div className="flex-1 flex flex-col">
                <div className="mt-6">
                  <p className="mb-4 text-2xl text-start">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectUs;
