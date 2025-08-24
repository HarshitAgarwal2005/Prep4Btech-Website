// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { BookOpen, Clock, Award, FileText, Video, Download, Search } from 'lucide-react';
// import { subjects } from '../data/mockData';

// const Subjects: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const [selectedYear, setSelectedYear] = useState<number | null>(null);
//   const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const year = searchParams.get('year');
//     const search = searchParams.get('search');
//     if (year) {
//       setSelectedYear(parseInt(year));
//     }
//     if (search) {
//       setSearchQuery(search);
//     }
//   }, [searchParams]);

//   const filteredSubjects = subjects.filter(subject => {
//     const yearMatch = selectedYear ? subject.year === selectedYear : true;
//     const branchMatch = selectedSubject ? true : true; // Keep all subjects visible in list
//     const searchMatch = searchQuery 
//       ? subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         subject.code.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;
//     return yearMatch && branchMatch && searchMatch;
//   });

//   const currentSubject = selectedSubject 
//     ? subjects.find(s => s.id === selectedSubject)
//     : null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Subjects
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Explore comprehensive subject materials with chapter-wise notes and resources
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Year Filter */}
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Year</h2>
//               <div className="flex flex-wrap gap-2">
//                 <button
//                   onClick={() => setSelectedYear(null)}
//                   className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                     selectedYear === null
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   All Years
//                 </button>
//                 {[1, 2, 3, 4].map(year => (
//                   <button
//                     key={year}
//                     onClick={() => setSelectedYear(year)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                       selectedYear === year
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     Year {year}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Search */}
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Subjects</h2>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search by subject name or code..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Centered Layout */}
//         <div className="flex justify-center">
//           <div className="w-full max-w-6xl">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Subjects List */}
//               <div className="lg:col-span-1">
//                 <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                     {selectedYear ? `Year ${selectedYear} Subjects` : 'All Subjects'}
//                     {searchQuery && ` (Search: "${searchQuery}")`}
//                   </h2>
//                   <div className="space-y-3">
//                     {filteredSubjects.map(subject => (
//                       <button
//                         key={subject.id}
//                         onClick={() => setSelectedSubject(subject.id)}
//                         className={`w-full text-left p-4 rounded-xl transition-colors ${
//                           selectedSubject === subject.id
//                             ? 'bg-blue-50 border-2 border-blue-200'
//                             : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{subject.name}</h3>
//                             <p className="text-sm text-gray-600">{subject.code}</p>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-xs text-gray-500">Year {subject.year}</div>
//                             <div className="text-xs text-gray-500">{subject.credits} Credits</div>
//                           </div>
//                         </div>
//                       </button>
//                     ))}
//                     {filteredSubjects.length === 0 && (
//                       <div className="text-center py-8">
//                         <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//                         <p className="text-gray-500">No subjects found matching your criteria.</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Subject Details */}
//               <div className="lg:col-span-2">
//                 {currentSubject ? (
//                   <div className="space-y-6">
//                     {/* Subject Header */}
//                     <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg">
//                       <h1 className="text-3xl font-bold mb-2">{currentSubject.name}</h1>
//                       <p className="text-blue-100 mb-4">Subject Code: {currentSubject.code}</p>
//                       <div className="flex items-center space-x-6 text-blue-100">
//                         <div className="flex items-center">
//                           <Clock className="h-5 w-5 mr-2" />
//                           <span>Year {currentSubject.year}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Award className="h-5 w-5 mr-2" />
//                           <span>{currentSubject.credits} Credits</span>
//                         </div>
//                         <div className="flex items-center">
//                           <BookOpen className="h-5 w-5 mr-2" />
//                           <span>{currentSubject.chapters.length} Chapters</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Chapters */}
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                       <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chapters</h2>
//                       <div className="space-y-4">
//                         {currentSubject.chapters.map((chapter, index) => (
//                           <div key={chapter.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                             <div className="flex items-start justify-between">
//                               <div className="flex-1">
//                                 <div className="flex items-center mb-2">
//                                   <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
//                                     {index + 1}
//                                   </div>
//                                   <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
//                                 </div>
//                                 <p className="text-gray-600 ml-11">{chapter.description}</p>
//                               </div>
//                               <div className="flex space-x-2 ml-4">
//                                 {chapter.notesUrl && (
//                                   <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                                     <Download className="h-5 w-5" />
//                                   </button>
//                                 )}
//                                 {chapter.videoUrl && (
//                                   <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
//                                     <Video className="h-5 w-5" />
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Additional Resources */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                           <FileText className="h-6 w-6 mr-2 text-green-600" />
//                           Quick Resources
//                         </h3>
//                         <div className="space-y-3">
//                           <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
//                             <div className="font-medium text-green-800">Sample Questions</div>
//                             <div className="text-sm text-green-600">Practice questions for exams</div>
//                           </button>
//                           <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
//                             <div className="font-medium text-blue-800">Previous Papers</div>
//                             <div className="text-sm text-blue-600">Past exam papers with solutions</div>
//                           </button>
//                           <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
//                             <div className="font-medium text-purple-800">Lab Manuals</div>
//                             <div className="text-sm text-purple-600">Practical session guides</div>
//                           </button>
//                         </div>
//                       </div>

//                       <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                           <Award className="h-6 w-6 mr-2 text-orange-600" />
//                           Study Tips
//                         </h3>
//                         <div className="space-y-3 text-sm text-gray-600">
//                           <div className="p-3 bg-orange-50 rounded-lg">
//                             <div className="font-medium text-orange-800">Focus on Fundamentals</div>
//                             <div>Master the basic concepts before moving to advanced topics</div>
//                           </div>
//                           <div className="p-3 bg-yellow-50 rounded-lg">
//                             <div className="font-medium text-yellow-800">Practice Regularly</div>
//                             <div>Solve problems daily to reinforce learning</div>
//                           </div>
//                           <div className="p-3 bg-indigo-50 rounded-lg">
//                             <div className="font-medium text-indigo-800">Group Study</div>
//                             <div>Collaborate with peers for better understanding</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
//                     <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-6" />
//                     <h2 className="text-2xl font-semibold text-gray-900 mb-4">Select a Subject</h2>
//                     <p className="text-gray-600">
//                       Choose a subject from the list to view its chapters, notes, and resources.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subjects; 