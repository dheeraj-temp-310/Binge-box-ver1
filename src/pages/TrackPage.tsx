import React from 'react';
import { BarChart3, TrendingUp, Clock, Star, Target } from 'lucide-react';

const TrackPage: React.FC = () => {
  const stats = [
    { label: 'Movies Watched', value: 127, change: '+12 this month', icon: BarChart3, color: 'blue' },
    { label: 'TV Shows Completed', value: 23, change: '+3 this month', icon: TrendingUp, color: 'green' },
    { label: 'Books Read', value: 45, change: '+8 this month', icon: Star, color: 'purple' },
    { label: 'Hours Spent', value: 342, change: '+28 this month', icon: Clock, color: 'orange' },
  ];

  const recentActivity = [
    { title: 'Oppenheimer', type: 'movie', rating: 9.2, date: '2 days ago', status: 'completed' },
    { title: 'The Last of Us', type: 'tv', rating: 8.8, date: '1 week ago', status: 'watching' },
    { title: 'Project Hail Mary', type: 'book', rating: 9.5, date: '3 days ago', status: 'completed' },
    { title: 'Baldur\'s Gate 3', type: 'game', rating: 9.8, date: '5 days ago', status: 'playing' },
  ];

  const goals = [
    { title: 'Watch 150 movies this year', current: 127, target: 150, color: 'blue' },
    { title: 'Read 50 books this year', current: 45, target: 50, color: 'green' },
    { title: 'Complete 30 TV series', current: 23, target: 30, color: 'purple' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border-b border-gray-800/50 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Track</h2>
        <p className="text-gray-500">Monitor your media consumption and progress</p>
      </div>

      <div className="px-4 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-950/80 hover:backdrop-blur-xl transition-all duration-200 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-500/20 backdrop-blur-sm rounded-full flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-green-400 text-xs">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Goals Progress */}
        <div className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            2024 Goals
          </h3>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const progress = (goal.current / goal.target) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">{goal.title}</p>
                    <p className="text-gray-400 text-sm">
                      {goal.current}/{goal.target}
                    </p>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-sm">
                    <div
                      className={`bg-${goal.color}-500 h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">{Math.round(progress)}% complete</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl hover:bg-gray-800/60 transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-500 text-sm capitalize">
                      {item.type} • {item.status}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-400 mb-1">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;