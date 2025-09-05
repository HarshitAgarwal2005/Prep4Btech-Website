import React, { useState } from 'react';
import { Book, Download, ExternalLink, Search, Filter, Star, X, ShoppingCart, MapPin, QrCode } from 'lucide-react';
// Assuming 'books' is imported from your mock data file.
// You would have: import { books } from '../data/mockData';

// --- UPDATED MOCK DATA ---
// Added price, a placeholder Google Drive link for downloadUrl, and a placeholder QR code image.
const books = [
    { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', subjects: ['Algorithms', 'Data Structures'], assignments: ['Assignment 1'], isbn: '978-0262033848', downloadUrl: 'https://docs.google.com/document/d/1BvT2g_f-X_v9n_yZ_.../export?format=pdf', buyUrl: '#', price: 75.50, qrCodeUrl: 'https://placehold.co/200x200/ffffff/000000?text=Scan+Me' },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', subjects: ['Software Engineering', 'Best Practices'], assignments: ['Assignment 2'], isbn: '978-0132350884', downloadUrl: null, buyUrl: '#', price: 42.00, qrCodeUrl: 'https://placehold.co/200x200/ffffff/000000?text=Scan+Me' },
    { id: 3, title: 'Database System Concepts', author: 'Abraham Silberschutz', subjects: ['Database Systems', 'SQL'], assignments: ['Assignment 3'], isbn: '978-0078022159', downloadUrl: 'https://docs.google.com/document/d/1C_w9p_g-Y_x8o_zX_.../export?format=pdf', buyUrl: null, price: 89.99, qrCodeUrl: 'https://placehold.co/200x200/ffffff/000000?text=Scan+Me' },
    { id: 4, title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', subjects: ['Data Structures', 'Java', 'Algorithms'], assignments: ['Assignment 4'], isbn: '978-0672324536', downloadUrl: 'https://docs.google.com/document/d/1D_x0q_h-Z_y7p_aW_.../export?format=pdf', buyUrl: '#', price: 55.25, qrCodeUrl: 'https://placehold.co/200x200/ffffff/000000?text=Scan+Me' }
];

// Define the book type for type safety
interface BookType {
    id: number;
    title: string;
    author: string;
    subjects: string[];
    assignments: string[];
    isbn: string;
    downloadUrl: string | null;
    buyUrl: string | null;
    price: number;
    qrCodeUrl: string;
}

// --- NEW COMPONENT: BuyModal ---
const BuyModal: React.FC<{ book: BookType | null; onClose: () => void }> = ({ book, onClose }) => {
    const [paymentStep, setPaymentStep] = useState<'details' | 'qr' | 'success'>('details');

    if (!book) return null;

    const handlePaymentSuccess = () => {
        setPaymentStep('success');
    };

    const handleDownload = () => {
        if (book.downloadUrl) {
            window.open(book.downloadUrl, '_blank');
        }
    };
    
    const handleClose = () => {
        onClose();
        // Reset step for next time modal opens
        setTimeout(() => setPaymentStep('details'), 300);
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md relative animate-fade-in-up">
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <X size={24} />
                </button>

                {/* Step 1: Details and Confirmation */}
                {paymentStep === 'details' && (
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Confirm Purchase</h2>
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{book.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
                            <p className="text-xl font-bold text-purple-600 dark:text-purple-400 mt-2">${book.price.toFixed(2)}</p>
                        </div>
                        <div className="border-t dark:border-gray-700 pt-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                                <MapPin size={20} className="mr-3 text-purple-500" />
                                <div>
                                    <span className="text-sm">Deliver to:</span>
                                    <p className="font-medium text-gray-800 dark:text-gray-200">Jaipur, Rajasthan, India</p>
                                </div>
                            </div>
                            <button onClick={() => setPaymentStep('qr')} className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-lg font-semibold">
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                Proceed to Pay
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: QR Code Payment */}
                {paymentStep === 'qr' && (
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scan to Pay</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Use your payment app to scan the QR code below.</p>
                        <div className="flex justify-center mb-6">
                            <img src={book.qrCodeUrl} alt="Payment QR Code" className="rounded-lg bg-white p-2" />
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Waiting for payment confirmation...</p>
                        <button onClick={handlePaymentSuccess} className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                            Simulate Successful Payment
                        </button>
                         <button onClick={() => setPaymentStep('details')} className="mt-2 w-full text-sm text-gray-500 dark:text-gray-400 hover:underline">
                            Back
                        </button>
                    </div>
                )}
                
                {/* Step 3: Payment Success and Download */}
                {paymentStep === 'success' && (
                    <div className="p-8 text-center">
                         <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Your file is now ready to be downloaded.</p>
                        <button onClick={handleDownload} className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center font-semibold">
                           <Download className="h-5 w-5 mr-2" />
                           Download Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


const Books: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

  const allSubjects = Array.from(new Set(books.flatMap(book => book.subjects)));

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject ? book.subjects.includes(selectedSubject) : true;
    return matchesSearch && matchesSubject;
  });
  
  const handleBuyClick = (book: BookType) => {
    setSelectedBook(book);
    setIsBuyModalOpen(true);
  };

  return (
    <>
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
                  {/* --- FIX: Removed onClick handler to prevent redirection --- */}
                  <button
                    type="button"
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
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <Book className="h-16 w-16 text-white/80 z-10" />
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">by {book.author}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {book.subjects.map(subject => (
                                <span key={subject} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full">
                                {subject}
                                </span>
                            ))}
                        </div>

                         <p className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">${book.price.toFixed(2)}</p>

                        {/* --- UPDATED ACTIONS --- */}
                        <div className="flex space-x-2">
                          {book.downloadUrl ? (
                            <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </a>
                          ) : (
                            <button className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 py-2 px-4 rounded-lg cursor-not-allowed" disabled>
                              Not Available
                            </button>
                          )}
                          {book.buyUrl && (
                            <button onClick={() => handleBuyClick(book as BookType)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                              <ShoppingCart className="h-4 w-4 mr-2" />
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
                  <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isBuyModalOpen && <BuyModal book={selectedBook} onClose={() => setIsBuyModalOpen(false)} />}
    </>
  );
};

export default Books;

