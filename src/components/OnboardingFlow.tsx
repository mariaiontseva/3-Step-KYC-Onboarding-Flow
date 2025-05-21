import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import WelcomeScreen from './WelcomeScreen';
import ProgressBar from './ProgressBar';
const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    role: '',
    users: '',
    painPoints: [],
    experience: '',
    onboardingPreference: ''
  });
  const handleUpdateData = (field: string, value: string | string[]) => {
    setUserData({
      ...userData,
      [field]: value
    });
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
      case 2:
        return <StepTwo userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
      case 3:
        return <StepThree userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
      case 4:
        return <WelcomeScreen />;
      default:
        return <StepOne userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
    }
  };
  return <div className="w-full max-w-2xl mx-auto p-6">
      {currentStep < 4 && <ProgressBar totalSteps={3} currentStep={currentStep} />}
      {renderStep()}
    </div>;
};
export default OnboardingFlow;