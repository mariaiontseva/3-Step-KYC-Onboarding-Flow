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
}
const StepThree: React.FC<StepThreeProps> = ({
  userData,
  updateData,
  onNext
}) => {
  return <div>
      <h2 className="text-2xl font-semibold text-[#4075BF] mb-1">
        Experience with other tools?
      </h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Quis arcu facilisis sed lacus
        pharetra tristique. In.
      </p>
      <div className="flex gap-4 mb-8">
        <OptionCard icon={<CheckIcon size={20} />} label="Yes" isSelected={userData.experience === 'yes'} onClick={() => updateData('experience', 'yes')} fullWidth={false} />
        <OptionCard icon={<XIcon size={20} />} label="No" isSelected={userData.experience === 'no'} onClick={() => updateData('experience', 'no')} fullWidth={false} />
      </div>
      <h2 className="text-2xl font-semibold text-[#4075BF] mb-1">
        How do you want to be onboarded?
      </h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Quis arcu facilisis sed lacus
        pharetra tristique. In.
      </p>
      <div className="flex gap-4">
        <OptionCard icon={<VideoIcon size={20} />} label="Videos" isSelected={userData.onboardingPreference === 'videos'} onClick={() => updateData('onboardingPreference', 'videos')} fullWidth={false} />
        <OptionCard icon={<GraduationCapIcon size={20} />} label="Product Tour" isSelected={userData.onboardingPreference === 'product_tour'} onClick={() => updateData('onboardingPreference', 'product_tour')} fullWidth={false} />
      </div>
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-[#4075BF] text-white rounded-md hover:bg-[#4075BF]/90 transition-colors" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>;
};
export default StepThree;