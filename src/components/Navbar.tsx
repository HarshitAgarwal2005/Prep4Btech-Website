import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';
import { subjects } from '../data/mockData';
import { pyqPapers, pyqSubjects } from '../data/pyqData';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Year', path: '/year' },
    { name: 'Content', path: '/assignments' },
    { name: 'Books', path: '/books' },
    { name: 'Projects', path: '/projects' },
    { name: 'PYQ Papers', path: '/pyq-papers' },
    { name: 'RTU Syllabus', path: '/rtu-syllabus' },
    { name: 'Contact', path: '/contact' }
  ];

  const performGlobalSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    // Search in subjects
    subjects.forEach(subject => {
      if (subject.name.toLowerCase().includes(searchTerm) || 
          subject.code.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'subject',
          title: subject.name,
          subtitle: subject.code,
          path: `/subjects?search=${encodeURIComponent(subject.name)}`
        });
      }
    });

    // Search in PYQ papers
    pyqPapers.forEach(paper => {
      if (paper.title.toLowerCase().includes(searchTerm)) {
        const subject = pyqSubjects.find(s => s.id === paper.subjectId);
        results.push({
          type: 'paper',
          title: paper.title,
          subtitle: subject?.name || 'Unknown Subject',
          path: '/pyq-papers'
        });
      }
    });

    // Search in pages
    navItems.forEach(item => {
      if (item.name.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'page',
          title: item.name,
          subtitle: 'Page',
          path: item.path
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
    setShowResults(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowResults(false);
      // Navigate to assignments page with search query
      navigate(`/assignments?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    performGlobalSearch(value);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back Button + Logo */}
          <div className="flex items-center space-x-3">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
              title="Go back"
            >
              <ArrowLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Prep4Btech
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">By Team</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Reduced Spacing */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-20 animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <form onSubmit={handleSearch} className="relative group flex">
              <input
                type="text"
                placeholder="Search notes, subjects..."
                value={searchQuery}
                onChange={(e) => handleSearchInputChange(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                className="w-64 pl-10 pr-4 py-2.5 bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-l-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-violet-500 transition-colors" />
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-r-xl transition-all duration-300 border border-l-0 border-violet-600 hover:border-violet-700"
              >
                <Search className="h-4 w-4" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </form>
            
            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        result.type === 'subject' ? 'bg-blue-500' :
                        result.type === 'paper' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{result.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{result.subtitle}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Click outside to close search results */}
          {showResults && (
            <div className="fixed inset-0 z-40" onClick={() => setShowResults(false)}></div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 rounded-b-2xl shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <form onSubmit={handleSearch} className="relative flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-l-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 py-3 rounded-r-xl transition-all duration-300"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;