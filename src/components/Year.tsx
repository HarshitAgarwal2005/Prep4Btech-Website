import React from 'react';
import { Calendar, BookOpen, Users, Trophy, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            'Engineering Mathematics-1',
            'Engineering Physics',
            'Communication Skills',
            'Basic Mechanical Engineering',
            'Basic Electrical Engineering'
          ]
        },
        { 
          sem: 2, 
          title: 'Semester 2', 
          description: 'Advanced fundamentals and programming',
          subjects: [
            'Engineering Mathematics-2',
            'Engineering Chemistry',
            'Human Values',
            'Programming for Problem Solving',
            'Basic Civil Engineering'
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
            'Data Structures',
            'Computer Organization',
            'Discrete Mathematics',
            'Object Oriented Programming',
            'Digital Electronics'
          ]
        },
        { 
          sem: 4, 
          title: 'Semester 4', 
          description: 'Database systems and computer networks',
          subjects: [
            'Database Management Systems',
            'Computer Networks',
            'Operating Systems',
            'Software Engineering',
            'Theory of Computation'
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
            'Compiler Design',
            'Computer Graphics',
            'Web Technologies',
            'Machine Learning',
            'Artificial Intelligence'
          ]
        },
        { 
          sem: 6, 
          title: 'Semester 6', 
          description: 'Machine learning and advanced computing',
          subjects: [
            'Mobile Computing',
            'Cloud Computing',
            'Information Security',
            'Data Mining',
            'Project Work'
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
            'Distributed Systems',
            'Blockchain Technology',
            'Internet of Things',
            'Major Project-1',
            'Professional Elective-1'
          ]
        },
        { 
          sem: 8, 
          title: 'Semester 8', 
          description: 'Industry training and project completion',
          subjects: [
            'Industry Training',
            'Major Project-2',
            'Professional Elective-2',
            'Open Elective',
            'Seminar'
          ]
        }
      ],
      color: 'from-orange-500 to-red-500',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Years 🎓
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore subjects and resources organized by academic year and semester. Choose your year to access relevant materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {years.map((yearData) => (
              <div
                key={yearData.year}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 border border-white/20 dark:border-gray-700/20"
              >
                <div className={`bg-gradient-to-r ${yearData.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <yearData.icon className="w-full h-full" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <yearData.icon className="h-8 w-8 mr-3" />
                      <h2 className="text-3xl font-bold">{yearData.title}</h2>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {yearData.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Semesters</h3>
                  <div className="space-y-6">
                    {yearData.semesters.map((semester) => (
                      <div
                        key={semester.sem}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center mb-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${yearData.color} mr-3`}></div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{semester.title}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm ml-6 mb-4">
                          {semester.description}
                        </p>
                        <div className="ml-6">
                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Subjects:</h5>
                          <div className="grid grid-cols-1 gap-2">
                            {semester.subjects.map((subject, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                <FileText className="h-4 w-4 mr-2 text-blue-500" />
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <Link
                      to={`/subjects?year=${yearData.year}`}
                      className={`flex-1 bg-gradient-to-r ${yearData.color} text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      View Subjects
                    </Link>
                    <Link
                      to={`/assignments?year=${yearData.year}`}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Assignments
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Academic Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Semesters</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">150+</h3>
                <p className="text-gray-600 dark:text-gray-300">Assignments</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">50+</h3>
                <p className="text-gray-600 dark:text-gray-300">Projects</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">4</h3>
                <p className="text-gray-600 dark:text-gray-300">Academic Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Year;