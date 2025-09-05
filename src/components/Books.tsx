import React, { useState } from 'react';
import { Book, Download, ExternalLink, Search, Filter, Star } from 'lucide-react';
// Assuming 'books' is imported from your mock data file.
// You would have: import { books } from '../data/mockData';

// Mock data for demonstration since it was not provided.
// The structure should match what you have.
const books = [
    { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', subjects: ['Algorithms', 'Data Structures'], assignments: ['Assignment 1'], isbn: '978-0262033848', downloadUrl: '#', buyUrl: '#' },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', subjects: ['Software Engineering', 'Best Practices'], assignments: ['Assignment 2'], isbn: '978-0132350884', downloadUrl: null, buyUrl: '#' },
    { id: 3, title: 'Database System Concepts', author: 'Abraham Silberschatz', subjects: ['Database Systems', 'SQL'], assignments: ['Assignment 3'], isbn: '978-0078022159', downloadUrl: '#', buyUrl: null },
    { id: 4, title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', subjects: ['Data Structures', 'Java', 'Algorithms'], assignments: ['Assignment 4'], isbn: '978-0672324536', downloadUrl: '#', buyUrl: '#' }
];


const Books: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const allSubjects = Array.from(new Set(books.flatMap(book => book.subjects)));

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());

    // --- FIX IS HERE ---
    // The original code was checking 'book.assignments', but the filter buttons are based on 'book.subjects'.
    // If a book object doesn't have an 'assignments' property, it would cause a crash.
    // I've changed it to correctly check against the 'book.subjects' array.
    const matchesSubject = selectedSubject ? book.subjects.includes(selectedSubject) : true;

    return matchesSearch && matchesSubject;
  });

  const handleGlobalSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to subjects page with search query
      window.location.href = `/assignments?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Books & References 📚
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive collection of textbooks and reference materials for all subjects
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject Filter - Left Side */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Subject</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubject(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSubject === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All Subjects
                </button>
                {allSubjects.slice(0, 3).map(subject => (
                  <button
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      selectedSubject === subject
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* Search - Right Side */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Books</label>
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <button
                  onClick={handleGlobalSearch}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-r-lg transition-colors flex items-center"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid - Centered Results */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBooks.map(book => (
                  <div key={book.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-gray-700/20">
                    {/* Book Cover Placeholder */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <Book className="h-16 w-16 text-white/80 z-10" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Book Info */}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">by {book.author}</p>

                      {/* Subjects */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Related Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {book.subjects.map(subject => (
                            <span
                              key={subject}
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ISBN */}
                      {book.isbn && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-medium">ISBN:</span> {book.isbn}
                          </p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex space-x-2">
                        {book.downloadUrl ? (
                          <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        ) : (
                          <button className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 py-2 px-4 rounded-lg cursor-not-allowed">
                            Not Available
                          </button>
                        )}
                        {book.buyUrl && (
                          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Buy
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-12 text-center border border-white/20 dark:border-gray-700/20">
                <Book className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Books Found</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Featured Books Section */}
        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Programming Classics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Essential books for programming fundamentals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Highly Rated</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Top-rated books by students and professionals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
              <div className="bg-bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Latest Additions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Recently added books and references</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
