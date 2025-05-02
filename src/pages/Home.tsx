import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import BookGrid from '../components/BookGrid';
import { useLibrary } from '../context/LibraryContext';

const Home: React.FC = () => {
  const { books, filterByGenre } = useLibrary();
  
  // Reset filters when landing on the home page
  useEffect(() => {
    filterByGenre('hammasi');
  }, [filterByGenre]);

  // Get featured books (first 3)
  const featuredBooks = books.slice(0, 3);
  
  // Get different categories of books for preview sections
  const fictionBooks = books.filter(book => book.genre === 'Fantaziya').slice(0, 2);
  const scienceBooks = books.filter(book => book.genre === 'Fan').slice(0, 2);
  
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
              Keyingi sevimli kitobingizni<span className="text-amber-400"> Kashf eting</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8">
              Turli janrlardagi kitoblar to'plamini o'rganing. Maftunkor badiiy adabiyotdan fantastika bo'lmagan ma'lumotga qadar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/genres" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center"
                >
                  Janr boʻyicha koʻrish
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/search" 
                  className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Kitoblarni Izlash
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="w-56 h-72 bg-amber-500 rounded-lg shadow-xl transform rotate-6 absolute -right-8 top-8"></div>
                <div className="w-56 h-72 bg-blue-700 rounded-lg shadow-xl transform -rotate-6 absolute -left-8 top-8"></div>
                <div className="w-56 h-72 bg-white rounded-lg shadow-xl relative z-10 flex items-center justify-center">
                  <BookOpen className="h-20 w-20 text-blue-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Tanlangan kitoblar</h2>
          <Link 
            to="/genres" 
            className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
          >
            Hammasini ko'rish
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <BookGrid books={featuredBooks} />
      </section>

      {/* Fiction Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Fantaziya</h2>
          <Link 
            to="/genres/Fantaziya" 
            className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
          >
            Ko'proq Fantaziya
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <BookGrid books={fictionBooks} />
      </section>

      {/* Science Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Fan</h2>
          <Link 
            to="/genres/science" 
            className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
          >
            Ko'proq Fan
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <BookGrid books={scienceBooks} />
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-900 rounded-xl shadow-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Eng so'nggi kitoblarimizdan xabardor bo'ling
            </h2>
            <p className="text-blue-100 mb-6"> 
Yangi kitoblar haqida yangiliklarni olish uchun axborot byulletenimizga obuna bo'ling, 
              muallifning diqqatga sazovor joylari va o'qish tavsiyalari.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email manzilingizni kiriting" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Obuna boʻling
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;