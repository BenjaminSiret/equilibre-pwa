import { Link, LinkProps } from "@tanstack/react-router";
import React from "react";

interface CommonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsButtonProps extends CommonButtonProps {
  as?: "button";
  type?: "button" | "submit" | "reset";
  to?: never;
}
interface ButtonAsLinkProps
  extends CommonButtonProps,
    Omit<LinkProps, "children" | "className"> {
  as: typeof Link;
  type?: never;
}

type PolymorphicButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button: React.FC<PolymorphicButtonProps> = ({
  as,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  disabled = false,
  onClick,
  ...rest
}) => {
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

  const focusStyle =
    "focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-current";

  const widthStyle = fullWidth ? "w-full" : "min-w-[110px]";
  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const Component = as || "button";

  const linkSpecificStyle = Component === Link ? "no-underline" : "";

  const finalClassName =
    `${baseStyle} ${variantStyle} ${focusStyle} ${widthStyle} ${disabledStyle} ${className} ${linkSpecificStyle}`.trim();

  const elementProps: any = {
    className: finalClassName,
    onClick,
    ...rest,
  };

  if (disabled) {
    elementProps["aria-disabled"] = true;
    if (Component === "button") {
      elementProps["disabled"] = true;
    }
  }

  return <Component {...elementProps}>{children}</Component>;
};

export default Button;
