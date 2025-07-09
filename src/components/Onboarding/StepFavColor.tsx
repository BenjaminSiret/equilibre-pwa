import React from "react";
import { favColors } from "../../constants";
import { FavColor } from "../../types/UserInfo";
import RadioCard from "../ui/RadioCard";

interface StepFavColorProps {
  favColor?: FavColor;
  setFavColor: (favColor: FavColor) => void;
  errorMessage: string | null;
  setErrorMessage: (errorMessage: string | null) => void;
}

const StepFavColor: React.FC<StepFavColorProps> = ({
  favColor,
  setFavColor,
  errorMessage,
  setErrorMessage,
}) => {
  const handleFavColorChange = (selectedColor: FavColor) => {
    setFavColor(selectedColor);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] p-4 h-[50vh] min-h-[200px] max-h-[300px] flex flex-col justify-between">
          <h2 className="mt-8 text-xl">Step 4 on 4</h2>
          <h3 className="text-3xl text-white mt-20">
            Thank you! Which color do you prefer?
          </h3>
        </div>
        <div className="min-h-40 flex p-4 pt-8 flex-col ">
          <fieldset>
            <legend className="text-lg mb-4">Select your favorite color</legend>
            <div className="grid grid-cols-2 gap-3">
              {favColors.map((color, index) => (
                <RadioCard
                  key={color}
                  onChange={(value) => handleFavColorChange(value as FavColor)}
                  value={color}
                  checked={favColor === color}
                  name="favColor"
                  label={color.charAt(0).toUpperCase() + color.slice(1)}
                  fullWidth={true}
                  autofocus={index === 0}
                  aria-describedby={errorMessage ? "color-error" : undefined}
                />
              ))}
            </div>
          </fieldset>
          <div className="h-6 mt-2">
            {errorMessage && (
              <span className="text-red-500">{errorMessage}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFavColor;
