import { Link, LinkProps } from "@tanstack/react-router";
import React from "react";
import getButtonClasses from "./buttonStyles";

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
  const buttonClasses = getButtonClasses({
    variant,
    className,
    fullWidth,
    disabled,
  });

  const Component = as || "button";

  const linkSpecificStyle = Component === Link ? "no-underline" : "";

  const finalClassName = `${buttonClasses} ${linkSpecificStyle}`.trim();

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
