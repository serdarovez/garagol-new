const StackedCard = ({
  title,
  description,
  features,
  background,
  image,
}: {
  title: string;
  description: string;
  features: any;
  background: string;
  image: any;
}) => {
  return (
    <div
      style={{ backgroundColor: background }}
      className=" sticky top-40 z-10  rounded-[100px] p-10 shadow-md font-[400] w-full text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="p-6 flex-1 ">
        <h3 className="text-3xl font-bold  mb-5">{title}</h3>
        <div className="flex items-start justify-between">
          <div>
            <p className=" mb-4 text-xl">{description}</p>

            <ul className="space-y-2 list-disc list-inside">
              {features.map((feature: string, index: number) => (
                <li key={index} className=" ">
                  <span className="text-xl">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default StackedCard;
