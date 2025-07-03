import React, { useState } from 'react';
import { Book, Download, ExternalLink, Search, Filter, Star } from 'lucide-react';
import { books } from '../data/mockData';

const Books: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const allSubjects = Array.from(new Set(books.flatMap(book => book.subjects)));

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject ? book.subjects.includes(selectedSubject) : true;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Books & References
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive collection of textbooks and reference materials for all subjects
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Books</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Subject</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubject(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSubject === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-4">by {book.author}</p>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Related Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {book.subjects.map(subject => (
                      <span
                        key={subject}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ISBN */}
                {book.isbn && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600">
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
                    <button className="flex-1 bg-gray-300 text-gray-600 py-2 px-4 rounded-lg cursor-not-allowed">
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

        {filteredBooks.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Book className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Books Found</h2>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Featured Books Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming Classics</h3>
              <p className="text-gray-600 text-sm">Essential books for programming fundamentals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Highly Rated</h3>
              <p className="text-gray-600 text-sm">Top-rated books by students and professionals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Additions</h3>
              <p className="text-gray-600 text-sm">Recently added books and references</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;