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
    primary: "bg-[#EDD750] text-[#242424]   border border-[#242424] ",
    outline: "border border-[#EDD750]    text-white",
    secondary: "bg-[#8675F2] text-white   border border-[#242424]",
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
