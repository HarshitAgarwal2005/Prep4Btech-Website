import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, ExternalLink } from 'lucide-react';
import { mockData } from '../data/mockData';
import { contentData } from '../data/contentData';
import { ContentBranch } from '../types';

const Assignments: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [view, setView] = useState<'year' | 'semester' | 'branch' | 'subject' | 'content'>('year');

  useEffect(() => {
    const year = searchParams.get('year');
    const semester = searchParams.get('semester');
    
    if (year && semester) {
      setSelectedYear(year);
      setSelectedSemester(semester);
      
      // Check if semester needs branch selection (3-8)
      const semesterNum = parseInt(semester);
      if (semesterNum >= 3 && semesterNum <= 8) {
        setView('branch');
      } else {
        setView('subject');
      }
    }
  }, [searchParams]);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setSelectedSemester('');
    setSelectedBranch('');
    setSelectedSubject('');
    setView('semester');
  };

  const handleSemesterSelect = (semester: string) => {
    setSelectedSemester(semester);
    setSelectedBranch('');
    setSelectedSubject('');
    
    const semesterNum = parseInt(semester);
    if (semesterNum >= 3 && semesterNum <= 8) {
      setView('branch');
    } else {
      setView('subject');
    }
  };

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch);
    setSelectedSubject('');
    setView('subject');
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setView('content');
  };

  const handleBack = () => {
    if (view === 'content') {
      setSelectedSubject('');
      setView('subject');
    } else if (view === 'subject') {
      const semesterNum = parseInt(selectedSemester);
      if (semesterNum >= 3 && semesterNum <= 8) {
        setSelectedBranch('');
        setView('branch');
      } else {
        setSelectedSemester('');
        setView('semester');
      }
    } else if (view === 'branch') {
      setSelectedSemester('');
      setView('semester');
    } else if (view === 'semester') {
      setSelectedYear('');
      setView('year');
    }
  };

  const getSubjectsForSemester = (semester: string, branch?: string) => {
    const semesterNum = parseInt(semester);
    
    if (semesterNum >= 3 && semesterNum <= 8 && branch) {
      const semesterData = contentData.find(s => s.semester === semesterNum);
      const branchData = semesterData?.branches.find(b => b.code === branch);
      return branchData?.subjects || [];
    } else if (semesterNum <= 2) {
      const semesterData = contentData.find(s => s.semester === semesterNum);
      return semesterData?.commonSubjects || [];
    }
    
    return [];
  };

  const getBranchesForSemester = (semester: string): ContentBranch[] => {
    const semesterNum = parseInt(semester);
    const semesterData = contentData.find(s => s.semester === semesterNum);
    return semesterData?.branches || [];
  };

  const renderYearSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Select Academic Year</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(mockData).map((year) => (
          <div
            key={year}
            onClick={() => handleYearSelect(year)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Academic Year</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{year}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                View assignments and study materials for {year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSemesterSelection = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Years
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Select Semester - {selectedYear}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockData[selectedYear]?.map((semester) => (
          <div
            key={semester.semester}
            onClick={() => handleSemesterSelect(semester.semester)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
          >
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{semester.semester}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Semester {semester.semester}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {semester.subjects.length} subjects available
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBranchSelection = () => {
    const branches = getBranchesForSemester(selectedSemester);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Semesters
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Select Branch - Semester {selectedSemester}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.code}
              onClick={() => handleBranchSelect(branch.code)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{branch.code}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Branch</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{branch.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{branch.description}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {branch.subjects.length} subjects available
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSubjectSelection = () => {
    const subjects = getSubjectsForSemester(selectedSemester, selectedBranch);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {parseInt(selectedSemester) >= 3 ? 'Branches' : 'Semesters'}
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Select Subject - Semester {selectedSemester}
          {selectedBranch && ` (${selectedBranch})`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.code}
              onClick={() => handleSubjectSelect(subject.code)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{subject.code}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{subject.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  View assignments and study materials
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    const yearData = mockData[selectedYear];
    const semesterData = yearData?.find(s => s.semester === selectedSemester);
    const subjectData = semesterData?.subjects.find(s => s.name.includes(selectedSubject) || s.code === selectedSubject);

    if (!subjectData) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No content found for the selected subject.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Subjects
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{subjectData.name}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {selectedYear} - Semester {selectedSemester} {selectedBranch && `- ${selectedBranch}`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectData.assignments.map((assignment, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{assignment.title}</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    {assignment.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{assignment.description}</p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {view === 'year' && renderYearSelection()}
        {view === 'semester' && renderSemesterSelection()}
        {view === 'branch' && renderBranchSelection()}
        {view === 'subject' && renderSubjectSelection()}
        {view === 'content' && renderContent()}
      </div>
    </div>
  );
};

export default Assignments;