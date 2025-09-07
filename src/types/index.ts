export interface Subject {
  id: string;
  name: string;
  code: string;
  year: number;
  semester: number;
  branch: string;
  credits: number;
  chapters: Chapter[];
  books: Book[];
  assignments: Assignment[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  notesUrl?: string;
  videoUrl?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  year: number;
  branch: string[];
  dueDate: string;
  downloadUrl?: string;
  solutionUrl?: string;
  type: 'lab' | 'theory' | 'project';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  downloadUrl?: string;
  buyUrl?: string;
  subjects: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year: number;
  type: 'mini' | 'major';
  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  pptUrl?: string;
}

export interface Doubt {
  id: string;
  question: string;
  subject: string;
  imageUrl?: string;
  answer?: string;
  status: 'pending' | 'resolved';
  createdAt: string;
}

// Content Management Types
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'theory' | 'lab' | 'books' | 'videos' | 'assignments' | 'mtt';
  subjectId: string;
  fileSize?: string;
  duration?: string;
  uploadDate: string;
  viewUrl?: string;
  thumbnailUrl?: string;
}

export interface ContentSubject {
  id: string;
  name: string;
  code: string;
  year: number;
  semester: number;
  branch: string;
  description: string;
  icon: string;
}

// New PYQ Types
export interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  courseId: string;
  description: string;
}

export interface PYQSubject {
  id: string;
  name: string;
  code: string;
  branchId: string;
  semester: number;
  credits: number;
}

export interface PYQPaper {
  id: string;
  title: string;
  year: number;
  subjectId: string;
  downloadUrl?: string;
  uploadDate: string;
  fileSize?: string;
}