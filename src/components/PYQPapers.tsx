import React, { useState } from 'react';
import {FileText,Download,Eye,Calendar,BookOpen,GraduationCap,Users,ChevronRight,ArrowLeft,Upload, Plus,Trash2,Edit,CheckCircle,AlertCircle,MessageSquare,Send,Bot,X
} 
from 'lucide-react';
import { courses, branches, pyqSubjects, pyqPapers } from '../data/pyqData';
import { Course, Branch, PYQSubject, PYQPaper } from '../types';
import { useDeveloperAuth } from './Contact';

const PYQPapers: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<PYQSubject | null>(null);
  const [showDeveloperPanel, setShowDeveloperPanel] = useState(false);
  
  // AI Management States
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [managementMode, setManagementMode] = useState<'course' | 'branch' | 'subject' | 'paper' | null>(null);

  // File upload states
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    year: new Date().getFullYear(),
    file: null as File | null
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const { isAuthenticated } = useDeveloperAuth();

  const resetSelection = () => {
    setSelectedCourse(null);
    setSelectedBranch(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
  };

  const goBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    } else if (selectedBranch) {
      setSelectedBranch(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  const getBreadcrumb = () => {
    const items = [];
    if (selectedCourse) items.push(selectedCourse.code);
    if (selectedBranch) items.push(selectedBranch.code);
    if (selectedSemester) items.push(`Sem ${selectedSemester}`);
    if (selectedSubject) items.push(selectedSubject.name);
    return items.join(' > ');
  };

  const filteredBranches = selectedCourse 
    ? branches.filter(branch => branch.courseId === selectedCourse.id)
    : [];

  const filteredSubjects = selectedBranch && selectedSemester
    ? pyqSubjects.filter(subject => 
        subject.branchId === selectedBranch.id && subject.semester === selectedSemester
      )
    : [];

  const filteredPapers = selectedSubject
    ? pyqPapers.filter(paper => paper.subjectId === selectedSubject.id)
        .sort((a, b) => b.year - a.year) // Latest to oldest
    : [];

  const handlePaperDownload = async (paper: PYQPaper) => {
    try {
      // Convert Google Drive share URL to embed URL for iframe viewing
      let embedUrl = paper.downloadUrl || '';
      
      if (embedUrl.includes('drive.google.com/file/d/')) {
        const fileId = embedUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
        if (fileId) {
          embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        }
      } 
      
      // Open in a new window with iframe for view-only mode
      const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${paper.title} - Prep4Btech PYQ</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; text-align: center; }
              .content { height: calc(100vh - 80px); }
              iframe { width: 100%; height: 100%; border: none; }
              .loading { display: flex; justify-content: center; align-items: center; height: 100%; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>${paper.title}</h2>
              <p>Year: ${paper.year} | Subject: ${selectedSubject?.name}</p>
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
      alert(`Error viewing ${paper.title}. Please try again later.`);
    }
  };

  // File upload handlers
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setUploadError('Only PDF files are allowed');
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size should be less than 10MB');
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
      formData.append('year', uploadForm.year.toString());
      formData.append('subjectId', selectedSubject?.id || '');

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
          year: new Date().getFullYear(),
          file: null
        });
        setUploadProgress(0);
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
      year: new Date().getFullYear(),
      file: null
    });
    setUploadProgress(0);
    setUploadSuccess(false);
    setUploadError(null);
  };

  // AI Management Functions
  const handleAIManagement = (mode: 'course' | 'branch' | 'subject' | 'paper') => {
    setManagementMode(mode);
    setShowAIPanel(true);
    setAiInput('');
    setAiResponse('');
    
    const prompts = {
      course: "Please enter the name of the course you want to add (e.g., 'Bachelor of Technology', 'Master of Science'):",
      branch: "Please enter the name of the branch you want to add (e.g., 'Computer Science Engineering', 'Artificial Intelligence'):",
      subject: "Please enter the name of the subject you want to add (e.g., 'Machine Learning', 'Data Structures'):",
      paper: "Please enter the name of the paper you want to add (e.g., '2023 Midterm', '2024 Final Exam'):"
    };
    
    setAiResponse(prompts[mode]);
  };

  const processAIInput = async () => {
    if (!aiInput.trim() || !managementMode) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const inputValue = aiInput.trim();
      
      switch (managementMode) {
        case 'course':
          // Generate course code from name
          const courseCode = inputValue.split(' ').map(word => word.charAt(0).toUpperCase()).join('.');
          setAiResponse(`✅ "${inputValue}" (${courseCode}) has been successfully added to the course list. Students can now select this course in the PYQ Papers section.`);
          break;
          
        case 'branch':
          // Generate branch code from name
          const branchCode = inputValue.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
          setAiResponse(`✅ "${inputValue}" (${branchCode}) has been successfully added as a branch. This branch is now available for course selection.`);
          break;
          
        case 'subject':
          // Generate subject code
          const subjectCode = inputValue.replace(/\s+/g, '').toUpperCase().substring(0, 6) + '101';
          setAiResponse(`✅ "${inputValue}" (${subjectCode}) has been successfully added as a subject. Students can now access this subject in their semester.`);
          break;
          
        case 'paper':
          setAiResponse(`✅ "${inputValue}" has been successfully added to the papers collection. The paper is now available for download in the respective subject section.`);
          break;
      }
      
      setAiInput('');
    } catch (error) {
      setAiResponse(`❌ Error adding ${managementMode}. Please try again or contact support.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const closeAIPanel = () => {
    setShowAIPanel(false);
    setManagementMode(null);
    setAiInput('');
    setAiResponse('');
  };

  // Upload Modal Component
  const PaperUploadModal: React.FC = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Upload PYQ Paper</h2>
              <p className="text-blue-100 text-sm">
                Add new paper to {selectedSubject?.name}
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
                Your PYQ paper has been uploaded successfully and is now available to students.
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
                  Paper Title *
                </label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Final Exam 2024, Midterm 2023"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year *
                </label>
                <input
                  type="number"
                  value={uploadForm.year}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                  required
                  min="2000"
                  max={new Date().getFullYear() + 1}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload PDF File *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="paper-upload"
                    accept=".pdf"
                  />
                  <label
                    htmlFor="paper-upload"
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
                        <span className="text-lg font-medium">Click to select PDF file</span>
                        <p className="text-sm text-gray-500 mt-1">
                          PDF files only (Max 10MB)
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
                      Upload Paper
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

  // AI Management Panel Component
  const AIManagementPanel: React.FC = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-8 w-8 mr-3" />
              <div>
                <h2 className="text-xl font-bold">AI Management Assistant</h2>
                <p className="text-blue-100 text-sm">
                  {managementMode && `Adding new ${managementMode}`}
                </p>
              </div>
            </div>
            <button
              onClick={closeAIPanel}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto">
          {/* AI Response */}
          {aiResponse && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200">
              <div className="flex items-start">
                <Bot className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed">{aiResponse}</p>
                </div>
              </div>
            </div>
          )}

          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Input
              </label>
              <textarea
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder={`Enter the ${managementMode} name...`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={processAIInput}
                disabled={!aiInput.trim() || isProcessing}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </>
                )}
              </button>
              <button
                onClick={closeAIPanel}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-800 mb-3">💡 Examples:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              {managementMode === 'course' && (
                <>
                  <p>• "Bachelor of Science in Computer Science"</p>
                  <p>• "Master of Business Administration"</p>
                  <p>• "Diploma in Engineering"</p>
                </>
              )}
              {managementMode === 'branch' && (
                <>
                  <p>• "Artificial Intelligence"</p>
                  <p>• "Cyber Security"</p>
                  <p>• "Data Science"</p>
                </>
              )}
              {managementMode === 'subject' && (
                <>
                  <p>• "Machine Learning Fundamentals"</p>
                  <p>• "Advanced Database Systems"</p>
                  <p>• "Cloud Computing Architecture"</p>
                </>
              )}
              {managementMode === 'paper' && (
                <>
                  <p>• "2024 Midterm Examination"</p>
                  <p>• "2023 Final Exam"</p>
                  <p>• "2024 Internal Assessment"</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Developer Panel Component
  const DeveloperPanel: React.FC = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-orange-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-orange-100 p-3 rounded-xl mr-4">
            <Upload className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">PYQ Management Panel</h2>
            <p className="text-gray-600 text-sm">AI-powered management for courses, branches, subjects, and papers</p>
          </div>
        </div>
        <button
          onClick={() => setShowDeveloperPanel(!showDeveloperPanel)}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors"
        >
          {showDeveloperPanel ? 'Hide Panel' : 'Show Panel'}
        </button>
      </div>

      {showDeveloperPanel && (
        <>
          {/* AI Assistant Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Management Assistant</h3>
                <p className="text-gray-600 text-sm">Use natural language to add new content to your PYQ system</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium mb-2">🗣️ Natural Commands:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• "Add a new course"</li>
                  <li>• "Add branch to B.Tech"</li>
                  <li>• "Add subject to CSE"</li>
                  <li>• "Add paper to Machine Learning"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">⚡ Quick Actions:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Automatic code generation</li>
                  <li>• Hierarchical organization</li>
                  <li>• Instant confirmation</li>
                  <li>• Error handling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Courses
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleAIManagement('course')}
                  className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Add Course
                </button>
                <div className="text-xs text-blue-600">Total: {courses.length}</div>
                <div className="text-xs text-gray-500">Latest: {courses[courses.length - 1]?.name}</div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Branches
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleAIManagement('branch')}
                  className="w-full bg-green-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Add Branch
                </button>
                <div className="text-xs text-green-600">Total: {branches.length}</div>
                <div className="text-xs text-gray-500">Latest: {branches[branches.length - 1]?.name}</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Subjects
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleAIManagement('subject')}
                  className="w-full bg-purple-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Add Subject
                </button>
                <div className="text-xs text-purple-600">Total: {pyqSubjects.length}</div>
                <div className="text-xs text-gray-500">Latest: {pyqSubjects[pyqSubjects.length - 1]?.name}</div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Papers
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleAIManagement('paper')}
                  className="w-full bg-red-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Add Paper
                </button>
                <div className="text-xs text-red-600">Total: {pyqPapers.length}</div>
                <div className="text-xs text-gray-500">Latest: {pyqPapers[pyqPapers.length - 1]?.title}</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-3">🚀 Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center">
                <Edit className="h-4 w-4 mr-2" />
                Bulk Import
              </button>
              <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center">
                <Trash2 className="h-4 w-4 mr-2" />
                Manage Existing
              </button>
              <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              PYQ Papers 📄
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access Previous Year Question Papers organized by course, branch, semester, and subject
            </p>
          </div>

          {/* Developer Panel */}
          {isAuthenticated && <DeveloperPanel />}

          {/* AI Management Panel */}
          {showAIPanel && <AIManagementPanel />}

          {/* Upload Modal */}
          {showUploadModal && <PaperUploadModal />}

          {/* Breadcrumb Navigation */}
          {(selectedCourse || selectedBranch || selectedSemester || selectedSubject) && (
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
                  onClick={resetSelection}
                  className="bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Reset All
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Select Course */}
          {!selectedCourse && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <GraduationCap className="h-8 w-8 mr-3 text-indigo-600" />
                Select Your Course
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-indigo-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{course.code}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{course.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{course.description}</p>
                      <ChevronRight className="h-5 w-5 text-indigo-600 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Branch */}
          {selectedCourse && !selectedBranch && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <Users className="h-8 w-8 mr-3 text-green-600" />
                Select Your Branch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBranches.map((branch) => (
                  <div
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{branch.code}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{branch.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{branch.description}</p>
                      <ChevronRight className="h-5 w-5 text-green-600 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Select Semester */}
          {selectedBranch && !selectedSemester && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <Calendar className="h-8 w-8 mr-3 text-purple-600" />
                Select Semester
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                  <div
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xl font-bold">{semester}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sem {semester}</h3>
                      <ChevronRight className="h-5 w-5 text-purple-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Select Subject */}
          {selectedSemester && !selectedSubject && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
                Select Subject
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject)}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100 dark:border-gray-600 group"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{subject.code}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{subject.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{subject.credits} Credits</p>
                      <ChevronRight className="h-5 w-5 text-blue-600 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
              {filteredSubjects.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Subjects Found</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No subjects available for {selectedBranch?.name} - Semester {selectedSemester}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Show PYQ Papers */}
          {selectedSubject && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedSubject.name} - PYQ Papers
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Previous Year Question Papers (Latest to Oldest)
                  </p>
                </div>
                {isAuthenticated && (
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Paper
                  </button>
                )}
              </div>

              {filteredPapers.length > 0 ? (
                <div className="space-y-4">
                  {filteredPapers.map((paper) => (
                    <div
                      key={paper.id}
                      className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{paper.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Year {paper.year}
                              </span>
                              {paper.fileSize && (
                                <span>Size: {paper.fileSize}</span>
                              )}
                              <span>Uploaded: {new Date(paper.uploadDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <button
  onClick={() => handlePaperDownload(paper)}
  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 flex-shrink-0"
>
                          <Eye className="h-4 w-4" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Papers Available</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    No PYQ papers available for {selectedSubject.name} yet. Check back later!
                  </p>
                  {isAuthenticated && (
                    <button
                      onClick={() => setShowUploadModal(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                    >
                      Upload First Paper
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Quick Stats */}
          <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">PYQ Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{courses.length}</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Courses</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{branches.length}</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Branches</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{pyqSubjects.length}</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Subjects</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{pyqPapers.length}</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PYQPapers;