import React, { useState } from 'react';
import { books } from '../data/books';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BookGrid from '../components/BookGrid';

interface Book {
  id: number;
  title: string;
  category: string;
  description: string;
  pdfLink: string;
  audioLink?: string;
}

const allBooks: Book[] = [
  { 
    id: 1, 
    title: 'Iqrornoma', 
    category: 'Audio Kitoblar', 
    description: 'Lev Tolstoy o‘zining "Iqrornoma" asarida inson umrining mazmuni haqida bosh qotirar ekan, uning hayotida e’tiqodining, dinning o‘rni va roli haqidagi teran mushohadalarni o‘rtaga tashlaydi, ulkan daholarni qiynagan ma’naviy muammolarga javob izlaydi.',
    pdfLink: ' ',
    audioLink: '/Iqrornoma (Lev Tolstoy).mp3',
  },
  { 
    id: 2, 
    title: 'Urushlarning o‘zgargan motivi', 
    category: 'Audio Kitoblar', 
    description: ' Ikkinchi jahon urushidan keyin, insoniyat urushlar borasida juda jiddiy xulosalar qilgan, urush olovi bilan o‘ynashmaslikka qasam ichgan edi. Lekin mana, oradan 80 yil o‘tib, jahon OAVda yana urushlar bilan bog‘liq xabarlar odatiy holga aylanib qoldi.',
    pdfLink: ' ',
    audioLink: '/public/Urushlarning o‘zgargan motivi.mp3',
  },
  {
    id: 3,
    title: 'O`zbekistonda oliy ta`lim jurnali',
    category: 'Jurnal',
    description: 'Президентимиз “Ҳамма буюклик ниятдан келади, меҳнатдан келади”, деган фикрни кўп таъкидлайди. Дарҳақиқат, инсоният Ер юзида пайдо бўлганидан буён унинг азалий миссияси — ўқиш, ўрганиш, буюкликка эришиш учун интилишдир. Шу маънода, таълимнинг ўзгармас моҳияти борки, у ўзликни англаш ва дунёни билишга бўлган иштиёқда намоён бўлади.',
    pdfLink: '/Ozbekistondaoliytalimjurnali.pdf',
  }
];

const categories = ['Audio Kitoblar', 'Jurnal', 'Multimedia'];

const Adabiyotlar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Get featured books (first 3)
  const featuredBooks = books.slice(0, 3);

  const filteredBooks =
    selectedCategory && selectedCategory !== 'Multimedia'
      ? allBooks.filter((book) => book.category === selectedCategory)
      : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-serif mb-6">Adabiyotlar</h1>

      {/* Kategoriyalar */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Adabiyotlar yoki multimedia */}
      <div className="grid gap-6">
        {selectedCategory === '' && (
          <p className="text-gray-500">Iltimos, kategoriya tanlang.</p>
        )}

        {selectedCategory === 'Multimedia' && (
          <div className="grid gap-6">
            <video controls className=" rounded-lg shadow">
              <source src="video.MP4" type="video/mp4" />
              Brauzeringiz videoni qo'llab-quvvatlamaydi.
            </video>
          </div>
        )}

        {selectedCategory === 'Jurnal' && (
          <>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book.id} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.category}</p>
                  <p className="text-gray-700 mt-2">{book.description}</p>

                  <div className="mt-4">
                    {/* PDF yuklab olish tugmasi */}
                    <a 
                      href={book.pdfLink} 
                      download 
                      className="bg-amber-500 text-white py-2 px-4 rounded-lg shadow hover:bg-amber-600 transition"
                    >
                      Yuklab olish
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Bu kategoriyada jurnal topilmadi.</p>
            )}
          </>
        )}

        {selectedCategory === 'Audio Kitoblar' && (
          <>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book.id} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.category}</p>
                  <p className="text-gray-700 mt-2">{book.description}</p>
                  
                  <div className="mt-4 flex gap-4">
                    {/* Audio play button */}
                    <audio controls className="w-full rounded-lg shadow">
                      <source src={book.audioLink} type="audio/mp3" />
                      Brauzeringiz audio formatini qo'llab-quvvatlamaydi.
                    </audio>
                    
                    
                    {/* Audio yuklab olish tugmasi */}
                    <a 
                      href={book.audioLink} 
                      download 
                      className="bg-amber-500 text-white py-2 px-4 rounded-lg shadow hover:bg-amber-600 transition"
                    >
                    Yuklab olish
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Bu kategoriyada audio kitoblar topilmadi.</p>
            )}
          </>
        )}
      </div>

      {/* Featured Books */}
      {selectedCategory !== 'Multimedia' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900">Kitoblar</h2>
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
      )}
    </div>
  );
};

export default Adabiyotlar;