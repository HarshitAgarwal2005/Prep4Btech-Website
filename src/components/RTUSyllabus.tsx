import React, { useState } from 'react';
import { Calendar, BookOpen, Users, Trophy, FileText, Download, Upload, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useDeveloperAuth } from './Contact';

const RTUSyllabus: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [uploadingSemester, setUploadingSemester] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { isAuthenticated } = useDeveloperAuth();

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
          ],
          syllabusUrl: 'https://drive.google.com/file/d/1TL74osVbY5EgND-wbG9u5jqZ0fQgQZ4h/view?usp=drive_link'
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
          ],
          syllabusUrl: 'https://drive.google.com/file/d/11QFKehks83wYocR3xZQCaiVTrGvLzZCQ/view?usp=sharing'
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
            'Advance Engineering Mathematics',
            'Data Structure And Algorithm',
            'Software Engineering',
            'Object Oriented Programming',
            'Digital Electronics',
            'Managerial Economics And Financial Accounting'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/11h4ITOg-7DvIJm1XERbxw_rQjFhPn2qd/view?usp=sharing'
        },
        { 
          sem: 4, 
          title: 'Semester 4', 
          description: 'Database systems and computer networks',
          subjects: [
            'Discete Mathematics Structure',
            'Database Management Systems',
            'Data Communication And Computer Networks',
            'Tecnical Communication',
            'Microprocessor And Interface',
            'Theory Of Computation'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/11czaYIx5BHJlj65SgiRtbh8cq6VURhWC/view?usp=sharing'
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
            'Information Theory and Coding',
            'Complier Design',
            'Operating System',
            'Computer Graphics And Multimedia',
            'Analysis of Algorithms',
            'Wireless Communication',
            'Human Computer Interaction',
            'Bioinformatics'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/11nxIts47YcupIjYxGO4ytf0sueAncOxg/view?usp=sharing'
        },
        { 
          sem: 6, 
          title: 'Semester 6', 
          description: 'Machine learning and advanced computing',
          subjects: [
            'Digital Image Processing',
            'Machine Learning',
            'Information Security System',
            'Computer Architecture and Organization',
            'Artificial Intelligence',
            'Cloud Computing',
            'Distributed System',
            'Software Defined Network',
            'Ecommerce & ERP'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/11Q1zuW1O_kXs7ERINcRiFS7x0znCHE2M/view?usp=sharing'
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
            'Internet of Things',
            'Open Elective-1'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/1CGiSoPvOL7iMow-cVcijalqhBqksbLvi/view?usp=sharing'
        },
        { 
          sem: 8, 
          title: 'Semester 8', 
          description: 'Industry training and project completion',
          subjects: [
            'Big Data Analytics',
            'Open Elective-2'
          ],
          syllabusUrl: 'https://drive.google.com/file/d/1FTrE9nQ0GDHkp7t1u0feZAFujmpDkLFr/view?usp=sharing'
        }
      ],
      color: 'from-orange-500 to-red-500',
      icon: Calendar
    }
  ];

  const filteredYears = selectedYear ? years.filter(y => y.year === selectedYear) : years;

  const handleSyllabusDownload = async (syllabusUrl: string, semesterTitle: string) => {
    try {
      // Check if file exists
      const response = await fetch(syllabusUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, trigger download
        const link = document.createElement('a');
        link.href = syllabusUrl;
        link.download = `RTU-${semesterTitle.replace(' ', '-')}-Syllabus.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // File doesn't exist
        alert(`Syllabus for ${semesterTitle} is not available yet. Please check back later or contact the administrator.`);
      }
    } catch (error) {
      alert(`Error downloading syllabus for ${semesterTitle}. Please try again later.`);
    }
  };

  const handleSyllabusUpload = async (file: File, year: number, semester: number) => {
    const semesterKey = `year${year}-sem${semester}`;
    setUploadingSemester(semesterKey);
    setUploadError(null);
    setUploadSuccess(null);
    setUploadProgress(0);

    try {
      // Validate file type
      if (file.type !== 'application/pdf') {
        throw new Error('Only PDF files are allowed');
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size should be less than 10MB');
      }

      // Create FormData for file upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('year', year.toString());
      formData.append('semester', semester.toString());

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Complete upload
      setUploadProgress(100);
      setUploadSuccess(`Syllabus for Year ${year} Semester ${semester} uploaded successfully!`);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUploadSuccess(null);
        setUploadProgress(0);
      }, 3000);

    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Failed to upload syllabus. Please try again.');
    } finally {
      setUploadingSemester(null);
    }
  };

  const SyllabusUploadButton: React.FC<{ year: number; semester: number; color: string }> = ({ year, semester, color }) => {
    const semesterKey = `year${year}-sem${semester}`;
    const isUploading = uploadingSemester === semesterKey;

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleSyllabusUpload(file, year, semester);
      }
      // Reset input value to allow re-uploading the same file
      e.target.value = '';
    };

    return (
      <div className="relative">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
          id={`upload-${semesterKey}`}
          disabled={isUploading}
        />
        <label
          htmlFor={`upload-${semesterKey}`}
          className={`cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r ${color} rounded-lg hover:shadow-lg transition-all duration-300 ${
            isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Uploading...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </>
          )}
        </label>
        
        {/* Progress bar for this specific upload */}
        {isUploading && uploadingSemester === semesterKey && (
          <div className="absolute top-full left-0 right-0 mt-2">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 mt-1">{uploadProgress}%</div>
          </div>
        )}
      </div>
    );
  };

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
              RTU Syllabus 📚
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete RTU (Rajasthan Technical University) syllabus for Computer Science Engineering organized by year and semester.
            </p>
          </div>

          {/* Developer Status Indicator */}
          {isAuthenticated && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Upload Mode Active ✅</h3>
                  <p className="text-green-600 text-sm">You can now upload syllabus files for each semester</p>
                </div>
              </div>
              
              {/* Upload Status Messages */}
              {uploadSuccess && (
                <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 text-sm">{uploadSuccess}</span>
                </div>
              )}

              {uploadError && (
                <div className="mt-4 bg-red-100 border border-red-300 rounded-lg p-4 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-red-800 text-sm">{uploadError}</span>
                </div>
              )}
            </div>
          )}

          {/* Year Filter */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Filter by Year</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedYear === null
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                All Years
              </button>
              {[1, 2, 3, 4].map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Year {year}
                </button>
              ))}
            </div>
          </div>

          {/* Content Layout - Centered */}
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-6xl">
              <div className={`${selectedYear ? 'grid grid-cols-1 gap-8' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}`}>
                {filteredYears.map((yearData) => (
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
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${yearData.color} mr-3`}></div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{semester.title}</h4>
                              </div>
                              <div className="flex items-center space-x-2">
                                {/* Syllabus Button */}
                                <button
                                  onClick={() => handleSyllabusDownload(semester.syllabusUrl, semester.title)}
                                  className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${yearData.color} rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Syllabus
                                </button>
                                
                                {/* Upload Button (Developer Mode) */}
                                {isAuthenticated && (
                                  <SyllabusUploadButton 
                                    year={yearData.year} 
                                    semester={semester.sem} 
                                    color={yearData.color}
                                  />
                                )}
                              </div>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">RTU CSE Overview</h2>
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
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">40+</h3>
                <p className="text-gray-600 dark:text-gray-300">Core Subjects</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">18</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Credits</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8</h3>
                <p className="text-gray-600 dark:text-gray-300">Syllabi Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTUSyllabus;