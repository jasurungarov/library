import React from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import GenreList from '../components/GenreList';
import { useLibrary } from '../context/LibraryContext';

const Search: React.FC = () => {
  const { filteredBooks, searchTerm, currentGenre } = useLibrary();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Kitoblarni qidirish</h1>
      
      <div className="mb-8">
        <SearchBar placeholder="Sarlavha yoki muallif bo'yicha qidirish..." className="max-w-3xl" />
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Janr boʻyicha filtrlash</h3>
        <GenreList />
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-semibold text-gray-800">
          {searchTerm ? `Qidiruv natijalari "${searchTerm}"` : 'Barcha kitoblar'}
          {currentGenre !== 'hammasi' && ` 
ichida ${currentGenre}`}
        </h2>
        {searchTerm && (
          <p className="text-gray-600 mt-1">
            Topildi {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
          </p>
        )}
      </div>
      
      <BookGrid 
        books={filteredBooks} 
        emptyMessage={searchTerm ? "Qidiruvingizga mos kitob topilmadi" : "Hech qanday kitob topilmadi"} 
      />
    </div>
  );
};

export default Search;