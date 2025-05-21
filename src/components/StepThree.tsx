import React from 'react';
import { CheckIcon, XIcon, VideoIcon, GraduationCapIcon } from 'lucide-react';
import OptionCard from './OptionCard';
interface StepThreeProps {
  userData: {
    experience: string;
    onboardingPreference: string;
    [key: string]: any;
  };
  updateData: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}
const StepThree: React.FC<StepThreeProps> = ({
  userData,
  updateData,
  onNext,
  onBack
}) => {
  return <div className="flex flex-col h-full">
      <h2 className="text-2xl font-normal text-[#072653] mb-1">
        Experience with other tools?
      </h2>
      <p className="text-[#072653] mb-4">
        Let us know your experience to provide the right guidance.
      </p>
      <div className="flex gap-2 mb-8">
        <div className="flex-1">
          <OptionCard icon={<CheckIcon size={20} />} label="Yes" isSelected={userData.experience === 'yes'} onClick={() => updateData('experience', 'yes')} fullWidth={true} />
        </div>
        <div className="flex-1">
          <OptionCard icon={<XIcon size={20} />} label="No" isSelected={userData.experience === 'no'} onClick={() => updateData('experience', 'no')} fullWidth={true} />
        </div>
      </div>
      <h2 className="text-2xl font-normal text-[#072653] mb-1">
        How do you want to be onboarded?
      </h2>
      <p className="text-[#072653] mb-4">
        Select your preferred onboarding method for the best start.
      </p>
      <div className="flex gap-2 mb-8">
        <div className="flex-1">
          <OptionCard icon={<VideoIcon size={20} />} label="Videos" isSelected={userData.onboardingPreference === 'videos'} onClick={() => updateData('onboardingPreference', 'videos')} fullWidth={true} />
        </div>
        <div className="flex-1">
          <OptionCard icon={<GraduationCapIcon size={20} />} label="Product Tour" isSelected={userData.onboardingPreference === 'product_tour'} onClick={() => updateData('onboardingPreference', 'product_tour')} fullWidth={true} />
        </div>
      </div>
      <div className="flex-grow" />
      <div className="mt-8 flex justify-between items-center w-full pb-6">
        <button className="px-5 py-2.5 bg-[#55AA55] text-white rounded-md hover:bg-[#258925] transition-colors font-bold text-[16px]" onClick={onBack}>
          Back
        </button>
        <button
          className="px-5 py-2.5 bg-[#55AA55] text-white rounded-md hover:bg-[#258925] transition-colors font-bold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onNext}
          disabled={!userData.experience || !userData.onboardingPreference}
        >
          Continue
        </button>
      </div>
    </div>;
};
export default StepThree;