import fast from "../assets/delivery.svg";
import team from "../assets/team.svg";
import support from "../assets/support.svg";
import scalable from "../assets/scalable.svg";
import safe from "../assets/safe.svg";
import money from "../assets/money.svg";

const Gurantee = () => {
  const services = [
    {
      title: "Fast delivery",
      description:
        "Most projects completed within a month, or your next invoice is discounted.",
      icon: fast,
    },
    {
      title: "24/7 support",
      description: "Priority responses for urgent issues within two hours.",
      icon: support,
    },
    {
      title: "Secure development",
      description: "Every line of code undergoes rigorous security checks.",
      icon: safe,
    },
    {
      title: "Scalability assurance",
      description: "Free scaling consultations for the life of your project.",
      icon: scalable,
    },
    {
      title: "Transparent pricing",
      description: "Competitive global rates with no hidden fees.",
      icon: money,
    },
    {
      title: "Expert team",
      description: "Certified professionals delivering tailored solutions.",
      icon: team,
    },
  ];
  return (
    <div className="bg-white mt-30">
      <div className="py-30 container ">
        <div className="title">Our commitment to your success</div>
        <div className="paragraph">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </div>
        <div className="grid grid-cols-2   mt-10  gap-5">
          {services.map((service) => (
            <div className="  w-full  p-5  font-[400] items-start gap-5  flex ">
              <div className="">
                <img src={service.icon} alt="" />
              </div>
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
    </div>
  );
};

export default Gurantee;
