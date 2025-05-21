import React from 'react';
import { ClockIcon, RefreshCcwIcon, FolderIcon, WandIcon, UsersIcon, BarChartIcon } from 'lucide-react';
import OptionCard from './OptionCard';
interface StepTwoProps {
  userData: {
    painPoints: string[];
    [key: string]: any;
  };
  updateData: (field: string, value: string[]) => void;
  onNext: () => void;
}
const StepTwo: React.FC<StepTwoProps> = ({
  userData,
  updateData,
  onNext
}) => {
  const togglePainPoint = (point: string) => {
    let newPainPoints;
    if (userData.painPoints.includes(point)) {
      newPainPoints = userData.painPoints.filter(p => p !== point);
    } else {
      newPainPoints = [...userData.painPoints, point];
    }
    updateData('painPoints', newPainPoints);
  };
  return <div>
      <h2 className="text-2xl font-semibold text-[#4075BF] mb-1">
        Pain points? How can we help?
      </h2>
      <OptionCard icon={<ClockIcon size={20} />} label="Save time - We automate for you" isSelected={userData.painPoints.includes('save_time')} onClick={() => togglePainPoint('save_time')} />
      <OptionCard icon={<RefreshCcwIcon size={20} />} label="Publish consistently - Evergreen, Variations" isSelected={userData.painPoints.includes('publish_consistently')} onClick={() => togglePainPoint('publish_consistently')} />
      <OptionCard icon={<FolderIcon size={20} />} label="Organize content - Categories, Media Library" isSelected={userData.painPoints.includes('organize_content')} onClick={() => togglePainPoint('organize_content')} />
      <OptionCard icon={<WandIcon size={20} />} label="Create content - AI assistant, Importers, Content Discovery" isSelected={userData.painPoints.includes('create_content')} onClick={() => togglePainPoint('create_content')} />
      <OptionCard icon={<UsersIcon size={20} />} label="Collaborate with teams - Roles, Approval" isSelected={userData.painPoints.includes('collaborate')} onClick={() => togglePainPoint('collaborate')} />
      <OptionCard icon={<BarChartIcon size={20} />} label="Analytics and reports - Analytics, Export" isSelected={userData.painPoints.includes('analytics')} onClick={() => togglePainPoint('analytics')} />
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-[#4075BF] text-white rounded-md hover:bg-[#4075BF]/90 transition-colors" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>;
};
export default StepTwo;