import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { DeveloperAuthProvider } from './components/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Year from './components/Year';
import RTUSyllabus from './components/RTUSyllabus';
import Subjects from './components/Subjects';
import Assignments from './components/Assignments';
import Books from './components/Books';
import Projects from './components/Projects';
import PYQPapers from './components/PYQPapers';
import Contact from './components/Contact';
import About from './components/About';
import AskDoubt from './components/AskDoubt';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to track user visits
const UserVisitTracker: React.FC = () => {
  useEffect(() => {
    // Increment visit count on app load
    const currentCount = parseInt(localStorage.getItem('userVisitCount') || '1000', 10);
    const newCount = currentCount + 1;
    localStorage.setItem('userVisitCount', newCount.toString());
    
    // Dispatch custom event to update footer
    window.dispatchEvent(new CustomEvent('userVisitUpdate', { detail: newCount }));
  }, []);

  return null;
};

function App() {
  const [searchResults, setSearchResults] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchResults(query);
    // Here you would implement the actual search logic
    console.log('Searching for:', query);
  };

  return (
    <ThemeProvider>
      <DeveloperAuthProvider>
        <Router>
          <ScrollToTop />
          <UserVisitTracker />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar onSearch={handleSearch} />
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/year" element={<Year />} />
                <Route path="/rtu-syllabus" element={<RTUSyllabus />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/books" element={<Books />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/pyq-papers" element={<PYQPapers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <AskDoubt />
          </div>
        </Router>
      </DeveloperAuthProvider>
    </ThemeProvider>
  );
}

export default App;