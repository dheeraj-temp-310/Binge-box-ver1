import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 mb-8 border border-slate-700/50">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track all your favourite{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            media in one place
          </span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Add media to your library, rate them and write reviews.
          <br />
          Follow your friends and discover new titles worth checking out.
        </p>
        <div className="mb-6">
          <p className="text-slate-300 text-lg">
            Like{' '}
            <span className="text-blue-400 font-semibold">Goodreads</span>
            <br />
            for{' '}
            <span className="text-purple-400 font-semibold">Movies</span>
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
          Check it out
        </button>
      </div>
    </div>
  );
};

export default HeroSection;