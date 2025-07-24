import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const scheduledMedia = [
    { date: 15, title: 'Attack on Titan Final Episode', type: 'anime', time: '8:00 PM' },
    { date: 18, title: 'Dune: Part Two Release', type: 'movie', time: 'All Day' },
    { date: 22, title: 'The Last of Us S2E3', type: 'tv', time: '9:00 PM' },
    { date: 25, title: 'Finish reading Klara and the Sun', type: 'book', time: '6:00 PM' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border-b border-gray-800/50 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Calendar</h2>
        <p className="text-gray-500">Track your media schedule and upcoming releases</p>
      </div>

      <div className="px-4">
        <div className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 shadow-lg">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">{currentMonth}</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/60 hover:backdrop-blur-sm rounded-full transition-all duration-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/60 hover:backdrop-blur-sm rounded-full transition-all duration-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-3 text-center text-gray-500 font-semibold">
                {day}
              </div>
            ))}
            
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="p-3"></div>
            ))}
            
            {days.map((day) => {
              const hasEvent = scheduledMedia.some(media => media.date === day);
              const isToday = day === currentDate.getDate();
              
              return (
                <div
                  key={day}
                  className={`p-3 text-center cursor-pointer rounded-lg transition-all duration-200 ${
                    isToday
                      ? 'bg-blue-500 text-white font-bold'
                      : hasEvent
                      ? 'bg-gray-900/60 backdrop-blur-sm text-white hover:bg-gray-800/80'
                      : 'text-gray-400 hover:bg-gray-900/40 hover:text-white'
                  }`}
                >
                  <span>{day}</span>
                  {hasEvent && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-white mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {scheduledMedia.map((media, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-xl p-4 hover:bg-gray-950/80 hover:backdrop-blur-xl transition-all duration-200 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{media.title}</h4>
                      <p className="text-gray-500 text-sm capitalize">{media.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">Dec {media.date}</p>
                    <p className="text-gray-500 text-sm">{media.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;