import React from "react";
import Button from "../ui/Button";

const StepConfirm: React.FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div className="bg-[#2563EB] p-4 h-[50vh] min-h-[200px] max-h-[300px] flex flex-col justify-between">
          <h2 className="mt-8 text-xl">Step 5 on 5</h2>
          <h3 className="text-3xl text-white mt-20">Is everything correct?</h3>
        </div>
        <div className="min-h-40 flex p-4 pt-8 flex-col">
          <p className="text-lg mb-4">
            If you want to make any changes, you can go back. Otherwise, please
            confirm your information.
          </p>
          <Button type="submit" variant="primary">
            Confirm and Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepConfirm;
