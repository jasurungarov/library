import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';
import { genres } from '../data/books';

interface GenreListProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

const GenreList: React.FC<GenreListProps> = ({ 
  layout = 'horizontal',
  className = ''
}) => {
  const { currentGenre, filterByGenre } = useLibrary();
  const navigate = useNavigate();
  
  const handleGenreClick = (genre: string) => {
    const genreValue = genre === 'All' ? 'all' : genre.toLowerCase();
    filterByGenre(genreValue);
    navigate(`/genres${genreValue === 'all' ? '' : `/${genreValue}`}`);
  };

  // Map the capitalized genre from the array to the lowercase version used in state
  const isActive = (genre: string) => {
    return (
      (genre === 'All' && currentGenre === 'all') || 
      genre.toLowerCase() === currentGenre
    );
  };

  const baseClasses = "px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm";
  const activeClasses = "bg-blue-900 text-white";
  const inactiveClasses = "bg-gray-100 text-gray-700 hover:bg-gray-200";

  if (layout === 'horizontal') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className={`${baseClasses} ${isActive(genre) ? activeClasses : inactiveClasses}`}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => handleGenreClick(genre)}
          className={`text-left ${baseClasses} ${isActive(genre) ? activeClasses : inactiveClasses}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;