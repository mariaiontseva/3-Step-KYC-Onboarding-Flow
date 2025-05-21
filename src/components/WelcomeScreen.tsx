import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
const WelcomeScreen: React.FC = () => {
  return <div className="p-6">
      <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-200 aspect-video">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-3 cursor-pointer">
            <PlayCircleIcon size={32} className="text-[#4075BF]" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur. Eleifend blandit sit aliquam non
        sem. Scelerisque consequat amet blandit turpis nec cursus non tempus.
      </p>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-[#4075BF] text-[#4075BF] rounded-md hover:bg-[#4075BF]/10 transition-colors">
          Watch demo
        </button>
        <button className="px-4 py-2 bg-[#4075BF] text-white rounded-md hover:bg-[#4075BF]/90 transition-colors">
          Get started
        </button>
      </div>
    </div>;
};
export default WelcomeScreen;