import React from 'react';
import MediaCard from '../components/MediaCard';

const GamesPage: React.FC = () => {
  const gamesList = [
    {
      title: 'Baldur\'s Gate 3',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2023',
      rating: 9.6,
      description: 'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal.',
    },
    {
      title: 'The Legend of Zelda: Tears of the Kingdom',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2023',
      rating: 9.4,
      description: 'An epic adventure across the land and skies of Hyrule awaits in this sequel to Breath of the Wild.',
    },
    {
      title: 'Elden Ring',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2022',
      rating: 9.2,
      description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.',
    },
    {
      title: 'God of War Ragnarök',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2022',
      rating: 9.1,
      description: 'Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives.',
    },
    {
      title: 'Cyberpunk 2077',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2020',
      rating: 8.1,
      description: 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power.',
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'game' as const,
      year: '2015',
      rating: 9.3,
      description: 'You are Geralt of Rivia, mercenary monster slayer. At your disposal is every tool of the trade.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Games</h2>
        <p className="text-gray-500">Track your gaming adventures and discover new worlds</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {gamesList.map((game, index) => (
            <MediaCard
              key={index}
              title={game.title}
              image={game.image}
              type={game.type}
              year={game.year}
              rating={game.rating}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;