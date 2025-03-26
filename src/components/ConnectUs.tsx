import { Squircle } from 'react-ios-corners';

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
      features: ["Development & Integration", "Development & Integration"],
    },
    {
      title: "3. Create",
      description: "Delivery & Support",
      features: ["Testing & Optimization", "Deployment & Continuous Support"],
    },
  ];
  
  return (
    <div className="mt-40 max-w-7xl mx-auto text-center px-4">
      <div className="title text-4xl font-bold mb-4">Our proven 3-step process</div>
      <div className="paragraph text-xl text-gray-600 mb-12">
        All of our services are designed to help your business to get noticed.
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-8">
        {services.map((service, index) => (
          <Squircle
            key={index}
            className="bg-[#2C3E50] aspect-square w-full p-8 shadow-lg font-normal text-white overflow-hidden 
                       transition-all duration-300 flex flex-col "
            radius={80} // Controls the overall corner radius
            // roundness={1} // Controls the squircle effect (0 = square, 1 = circle)
          >
            <div className="p-2 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
              <div className="flex-1 flex flex-col">
                <div className="mt-6">
                  <p className="mb-4 text-2xl text-start">{service.description}</p>
                  <ul className="space-y-3 list-disc text-start pl-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xl font-normal">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Squircle>
        ))}
      </div>
    </div>
  );
};

export default ConnectUs;