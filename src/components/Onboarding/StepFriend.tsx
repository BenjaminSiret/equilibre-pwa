import React from "react";
import { friends } from "../../constants";
import { Friend } from "../../types/UserInfo";
import RadioCard from "../ui/RadioCard";

interface StepFriendProps {
  friend?: Friend;
  setFriend: (friend: Friend) => void;
  errorMessage: string | null;
  setErrorMessage: (errorMessage: string | null) => void;
}

const StepFriend: React.FC<StepFriendProps> = ({
  friend,
  setFriend,
  errorMessage,
  setErrorMessage,
}) => {
  const handleSetFriend = (selectedFriend: Friend) => {
    setFriend(selectedFriend);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] p-4 h-[50vh] min-h-[200px] max-h-[300px] flex flex-col justify-between">
          <h2 className="mt-8 text-xl">Step 3 on 4</h2>
          <h3 className="text-3xl text-white mt-20">
            Well noted, select a friend for this journey
          </h3>
        </div>
        <div className="min-h-40 flex p-4 pt-8 flex-col">
          <fieldset>
            <legend className="text-lg mb-4">Select your friend</legend>
            {friends.map((friendItem, index) => (
              <RadioCard
                key={friendItem}
                onChange={(value) => handleSetFriend(value as Friend)}
                value={friendItem}
                checked={friend === friendItem}
                name="friend"
                label={friendItem.charAt(0).toUpperCase() + friendItem.slice(1)}
                fullWidth={true}
                autofocus={index === 0}
                aria-describedby={errorMessage ? "friend-error" : undefined}
              />
            ))}
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

export default StepFriend;
