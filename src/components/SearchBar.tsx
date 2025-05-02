import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { useLocation } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Sarlavha yoki muallif bo'yicha qidirish...",
  className = ""
}) => {
  const { searchTerm, searchBooks } = useLibrary();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const location = useLocation();

  // Update local search term when context search term changes
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  // Clear search when navigating away from search page
  useEffect(() => {
    if (location.pathname !== '/search' && searchTerm !== '') {
      searchBooks('');
    }
  }, [location.pathname, searchBooks, searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchBooks(localSearchTerm);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative ${className}`}
    >
      <div className="relative">
        <input
          type="text"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200"
      >
        Qidirish
      </button>
    </form>
  );
};

export default SearchBar;