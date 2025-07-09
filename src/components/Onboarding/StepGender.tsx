import React from "react";
import { genders } from "../../constants";
import { Gender } from "../../types/UserInfo";
import RadioCard from "../ui/RadioCard";

interface StepGenderProps {
  gender?: Gender;
  setGender: (value: Gender) => void;
  errorMessage: string | null;
  setErrorMessage: (errorMessage: string | null) => void;
  username: string;
}

const StepGender: React.FC<StepGenderProps> = ({
  gender,
  setGender,
  errorMessage,
  setErrorMessage,
  username,
}) => {
  const handleGenderChange = (selectedGender: Gender) => {
    setGender(selectedGender);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] p-4 h-[50vh] min-h-[200px] max-h-[300px] flex flex-col justify-between">
          <h2 className="text-xl">Step 2 on 4</h2>
          <h3 className="text-3xl text-white">
            Nice to meet you {username}, how do you identify?
          </h3>
        </div>
        <div className="min-h-40 flex p-4 pt-8 flex-col">
          <fieldset>
            <legend className="text-lg mb-4 ">I identify as...</legend>
            <div className="flex flex-col gap-2">
              {genders.map((genderOption) => (
                <RadioCard
                  key={genderOption}
                  onChange={(value: string) =>
                    handleGenderChange(value as Gender)
                  }
                  value={genderOption}
                  checked={gender === genderOption}
                  name="gender"
                  label={genderOption}
                  fullWidth={true}
                  autofocus={true}
                  aria-describedby={errorMessage ? "gender-error" : undefined}
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

export default StepGender;
