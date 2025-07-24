import React from 'react';
import MediaCard from './MediaCard';

const MediaShowcase: React.FC = () => {
  const featuredMedia = [
    {
      title: 'Game of Thrones',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450',
      type: 'tv' as const,
      year: '2011-2019',
      rating: 9.2,
    },
    {
      title: 'The Matrix',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=300&h=450',
      type: 'movie' as const,
      year: '1999',
      rating: 8.7,
    },
    {
      title: 'Pulp Fiction',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=300&h=450',
      type: 'movie' as const,
      year: '1994',
      rating: 8.9,
    },
    {
      title: 'The Silence of the Lambs',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=300&h=450',
      type: 'movie' as const,
      year: '1991',
      rating: 8.6,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Popular This Week</h2>
      <div className="grid grid-cols-2 gap-4">
        {featuredMedia.map((media, index) => (
          <MediaCard
            key={index}
            title={media.title}
            image={media.image}
            type={media.type}
            year={media.year}
            rating={media.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaShowcase;