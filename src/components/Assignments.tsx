import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  BookOpen, 
  Eye, 
  Upload, 
  Plus,
  CheckCircle,
  Users,
  GraduationCap,
  ArrowLeft,
  Search,
  Filter,
  Video,
  FlaskConical,
  X,
  AlertCircle
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
  type: 'theory' | 'lab' | 'video';
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
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadingSubject, setUploadingSubject] = useState<string | null>(null);
  const [uploadingContentType, setUploadingContentType] = useState<string | null>(null);

  // Upload form states
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    contentType: 'theory' as 'theory' | 'lab' | 'video',
    file: null as File | null
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

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
              code: 'MATH (1FY2-01)',
              assignments: [
                {
                  id: 'math1-a1',
                  title: 'Differential Equations Tutorial',
                  description: 'Practice problems on differential equations',
                  documentUrl: '/assignments/math1-tutorial1.pdf',
                  uploadDate: '2024-01-15',
                  fileSize: '2.3 MB',
                  type: 'theory'
                },
                {
                  id: 'math1-a2',
                  title: 'Linear Algebra Lab',
                  description: 'Matrix operations and vector spaces',
                  documentUrl: '/assignments/math1-lab1.pdf',
                  uploadDate: '2024-01-20',
                  fileSize: '1.8 MB',
                  type: 'lab'
                },
                {
                  id: 'math1-a3',
                  title: 'Calculus Video Lecture',
                  description: 'Introduction to calculus concepts',
                  documentUrl: '/assignments/math1-video1.mp4',
                  uploadDate: '2024-01-25',
                  fileSize: '45.2 MB',
                  type: 'video'
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
                  fileSize: '3.1 MB',
                  type: 'lab'
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
                  fileSize: '1.5 MB',
                  type: 'theory'
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

  const filteredYears = selectedYear ? academicYears.filter(y => y.year === selectedYear) : academicYears;

  const handleAssignmentView = (assignment: Assignment) => {
    // In a real implementation, this would open the document in a viewer
    window.open(assignment.documentUrl, '_blank');
  };

  const handleUploadAssignment = (subjectId: string, contentType: string) => {
    setUploadingSubject(subjectId);
    setUploadingContentType(contentType);
    setUploadForm({
      title: '',
      description: '',
      contentType: contentType as 'theory' | 'lab' | 'video',
      file: null
    });
    setShowUploadModal(true);
  };

  const handleSemesterClick = (semester: Semester) => {
    setSelectedSemester(semester);
  };

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const goBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    }
  };

  const handleGlobalSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to subjects page with search query
      window.location.href = `/subjects?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'theory':
        return FileText;
      case 'lab':
        return FlaskConical;
      case 'video':
        return Video;
      default:
        return FileText;
    }
  };

  const getContentTypeColor = (type: string) => {
    switch (type) {
      case 'theory':
        return 'from-blue-500 to-blue-600';
      case 'lab':
        return 'from-green-500 to-green-600';
      case 'video':
        return 'from-red-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const filteredAssignments = selectedSubject?.assignments.filter(assignment => {
    const typeMatch = selectedContentType ? assignment.type === selectedContentType : true;
    const searchMatch = searchQuery 
      ? assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return typeMatch && searchMatch;
  }) || [];

  // File upload handlers
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        setUploadError('File size should be less than 50MB');
        return;
      }

      // Validate file type based on content type
      const allowedTypes = {
        theory: ['.pdf', '.doc', '.docx', '.txt'],
        lab: ['.pdf', '.doc', '.docx', '.txt', '.zip', '.rar'],
        video: ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm']
      };

      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const allowedExtensions = allowedTypes[uploadForm.contentType];

      if (!allowedExtensions.includes(fileExtension)) {
        setUploadError(`Invalid file type. Allowed types for ${uploadForm.contentType}: ${allowedExtensions.join(', ')}`);
        return;
      }

      setUploadForm(prev => ({ ...prev, file }));
      setUploadError(null);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uploadForm.file || !uploadForm.title.trim()) {
      setUploadError('Please provide a title and select a file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    try {
      // Simulate file upload with progress
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('title', uploadForm.title);
      formData.append('description', uploadForm.description);
      formData.append('contentType', uploadForm.contentType);
      formData.append('subjectId', uploadingSubject || '');

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
      setUploadSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setShowUploadModal(false);
        setUploadSuccess(false);
        setUploadForm({
          title: '',
          description: '',
          contentType: 'theory',
          file: null
        });
        setUploadProgress(0);
        setUploadingSubject(null);
        setUploadingContentType(null);
      }, 2000);

    } catch (error) {
      setUploadError('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const closeUploadModal = () => {
    setShowUploadModal(false);
    setUploadForm({
      title: '',
      description: '',
      contentType: 'theory',
      file: null
    });
    setUploadProgress(0);
    setUploadSuccess(false);
    setUploadError(null);
    setUploadingSubject(null);
    setUploadingContentType(null);
  };

  // Upload Modal Component
  const AssignmentUploadModal: React.FC = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Upload Content</h2>
              <p className="text-blue-100 text-sm">
                Add new {uploadingContentType} content to {selectedSubject?.name}
              </p>
            </div>
            <button
              onClick={closeUploadModal}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto">
          {uploadSuccess ? (
            <div className="text-center py-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Successful! ✅</h3>
              <p className="text-gray-600">
                Your content has been uploaded successfully and is now available to students.
              </p>
            </div>
          ) : (
            <form onSubmit={handleUploadSubmit} className="space-y-6">
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700 text-sm">{uploadError}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Title *
                </label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter content title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Enter content description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Type
                </label>
                <select 
                  value={uploadForm.contentType}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, contentType: e.target.value as 'theory' | 'lab' | 'video' }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="theory">Theory</option>
                  <option value="lab">Lab</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload File *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                    accept={
                      uploadForm.contentType === 'theory' ? '.pdf,.doc,.docx,.txt' :
                      uploadForm.contentType === 'lab' ? '.pdf,.doc,.docx,.txt,.zip,.rar' :
                      '.mp4,.avi,.mov,.wmv,.flv,.webm'
                    }
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Upload className="h-12 w-12 mb-4" />
                    {uploadForm.file ? (
                      <div className="text-center">
                        <span className="text-green-600 font-medium">✓ {uploadForm.file.name}</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Size: {(uploadForm.file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-lg font-medium">Click to select file</span>
                        <p className="text-sm text-gray-500 mt-1">
                          {uploadForm.contentType === 'theory' && 'PDF, DOC, DOCX, TXT (Max 50MB)'}
                          {uploadForm.contentType === 'lab' && 'PDF, DOC, DOCX, TXT, ZIP, RAR (Max 50MB)'}
                          {uploadForm.contentType === 'video' && 'MP4, AVI, MOV, WMV, FLV, WEBM (Max 50MB)'}
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {isUploading && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Upload Progress</span>
                    <span className="text-sm text-gray-500">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isUploading || !uploadForm.file || !uploadForm.title.trim()}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Content
                    </>
                  )}
                </button>
                <button 
                  type="button"
                  onClick={closeUploadModal}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Content 📝
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access content organized by year, semester, and subject. View documents directly in your browser.
            </p>
          </div>

          {/* Developer Status */}
          {isAuthenticated && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">Developer Mode Active ✅</h3>
              </div>
              <p className="text-green-600 text-sm">You can upload content to any subject</p>
            </div>
          )}

          {/* Back Navigation */}
          {(selectedSemester || selectedSubject) && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center justify-between">
                <button
                  onClick={goBack}
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedSubject ? `${selectedSemester?.title} > ${selectedSubject.name}` : selectedSemester?.title}
                </div>
              </div>
            </div>
          )}

          {/* Filter Section */}
          {!selectedSemester && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center mb-4">
                <Filter className="h-6 w-6 text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Content</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Year</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedYear(null)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedYear === null
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      All Years
                    </button>
                    {[1, 2, 3, 4].map(year => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          selectedYear === year
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        Year {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Subjects</label>
                  <div className="relative flex">
                    <input
                      type="text"
                      placeholder="Search by subject name or code..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <button
                      onClick={handleGlobalSearch}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          {!selectedSemester ? (
            /* Year and Semester Selection - Centered Layout */
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                {filteredYears.map((year) => (
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
                      <div className="grid grid-cols-1 gap-4">
                        {year.semesters.map((semester) => (
                          <button
                            key={semester.id}
                            onClick={() => handleSemesterClick(semester)}
                            className="p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl transition-colors text-left"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                                <div>
                                  <h3 className="font-semibold text-gray-900 dark:text-white">{semester.title}</h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {semester.subjects.length} subjects
                                  </p>
                                </div>
                              </div>
                              <div className="text-blue-600">→</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : !selectedSubject ? (
            /* Subject Selection - Centered Layout */
            <div className="flex justify-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20 max-w-6xl w-full">
                <div className="text-center mb-8">
                  <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Select Subject</h2>
                  <p className="text-gray-600 dark:text-gray-300">{selectedSemester.title} - Choose a subject to view content</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedSemester.subjects.map((subject) => (
                    <button
                      key={subject.id}
                      onClick={() => handleSubjectClick(subject)}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-center border border-blue-100 dark:border-blue-800 group"
                    >
                      <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{subject.code}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{subject.name}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{subject.assignments.length} content items</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Assignment List - Centered Layout */
            <div className="flex justify-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20 max-w-6xl w-full">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedSubject.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">Subject Code: {selectedSubject.code}</p>
                  </div>
                  {isAuthenticated && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUploadAssignment(selectedSubject.id, 'theory')}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center text-sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Theory
                      </button>
                      <button
                        onClick={() => handleUploadAssignment(selectedSubject.id, 'lab')}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center text-sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Lab
                      </button>
                      <button
                        onClick={() => handleUploadAssignment(selectedSubject.id, 'video')}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center text-sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Video
                      </button>
                    </div>
                  )}
                </div>

                {/* Content Type Filter for Subject View */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedContentType(null)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedContentType === null
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      All Content
                    </button>
                    <button
                      onClick={() => setSelectedContentType('theory')}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                        selectedContentType === 'theory'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Theory
                    </button>
                    <button
                      onClick={() => setSelectedContentType('lab')}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                        selectedContentType === 'lab'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <FlaskConical className="h-4 w-4 mr-2" />
                      Lab
                    </button>
                    <button
                      onClick={() => setSelectedContentType('video')}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                        selectedContentType === 'video'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Videos
                    </button>
                  </div>
                </div>

                {filteredAssignments.length > 0 ? (
                  <div className="space-y-6">
                    {filteredAssignments.map((assignment) => {
                      const ContentIcon = getContentTypeIcon(assignment.type);
                      return (
                        <div
                          key={assignment.id}
                          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleAssignmentView(assignment)}
                        >
                          <div className="flex items-start space-x-6">
                            {/* Assignment Preview */}
                            <div className={`w-24 h-32 bg-gradient-to-br ${getContentTypeColor(assignment.type)} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <ContentIcon className="h-8 w-8 text-white" />
                            </div>
                            
                            {/* Assignment Details */}
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-3">
                                  {assignment.title}
                                </h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  assignment.type === 'theory' ? 'bg-blue-100 text-blue-800' :
                                  assignment.type === 'lab' ? 'bg-green-100 text-green-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {assignment.type.charAt(0).toUpperCase() + assignment.type.slice(1)}
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {assignment.description}
                              </p>
                              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {new Date(assignment.uploadDate).toLocaleDateString()}
                                </span>
                                {assignment.fileSize && (
                                  <span className="flex items-center">
                                    <FileText className="h-4 w-4 mr-1" />
                                    {assignment.fileSize}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* View Button */}
                            <button className="p-3 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors">
                              <Eye className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Content Available</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      No content has been uploaded for this subject yet.
                    </p>
                    {isAuthenticated && (
                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={() => handleUploadAssignment(selectedSubject.id, 'theory')}
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                          Upload Theory
                        </button>
                        <button
                          onClick={() => handleUploadAssignment(selectedSubject.id, 'lab')}
                          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                          Upload Lab
                        </button>
                        <button
                          onClick={() => handleUploadAssignment(selectedSubject.id, 'video')}
                          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                          Upload Video
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Statistics */}
          {!selectedSemester && (
            <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Content Statistics</h2>
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
                  <p className="text-gray-600 dark:text-gray-300">Available Content</p>
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
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <AssignmentUploadModal />}
    </div>
  );
};

export default Assignments;