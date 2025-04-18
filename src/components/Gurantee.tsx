import fast from "../assets/delivery.svg";
import team from "../assets/team.svg";
import support from "../assets/support.svg";
import scalable from "../assets/scalable.svg";
import safe from "../assets/safe.svg";
import money from "../assets/money.svg";

const Gurantee = () => {
  const services = [
    {
      title: "Fast Delivery",
      description:
        "We aim to deliver first draft within a week of kick-off call so you can start seeing results sooner.",
      icon: fast,
    },
    {
      title: "Ongoing Support",
      description: "For urgent issues, we do our best to respond within two hours, keeping your operations running smoothly.",
      icon: support,
    },
    {
      title: "Compliant Development",
      description: "Every line of code is carefully reviewed to reduce vulnerabilities and safeguard your data.",
      icon: safe,
    },
    {
      title: "Scalability Assurance",
      description: "We guide you in scaling your solutions over time, ensuring they grow along with your business.",
      icon: scalable,
    },
    {
      title: "Transparent Pricing",
      description: "Competitive global rates with no hidden fees or unexpected charges.",
      icon: money,
    },
    {
      title: "Expert Team",
      description: "Certified professionals delivering tailored solutions.",
      icon: team,
    },
  ];
  return (
    <div id="commitment" className=" bg-[#f9f9f9]">
      <div className="lg:py-30 xl:py-30 py-20 container ">
        <div className="title">Our commitment </div>
        <div className="paragraph">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2   mt-10  gap-5">
          {services.map((service) => (
            <div className="  w-full  p-5 px-0 font-[400] items-start gap-5  flex ">
              <div className="">
                <img src={service.icon} alt="" />
              </div>
              <div className="p-2 pt-0 flex-1 text-start ">
                <h3 className="text-3xl font-bold ">{service.title}</h3>
                <div className="  lg:flex-row items-start justify-items-start xl:flex-row md:flex gap-5 flex-col ">
                  <div className="mt-5">
                    <p className=" mb-2 text-xl text-start">
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
