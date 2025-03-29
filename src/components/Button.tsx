const Button = ({
  title,
  class: className,
  variant,
}: {
  title: string;
  class?: string;
  variant: string;
}) => {
  const variantStyles: any = {
    primary: "bg-[#EDD750] text-black cursor-pointer border border-black ",
    outline: "border border-[#EDD750] cursor-pointer  text-white",
    secondary: "bg-[#8675F2] text-black cursor-pointer border border-black",
  };
  return (
    <div
      className={` w-max  py-2 px-5  ${className || ""} ${
        variantStyles[variant]
      } `}
    >
      {title}
    </div>
  );
};

export default Button;
