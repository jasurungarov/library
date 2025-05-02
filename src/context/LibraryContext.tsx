import React, { createContext, useContext, useState } from 'react';
import { Book } from '../types/book';
import { books as initialBooks } from '../data/books';

interface LibraryContextType {
  books: Book[];
  filteredBooks: Book[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterByGenre: (genre: string) => void;
  currentGenre: string;
  searchBooks: (term: string) => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books] = useState<Book[]>(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(initialBooks);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentGenre, setCurrentGenre] = useState<string>('all');

  const filterByGenre = (genre: string) => {
    setCurrentGenre(genre);
    if (genre === 'hammasi') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.genre.toLowerCase() === genre.toLowerCase()));
    }
  };

  const searchBooks = (term: string) => {
    setSearchTerm(term);
    const lowerTerm = term.toLowerCase();
    
    if (term === '') {
      if (currentGenre === 'hammasi') {
        setFilteredBooks(books);
      } else {
        filterByGenre(currentGenre);
      }
      return;
    }
    
    const filtered = books.filter(book => 
      (book.title.toLowerCase().includes(lowerTerm) || 
      book.author.toLowerCase().includes(lowerTerm)) &&
      (currentGenre === 'hammasi' || book.genre.toLowerCase() === currentGenre.toLowerCase())
    );
    
    setFilteredBooks(filtered);
  };

  return (
    <LibraryContext.Provider value={{
      books,
      filteredBooks,
      searchTerm,
      setSearchTerm,
      filterByGenre,
      currentGenre,
      searchBooks
    }}>
      {children}
    </LibraryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLibrary = (): LibraryContextType => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};