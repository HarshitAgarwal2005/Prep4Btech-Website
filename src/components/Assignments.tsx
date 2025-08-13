import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FileText, Download, Calendar, Clock, Filter, Search, Users, BookOpen, Trophy, ArrowLeft, ChevronRight } from 'lucide-react';
import { assignments, subjects } from '../data/mockData';

const Assignments: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Available branches
  const branches = ['CSE', 'ECE', 'IT', 'MECHANICAL', 'CIVIL'];

  useEffect(() => {
    const year = searchParams.get('year');
    const semester = searchParams.get('semester');
    if (year) {
      setSelectedYear(parseInt(year));
    }
    if (semester) {
      setSelectedSemester(parseInt(semester));
    }
  }, [searchParams]);

  const filteredAssignments = assignments.filter(assignment => {
    const yearMatch = selectedYear ? assignment.year === selectedYear : true;
    const branchMatch = selectedBranch ? assignment.branch === selectedBranch : true;
    const typeMatch = selectedType ? assignment.type === selectedType : true;
    const searchMatch = searchQuery 
      ? assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return yearMatch && branchMatch && typeMatch && searchMatch;
  });

  const filteredSubjects = subjects.filter(subject => {
    const yearMatch = selectedYear ? subject.year === selectedYear : true;
    const semesterMatch = selectedSemester ? subject.semester === selectedSemester : true;
    const branchMatch = selectedBranch ? subject.branch === selectedBranch : true;
    return yearMatch && semesterMatch && branchMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lab': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'theory': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'project': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const resetFilters = () => {
    setSelectedYear(null);
    setSelectedSemester(null);
    setSelectedBranch(null);
    setSelectedType(null);
    setSearchQuery('');
  };

  const goBack = () => {
    if (selectedBranch) {
      setSelectedBranch(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    } else if (selectedYear) {
      setSelectedYear(null);
    }
  };

  const getBreadcrumb = () => {
    const items = [];
    if (selectedYear) items.push(`Year ${selectedYear}`);
    if (selectedSemester) items.push(`Sem ${selectedSemester}`);
    if (selectedBranch) items.push(selectedBranch);
    return items.join(' > ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/20 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Content 📚
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access assignments, notes, and study materials organized by year, semester, and branch
            </p>
          </div>

          {/* Breadcrumb Navigation */}
          {(selectedYear || selectedSemester || selectedBranch) && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={goBack}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{getBreadcrumb()}</p>
                  </div>
                </div>
                <button
                  onClick={resetFilters}
                  className="bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Reset All
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Select Year */}
          {!selectedYear && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <Calendar className="h-8 w-8 mr-3 text-green-600" />
                Select Academic Year
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-105 border border-green-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <span className="text-white text-2xl font-bold">{year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Year {year}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {year === 1 && 'Foundation & Basic Engineering'}
                        {year === 2 && 'Core Subjects & Fundamentals'}
                        {year === 3 && 'Advanced Topics & Specialization'}
                        {year === 4 && 'Projects & Industry Training'}
                      </p>
                      <ChevronRight className="h-5 w-5 text-green-600 mx-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Semester */}
          {selectedYear && !selectedSemester && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <Clock className="h-8 w-8 mr-3 text-blue-600" />
                Select Semester - Year {selectedYear}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((sem) => {
                  const semesterNumber = (selectedYear - 1) * 2 + sem;
                  return (
                    <div
                      key={sem}
                      onClick={() => setSelectedSemester(semesterNumber)}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-105 border border-blue-100 dark:border-gray-600 group"
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                          <span className="text-white text-xl font-bold">{semesterNumber}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Semester {semesterNumber}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          Academic content for semester {semesterNumber}
                        </p>
                        <ChevronRight className="h-5 w-5 text-blue-600 mx-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Select Branch */}
          {selectedSemester && !selectedBranch && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <Users className="h-8 w-8 mr-3 text-purple-600" />
                Select Your Branch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch) => (
                  <div
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-105 border border-purple-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{branch}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {branch === 'CSE' && 'Computer Science Engineering'}
                        {branch === 'ECE' && 'Electronics & Communication'}
                        {branch === 'IT' && 'Information Technology'}
                        {branch === 'MECHANICAL' && 'Mechanical Engineering'}
                        {branch === 'CIVIL' && 'Civil Engineering'}
                      </p>
                      <ChevronRight className="h-5 w-5 text-purple-600 mx-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Show Content */}
          {selectedBranch && (
            <>
              {/* Filters and Search */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Type</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedType(null)}
                        className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                          selectedType === null
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        All Types
                      </button>
                      {['lab', 'theory', 'project'].map(type => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm capitalize ${
                            selectedType === type
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Content</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search assignments, subjects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subjects Section */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                  Subjects - {selectedBranch} (Year {selectedYear}, Sem {selectedSemester})
                </h2>
                
                {filteredSubjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredSubjects.map(subject => (
                      <div key={subject.id} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{subject.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{subject.code}</p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <p>Credits: {subject.credits}</p>
                          <p>Chapters: {subject.chapters.length}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 mb-12">
                    <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Subjects Found</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No subjects available for {selectedBranch} - Year {selectedYear}, Semester {selectedSemester}
                    </p>
                  </div>
                )}
              </div>

              {/* Assignments Section */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-green-600" />
                  Assignments & Materials
                </h2>

                {filteredAssignments.length > 0 ? (
                  <div className="space-y-6">
                    {filteredAssignments.map(assignment => (
                      <div key={assignment.id} className="bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl shadow-lg">
                              <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{assignment.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-2">{assignment.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                </span>
                                <span className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  {assignment.subject}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(assignment.type)}`}>
                                  {assignment.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {assignment.downloadUrl && (
                              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </button>
                            )}
                            {assignment.solutionUrl && (
                              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center">
                                <FileText className="h-4 w-4 mr-2" />
                                Solution
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Assignments Found</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No assignments available for the selected filters. Try adjusting your search criteria.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Quick Stats */}
          {!selectedYear && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Content Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{assignments.length}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Total Assignments</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{subjects.length}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Total Subjects</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{branches.length}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Branches Covered</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">4</h3>
                  <p className="text-gray-600 dark:text-gray-300">Academic Years</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignments;