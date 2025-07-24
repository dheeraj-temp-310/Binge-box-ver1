import React from 'react';
import MediaCard from '../components/MediaCard';

const TVShowsPage: React.FC = () => {
  const tvShowsList = [
    {
      title: 'The Last of Us',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2023',
      rating: 9.1,
      description: 'Twenty years after a fungal outbreak ravages the planet, survivors Joel and Ellie embark on a brutal journey.',
    },
    {
      title: 'House of the Dragon',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2022',
      rating: 8.5,
      description: 'The Targaryen civil war, known as the Dance of the Dragons, tears Westeros apart.',
    },
    {
      title: 'Stranger Things',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2016-2022',
      rating: 8.7,
      description: 'A group of young friends witness supernatural forces and secret government exploits.',
    },
    {
      title: 'Wednesday',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2022',
      rating: 8.1,
      description: 'Wednesday Addams navigates her years as a student at Nevermore Academy.',
    },
    {
      title: 'The Bear',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2022',
      rating: 8.9,
      description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
    },
    {
      title: 'Euphoria',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'tv' as const,
      year: '2019',
      rating: 8.4,
      description: 'A group of high school students navigate love and friendships in a world of drugs, sex, and social media.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">TV Shows</h2>
        <p className="text-gray-500">Binge-watch and track your favorite series</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {tvShowsList.map((show, index) => (
            <MediaCard
              key={index}
              title={show.title}
              image={show.image}
              type={show.type}
              year={show.year}
              rating={show.rating}
              description={show.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVShowsPage;