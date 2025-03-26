const Gurantee = () => {
  const services = [
    {
      title: "Fast delivery",
      description:
        "Most projects completed within a month, or your next invoice is discounted.",
    },
    {
      title: "24/7 support",
      description: "Priority responses for urgent issues within two hours.",
    },
    {
      title: "Secure development",
      description: "Every line of code undergoes rigorous security checks.",
    },
    {
      title: "Scalability assurance",
      description: "Free scaling consultations for the life of your project.",
    },
    {
      title: "Transparent pricing",
      description: "Competitive global rates with no hidden fees.",
    },
    {
      title: "Expert team",
      description: "Certified professionals delivering tailored solutions.",
    },
  ];
  return (
    <div className="mt-40 max-w-7xl mx-auto text-center">
      <div className="title">Our commitment to your success</div>
      <div className="paragraph">
        We ensure the highest quality of work, with the fastest delivery times.
      </div>
      <div className="grid grid-cols-2   mt-10  gap-5">
        {services.map((service) => (
          <div className="  w-full  p-5  font-[400] items-start gap-5  flex ">
            <div className="w-16 h-16 rounded-full bg-[#D9D9D9]"></div>
            <div className="p-2 flex-1 text-start ">
              <h3 className="text-3xl font-bold ">{service.title}</h3>
              <div className="  lg:flex-row items-start justify-items-start xl:flex-row md:flex gap-5 flex-col ">
                <div className="mt-5">
                  <p className=" mb-2 text-2xl text-start">
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

export default Gurantee;
