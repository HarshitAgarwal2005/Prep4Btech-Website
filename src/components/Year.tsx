import React, { useState } from 'react';
import { Calendar, BookOpen, Users, Trophy, FileText, Filter } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Removed this import

const Year: React.FC = () => {
  const years = [
    {
      year: 1,
      title: 'First Year',
      description: 'Foundation courses and basic engineering concepts',
      semesters: [
        {  
          sem: 1,  
          title: 'Semester 1',  
          description: 'Basic engineering fundamentals',
          subjects: [
            'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Petroleum Engineering',
            'Biomedical Engineering'
          ]
        },
        {  
          sem: 2,  
          title: 'Semester 2',  
          description: 'Advanced fundamentals and programming',
          subjects: [
           'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Petroleum Engineering',
            'Biomedical Engineering'
          ]
        }
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: BookOpen
    },
    {
      year: 2,
      title: 'Second Year',
      description: 'Core computer science subjects and data structures',
      semesters: [
        {  
          sem: 3,  
          title: 'Semester 3',  
          description: 'Data structures and algorithms fundamentals',
          subjects: [
            'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Civil Engineering'
          ]
        },
        {  
          sem: 4,  
          title: 'Semester 4',  
          description: 'Database systems and computer networks',
          subjects: [
            'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Civil Engineering'
          ]
        }
      ],
      color: 'from-green-500 to-teal-500',
      icon: Users
    },
    {
      year: 3,
      title: 'Third Year',
      description: 'Advanced topics and specialization subjects',
      semesters: [
        {  
          sem: 5,  
          title: 'Semester 5',  
          description: 'Software engineering and web development',
          subjects: [
           'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
          ]
        },
        {  
          sem: 6,  
          title: 'Semester 6',  
          description: 'Machine learning and advanced computing',
          subjects: [
           'Computer Science Engineering',
            'Information Technology',
            'Electrical Engineering',
          ]
        }
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Trophy
    },
    {
      year: 4,
      title: 'Fourth Year',
      description: 'Capstone projects and industry-oriented subjects',
      semesters: [
        {  
          sem: 7,  
          title: 'Semester 7',  
          description: 'Final year project and advanced topics',
          subjects: [
            'Computer Science Engineering',
            'Information Technology'
          ]
        },
        {  
          sem: 8,  
          title: 'Semester 8',  
          description: 'Industry training and project completion',
          subjects: [
           'Computer Science Engineering',
            'Information Technology'
          ]
        }
      ],
      color: 'from-orange-500 to-red-500',
      icon: Calendar
    }
  ];

  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Filter years based on the selected year
  const filteredYears = years.filter(yearData => {
    if (!selectedYear) return true; // If no year is selected, show all years
    return yearData.year === selectedYear;
  });

  const yearFilterButtons = [
      { label: '1st Year', year: 1 },
      { label: '2nd Year', year: 2 },
      { label: '3rd Year', year: 3 },
      { label: '4th Year', year: 4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 py-8 sm:py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Years 🎓
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore subjects and resources organized by academic year and semester. Choose your year to access relevant materials.
            </p>
          </div>

          {/* --- UPDATED FILTER SECTION --- */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-12 border border-white/20 dark:border-gray-700/20 max-w-4xl mx-auto">
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Year</label>
             <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setSelectedYear(null)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                    selectedYear === null
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                    All Years
                </button>
                {yearFilterButtons.map(button => (
                    <button
                    key={button.year}
                    onClick={() => setSelectedYear(button.year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                        selectedYear === button.year
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    >
                    {button.label}
                    </button>
                ))}
             </div>
          </div>


          {/* Centered Layout for Year Cards */}
          <div className="flex justify-center mb-16 sm:mb-20">
            <div className={`max-w-6xl w-full ${filteredYears.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'}`}>
              {filteredYears.length > 0 ? (
                filteredYears.map((yearData) => (
                  <div
                    key={yearData.year}
                    className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 border border-white/20 dark:border-gray-700/20 ${filteredYears.length === 1 ? 'w-full md:max-w-lg' : ''}`}
                  >
                    <div className={`bg-gradient-to-r ${yearData.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <yearData.icon className="w-full h-full" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <yearData.icon className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                          <h2 className="text-2xl sm:text-3xl font-bold">{yearData.title}</h2>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                          {yearData.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">Semesters</h3>
                      <div className="space-y-6">
                        {yearData.semesters.map((semester) => (
                          <div
                            key={semester.sem}
                            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-center mb-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${yearData.color} mr-3`}></div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">{semester.title}</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm ml-6 mb-4">
                              {semester.description}
                            </p>
                            <div className="ml-6 mb-4">
                              <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Subjects:</h5>
                              <div className="grid grid-cols-1 gap-2">
                                {semester.subjects.map((subject, index) => (
                                  <div key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <FileText className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                                    <span>{subject}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="ml-6">
                              {/* --- FIX: Replaced Link with a standard <a> tag --- */}
                              <a
                                href={`/assignments?year=${yearData.year}&semester=${semester.sem}`}
                                className={`inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r ${yearData.color} text-white py-3 px-8 rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-500 transform hover:scale-110 text-sm sm:text-base shadow-lg hover:shadow-2xl`}
                              >
                                <BookOpen className="h-4 w-4 mr-2" />
                                Explore Content
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-12 text-center border border-white/20 dark:border-gray-700/20 w-full">
                    <Filter className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Matching Years Found</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Please select a different year to see the relevant academic information.
                    </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Academic Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">8</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Total Semesters</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">150+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Content Items</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">50+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">4</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Academic Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Year;

