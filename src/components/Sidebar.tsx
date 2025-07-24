import React from 'react';
import { 
  Film, 
  Tv, 
  Book, 
  Gamepad2, 
  Heart, 
  List, 
  User, 
  Settings, 
  LogOut,
  Sparkles,
  Home,
  Calendar,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'track', label: 'Track', icon: BarChart3 },
    { id: 'anime', label: 'Anime', icon: Sparkles },
    { id: 'manga', label: 'Manga', icon: Book },
    { id: 'tv-shows', label: 'TV Shows', icon: Tv },
    { id: 'movies', label: 'Movies', icon: Film },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'lists', label: 'Lists & Boards', icon: List },
  ];

  const personalItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  return (
    <aside className="w-64 bg-black/80 backdrop-blur-xl border-r border-gray-800 h-screen overflow-y-auto fixed left-0 top-0 z-40">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8 px-3">
          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl font-bold text-white">
            MediaLib
          </h1>
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-4 px-3 py-3 rounded-full text-xl font-normal transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-900/80 backdrop-blur-sm text-white font-bold shadow-lg'
                    : 'text-gray-300 hover:bg-gray-900/60 hover:backdrop-blur-sm hover:text-white'
                }`}
              >
                <Icon className="w-7 h-7" />
                <span className="hidden xl:block">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8 pt-4 border-t border-gray-800">
          <nav className="space-y-1">
            {personalItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-4 px-3 py-3 rounded-full text-xl font-normal transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-900/80 backdrop-blur-sm text-white font-bold shadow-lg'
                      : 'text-gray-300 hover:bg-gray-900/60 hover:backdrop-blur-sm hover:text-white'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                  <span className="hidden xl:block">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;