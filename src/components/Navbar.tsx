import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-amber-500 font-medium' : 'text-gray-700 hover:text-amber-500';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <BookOpen className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-xl font-serif font-bold text-blue-900">Virtual Kutubxona</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`transition duration-200 ${isActive('/')}`}>
                Bosh sahifa
              </Link>
              <Link to="/genres" className={`transition duration-200 ${isActive('/genres')}`}>
                Janrlar
              </Link>
              <Link to="/search" className={`transition duration-200 ${isActive('/search')}`}>
                Qidirish
              </Link>
              <Link to="/adabiyotlar" className={`transition duration-200 ${isActive('/adabiyotlar')}`}>
                Adabiyotlar
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Asosiy menyuni oching</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
              onClick={closeMenu}
            >
              Bosh sahifa 
            </Link>
            <Link 
              to="/genres" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/genres')}`}
              onClick={closeMenu}
            >
              Janrlar
            </Link>
            <Link 
              to="/search" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/search')}`}
              onClick={closeMenu}
            >
              Qidirish
            </Link>
            <Link 
              to="/adabiyotlar" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/adabiyotlar')}`}
              onClick={closeMenu}
            >
              Adabiyotlar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;