import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import WelcomeScreen from './WelcomeScreen';
import ProgressBar from './ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

const MODAL_HEIGHT = 'min-h-[540px]';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fade, setFade] = useState(true);
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
    setFade(false);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setFade(true);
    }, 200);
  };
  const handleBack = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setFade(true);
    }, 200);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
      case 2:
        return <StepTwo userData={userData} updateData={handleUpdateData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <StepThree userData={userData} updateData={handleUpdateData} onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <WelcomeScreen onBack={handleBack} showConfetti={true} />;
      default:
        return <StepOne userData={userData} updateData={handleUpdateData} onNext={handleNext} />;
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#1A2A53]">
      <div className="bg-white rounded-2xl shadow-lg px-6 pt-6 pb-0 max-w-xl w-full" style={{minHeight: 540}}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {currentStep < 4 && <ProgressBar totalSteps={3} currentStep={currentStep} />}
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default OnboardingFlow;