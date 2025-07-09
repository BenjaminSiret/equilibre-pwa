import { Link } from "@tanstack/react-router";
import React from "react";
import friendGif from "../../assets/animations/friend.gif";
import Button from "../ui/Button";

const StepMoodSuccess: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="bg-[#2563EB] w-full flex flex-1 flex-col p-8 justify-center">
        <h2 className="text-3xl text-white mt-8 text-center">
          You can feel proud of taking care of yourself!
        </h2>
        <img src={friendGif} alt="friend animation" className="max-h-96" />
      </div>

      {/* This div will grow and push the button to the bottom */}
      <div className="flex-1" />

      <Button as={Link} to="/" className="mb-4">
        Back to Home
      </Button>
    </div>
  );
};

export default StepMoodSuccess;
