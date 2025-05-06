
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Search from './pages/Search';
import BookDetails from './pages/BookDetails';
import Footer from './components/Footer';
import { LibraryProvider } from './context/LibraryContext';
import Adabiyotlar from './pages/Adabiyotlar';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-stone-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/genres/:genre" element={<Genres />} />
              <Route path="/search" element={<Search />} />
              <Route path="/adabiyotlar" element={<Adabiyotlar />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;