import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Eye, 
  Upload, 
  Plus,
  CheckCircle,
  AlertCircle,
  Users,
  GraduationCap
} from 'lucide-react';
import { useDeveloperAuth } from './Contact';

interface Assignment {
  id: string;
  title: string;
  description: string;
  previewUrl?: string;
  documentUrl: string;
  uploadDate: string;
  fileSize?: string;
}

interface Subject {
  id: string;
  name: string;
  code: string;
  assignments: Assignment[];
}

interface Semester {
  id: string;
  number: number;
  title: string;
  subjects: Subject[];
}

interface AcademicYear {
  id: string;
  year: number;
  title: string;
  description: string;
  semesters: Semester[];
  color: string;
}

const Assignments: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadingSubject, setUploadingSubject] = useState<string | null>(null);

  const { isAuthenticated } = useDeveloperAuth();

  // Academic structure data
  const academicYears: AcademicYear[] = [
    {
      id: 'year1',
      year: 1,
      title: 'First Year',
      description: 'Foundation courses and basic engineering concepts',
      color: 'from-blue-500 to-cyan-500',
      semesters: [
        {
          id: 'sem1',
          number: 1,
          title: 'Semester 1',
          subjects: [
            {
              id: 'math1',
              name: 'Engineering Mathematics-I',
              code: 'MATH101',
              assignments: [
                {
                  id: 'math1-a1',
                  title: 'Differential Equations Tutorial',
                  description: 'Practice problems on differential equations',
                  documentUrl: '/assignments/math1-tutorial1.pdf',
                  uploadDate: '2024-01-15',
                  fileSize: '2.3 MB'
                },
                {
                  id: 'math1-a2',
                  title: 'Linear Algebra Assignment',
                  description: 'Matrix operations and vector spaces',
                  documentUrl: '/assignments/math1-assignment2.pdf',
                  uploadDate: '2024-01-20',
                  fileSize: '1.8 MB'
                }
              ]
            },
            {
              id: 'physics1',
              name: 'Engineering Physics',
              code: 'PHY101',
              assignments: [
                {
                  id: 'phy1-a1',
                  title: 'Mechanics Lab Report',
                  description: 'Experimental analysis of motion',
                  documentUrl: '/assignments/physics1-lab1.pdf',
                  uploadDate: '2024-01-18',
                  fileSize: '3.1 MB'
                }
              ]
            },
            {
              id: 'comm1',
              name: 'Communication Skills',
              code: 'ENG101',
              assignments: [
                {
                  id: 'comm1-a1',
                  title: 'Technical Writing Assignment',
                  description: 'Report writing and documentation',
                  documentUrl: '/assignments/comm1-writing.pdf',
                  uploadDate: '2024-01-22',
                  fileSize: '1.5 MB'
                }
              ]
            },
            {
              id: 'mech1',
              name: 'Basic Mechanical Engineering',
              code: 'MECH101',
              assignments: []
            },
            {
              id: 'elec1',
              name: 'Basic Electrical Engineering',
              code: 'ELEC101',
              assignments: []
            }
          ]
        },
        {
          id: 'sem2',
          number: 2,
          title: 'Semester 2',
          subjects: [
            {
              id: 'math2',
              name: 'Engineering Mathematics-II',
              code: 'MATH102',
              assignments: []
            },
            {
              id: 'chem1',
              name: 'Engineering Chemistry',
              code: 'CHEM101',
              assignments: []
            },
            {
              id: 'human1',
              name: 'Human Values',
              code: 'HUM101',
              assignments: []
            },
            {
              id: 'prog1',
              name: 'Programming for Problem Solving',
              code: 'CS101',
              assignments: []
            },
            {
              id: 'civil1',
              name: 'Basic Civil Engineering',
              code: 'CIVIL101',
              assignments: []
            }
          ]
        }
      ]
    },
    {
      id: 'year2',
      year: 2,
      title: 'Second Year',
      description: 'Core computer science subjects and data structures',
      color: 'from-green-500 to-emerald-500',
      semesters: [
        {
          id: 'sem3',
          number: 3,
          title: 'Semester 3',
          subjects: [
            {
              id: 'ds1',
              name: 'Data Structures',
              code: 'CS201',
              assignments: []
            },
            {
              id: 'co1',
              name: 'Computer Organization',
              code: 'CS202',
              assignments: []
            },
            {
              id: 'discrete1',
              name: 'Discrete Mathematics',
              code: 'MATH201',
              assignments: []
            },
            {
              id: 'oop1',
              name: 'Object Oriented Programming',
              code: 'CS203',
              assignments: []
            },
            {
              id: 'digital1',
              name: 'Digital Electronics',
              code: 'ECE201',
              assignments: []
            }
          ]
        },
        {
          id: 'sem4',
          number: 4,
          title: 'Semester 4',
          subjects: [
            {
              id: 'dbms1',
              name: 'Database Management Systems',
              code: 'CS301',
              assignments: []
            },
            {
              id: 'cn1',
              name: 'Computer Networks',
              code: 'CS302',
              assignments: []
            },
            {
              id: 'os1',
              name: 'Operating Systems',
              code: 'CS303',
              assignments: []
            },
            {
              id: 'se1',
              name: 'Software Engineering',
              code: 'CS304',
              assignments: []
            },
            {
              id: 'toc1',
              name: 'Theory of Computation',
              code: 'CS305',
              assignments: []
            }
          ]
        }
      ]
    },
    {
      id: 'year3',
      year: 3,
      title: 'Third Year',
      description: 'Advanced topics and specialization subjects',
      color: 'from-purple-500 to-pink-500',
      semesters: [
        {
          id: 'sem5',
          number: 5,
          title: 'Semester 5',
          subjects: [
            {
              id: 'compiler1',
              name: 'Compiler Design',
              code: 'CS401',
              assignments: []
            },
            {
              id: 'graphics1',
              name: 'Computer Graphics',
              code: 'CS402',
              assignments: []
            },
            {
              id: 'web1',
              name: 'Web Technologies',
              code: 'CS403',
              assignments: []
            },
            {
              id: 'ml1',
              name: 'Machine Learning',
              code: 'CS404',
              assignments: []
            },
            {
              id: 'ai1',
              name: 'Artificial Intelligence',
              code: 'CS405',
              assignments: []
            }
          ]
        },
        {
          id: 'sem6',
          number: 6,
          title: 'Semester 6',
          subjects: [
            {
              id: 'mobile1',
              name: 'Mobile Computing',
              code: 'CS501',
              assignments: []
            },
            {
              id: 'cloud1',
              name: 'Cloud Computing',
              code: 'CS502',
              assignments: []
            },
            {
              id: 'security1',
              name: 'Information Security',
              code: 'CS503',
              assignments: []
            },
            {
              id: 'mining1',
              name: 'Data Mining',
              code: 'CS504',
              assignments: []
            },
            {
              id: 'project1',
              name: 'Project Work',
              code: 'CS505',
              assignments: []
            }
          ]
        }
      ]
    },
    {
      id: 'year4',
      year: 4,
      title: 'Fourth Year',
      description: 'Capstone projects and industry-oriented subjects',
      color: 'from-orange-500 to-red-500',
      semesters: [
        {
          id: 'sem7',
          number: 7,
          title: 'Semester 7',
          subjects: [
            {
              id: 'distributed1',
              name: 'Distributed Systems',
              code: 'CS601',
              assignments: []
            },
            {
              id: 'blockchain1',
              name: 'Blockchain Technology',
              code: 'CS602',
              assignments: []
            },
            {
              id: 'iot1',
              name: 'Internet of Things',
              code: 'CS603',
              assignments: []
            },
            {
              id: 'major1',
              name: 'Major Project-1',
              code: 'CS604',
              assignments: []
            },
            {
              id: 'elective1',
              name: 'Professional Elective-1',
              code: 'CS605',
              assignments: []
            }
          ]
        },
        {
          id: 'sem8',
          number: 8,
          title: 'Semester 8',
          subjects: [
            {
              id: 'training1',
              name: 'Industry Training',
              code: 'CS701',
              assignments: []
            },
            {
              id: 'major2',
              name: 'Major Project-2',
              code: 'CS702',
              assignments: []
            },
            {
              id: 'elective2',
              name: 'Professional Elective-2',
              code: 'CS703',
              assignments: []
            },
            {
              id: 'open1',
              name: 'Open Elective',
              code: 'CS704',
              assignments: []
            },
            {
              id: 'seminar1',
              name: 'Seminar',
              code: 'CS705',
              assignments: []
            }
          ]
        }
      ]
    }
  ];

  const handleAssignmentView = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    // In a real implementation, this would open the document in a viewer
    window.open(assignment.documentUrl, '_blank');
  };

  const handleUploadAssignment = (subjectId: string) => {
    setUploadingSubject(subjectId);
    setShowUploadModal(true);
  };

  const AssignmentUploadModal: React.FC = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <h2 className="text-xl font-bold">Upload Assignment</h2>
          <p className="text-blue-100 text-sm">Add new assignment to subject</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter assignment title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Enter assignment description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Upload
            </button>
            <button 
              onClick={() => setShowUploadModal(false)}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Assignments 📝
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access assignments organized by year, semester, and subject. View documents directly in your browser.
            </p>
          </div>

          {/* Developer Status */}
          {isAuthenticated && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">Developer Mode Active ✅</h3>
              </div>
              <p className="text-green-600 text-sm">You can upload assignments to any subject</p>
            </div>
          )}

          {/* Academic Years Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {academicYears.map((year) => (
              <div
                key={year.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
              >
                {/* Year Header */}
                <div className={`bg-gradient-to-r ${year.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{year.title}</h2>
                      <p className="text-white/90">{year.description}</p>
                    </div>
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>

                {/* Semesters */}
                <div className="p-6">
                  <div className="space-y-4">
                    {year.semesters.map((semester) => (
                      <div key={semester.id} className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
                        {/* Semester Header */}
                        <button
                          onClick={() => setSelectedSemester(selectedSemester === semester.id ? null : semester.id)}
                          className="w-full p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                            <span className="font-semibold text-gray-900 dark:text-white">{semester.title}</span>
                          </div>
                          {selectedSemester === semester.id ? (
                            <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          )}
                        </button>

                        {/* Subjects (Expandable) */}
                        {selectedSemester === semester.id && (
                          <div className="p-4 bg-white dark:bg-gray-800">
                            <div className="grid grid-cols-1 gap-3">
                              {semester.subjects.map((subject) => (
                                <div
                                  key={subject.id}
                                  className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800"
                                >
                                  <button
                                    onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center">
                                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                                      <div className="text-left">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{subject.code}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{subject.name}</p>
                                        <p className="text-xs text-blue-600 dark:text-blue-400">
                                          {subject.assignments.length} assignments
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      {isAuthenticated && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleUploadAssignment(subject.id);
                                          }}
                                          className="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg transition-colors"
                                        >
                                          <Plus className="h-4 w-4" />
                                        </button>
                                      )}
                                      {selectedSubject === subject.id ? (
                                        <ChevronDown className="h-5 w-5 text-blue-600" />
                                      ) : (
                                        <ChevronRight className="h-5 w-5 text-blue-600" />
                                      )}
                                    </div>
                                  </button>

                                  {/* Assignments List */}
                                  {selectedSubject === subject.id && (
                                    <div className="mt-4 space-y-3">
                                      {subject.assignments.length > 0 ? (
                                        subject.assignments.map((assignment) => (
                                          <div
                                            key={assignment.id}
                                            className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer"
                                            onClick={() => handleAssignmentView(assignment)}
                                          >
                                            <div className="flex items-start space-x-4">
                                              {/* Assignment Preview Placeholder */}
                                              <div className="w-16 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText className="h-6 w-6 text-gray-500" />
                                              </div>
                                              
                                              {/* Assignment Details */}
                                              <div className="flex-1">
                                                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                  {assignment.title}
                                                </h5>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                                  {assignment.description}
                                                </p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                                                  <span>📅 {new Date(assignment.uploadDate).toLocaleDateString()}</span>
                                                  {assignment.fileSize && <span>📄 {assignment.fileSize}</span>}
                                                </div>
                                              </div>

                                              {/* View Button */}
                                              <button className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors">
                                                <Eye className="h-4 w-4" />
                                              </button>
                                            </div>
                                          </div>
                                        ))
                                      ) : (
                                        <div className="text-center py-8">
                                          <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                          <p className="text-gray-500 dark:text-gray-400">No assignments available</p>
                                          {isAuthenticated && (
                                            <button
                                              onClick={() => handleUploadAssignment(subject.id)}
                                              className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                                            >
                                              Upload first assignment
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Assignment Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Semesters</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">40</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Subjects</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {academicYears.reduce((total, year) => 
                    total + year.semesters.reduce((semTotal, sem) => 
                      semTotal + sem.subjects.reduce((subTotal, sub) => 
                        subTotal + sub.assignments.length, 0), 0), 0)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Available Assignments</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">1000+</h3>
                <p className="text-gray-600 dark:text-gray-300">Students Helped</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <AssignmentUploadModal />}
    </div>
  );
};

export default Assignments;