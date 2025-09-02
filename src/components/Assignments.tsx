import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FileText, Calendar, Clock, Search, Users,BookOpen, Trophy, ArrowLeft,ChevronRight,Play,Book,FlaskConical, Video,ClipboardList,GraduationCap,Eye, Filter
}
from 'lucide-react';
import { contentSubjects, contentItems, branches } from '../data/contentData';
import { ContentSubject, ContentItem } from '../types';

const Assignments: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<number | null>(null); 
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<ContentSubject | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const resetSelection = () => {
    setSelectedYear(null); 
    setSelectedSemester(null);
    setSelectedBranch(null);
    setSelectedSubject(null);
    setSelectedContentType(null);
    setSearchQuery('');
  };

const goBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
      setSelectedContentType(null);
    } else if (selectedBranch) {
      setSelectedBranch(null);
    } else if (selectedYear || selectedSemester) {
      setSelectedYear(null);
      setSelectedSemester(null);
    }
  };

  const getBreadcrumb = () => {
    const items = [];
    if (selectedYear) items.push(`Year ${selectedYear}`); 
    if (selectedSemester) items.push(`Sem ${selectedSemester}`);
    if (selectedBranch) {
      const branch = branches.find(b => b.code === selectedBranch);
      if (branch) items.push(branch.code);
    }
    if (selectedSubject) items.push(selectedSubject.name);
    return items.join(' > ');
  };

  const filteredSubjects = contentSubjects.filter(subject => {
    const yearMatch = selectedYear ? subject.year === selectedYear : true;
    const semesterMatch = selectedSemester ? subject.semester === selectedSemester : true;
    const branchMatch = selectedBranch ? subject.branch === selectedBranch : true;
    const searchMatch = searchQuery 
      ? subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return yearMatch && semesterMatch && branchMatch && searchMatch;
  });

  const filteredContent = selectedSubject ? contentItems.filter(item => {
    const subjectMatch = item.subjectId === selectedSubject.id;
    const typeMatch = selectedContentType ? item.type === selectedContentType : true;
    return subjectMatch && typeMatch;
  }) : [];

  const contentTypes = [
    { id: 'theory', name: 'Theory', icon: BookOpen, color: 'bg-blue-500' },
    { id: 'lab', name: 'Lab', icon: FlaskConical, color: 'bg-green-500' },
    { id: 'books', name: 'Books', icon: Book, color: 'bg-purple-500' },
    { id: 'videos', name: 'Videos', icon: Video, color: 'bg-red-500' },
    { id: 'assignments', name: 'Assignments', icon: ClipboardList, color: 'bg-orange-500' },
    { id: 'mtt', name: 'MTT Papers', icon: GraduationCap, color: 'bg-pink-500' }
  ];

  const getContentTypeIcon = (type: string) => {
    const contentType = contentTypes.find(ct => ct.id === type);
    return contentType ? contentType.icon : FileText;
  };

  const getContentTypeColor = (type: string) => {
    const contentType = contentTypes.find(ct => ct.id === type);
    return contentType ? contentType.color : 'bg-gray-500';
  };



  const handleContentView = (content: ContentItem) => {
  try{
      // Convert Google Drive share URL to embed URL for iframe viewing
      let embedUrl = content.viewUrl || '';
       
      if (embedUrl.includes('drive.google.com/file/d/')) {
        const FileId = embedUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
        if (FileId) {
          embedUrl = `https://drive.google.com/file/d/${FileId}/preview`;
        }
      }
      
      // Open in a new window with iframe for view-only mode
    const newWindow = window.open('', '_blank', 'width=1200,height=900,scrollbars=yes,resizable=yes');
    if (newWindow) {
      // newWindow.document.write(`
      //   <!DOCTYPE html>
      //   <html>
      //   <head>
      //     <title>${content.title} - Prep4Btech Content</title>
      //     <style>
      //       body { 
      //         margin: 0; 
      //         padding: 0; 
      //         font-family: Arial, sans-serif; 
      //         background: #1e293b;
      //         color: white;
      //       }
      //       .header { 
      //         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      //         color: white; 
      //         padding: 20px; 
      //         text-align: center; 
      //       }
      //       .content { 
      //         padding: 40px; 
      //         text-align: center; 
      //       }
      //      iframe {
      //       /* NEW: iframe fills content area */
      //       width: 100%;
      //       height: 100%;
      //       border: none;
      //     }
      //       .icon {
      //         font-size: 48px;
      //         margin-bottom: 20px;
      //       }
      //     </style>
      //   </head>
      //   <body>
      //     <div class="header">
      //       <h1>${content.title}</h1>
      //       <p>${content.description}</p>
      //       <p><strong>Type:</strong> ${content.type.toUpperCase()} | <strong>Subject:</strong> ${selectedSubject?.name}</p>
      //       </div>
      //   <div class="content">
      //         <iframe src="${embedUrl}" allowfullscreen></iframe>
      //       </div>
      //   </body>
      //   </html>
      // `);  
     newWindow.document.write(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>${content.title} - Prep4Btech Content</title>
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #1e293b;
        color: white;
        font-family: Arial, sans-serif;
      }
      .header { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        color: white; 
        padding: 20px; 
        text-align: center; 
        flex-shrink: 0;
      }
      .content { 
        flex: 1 1 0%;
        min-height: 0;
        padding: 0;            /* Remove padding */
        margin: 0;
        display: flex;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
        background: white;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>${content.title}</h1>
      <p>${content.description}</p>
      <p><strong>Type:</strong> ${content.type.toUpperCase()} | <strong>Subject:</strong> ${selectedSubject?.name}</p>
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
      alert(`Error viewing ${content.title}. Please try again later.`);
    }
  };
  
  
     
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold">Content 📚</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access content organized by year, semester, and subject. View documents directly in your browser.
            </p>
          </div>

          {/* Breadcrumb Navigation */}
          {(selectedYear || selectedSemester || selectedBranch || selectedSubject) && (
            <div className="bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-slate-200 dark:border-slate-700">
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
                  onClick={resetSelection}
                  className="bg-red-600/20 hover:bg-red-600/30 text-red-400 py-2 px-4 rounded-lg transition-colors text-sm border border-red-600/30"
                >
                  Reset All
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Year & Semester Selection */}
          {!selectedYear && (
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-slate-700">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Filter className="h-6 w-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold"> Content</h2>
                </div>
                <div className="text-sm text-gray-400">Select by Year</div>
              </div>

              {/* Search Subject */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <input
                    type="text"
                    placeholder="Search by subject name or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Year Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Year */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">First Year</h3>
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <p className="text-blue-100 mb-6">Foundation courses and basic engineering concepts</p>
               
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setSelectedYear(1); setSelectedSemester(1); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 1</div>
                      <div className="text-sm text-blue-200">5 Subjects</div>
                    </button>
                    <button
                      onClick={() => { setSelectedYear(1); setSelectedSemester(2); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 2</div>
                      <div className="text-sm text-blue-200">5 Subjects</div>
                    </button>
                  </div>
                </div>

                {/* Second Year */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Second Year</h3>
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <p className="text-green-100 mb-6">Core computer science subjects and data structures</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setSelectedYear(2); setSelectedSemester(3); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 3</div>
                      <div className="text-sm text-green-200">6 Subjects</div>
                    </button>
                    <button
                      onClick={() => { setSelectedYear(2); setSelectedSemester(4); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 4</div>
                      <div className="text-sm text-green-200">6 Subjects</div>
                    </button>
                  </div>
                </div>

                {/* Third Year */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Third Year</h3>
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <p className="text-purple-100 mb-6">Advanced topics and specialization subjects</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setSelectedYear(3); setSelectedSemester(5); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 5</div>
                      <div className="text-sm text-purple-200">8 Subjects</div>
                    </button>
                    <button
                      onClick={() => { setSelectedYear(3); setSelectedSemester(6); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 6</div>
                      <div className="text-sm text-purple-200">9 Subjects</div>
                    </button>
                  </div>
                </div>

                {/* Fourth Year */}
                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Fourth Year</h3>
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <p className="text-orange-100 mb-6">Capstone projects and industry-oriented subjects</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setSelectedYear(4); setSelectedSemester(7); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibold">Semester 7</div>
                      <div className="text-sm text-orange-200">2 Subjects</div>
                    </button>
                    <button
                      onClick={() => { setSelectedYear(4); setSelectedSemester(8); }}
                      className="bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-semibester">Semester 8</div>
                      <div className="text-sm text-orange-200">2 Subjects</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Statistics */}
              <div className="mt-12 bg-slate-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-center mb-8">Content Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-gray-400 text-sm">Total Semesters</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">40</div>
                    <div className="text-gray-400 text-sm">Available Subjects</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">19</div>
                    <div className="text-gray-400 text-sm">Available Content</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-gray-400 text-sm">Content Viewed</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Branch Selection */}
          {selectedYear && selectedSemester && !selectedBranch && (
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-slate-700">
              <div className="flex items-center justify-center mb-8">
                <Users className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold">Select Your Branch</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch.code)}
                    className="bg-slate-700/50 hover:bg-slate-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-slate-500 group"
                  >
                    <div className="text-center">
                      <div className={`bg-gradient-to-r ${branch.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <span className="text-2xl">{branch.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{branch.code}</h3>
                      <p className="text-sm text-gray-400 mb-4">{branch.name}</p>
                      <p className="text-xs text-gray-500">{branch.description}</p>
                      <ChevronRight className="h-5 w-5 text-gray-400 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Subject Selection */}
          {selectedBranch && !selectedSubject && (
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-slate-700">
              <div className="flex items-center justify-center mb-8">
                <BookOpen className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold">Select Subject</h2>
              </div>
              <div className="text-center mb-6">
                <p className="text-gray-400">
                  Semester {selectedSemester} • Choose a subject to view content
                </p>
              </div>
              
              {filteredSubjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSubjects.map((subject) => (
                    <div
                      key={subject.id}
                      onClick={() => setSelectedSubject(subject)}
                      className="bg-slate-700/50 hover:bg-slate-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-blue-500 group"
                    >
                      <div className="text-center">
                        <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{subject.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{subject.code}</h3>
                        <p className="text-sm text-gray-300 mb-2">{subject.name}</p>
                        <p className="text-xs text-gray-500">{subject.description}</p>
                        <ChevronRight className="h-5 w-5 text-blue-400 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Subjects Found</h3>
                  <p className="text-gray-400">
                    No subjects available for {selectedBranch} - Year {selectedYear}, Semester {selectedSemester}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Content Display */}
          {selectedSubject && (
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedSubject.name}</h2>
                  <p className="text-gray-400">
                    Subject Code: {selectedSubject.code} ({selectedSubject.code})
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    Semester {selectedSubject.semester} • {selectedSubject.description}
                  </p>
                </div>
              </div>

              {/* Content Type Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedContentType(null)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      selectedContentType === null
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    All Content
                  </button>
                  {contentTypes.map((type) => {
                    const Icon = type.icon;
                    const count = contentItems.filter(item => 
                      item.subjectId === selectedSubject.id && item.type === type.id
                    ).length;
                    
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedContentType(type.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                          selectedContentType === type.id
                            ? `${type.color} text-white shadow-lg`
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {type.name}
                        {count > 0 && (
                          <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content List */}
              {filteredContent.length > 0 ? (
                <div className="space-y-4">
                  {filteredContent.map((content) => {
                    const Icon = getContentTypeIcon(content.type);
                    const colorClass = getContentTypeColor(content.type);
                    
                    return (
                      <div
                        key={content.id}
                        className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-600 hover:border-slate-500"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                            <div className={`${colorClass} p-3 rounded-xl`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">{content.title}</h3>
                              <p className="text-gray-400 text-sm mb-2">{content.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {new Date(content.uploadDate).toLocaleDateString()}
                                </span>
                                {content.fileSize && (
                                  <span>{content.fileSize}</span>
                                )}
                                {content.duration && (
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {content.duration}
                                  </span>
                                )}
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  content.type === 'theory' ? 'bg-blue-600/20 text-blue-400' :
                                  content.type === 'lab' ? 'bg-green-600/20 text-green-400' :
                                  content.type === 'books' ? 'bg-purple-600/20 text-purple-400' :
                                  content.type === 'videos' ? 'bg-red-600/20 text-red-400' :
                                  content.type === 'assignments' ? 'bg-orange-600/20 text-orange-400' :
                                  'bg-pink-600/20 text-pink-400'
                                }`}>
                                  {content.type.toUpperCase()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
  onClick={() => handleContentView(content)}
  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg flex-shrink-0"
>
                            <Eye className="h-4 w-4" />
                            <span>View</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Content Available</h3>
                  <p className="text-gray-400">
                    {selectedContentType 
                      ? `No ${selectedContentType} content available for ${selectedSubject.name}`
                      : `No content available for ${selectedSubject.name} yet. Check back later!`
                    }
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignments;