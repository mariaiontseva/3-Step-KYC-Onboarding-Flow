import React from 'react';
import { UserIcon, UsersIcon, BuildingIcon } from 'lucide-react';
import OptionCard from './OptionCard';
interface StepOneProps {
  userData: {
    role: string;
    users: string;
    [key: string]: any;
  };
  updateData: (field: string, value: string) => void;
  onNext: () => void;
}
const StepOne: React.FC<StepOneProps> = ({
  userData,
  updateData,
  onNext
}) => {
  return <div>
      <h2 className="text-2xl font-semibold text-[#4075BF] mb-1">
        Which best describes your role?
      </h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Quis arcu facilisis sed lacus
        pharetra tristique. In.
      </p>
      <OptionCard icon={<UserIcon size={20} />} label="Solopreneur, Influencer, Small Business Owner" isSelected={userData.role === 'solopreneur'} onClick={() => updateData('role', 'solopreneur')} />
      <OptionCard icon={<UsersIcon size={20} />} label="Coach or Consultant" isSelected={userData.role === 'coach'} onClick={() => updateData('role', 'coach')} />
      <OptionCard icon={<BuildingIcon size={20} />} label="SMM Agency" isSelected={userData.role === 'agency'} onClick={() => updateData('role', 'agency')} />
      <h2 className="text-2xl font-semibold text-[#4075BF] mt-8 mb-1">
        Who will be using SmarterQueue?
      </h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Quis arcu facilisis sed lacus
        pharetra tristique. In.
      </p>
      <div className="flex gap-4">
        <OptionCard icon={<UserIcon size={20} />} label="Just me" isSelected={userData.users === 'just_me'} onClick={() => updateData('users', 'just_me')} fullWidth={false} />
        <OptionCard icon={<UsersIcon size={20} />} label="My team" isSelected={userData.users === 'my_team'} onClick={() => updateData('users', 'my_team')} fullWidth={false} />
      </div>
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-[#4075BF] text-white rounded-md hover:bg-[#4075BF]/90 transition-colors" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>;
};
export default StepOne;