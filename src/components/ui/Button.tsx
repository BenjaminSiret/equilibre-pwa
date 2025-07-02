interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  fullWidth = false,
  disabled = false,
}) => {
  const baseStyle =
    "py-2 px-6 rounded-lg text-base font-medium transition-colors focus-visible:outline-none";

  const variantStyle =
    variant === "primary"
      ? "bg-[#2563EB] text-white border border-[#2563EB] hover:bg-blue-600"
      : variant === "secondary"
        ? "bg-white text-[#2563EB] border border-[#2563EB] hover:bg-blue-50"
        : variant === "tertiary"
          ? "bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
          : "bg-transparent text-[#2563EB] border-none hover:underline";

  const focusStyle =
    "focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-current";

  const widthStyle = fullWidth ? "w-full" : "min-w-[110px]";

  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${focusStyle} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
