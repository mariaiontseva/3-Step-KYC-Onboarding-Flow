import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
import Confetti from 'react-confetti';

const WelcomeScreen: React.FC<{ onBack: () => void; showConfetti?: boolean }> = ({ onBack, showConfetti }) => {
  return <div className="relative px-6 pt-6 pb-0">
      {showConfetti && <Confetti style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 50 }} />}
      <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-200 aspect-video flex items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-e67zW4Ciik"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="text-[#072653] mb-6">
        You're all set! Explore SmarterQueue and make your social media management easier.
      </p>
      <div className="flex flex-row justify-between items-center mt-8 w-full gap-3">
        <button className="h-12 px-5 rounded-md outline outline-2 outline-offset-[-2px] outline-[#55AA55] inline-flex items-center justify-center transition-colors hover:bg-[#eaf7ea] font-bold text-[14px] text-[#55AA55]">
          Book a call
        </button>
        <div className="flex flex-row gap-3">
          <button className="h-12 px-5 rounded-md outline outline-2 outline-offset-[-2px] outline-[#55AA55] inline-flex items-center justify-center transition-colors hover:bg-[#eaf7ea] font-bold text-[14px] text-[#55AA55]">
            Explore Product
          </button>
          <button className="h-12 px-5 bg-[#55AA55] text-white rounded-md hover:bg-[#258925] transition-colors font-bold text-[14px] inline-flex items-center justify-center">
            Connect Profiles
          </button>
        </div>
      </div>
    </div>;
};
export default WelcomeScreen;