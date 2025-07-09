import getButtonClasses from "./buttonStyles";

interface RadioCardProps {
  label: string;
  value: string;
  checked: boolean;
  name: string;
  fullWidth: boolean;
  autofocus?: boolean;
  onChange: (value: string) => void;
}

const RadioCard: React.FC<RadioCardProps> = ({
  label,
  value,
  checked,
  name,
  fullWidth,
  autofocus,
  onChange,
}) => {
  const buttonClasses = getButtonClasses({
    variant: checked ? "primary" : "secondary",
    className: "",
    fullWidth,
    disabled: false,
    focusType: "peer",
  });

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={checked}
        name={name}
        onChange={() => onChange(value)}
        autoFocus={autofocus}
        className="sr-only peer"
      />
      <span className={buttonClasses}>{label}</span>
    </label>
  );
};

export default RadioCard;
