import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileText, Download, Calendar, User, Filter, Search, BookOpen, Clock, Award } from 'lucide-react';
import { assignments } from '../data/mockData';

const Assignments: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const year = searchParams.get('year');
    const semester = searchParams.get('semester');
    const search = searchParams.get('search');
    
    if (year) {
      setSelectedYear(parseInt(year));
    }
    if (semester) {
      setSelectedSemester(parseInt(semester));
    }
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const filteredAssignments = assignments.filter(assignment => {
    const yearMatch = selectedYear ? assignment.year === selectedYear : true;
    const typeMatch = selectedType ? assignment.type === selectedType : true;
    const searchMatch = searchQuery 
      ? assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return yearMatch && typeMatch && searchMatch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Sample content data for different semesters
  const semesterContent = {
    1: {
      subjects: [
        {
          name: 'Engineering Mathematics-1',
          code: 'MATH101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15cdwtAOou8IXRvcwOiwIEkdZgSHJ-Xx4/view?usp=sharing', type: 'notes' },
            { title: 'Additional Resources', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'resources' }
          ]
        },
        {
          name: 'Engineering Chemistry',
          code: 'CHEM101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15yxzmBCTso2s9enawz7KNSdj-5EakqUf/view?usp=sharing', type: 'notes' },
            { title: 'Additional Resources', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'resources' }
          ]
        },
        {
          name: 'Communication Skills',
          code: 'ENG101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15d7p-NnMmZY8ukpH-xq2kxzI8HcEytqO/view?usp=sharing', type: 'notes' },
            { title: 'Additional Resources', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'resources' }
          ]
        },
        {
          name: 'Basic Mechanical Engineering',
          code: 'MECH101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15dSFR2RZwxbUteFkcDwlrgi9nQqMX1EO/view?usp=drive_link', type: 'notes' },
            { title: 'Additional Resources', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'resources' }
          ]
        },
        {
          name: 'Basic Civil Engineering',
          code: 'CIVIL101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' },
            { title: 'Lab Manual 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'lab' }
          ]
        }
      ]
    },
    2: {
      subjects: [
        {
          name: 'Engineering Mathematics-2',
          code: 'MATH102',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        },
        {
          name: 'Programming for Problem Solving',
          code: 'CS101',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        }
      ]
    },
    3: {
      subjects: [
        {
          name: 'Data Structure And Algorithm',
          code: 'CS201',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        },
        {
          name: 'Object Oriented Programming',
          code: 'CS202',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        }
      ]
    },
    4: {
      subjects: [
        {
          name: 'Database Management Systems',
          code: 'CS301',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        },
        {
          name: 'Computer Networks',
          code: 'CS302',
          materials: [
            { title: 'Complete Notes 2025', url: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing', type: 'notes' }
          ]
        }
      ]
    }
  };

  const handleMaterialView = (url: string, title: string) => {
    try {
      let embedUrl = url;
      
      if (url.includes('drive.google.com/file/d/')) {
        const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
        if (fileId) {
          embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        }
      }
      
      const isMobile = window.innerWidth <= 768;
      const windowFeatures = isMobile 
        ? 'width=' + window.screen.width + ',height=' + window.screen.height + ',scrollbars=yes,resizable=yes'
        : 'width=1200,height=800,scrollbars=yes,resizable=yes';
      
      const newWindow = window.open('', '_blank', windowFeatures);
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${title} - Prep4Btech</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              .header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                color: white; 
                padding: ${isMobile ? '10px' : '15px'}; 
                text-align: center; 
                font-size: ${isMobile ? '14px' : '16px'};
              }
              .content { height: calc(100vh - ${isMobile ? '60px' : '80px'}); }
              iframe { width: 100%; height: 100%; border: none; }
              @media (max-width: 768px) {
                .header h2 { font-size: 16px; margin: 5px 0; }
                .header p { font-size: 12px; margin: 2px 0; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>${title}</h2>
              <p>Prep4Btech - Academic Resources</p>
            </div>
            <div class="content">
              <iframe src="${embedUrl}" allowfullscreen></iframe>
            </div>
          </body>
          </html>
        `);
        newWindow.document.close();
      }
    } catch (error) {
      alert(`Error viewing ${title}. Please try again later.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Content 📚
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access comprehensive study materials, assignments, and resources organized by semester and subject
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Content</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search materials..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Year</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedYear === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                {[1, 2, 3, 4].map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      selectedYear === year
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Y{year}
                  </button>
                ))}
              </div>
            </div>

            {/* Semester Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Semester</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSemester(null)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedSemester === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <button
                    key={sem}
                    onClick={() => setSelectedSemester(sem)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      selectedSemester === sem
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    S{sem}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content Type</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedType === null
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                {['lab', 'theory', 'project'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm capitalize ${
                      selectedType === type
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content by Semester */}
        <div className="space-y-8">
          {Object.entries(semesterContent).map(([semester, data]) => {
            const semesterNum = parseInt(semester);
            const shouldShow = !selectedSemester || selectedSemester === semesterNum;
            
            if (!shouldShow) return null;

            return (
              <div key={semester} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">{semester}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Semester {semester}</h2>
                    <p className="text-gray-600 dark:text-gray-300">Year {Math.ceil(semesterNum / 2)} Content</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.subjects.map((subject, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-3">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{subject.code}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {subject.materials.map((material, materialIndex) => (
                          <div key={materialIndex} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-600/50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-blue-600 mr-2" />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{material.title}</span>
                            </div>
                            <button
                              onClick={() => handleMaterialView(material.url, `${subject.name} - ${material.title}`)}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-1 px-3 rounded-lg transition-all duration-300 text-sm flex items-center pdf-button"
                            >
                              <Download className="h-3 w-3 mr-1" />
                              View
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional Assignments Section */}
        {filteredAssignments.length > 0 && (
          <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Traditional Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssignments.map(assignment => (
                <div key={assignment.id} className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-3">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          assignment.type === 'lab' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          assignment.type === 'theory' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {assignment.type.charAt(0).toUpperCase() + assignment.type.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Year {assignment.year}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{assignment.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{assignment.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {assignment.subject}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(assignment.dueDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    {assignment.downloadUrl && (
                      <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center text-sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    )}
                    {assignment.solutionUrl && (
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Solution
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Content Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8</h3>
              <p className="text-gray-600 dark:text-gray-300">Total Semesters</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Study Materials</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">25+</h3>
              <p className="text-gray-600 dark:text-gray-300">Assignments</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">100+</h3>
              <p className="text-gray-600 dark:text-gray-300">Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;