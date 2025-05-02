import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GenreList from '../components/GenreList';
import BookGrid from '../components/BookGrid';
import { useLibrary } from '../context/LibraryContext';

const Genres: React.FC = () => {
  const { genre } = useParams<{ genre?: string }>();
  const { filteredBooks, filterByGenre, currentGenre } = useLibrary();
  
  useEffect(() => {
    // If a genre is specified in the URL, filter by it
    if (genre) {
      filterByGenre(genre.toLowerCase());
    } else if (currentGenre !== 'all') {
      // Reset to all genres if no genre specified and not already on all
      filterByGenre('all');
    }
  }, [genre, currentGenre, filterByGenre]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Janr boʻyicha koʻrish</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Kategoriyalar</h3>
            <GenreList layout="vertical" />
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6 capitalize">
            {currentGenre === 'all' ? 'All Books' : currentGenre}
          </h2>
          
          <BookGrid 
            books={filteredBooks} 
            emptyMessage={`No books found in ${currentGenre === 'all' ? 'any genre' : currentGenre}`} 
          />
        </div>
      </div>
    </div>
  );
};

export default Genres;