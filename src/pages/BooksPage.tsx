import React from 'react';
import MediaCard from '../components/MediaCard';

const BooksPage: React.FC = () => {
  const booksList = [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      image: 'https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2017',
      rating: 4.8,
      description: 'Reclusive Hollywood icon Evelyn Hugo finally decides to tell her life story to unknown journalist Monique Grant.',
    },
    {
      title: 'Project Hail Mary',
      image: 'https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2021',
      rating: 4.7,
      description: 'A lone astronaut must save the earth from disaster in this incredible tale of survival and friendship.',
    },
    {
      title: 'The Midnight Library',
      image: 'https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2020',
      rating: 4.2,
      description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    },
    {
      title: 'Klara and the Sun',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2021',
      rating: 4.1,
      description: 'From her place in the store, Klara, an artificial friend, watches the behavior of those who come in to browse.',
    },
    {
      title: 'The Song of Achilles',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2011',
      rating: 4.6,
      description: 'A tale of gods, kings, immortal fame and the human heart, The Song of Achilles is a dazzling literary feat.',
    },
    {
      title: 'Circe',
      image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=200&h=300',
      type: 'book' as const,
      year: '2018',
      rating: 4.5,
      description: 'The story of the Greek goddess Circe, who transforms from a nymph into a formidable witch.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-800 p-4 mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Books</h2>
        <p className="text-gray-500">Build your reading list and share your literary journey</p>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {booksList.map((book, index) => (
            <MediaCard
              key={index}
              title={book.title}
              image={book.image}
              type={book.type}
              year={book.year}
              rating={book.rating}
              description={book.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;