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
  return <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold text-[#111827] mb-1">
        Which best describes your role?
      </h2>
      <p className="text-[#072653] mb-4">
        Select the option that best matches your role.
      </p>
      <OptionCard icon={<UserIcon size={20} />} label="Solopreneur, Influencer, Small Business Owner" isSelected={userData.role === 'solopreneur'} onClick={() => updateData('role', 'solopreneur')} />
      <OptionCard icon={<UsersIcon size={20} />} label="Coach or Consultant" isSelected={userData.role === 'coach'} onClick={() => updateData('role', 'coach')} />
      <OptionCard icon={<BuildingIcon size={20} />} label="SMM Agency" isSelected={userData.role === 'agency'} onClick={() => updateData('role', 'agency')} />
      <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-1">
        Who will be using SmarterQueue?
      </h2>
      <p className="text-gray-600 mb-4">
        Let us know if you'll be using SmarterQueue solo or with your team.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <OptionCard icon={<UserIcon size={20} />} label="Just me" isSelected={userData.users === 'just_me'} onClick={() => updateData('users', 'just_me')} fullWidth={true} />
        </div>
        <div className="flex-1">
          <OptionCard icon={<UsersIcon size={20} />} label="My team" isSelected={userData.users === 'my_team'} onClick={() => updateData('users', 'my_team')} fullWidth={true} />
        </div>
      </div>
      <div className="flex-grow" />
      <div className="mt-8 flex justify-end">
        <button
          className="px-5 py-2.5 bg-[#55AA55] text-white rounded-md hover:bg-[#258925] transition-colors font-bold text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onNext}
          disabled={!userData.role || !userData.users}
        >
          Continue
        </button>
      </div>
    </div>;
};
export default StepOne;