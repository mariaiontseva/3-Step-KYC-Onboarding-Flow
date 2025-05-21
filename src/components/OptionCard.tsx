import React from 'react';
interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  isSelected?: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}
const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  label,
  isSelected = false,
  onClick,
  fullWidth = true
}) => {
  return <div className={`${fullWidth ? 'w-full' : 'w-auto'} mb-3 cursor-pointer`} onClick={onClick}>
      <div className={`flex items-center p-4 rounded-md border ${isSelected ? 'border-[#4075BF] bg-[#4075BF]/10' : 'border-gray-200 hover:border-[#4075BF]'}`}>
        <div className="text-[#4075BF] mr-3">{icon}</div>
        <span className="text-[#4075BF]">{label}</span>
      </div>
    </div>;
};
export default OptionCard;