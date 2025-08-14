import { ContentSubject, ContentItem } from '../types';

export const contentSubjects: ContentSubject[] = [
  // First Year - Semester 1
  {
    id: 'math1-s1',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1',
    name: 'Basic Mechanical Engineering',
    code: 'MECH101',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
    code: 'EE101',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },

  // First Year - Semester 2
  {
    id: 'math2-s2',
    name: 'Engineering Mathematics-II',
    code: 'MATH102',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
    code: 'CHEM101',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: 'HV101',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: 'CS101',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: 'CE101',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },

  // Second Year - Semester 3
  {
    id: 'dsa-s3',
    name: 'Data Structures & Algorithms',
    code: 'CS201',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'oop-s3',
    name: 'Object Oriented Programming',
    code: 'CS202',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
    id: 'de-s3',
    name: 'Digital Electronics',
    code: 'EC201',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },

  // ECE Subjects
  {
    id: 'signals-s3-ece',
    name: 'Signals and Systems',
    code: 'EC301',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Signal processing fundamentals',
    icon: '📡'
  },
  {
    id: 'analog-s3-ece',
    name: 'Analog Electronics',
    code: 'EC302',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Analog circuit design and analysis',
    icon: '📻'
  },

  // Mechanical Subjects
  {
    id: 'thermo-s3-mech',
    name: 'Thermodynamics',
    code: 'ME301',
    year: 2,
    semester: 3,
    branch: 'MECHANICAL',
    description: 'Heat and energy transfer principles',
    icon: '🌡️'
  },
  {
    id: 'som-s3-mech',
    name: 'Strength of Materials',
    code: 'ME302',
    year: 2,
    semester: 3,
    branch: 'MECHANICAL',
    description: 'Material properties and stress analysis',
    icon: '🔧'
  }
];

export const contentItems: ContentItem[] = [
  // Engineering Mathematics-I Content
  {
    id: 'math1-theory-1',
    title: 'Engineering Mathematics-I Complete Notes',
    description: 'Comprehensive theory notes covering all topics',
    type: 'theory',
    subjectId: 'math1-s1',
    fileSize: '2.5 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://example.com/math1-notes'
  },
  {
    id: 'math1-theory-2',
    title: 'Engineering Mathematics-I Practice Problems',
    description: 'Solved examples and practice exercises',
    type: 'theory',
    subjectId: 'math1-s1',
    fileSize: '1.8 MB',
    uploadDate: '2024-01-20',
    viewUrl: 'https://example.com/math1-practice'
  },
  {
    id: 'math1-lab-1',
    title: 'Engineering Mathematics-I Lab Manual',
    description: 'Laboratory experiments and procedures',
    type: 'lab',
    subjectId: 'math1-s1',
    fileSize: '3.2 MB',
    uploadDate: '2024-01-25',
    viewUrl: 'https://example.com/math1-lab'
  },
  {
    id: 'math1-video-1',
    title: 'Engineering Mathematics-I Video Lectures',
    description: 'Video lectures covering key concepts',
    type: 'videos',
    subjectId: 'math1-s1',
    duration: '45 minutes',
    uploadDate: '2024-01-30',
    viewUrl: 'https://example.com/math1-videos',
    thumbnailUrl: 'https://example.com/math1-thumb'
  },
  {
    id: 'math1-book-1',
    title: 'Engineering Mathematics by Kreyszig',
    description: 'Reference textbook for advanced mathematics',
    type: 'books',
    subjectId: 'math1-s1',
    fileSize: '15.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://example.com/math1-book'
  },
  {
    id: 'math1-assignment-1',
    title: 'Engineering Mathematics-I Assignment 1',
    description: 'First assignment with solutions',
    type: 'assignments',
    subjectId: 'math1-s1',
    fileSize: '1.1 MB',
    uploadDate: '2024-02-05',
    viewUrl: 'https://example.com/math1-assignment1'
  },
  {
    id: 'math1-mtt-1',
    title: 'Engineering Mathematics-I MTT Paper',
    description: 'Mid-term test paper with solutions',
    type: 'mtt',
    subjectId: 'math1-s1',
    fileSize: '0.8 MB',
    uploadDate: '2024-02-10',
    viewUrl: 'https://example.com/math1-mtt'
  },

  // Engineering Physics Content
  {
    id: 'physics-theory-1',
    title: 'Engineering Physics Complete Notes',
    description: 'Theory covering mechanics, waves, and optics',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://example.com/physics-notes'
  },
  {
    id: 'physics-lab-1',
    title: 'Engineering Physics Lab Experiments',
    description: 'Practical experiments and observations',
    type: 'lab',
    subjectId: 'physics-s1',
    fileSize: '2.7 MB',
    uploadDate: '2024-01-22',
    viewUrl: 'https://example.com/physics-lab'
  },
  {
    id: 'physics-video-1',
    title: 'Engineering Physics Video Lectures',
    description: 'Conceptual explanations with demonstrations',
    type: 'videos',
    subjectId: 'physics-s1',
    duration: '60 minutes',
    uploadDate: '2024-01-28',
    viewUrl: 'https://example.com/physics-videos'
  },

  // Communication Skills Content
  {
    id: 'comm-theory-1',
    title: 'Communication Skills Theory Notes',
    description: 'Grammar, writing skills, and presentation techniques',
    type: 'theory',
    subjectId: 'comm-s1',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://example.com/comm-notes'
  },
  {
    id: 'comm-assignment-1',
    title: 'Communication Skills Assignment',
    description: 'Essay writing and presentation assignments',
    type: 'assignments',
    subjectId: 'comm-s1',
    fileSize: '0.9 MB',
    uploadDate: '2024-02-03',
    viewUrl: 'https://example.com/comm-assignment'
  },

  // Data Structures & Algorithms Content
  {
    id: 'dsa-theory-1',
    title: 'Data Structures & Algorithms Complete Notes',
    description: 'Arrays, linked lists, trees, graphs, and algorithms',
    type: 'theory',
    subjectId: 'dsa-s3',
    fileSize: '4.2 MB',
    uploadDate: '2024-02-15',
    viewUrl: 'https://example.com/dsa-notes'
  },
  {
    id: 'dsa-lab-1',
    title: 'DSA Lab Programs',
    description: 'Implementation of data structures in C++',
    type: 'lab',
    subjectId: 'dsa-s3',
    fileSize: '2.1 MB',
    uploadDate: '2024-02-18',
    viewUrl: 'https://example.com/dsa-lab'
  },
  {
    id: 'dsa-video-1',
    title: 'DSA Video Tutorials',
    description: 'Step-by-step algorithm explanations',
    type: 'videos',
    subjectId: 'dsa-s3',
    duration: '120 minutes',
    uploadDate: '2024-02-20',
    viewUrl: 'https://example.com/dsa-videos'
  },
  {
    id: 'dsa-mtt-1',
    title: 'DSA Mid-Term Test Paper',
    description: 'Previous year MTT with detailed solutions',
    type: 'mtt',
    subjectId: 'dsa-s3',
    fileSize: '1.3 MB',
    uploadDate: '2024-02-25',
    viewUrl: 'https://example.com/dsa-mtt'
  }
];

export const branches = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    code: 'CSE',
    description: 'Software development and computer systems',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    description: 'Electronics and communication systems',
    icon: '📡',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    code: 'EE',
    description: 'Electrical systems and power engineering',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    code: 'MECHANICAL',
    description: 'Mechanical systems and manufacturing',
    icon: '⚙️',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    code: 'CIVIL',
    description: 'Infrastructure and construction engineering',
    icon: '🏗️',
    color: 'from-purple-500 to-indigo-500'
  }
];