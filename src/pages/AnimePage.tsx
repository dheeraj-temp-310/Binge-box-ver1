import React from 'react';
import MediaCard from '../components/MediaCard';

const AnimePage: React.FC = () => {
  const animeList = [
    {
      title: 'Attack on Titan',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2013-2023',
      rating: 9.0,
      description: 'Humanity fights for survival against giant humanoid Titans behind massive walls.',
    },
    {
      title: 'Demon Slayer',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2019',
      rating: 8.7,
      description: 'A young boy becomes a demon slayer to avenge his family and cure his sister.',
    },
    {
      title: 'Jujutsu Kaisen',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2020',
      rating: 8.6,
      description: 'Students at a school for jujutsu sorcerers learn to combat cursed spirits.',
    },
    {
      title: 'One Piece',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '1999',
      rating: 9.1,
      description: 'Monkey D. Luffy explores the Grand Line with his diverse crew of pirates.',
    },
    {
      title: 'My Hero Academia',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2016',
      rating: 8.5,
      description: 'In a world where most people have superpowers, a boy without them dreams of becoming a hero.',
    },
    {
      title: 'Spirited Away',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'anime' as const,
      year: '2001',
      rating: 9.3,
      description: 'A young girl enters a world ruled by gods and witches where humans are turned into beasts.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Anime</h2>
        <p className="text-gray-500">Discover and track your favorite anime series and movies</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {animeList.map((anime, index) => (
            <MediaCard
              key={index}
              title={anime.title}
              image={anime.image}
              type={anime.type}
              year={anime.year}
              rating={anime.rating}
              description={anime.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimePage;