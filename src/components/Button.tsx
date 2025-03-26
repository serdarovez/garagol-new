
const Button = ({
  title,
  class: className,
}: {
  title: string;
  class?: string;
}) => {
  return (
    <div
      className={`bg-[#090825] w-max  rounded-full py-3 px-5 cursor-pointer text-white ${
        className || ""
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
