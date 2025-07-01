interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "w-full py-2 px-6 rounded-lg text-base font-medium transition-colors";

  const variantStyle =
    variant === "primary"
      ? "bg-[#2563EB] text-white border border-[#2563EB]"
      : variant === "secondary"
        ? "bg-white text-[#2563EB] border border-[#2563EB]"
        : variant === "tertiary"
          ? "bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
          : "bg-transparent text-[#2563EB] border-none hover:underline";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
