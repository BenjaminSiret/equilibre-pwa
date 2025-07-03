import { Link } from "@tanstack/react-router";
import React from "react";
import friendGif from "../../assets/animations/friend.gif";
import Button from "../ui/Button";

const MoodFormSuccess: React.FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] flex flex-col p-8 justify-center">
          <h2 className="text-3xl text-white mt-20 text-center">
            You can feel proud of taking care of yourself!
          </h2>
          <img src={friendGif} alt="friend animation" className="max-h-96" />
        </div>
        <div className="min-h-40 flex p-8 flex-col">
          <Button as={Link} to="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoodFormSuccess;
