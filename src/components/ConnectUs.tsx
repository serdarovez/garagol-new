const ConnectUs = () => {
  const services = [
    {
      title: "1. Connect",
      description: "Discovery & Consultation",
      features: ["Understand your goals", "Research & Strategy Development"],
    },
    {
      title: "2. Collaborate",
      description: "Design & Build",
      features: [" Development & Integration", "Development & Integration"],
    },
    {
      title: "3. Create",
      description: "Delivery & Support",
      features: ["Testing & Optimization", "Deployment & Continuous Support"],
    },
  ];
  return (
    <div className="mt-40 max-w-7xl mx-auto text-center">
      <div className="title">Our proven 3-step process</div>
      <div className="paragraph">
        All of our services are designed to help your business to get noticed.
      </div>
      <div className="flex  mt-10  gap-10">
        {services.map((service) => (
          <div className="  bg-[#2C3E50] aspect-square w-full rounded-[100px] p-5 shadow-md font-[400]  text-white overflow-hidden hover:shadow-lg transition-shadow duration-300  flex flex-col">
            <div className="p-2 flex-1 ">
              <h3 className="text-3xl font-bold   mb-5">{service.title}</h3>
              <div className="  lg:flex-row items-start justify-items-start xl:flex-row md:flex gap-5 flex-col ">
                <div className="mt-10" >
                  <p className=" mb-2 text-2xl text-start">{service.description}</p>

                  <ul className="space-y-2 list-disc text-start list-inside">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className=" ">
                        <span className="text-xl font-[400]">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
