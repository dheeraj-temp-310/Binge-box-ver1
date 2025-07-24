import React from 'react';
import { Star, Heart, Bookmark } from 'lucide-react';

interface MediaCardProps {
  title: string;
  image: string;
  type: 'movie' | 'tv' | 'book' | 'game' | 'anime' | 'manga';
  year?: string;
  rating?: number;
  description?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, image, type, year, rating, description }) => {
  return (
    <div className="bg-black/60 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-4 hover:bg-gray-950/80 hover:backdrop-blur-xl transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-24 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight mb-1">
                {title}
              </h3>
              {year && (
                <p className="text-gray-500 text-sm">
                  {year} • {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
              )}
            </div>
            {rating && (
              <div className="flex items-center text-yellow-400 text-sm">
                <Star className="w-4 h-4 mr-1 fill-current" />
                <span>{rating}</span>
              </div>
            )}
          </div>
          {description && (
            <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-3">
              {description}
            </p>
          )}
          <div className="flex items-center space-x-4 text-gray-500">
            <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;