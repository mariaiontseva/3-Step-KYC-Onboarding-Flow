import React from 'react';
import OnboardingFlow from './components/OnboardingFlow';
export function App() {
  return <div className="flex items-center justify-center w-full min-h-screen bg-[#072653]">
      <div className="w-[565px] bg-white rounded-lg">
        <OnboardingFlow />
      </div>
    </div>;
}