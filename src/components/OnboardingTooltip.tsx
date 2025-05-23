import React from 'react';
import TextAndSupportingText from '../assets/text-and-supporting-text.svg';
import Layer3 from '../assets/layer-3.svg';

const OnboardingTooltip: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="relative flex flex-col items-center w-full" style={{ height: 297 }}>
      {/* Decorative top bar */}
      <div style={{ height: 8, width: 16, zIndex: 0 }} />
      <div className="relative bg-[#072653] rounded-lg" style={{ width: 274, height: 289, padding: '12px 16px', gap: 16, zIndex: 1 }}>
        {/* Close button */}
        <button
          className="absolute top-2 right-2 opacity-85 z-20 flex items-center justify-center"
          style={{ width: 46, height: 46 }}
          onClick={onClose}
          aria-label="Close"
        >
          <span className="absolute top-[15px] left-[15px] w-4 h-4">
            <Layer3 width={16} height={16} />
          </span>
        </button>
        {/* Content */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-white font-semibold text-[16px] leading-4 tracking-[0.3px]">Video Tours</span>
          </div>
          <div className="flex flex-col gap-2">
            <TextAndSupportingText width={250} height={181} style={{ borderRadius: 6, overflow: 'hidden' }} />
            <span className="text-white text-[16px] leading-[22px] tracking-[0.2px]" style={{ width: 250 }}>
              Lorem ipsum dolor sit amet consectetur. Id libero sapien arcu.
            </span>
          </div>
        </div>
      </div>
      {/* Decorative left bar */}
      <div className="absolute left-0 top-[8px] bg-[#932ce7] rounded-l-lg" style={{ width: 8, height: '97.27%', zIndex: 3 }} />
    </div>
  );
};

export default OnboardingTooltip; 