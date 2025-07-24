import React from 'react';
import { Clock, Heart, MessageCircle, Repeat2 } from 'lucide-react';

interface ActivityItemProps {
  user: string;
  action: string;
  media: string;
  time: string;
  userAvatar?: string;
  content?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ user, action, media, time, content }) => {
  return (
    <div className="border-b border-gray-800/50 p-4 hover:bg-gray-950/30 hover:backdrop-blur-sm transition-all duration-200">
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-white text-sm font-bold">
            {user.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-white font-bold">{user}</span>
            <span className="text-gray-500">@{user.toLowerCase().replace(/[^a-z0-9]/g, '')}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500 text-sm">{time}</span>
          </div>
          <p className="text-white text-base leading-relaxed mb-2">
            {action} <span className="text-blue-400 font-semibold">{media}</span>
          </p>
          {content && (
            <p className="text-gray-400 text-sm mb-3">
              {content}
            </p>
          )}
          <div className="flex items-center space-x-16 text-gray-500 max-w-md">
            <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-400/10 group-hover:backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-sm">12</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-400 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-green-400/10 group-hover:backdrop-blur-sm">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-sm">8</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-red-500/10 group-hover:backdrop-blur-sm">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-sm">24</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;