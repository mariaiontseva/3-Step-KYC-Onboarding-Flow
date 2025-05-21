import React from 'react';
interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentStep
}) => {
  return <div className="mb-6">
      <p className="text-[#4075BF] font-medium mb-1">
        Question {currentStep} of {totalSteps}
      </p>
    </div>;
};
export default ProgressBar;