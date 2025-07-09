interface ButtonStylesProps {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  focusType?: "peer" | "self";
}

const getButtonClasses = (options: ButtonStylesProps): string => {
  const {
    variant = "primary",
    className = "",
    fullWidth = false,
    disabled = false,
    focusType = "self",
  } = options;

  const baseStyle =
    "py-4 px-6 rounded-2xl text-base font-medium transition-colors focus-visible:outline-none text-center";

  const variantStyle =
    variant === "primary"
      ? "bg-[#2563EB] text-white border border-[#2563EB] hover:bg-blue-600 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
      : variant === "secondary"
        ? "bg-white text-[#2563EB] border border-[#2563EB] hover:bg-blue-50"
        : variant === "tertiary"
          ? "bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
          : "bg-transparent text-[#2563EB] border-none hover:underline";

  const selfFocusStyle =
    "focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2";
  const peerFocusStyle =
    "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-300 peer-focus-visible:ring-offset-2";

  const focusStyle = focusType === "peer" ? peerFocusStyle : selfFocusStyle;

  const widthStyle = fullWidth ? "w-full" : "min-w-[110px]";
  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return `${baseStyle} ${variantStyle} ${focusStyle} ${widthStyle} ${disabledStyle} ${className}`;
};

export default getButtonClasses;
export type { ButtonStylesProps };
