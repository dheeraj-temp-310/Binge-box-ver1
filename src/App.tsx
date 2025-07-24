import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MangaPage from './pages/MangaPage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import BooksPage from './pages/BooksPage';
import GamesPage from './pages/GamesPage';
import CalendarPage from './pages/CalendarPage';
import TrackPage from './pages/TrackPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const getPageTitle = (section: string) => {
    switch (section) {
      case 'home': return 'Home';
      case 'calendar': return 'Calendar';
      case 'track': return 'Track';
      case 'anime': return 'Anime';
      case 'manga': return 'Manga';
      case 'tv-shows': return 'TV Shows';
      case 'movies': return 'Movies';
      case 'books': return 'Books';
      case 'games': return 'Games';
      case 'lists': return 'Lists & Boards';
      case 'profile': return 'Profile';
      case 'settings': return 'Settings';
      default: return 'MediaLib';
    }
  };

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'calendar':
        return <CalendarPage />;
      case 'track':
        return <TrackPage />;
      case 'anime':
        return <AnimePage />;
      case 'manga':
        return <MangaPage />;
      case 'movies':
        return <MoviesPage />;
      case 'tv-shows':
        return <TVShowsPage />;
      case 'books':
        return <BooksPage />;
      case 'games':
        return <GamesPage />;
      case 'lists':
        return (
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Lists & Boards</h2>
            <p className="text-gray-500">Create and manage your custom media lists</p>
          </div>
        );
      case 'profile':
        return (
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Profile</h2>
            <p className="text-gray-500">View and edit your profile information</p>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            <p className="text-gray-500">Customize your MediaLib experience</p>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <div className="flex-1 flex flex-col min-h-screen ml-64">
          <Header title={getPageTitle(activeSection)} />
          
          <main className="flex-1 overflow-y-auto">
            <div className="py-4">
              {renderPage()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;