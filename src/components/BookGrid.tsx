import React from 'react';
import { Book } from '../types/book';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  emptyMessage?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ books, emptyMessage = "No books found" }) => {
  if (books.length === 0) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">{emptyMessage}</h3>
          <p className="text-gray-500">Qidiruv yoki filtrlarni sozlashga harakat qiling.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;