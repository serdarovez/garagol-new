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
    primary:
      "bg-[#EDD750] text-[#242424] hover:bg-[#8675F2] hover:text-white  border cursor-pointer border-[#242424] ",
    outline:
      "border border-[#EDD750]  hover:bg-[#8675F2] z-1  bg-transparent  cursor-pointer text-white",
    secondary:
      "bg-[#8675F2] text-white  hover:bg-[#EDD750] hover:text-[#242424] cursor-pointer border border-[#242424]",
  };
  return (
    <div
      className={`   py-2 px-5  ${className || ""} ${variantStyles[variant]} `}
    >
      {title}
    </div>
  );
};

export default Button;
