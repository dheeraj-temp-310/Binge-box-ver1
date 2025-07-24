import React from 'react';
import { Search, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-black/70 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50 shadow-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full pl-12 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 shadow-lg"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/60 hover:backdrop-blur-sm rounded-full transition-all duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;