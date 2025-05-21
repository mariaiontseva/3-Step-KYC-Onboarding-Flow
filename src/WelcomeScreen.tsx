import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
const WelcomeScreen: React.FC = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold text-[#4075BF] mb-4">
        <span className="mr-2">👋</span> Welcome to SmarterQueue!
      </h1>
      <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-200">
        <img src="/Step_4.png" alt="Welcome video thumbnail" className="w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-3 cursor-pointer">
            <PlayCircleIcon size={32} className="text-[#4075BF]" />
          </div>
        </div>
      </div>
      // ... rest of code ...
    </div>;
};
export default WelcomeScreen;