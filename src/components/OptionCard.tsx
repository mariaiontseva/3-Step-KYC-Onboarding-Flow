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
  return <div className={`${fullWidth ? 'w-full' : 'w-auto'} mb-2 cursor-pointer`} onClick={onClick}>
      <div className={`flex items-center px-4 h-16 rounded-md border ${isSelected ? 'border-2 border-[#4075BF] bg-[#4075BF]/10' : 'border border-gray-200 hover:border-[#4075BF]'} transition-colors`}>
        <div className="text-[#4075BF] mr-3">{icon}</div>
        <span className={`text-[16px] ${isSelected ? 'text-[#4075BF]' : 'text-[#072653]'}`}>{label}</span>
      </div>
    </div>;
};
export default OptionCard;