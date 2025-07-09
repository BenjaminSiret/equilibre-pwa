import React from "react";
import Button from "../ui/Button";

interface StepSplashProps {
  handleNextStep: () => void;
}

const StepSplash: React.FC<StepSplashProps> = ({ handleNextStep }) => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="clip-wave bg-[#2563EB] w-full flex-1 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-medium mb-5">Equilibre</h2>
        <p className="text-white opacity-65 pl-6 pr-6 text-center">
          Follow your mood, cultivate your health.
        </p>
      </div>
      <Button onClick={handleNextStep} variant="primary" className="mb-4">
        Start
      </Button>
    </div>
  );
};

export default StepSplash;
