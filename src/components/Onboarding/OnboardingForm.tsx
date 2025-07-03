import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import usePouchDb from "../../hooks/usePouchDb";
import { useUserStore } from "../../store/userStore";
import { FavColor, Friend, Gender, UserInfo } from "../../types/UserInfo";
import Button from "../ui/Button";
import OnboardingConfirm from "./OnboardingConfirm";
import OnboardingSuccess from "./OnboardingSuccess";
import StepFavColor from "./StepFavColor";
import StepFriend from "./StepFriend";
import StepGender from "./StepGender";
import StepUsername from "./StepName";
import StepSplash from "./StepSplash";

interface OnboardingFormProps {
  setOnboardingCompleted: (completed: boolean) => void;
}

const ONBOARDING_STEPS = [
  { id: "SPLASH", component: StepSplash },
  { id: "USERNAME", component: StepUsername },
  { id: "GENDER", component: StepGender },
  { id: "FAVCOLOR", component: StepFavColor },
  { id: "FRIEND", component: StepFriend },
  { id: "CONFIRM", component: OnboardingConfirm },
  { id: "SUCCESS", component: OnboardingSuccess },
];

const OnboardingForm: React.FC<OnboardingFormProps> = ({
  setOnboardingCompleted,
}) => {
  const [user, setUser] = useState<UserInfo>({
    _id: "",
    onBoardingCompleted: false,
    username: "",
    createdAt: new Date().toISOString(),
    type: "onboarding",
    gender: undefined,
    favColor: undefined,
    friend: undefined,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentStepId, setCurrentStepId] = useState<string>(
    ONBOARDING_STEPS[0].id,
  );
  const { addDoc } = usePouchDb();
  const { setUserData } = useUserStore();

  const setUserAttribute = <K extends keyof UserInfo>(
    attribute: K,
    value: UserInfo[K],
  ) => {
    setUser((prevUser) => ({ ...prevUser, [attribute]: value }));
  };

  const handleNextStep = () => {
    if (currentStepId == "USERNAME" && !user.username.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }

    if (currentStepId == "GENDER" && !user.gender) {
      setErrorMessage("Please select your gender");
      return;
    }

    if (currentStepId == "FAVCOLOR" && !user.favColor) {
      setErrorMessage("Please select your favorite color");
      return;
    }

    if (currentStepId == "FRIEND" && !user.friend) {
      setErrorMessage("Please select your friend");
      return;
    }

    const currentStepIndex = ONBOARDING_STEPS.findIndex(
      (step) => step.id === currentStepId,
    );
    if (currentStepIndex < ONBOARDING_STEPS.length - 1) {
      setCurrentStepId(ONBOARDING_STEPS[currentStepIndex + 1].id);
      setErrorMessage("");
    }
  };

  const handlePrevStep = () => {
    const currentStepIndex = ONBOARDING_STEPS.findIndex(
      (step) => step.id === currentStepId,
    );
    if (currentStepIndex > 0) {
      setCurrentStepId(ONBOARDING_STEPS[currentStepIndex - 1].id);
      setErrorMessage("");
    }
  };

  const handleOnboardingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userToSave: UserInfo = {
        _id: new Date().getTime().toString(),
        username: user.username,
        type: "onboarding",
        onBoardingCompleted: true,
        createdAt: new Date().toISOString(),
        gender: user.gender,
        favColor: user.favColor,
        friend: user.friend,
      };
      console.log(userToSave);
      await addDoc(userToSave);
      setUserData({ onboardingCompleted: true });
      setCurrentStepId("SUCCESS");
      setLoading(false);
    } catch (error) {
      console.error("Error saving user:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleOnboardingSubmit}
        className="w-full h-full"
        noValidate
      >
        {currentStepId == "SPLASH" && (
          <StepSplash handleNextStep={handleNextStep} />
        )}
        {currentStepId == "USERNAME" && (
          <StepUsername
            handleNextStep={handleNextStep}
            errorMessage={errorMessage}
            username={user.username}
            setUsername={(username: string) =>
              setUserAttribute("username", username)
            }
            setErrorMessage={setErrorMessage}
          />
        )}
        {currentStepId == "GENDER" && (
          <StepGender
            gender={user.gender}
            setGender={(gender: Gender) => setUserAttribute("gender", gender)}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            username={user.username}
          />
        )}
        {currentStepId == "FAVCOLOR" && (
          <StepFavColor
            favColor={user.favColor}
            setFavColor={(favColor: FavColor) =>
              setUserAttribute("favColor", favColor)
            }
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
        {currentStepId == "FRIEND" && (
          <StepFriend
            friend={user.friend}
            setFriend={(friend: Friend) => {
              setUserAttribute("friend", friend);
            }}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
        {currentStepId == "CONFIRM" && <OnboardingConfirm />}
        {currentStepId == "SUCCESS" && (
          <OnboardingSuccess username={user.username} />
        )}
        <div className="flex gap-4 justify-center p-4">
          {currentStepId != "SPLASH" && currentStepId != "SUCCESS" && (
            <div className="flex w-full justify-between">
              <Button
                type="button"
                onClick={handlePrevStep}
                variant="secondary"
              >
                Previous
              </Button>
              {currentStepId != "CONFIRM" && (
                <Button type="button" onClick={handleNextStep}>
                  Next
                </Button>
              )}
            </div>
          )}
          {currentStepId === "SUCCESS" && (
            <Button
              as={Link}
              to="/mood"
              onClick={() => setOnboardingCompleted(true)}
              variant="primary"
            >
              {loading ? "Loading..." : "Start your journey"}
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default OnboardingForm;
