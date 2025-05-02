// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Download, BookOpen } from 'lucide-react';
// import { useLibrary } from '../context/LibraryContext';
// import { Book } from '../types/book';

// const BookDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const { books } = useLibrary();
//   const [book, setBook] = useState<Book | null>(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     if (id) {
//       const foundBook = books.find(book => book.id === id);
//       setBook(foundBook || null);
      
//       // Scroll to top when book changes
//       window.scrollTo(0, 0);
//     }
//   }, [id, books]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const handleDownload = () => {
//     // Simulate a download process
//     setIsDownloading(true);
//     setTimeout(() => {
//       setIsDownloading(false);
//       // Show success message or notification here if desired
//     }, 2000);
//   };

//   if (!book) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//         <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
//         <h2 className="text-2xl font-medium text-gray-600">Kitob topilmadi</h2>
//         <p className="mt-2 text-gray-500 mb-6">Siz izlayotgan kitob mavjud emas yoki oʻchirib tashlangan.</p>
//         <button
//           onClick={handleGoBack}
//           className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         >
//           <ArrowLeft className="-ml-1 mr-2 h-5 w-5" />
//           Orqaga qaytish
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <button
//         onClick={handleGoBack}
//         className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-8"
//       >
//         <ArrowLeft className="-ml-0.5 mr-2 h-4 w-4" />
//         Kitoblarga qaytish
//       </button>
      
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="md:flex">
//           {/* Book Cover */}
//           <div className="md:w-1/3 bg-gray-100">
//             <div className="p-6 md:p-8 h-full flex items-center justify-center">
//               <div className="relative max-w-xs w-full">
//                 <img
//                   src={book.coverImage}
//                   alt={`Cover of ${book.title}`}
//                   className="w-full h-auto object-cover rounded-lg shadow-md"
//                 />
//                 <div className="absolute top-2 right-2 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                   {book.genre}
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Book Details */}
//           <div className="md:w-2/3 p-6 md:p-8">
//             <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{book.title}</h1>
//             <p className="text-xl text-gray-600 mb-6">Tomonidan {book.author}</p>
            
//             <div className="flex flex-wrap gap-4 mb-6">
//               <div className="bg-gray-100 px-4 py-2 rounded-lg">
//                 <span className="text-sm text-gray-500">Chop etilgan</span>
//                 <p className="font-medium">{book.publishYear}</p>
//               </div>
//               <div className="bg-gray-100 px-4 py-2 rounded-lg">
//                 <span className="text-sm text-gray-500">Sahifa</span>
//                 <p className="font-medium">{book.pages}</p>
//               </div>
//               <div className="bg-gray-100 px-4 py-2 rounded-lg">
//                 <span className="text-sm text-gray-500">Janr</span>
//                 <p className="font-medium">{book.genre}</p>
//               </div>
//             </div>
            
//             <h2 className="text-xl font-semibold text-gray-800 mb-3">Tavsif</h2>
//             <p className="text-gray-700 mb-8 leading-relaxed">
//               {book.description}
//             </p>
            
//             <button
//               onClick={handleDownload}
//               disabled={isDownloading}
//               className={`inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white ${
//                 isDownloading 
//                   ? 'bg-gray-400 cursor-not-allowed' 
//                   : 'bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
//               } transition-colors duration-200`}
//             >
//               {isDownloading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Yuklanmoqda...
//                 </>
//               ) : (
//                 <>
//                   <Download className="-ml-1 mr-3 h-5 w-5" />
//                   Kitob Yuklandi
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, BookOpen } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { Book } from '../types/book';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { books } = useLibrary();
  const [book, setBook] = useState<Book | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundBook = books.find(book => book.id === id);
      setBook(foundBook || null);
      window.scrollTo(0, 0);
    }
  }, [id, books]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDownload = () => {
    if (book?.downloadUrl) {
      setIsDownloading(true);
      const link = document.createElement('a');
      link.href = book.downloadUrl;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => setIsDownloading(false), 1000); // 1 soniyadan so'ng yuklanmoqda tugaydi
    }
  };

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-medium text-gray-600">Kitob topilmadi</h2>
        <p className="mt-2 text-gray-500 mb-6">Siz izlayotgan kitob mavjud emas yoki oʻchirib tashlangan.</p>
        <button
          onClick={handleGoBack}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ArrowLeft className="-ml-1 mr-2 h-5 w-5" />
          Orqaga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={handleGoBack}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-8"
      >
        <ArrowLeft className="-ml-0.5 mr-2 h-4 w-4" />
        Kitoblarga qaytish
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Book Cover */}
          <div className="md:w-1/3 bg-gray-100">
            <div className="p-6 md:p-8 h-full flex items-center justify-center">
              <div className="relative max-w-xs w-full">
                <img
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <div className="absolute top-2 right-2 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {book.genre}
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-6">Tomonidan {book.author}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-500">Chop etilgan</span>
                <p className="font-medium">{book.publishYear}</p>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-500">Sahifa</span>
                <p className="font-medium">{book.pages}</p>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-500">Janr</span>
                <p className="font-medium">{book.genre}</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">Tavsif</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {book.description}
            </p>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white ${
                isDownloading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
              } transition-colors duration-200`}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Yuklanmoqda...
                </>
              ) : (
                <>
                  <Download className="-ml-1 mr-3 h-5 w-5" />
                  Kitobni yuklab olish
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
