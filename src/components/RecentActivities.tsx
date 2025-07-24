import React from 'react';
import ActivityItem from './ActivityItem';

const RecentActivities: React.FC = () => {
  const activities = [
    {
      user: 'aleks-predator',
      action: 'reviewed',
      media: 'Iron Man 2',
      time: '9 minutes ago',
    },
    {
      user: 'movie_buff_42',
      action: 'added to watchlist',
      media: 'The Matrix',
      time: '15 minutes ago',
    },
    {
      user: 'cinema_lover',
      action: 'rated',
      media: 'Pulp Fiction',
      time: '23 minutes ago',
    },
    {
      user: 'show_binger',
      action: 'started watching',
      media: 'Game of Thrones',
      time: '1 hour ago',
    },
  ];

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
      <div className="p-6 border-b border-slate-700/50">
        <h2 className="text-xl font-bold text-white">Recent Activities</h2>
      </div>
      <div className="divide-y divide-slate-700/50">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            user={activity.user}
            action={activity.action}
            media={activity.media}
            time={activity.time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;