// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Search, Menu, X, BookOpen, Sparkles } from 'lucide-react';

// interface NavbarProps {
//   onSearch: (query: string) => void;
// }

// // Global search function to find content across the website
// const performGlobalSearch = (query: string, navigate: (path: string) => void) => {
//   const searchTerm = query.toLowerCase().trim();

//   // Define search mappings for different sections
//   const searchMappings = [
//     { keywords: ['home', 'welcome', 'prep4btech', 'about platform'], path: '/' },
//     { keywords: ['year', 'academic year', 'semester', 'sem'], path: '/year' },
//     { keywords: ['content', 'assignments', 'lab', 'theory', 'homework', 'tasks'], path: '/assignments' },
//     { keywords: ['books', 'textbooks', 'reference', 'pdf', 'download'], path: '/books' },
//     { keywords: ['projects', 'mini project', 'major project', 'github', 'demo'], path: '/projects' },
//     { keywords: ['pyq', 'previous year', 'question papers', 'exam papers', 'past papers'], path: '/pyq-papers' },
//     { keywords: ['rtu', 'syllabus', 'curriculum', 'course structure'], path: '/rtu-syllabus' },
//     { keywords: ['contact', 'help', 'support', 'developer', 'harshit'], path: '/contact' },
//     { keywords: ['about', 'developers'], path: '/about'},
//     { keywords: ['programming', 'coding', 'c++', 'java', 'python'], path: '/assignments?search=programming' },
//     { keywords: ['data structures', 'algorithms', 'dsa'], path: '/assignments?search=data structures' },
//     { keywords: ['database', 'sql', 'dbms'], path: '/assignments?search=database' },
//     { keywords: ['machine learning', 'ml', 'ai', 'artificial intelligence'], path: '/assignments?search=machine learning' },
//     { keywords: ['web development', 'html', 'css', 'javascript', 'react'], path: '/assignments?search=web development' },
//     { keywords: ['mathematics', 'math', 'calculus', 'algebra'], path: '/assignments?search=mathematics' },
//     { keywords: ['physics', 'mechanics', 'thermodynamics'], path: '/assignments?search=physics' },
//     { keywords: ['chemistry', 'organic', 'inorganic'], path: '/assignments?search=chemistry' },
//   ];

//   // Find matching section
//   for (const mapping of searchMappings) {
//     if (mapping.keywords.some(keyword => searchTerm.includes(keyword))) {
//       navigate(mapping.path);
//       return;
//     }
//   }
// // If no specific match found, search in subjects
//   navigate(`/assignments?search=${encodeURIComponent(searchTerm)}`);
// };

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();

//   // This effect blocks the background from scrolling when the mobile menu is open.
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     // Cleanup function to restore scrolling when the component unmounts
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Year', path: '/year' },
//     { name: 'Content', path: '/assignments' },
//     { name: 'Books', path: '/books' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'PYQ Papers', path: '/pyq-papers' },
//     { name: 'RTU Syllabus', path: '/rtu-syllabus' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'About Us', path: '/about' }
//   ];

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       onSearch(searchQuery);
//       performGlobalSearch(searchQuery.trim(), navigate);
//       setIsOpen(false); // Close menu on search
//     }
//   };

//   return (
//     <>
//       <style>{`
//         /* Hide scrollbar for the entire page */
//         html::-webkit-scrollbar {
//           display: none;
//         }
//         html {
//           -ms-overflow-style: none;  /* IE and Edge */
//           scrollbar-width: none;  /* Firefox */
//         }
//       `}</style>
//       <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40 shadow-lg ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <Link to="/" className="flex items-center space-x-3 group">
//                 <div className="relative">
//                   <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <BookOpen className="h-6 w-6 text-white" />
//                   </div>
//                   <div className="absolute -top-1 -right-1">
//                     <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     Prep4Btech
//                   </span>
//                   <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">By Error 404</div>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center justify-center flex-1 mx-4">
//               <div className="flex items-center space-x-3">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group whitespace-nowrap ${
//                       location.pathname === item.path
//                         ? 'text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg'
//                         : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500'
//                     }`}
//                   >
//                     <span className="relative z-10">{item.name}</span>
//                     {location.pathname === item.path && (
//                       <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-20 animate-pulse"></div>
//                     )}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                 aria-label="Open main menu"
//                 aria-expanded={isOpen}
//               >
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden">
//               {/* The 'no-scrollbar' class is added here to hide the scrollbar */}
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
//                       location.pathname === item.path
//                         ? 'text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg'
//                         : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="pt-2">
//                   <form onSubmit={handleSearch} className="relative flex">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-l-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
//                     />
//                     <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
//                     <button
//                       type="submit"
//                       className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 py-3 rounded-r-xl transition-all duration-300"
//                       aria-label="Submit search"
//                     >
//                       <Search className="h-4 w-4" />
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//          {/* Collaboration Strip (Visible on Desktop) */}
//         {/* <div className="hidden md:flex justify-center items-center bg-gradient-to-r from-violet-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-2 border-t border-gray-200/50 dark:border-gray-700/50">
//   <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center space-x-2">
//     <span>🤝 In Collaboration with</span>
//     <img
//       src="/origins.jpg" // make sure the file is in your public/ directory
//       alt="Origins Logo"
//       className="h-6 md:h-7 w-auto object-contain hover:scale-110 transition-transform duration-300"
//     />
//     <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
//       Origins Community
//     </span>
//   </p>
// </div>*/}

// {/* Mobile Collaboration Strip (Visible only on small screens) */}
// {/*  {isOpen && (
//   <div className="md:hidden bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center py-2 rounded-xl mt-2 mx-2">
//     <p className="text-sm font-medium flex items-center justify-center space-x-2">
//       <span>🤝</span>
//       <span>In Collaboration with</span>
//       <img
//         src="/origins.jpg"
//         alt="Origins Logo"
//         className="h-4 w-auto object-contain"
//       />
//       <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">
//       Origins 
//     </span>
//     </p>
//   </div>
// )} 
//    */}     

//       </nav>
//     </>
//   );
// };

// export default Navbar; 
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Sparkles, Handshake } from 'lucide-react'; // Added Handshake icon

interface NavbarProps {
  onSearch: (query: string) => void;
}

// Global search function (no changes here)
const performGlobalSearch = (query: string, navigate: (path: string) => void) => {
  const searchTerm = query.toLowerCase().trim();
  const searchMappings = [
    { keywords: ['home', 'welcome', 'prep4btech', 'about platform'], path: '/' },
    { keywords: ['year', 'academic year', 'semester', 'sem'], path: '/year' },
    { keywords: ['content', 'assignments', 'lab', 'theory', 'homework', 'tasks'], path: '/assignments' },
    { keywords: ['books', 'textbooks', 'reference', 'pdf', 'download'], path: '/books' },
    { keywords: ['projects', 'mini project', 'major project', 'github', 'demo'], path: '/projects' },
    { keywords: ['pyq', 'previous year', 'question papers', 'exam papers', 'past papers'], path: '/pyq-papers' },
    { keywords: ['rtu', 'syllabus', 'curriculum', 'course structure'], path: '/rtu-syllabus' },
    { keywords: ['contact', 'help', 'support', 'developer', 'harshit'], path: '/contact' },
    { keywords: ['about', 'developers'], path: '/about'},
  ];
  for (const mapping of searchMappings) {
    if (mapping.keywords.some(keyword => searchTerm.includes(keyword))) {
      navigate(mapping.path);
      return;
    }
  }
  navigate(`/assignments?search=${encodeURIComponent(searchTerm)}`);
};


const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Year', path: '/year' },
    { name: 'Content', path: '/assignments' },
    { name: 'Books', path: '/books' },
    { name: 'Projects', path: '/projects' },
    { name: 'PYQ Papers', path: '/pyq-papers' },
    { name: 'RTU Syllabus', path: '/rtu-syllabus' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      performGlobalSearch(searchQuery.trim(), navigate);
      setIsOpen(false);
    }
  };

  return (
    <>
      <style>{`
        html::-webkit-scrollbar { display: none; }
        html { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
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
                  <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">By Error 404</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open main menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-l-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 py-3 rounded-r-xl transition-all"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ======================= NEW: COLLABORATION BANNER ======================= */}
        {/* This banner is placed outside the mobile menu logic, so it's always visible. */}
        <div className="bg-gradient-to-r from-violet-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <a 
              href="<https://www.instagram.com/jecrc.origins/>" // <-- IMPORTANT: Add link to Origins' website or social media here
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center space-x-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 group"
            >
              <Handshake className="h-4 w-4 text-violet-500 group-hover:animate-shake" />
              <span>In Collaboration with</span>
              <img
                src="/origins.jpg" // IMPORTANT: Place your logo in the 'public' folder
                alt="Origins Logo"
                className="h-5 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                Origins Community
              </span>
            </a>
          </div>
        </div>
        {/* ============================= END OF NEW SECTION ============================ */}

      </nav>
    </>
  );
};

export default Navbar;