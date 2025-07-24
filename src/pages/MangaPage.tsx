import React from 'react';
import MediaCard from '../components/MediaCard';

const MangaPage: React.FC = () => {
  const mangaList = [
    {
      title: 'One Piece',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '1997',
      rating: 9.2,
      description: 'The adventures of Monkey D. Luffy and his pirate crew in search of the ultimate treasure.',
    },
    {
      title: 'Attack on Titan',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '2009-2021',
      rating: 9.0,
      description: 'Humanity\'s last stand against the mysterious Titans threatening their existence.',
    },
    {
      title: 'Demon Slayer',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '2016-2020',
      rating: 8.8,
      description: 'Tanjiro\'s journey to become a demon slayer and save his sister.',
    },
    {
      title: 'Jujutsu Kaisen',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '2018',
      rating: 8.7,
      description: 'High school student Yuji Itadori joins a secret organization to fight cursed spirits.',
    },
    {
      title: 'My Hero Academia',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '2014',
      rating: 8.6,
      description: 'Izuku Midoriya\'s journey to become the world\'s greatest hero.',
    },
    {
      title: 'Death Note',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'manga' as const,
      year: '2003-2006',
      rating: 9.1,
      description: 'A high school student discovers a supernatural notebook that kills anyone whose name is written in it.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Manga</h2>
        <p className="text-gray-500">Explore and track your manga reading journey</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {mangaList.map((manga, index) => (
            <MediaCard
              key={index}
              title={manga.title}
              image={manga.image}
              type={manga.type}
              year={manga.year}
              rating={manga.rating}
              description={manga.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangaPage;