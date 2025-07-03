import React from "react";
import { Emotion } from "../../types/Mood";
import Button from "../ui/Button";

interface StepEmotionProps {
  emotion: Emotion | undefined;
  setEmotion: (emotion: Emotion) => void;
  errorMessage: string | null;
  setErrorMessage: (errorMessage: string | null) => void;
}

const StepEmotion: React.FC<StepEmotionProps> = ({
  emotion,
  setEmotion,
  errorMessage,
  setErrorMessage,
}) => {
  const handleEmotionChange = (selectedEmotion: Emotion) => {
    setEmotion(selectedEmotion);
    setErrorMessage(null);
  };

  const emotions: Emotion[] = [
    "joy",
    "sadness",
    "anger",
    "love",
    "disgust",
    "fear",
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] p-8 h-[40vh] min-h-[200px] max-h-[300px] flex flex-col justify-between">
          <h2 className="text-xl">Step 2 on 3</h2>
          <h3 className="text-3xl text-white">
            Choose the emotion that resonates the most with you right now.
          </h3>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <fieldset>
            <legend className="text-lg mb-4">
              I resonate the most with...
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {emotions.map((emotionOption) => (
                <Button
                  key={emotionOption}
                  type="button"
                  onClick={() => handleEmotionChange(emotionOption)}
                  variant={emotion === emotionOption ? "primary" : "secondary"}
                >
                  {emotionOption.charAt(0).toUpperCase() +
                    emotionOption.slice(1)}
                </Button>
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

export default StepEmotion;
