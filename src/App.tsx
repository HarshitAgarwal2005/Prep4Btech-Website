// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { ThemeProvider } from './components/ThemeProvider';
// import { DeveloperAuthProvider } from './components/Contact';
// import Navbar from './components/Navbar';
// import LoadingSkeleton from './components/ui/LoadingSkeleton';  //new element
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Year from './components/Year';
// import RTUSyllabus from './components/RTUSyllabus';
// // import Subjects from './components/Subjects';
// import Assignments from './components/Assignments';
// import Books from './components/Books';
// import Projects from './components/Projects';
// import PYQPapers from './components/PYQPapers';
// import Contact from './components/Contact';
// import About from './components/About';
// import AskDoubt from './components/AskDoubt';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsOfService from './components/TermsOfService';

// // Component to handle scroll to top on route change
// const ScrollToTop: React.FC = () => {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// // Component to track user visits
// const UserVisitTracker: React.FC = () => {
//   useEffect(() => {
//     // Increment visit count on app load
//     const currentCount = parseInt(localStorage.getItem('userVisitCount') || '1000', 10);
//     const newCount = currentCount + 1;
//     localStorage.setItem('userVisitCount', newCount.toString());
    
//     // Dispatch custom event to update footer
//     window.dispatchEvent(new CustomEvent('userVisitUpdate', { detail: newCount }));
//   }, []);

//   return null;
// };

// function App() {
//   const [searchResults, setSearchResults] = useState<string | null>(null);

//   const handleSearch = (query: string) => {
//     setSearchResults(query);
//     // Here you would implement the actual search logic
//     console.log('Searching for:', query);
//   };

//   return (
//     <ThemeProvider>
//       <DeveloperAuthProvider>
//         <Router>
//           <ScrollToTop />
//           <UserVisitTracker />
//           <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//             <Navbar onSearch={handleSearch} />
//             <Sidebar />
//             <main>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/year" element={<Year />} />
//                 <Route path="/rtu-syllabus" element={<RTUSyllabus />} />
//                 {/* <Route path="/subjects" element={<Subjects />} /> */}
//                 <Route path="/assignments" element={<Assignments />} />
//                 <Route path="/books" element={<Books />} />
//                 <Route path="/projects" element={<Projects />} />
//                 <Route path="/pyq-papers" element={<PYQPapers />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                 <Route path="/terms-of-service" element={<TermsOfService />} />
//               </Routes>
//             </main>
//             <Footer />
//             <AskDoubt />
//           </div>
//         </Router>
//       </DeveloperAuthProvider>
//     </ThemeProvider>
//   );
// }
// export default App;

import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { ThemeProvider } from './components/ThemeProvider';
// import { DeveloperAuthProvider } from './components/Contact';
// import Navbar from './components/Navbar';
// import LoadingSkeleton from './components/ui/LoadingSkeleton';  //new element
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Year from './components/Year';
// import RTUSyllabus from './components/RTUSyllabus';
// // import Subjects from './components/Subjects';
// import Assignments from './components/Assignments';
// import Books from './components/Books';
// import Projects from './components/Projects';
// import PYQPapers from './components/PYQPapers';
// import Contact from './components/Contact';
// import About from './components/About';
// import AskDoubt from './components/AskDoubt';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsOfService from './components/TermsOfService';
import LoadingSkeleton from './components/ui/LoadingSkeleton'; // Ensure this component exists

// --- LAZY LOADED COMPONENTS (Phase 2 Optimization) ---
// This splits the bundle so users don't download pages they aren't viewing.
const Home = lazy(() => import('./components/Home'));
const Year = lazy(() => import('./components/Year'));
const RTUSyllabus = lazy(() => import('./components/RTUSyllabus'));
// const Subjects = lazy(() => import('./components/Subjects')); 
const Assignments = lazy(() => import('./components/Assignments'));
const Books = lazy(() => import('./components/Books'));
const Projects = lazy(() => import('./components/Projects'));
const PYQPapers = lazy(() => import('./components/PYQPapers'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

// Lazy load AskDoubt to defer heavy email logic until needed
const AskDoubt = lazy(() => import('./components/AskDoubt'));

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
              {/* Suspense catches the "loading" state of lazy components */}
              <Suspense fallback={<LoadingSkeleton />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/year" element={<Year />} />
                  <Route path="/rtu-syllabus" element={<RTUSyllabus />} />
                  {/* <Route path="/subjects" element={<Subjects />} /> */}
                  <Route path="/assignments" element={<Assignments />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/pyq-papers" element={<PYQPapers />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            {/* AskDoubt is loaded in background with no fallback to prevent layout shift */}
            <Suspense fallback={null}>
              <AskDoubt />
            </Suspense>
          </div>
        </Router>
      </DeveloperAuthProvider>
    </ThemeProvider>
  );
}
export default App;