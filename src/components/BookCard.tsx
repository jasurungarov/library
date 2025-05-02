import React from 'react';
import { Book } from '../types/book';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="relative pb-[130%] overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={`Cover of ${book.title}`}
          className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-900 bg-opacity-80 rounded-full">
            {book.genre}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{book.author} Tomonidan</p>
        <p className="text-sm text-gray-700 flex-grow">{book.shortDescription}</p>
        <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500">{book.publishYear}</span>
          <span className="text-xs text-gray-500">{book.pages} sahifa</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;