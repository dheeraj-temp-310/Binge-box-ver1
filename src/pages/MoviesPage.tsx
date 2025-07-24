import React from 'react';
import MediaCard from '../components/MediaCard';

const MoviesPage: React.FC = () => {
  const moviesList = [
    {
      title: 'Oppenheimer',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2023',
      rating: 8.9,
      description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    },
    {
      title: 'Dune: Part Two',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2024',
      rating: 8.8,
      description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.',
    },
    {
      title: 'The Batman',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2022',
      rating: 8.2,
      description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
    },
    {
      title: 'Everything Everywhere All at Once',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2022',
      rating: 8.1,
      description: 'A Chinese-American woman gets swept up in an insane adventure in which she alone can save existence.',
    },
    {
      title: 'Top Gun: Maverick',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2022',
      rating: 8.7,
      description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.',
    },
    {
      title: 'Spider-Man: No Way Home',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'movie' as const,
      year: '2021',
      rating: 8.4,
      description: 'Spider-Man seeks help from Doctor Strange when his identity is revealed, but it causes a tear in their reality.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Movies</h2>
        <p className="text-gray-500">Discover and rate the latest blockbusters and hidden gems</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {moviesList.map((movie, index) => (
            <MediaCard
              key={index}
              title={movie.title}
              image={movie.image}
              type={movie.type}
              year={movie.year}
              rating={movie.rating}
              description={movie.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;