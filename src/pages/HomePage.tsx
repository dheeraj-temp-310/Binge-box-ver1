import React from 'react';
import ActivityItem from '../components/ActivityItem';
import MediaCard from '../components/MediaCard';

const HomePage: React.FC = () => {
  const activities = [
    {
      user: 'MovieBuff2024',
      action: 'Just finished watching',
      media: 'Dune: Part Two',
      time: '2h',
      content: 'Absolutely incredible cinematography and sound design. Denis Villeneuve has outdone himself again. The desert scenes were breathtaking! 🏜️',
    },
    {
      user: 'AnimeExplorer',
      action: 'Added to watchlist',
      media: 'Attack on Titan Final Season',
      time: '4h',
      content: 'Finally catching up on this series. Heard the ending is controversial but excited to see how it all wraps up.',
    },
    {
      user: 'BookwormLife',
      action: 'Rated 5 stars',
      media: 'The Seven Husbands of Evelyn Hugo',
      time: '6h',
      content: 'This book completely destroyed me emotionally. Taylor Jenkins Reid knows how to write characters that feel so real.',
    },
    {
      user: 'GamerReviews',
      action: 'Started playing',
      media: 'Baldur\'s Gate 3',
      time: '8h',
      content: 'Character creation took me 2 hours alone. This game is going to consume my life for the next few months.',
    },
  ];

  const trendingMedia = [
    {
      title: 'Oppenheimer',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2023',
      rating: 8.9,
      description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    },
    {
      title: 'The Last of Us',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2023',
      rating: 9.1,
      description: 'Twenty years after a fungal outbreak ravages the planet, survivors Joel and Ellie embark on a brutal journey.',
    },
    {
      title: 'Demon Slayer',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2019',
      rating: 8.7,
      description: 'A young boy becomes a demon slayer to avenge his family and cure his sister.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-4">
        <h2 className="text-xl font-bold text-white mb-2">What's happening in media</h2>
        <p className="text-gray-500">Discover what your friends are watching, reading, and playing</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-4 px-4">Trending Now</h3>
          <div className="space-y-4 px-4">
            {trendingMedia.map((media, index) => (
              <MediaCard
                key={index}
                title={media.title}
                image={media.image}
                type={media.type}
                year={media.year}
                rating={media.rating}
                description={media.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4 px-4">Recent Activity</h3>
          <div>
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                user={activity.user}
                action={activity.action}
                media={activity.media}
                time={activity.time}
                content={activity.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;