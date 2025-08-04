import { ContentBranch, Subject, Assignment } from '../types';

export const contentBranches: ContentBranch[] = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    code: 'CSE',
    description: 'Software development and computer systems',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    description: 'Electronics and communication systems',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    code: 'ME',
    description: 'Mechanical systems and manufacturing',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    code: 'CE',
    description: 'Infrastructure and construction',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    code: 'EE',
    description: 'Electrical systems and power',
    color: 'from-indigo-500 to-purple-500'
  }
];

// Enhanced subjects data with branch associations
export const contentSubjects: Subject[] = [
  // First Year - No branch selection needed
  {
    id: 'math1',
    name: 'Engineering Mathematics-I',
    code: 'MATH (1FY2-01)',
    year: 1,
    semester: 1,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'physics1',
    name: 'Engineering Physics',
    code: 'PHY (1FY2-02)',
    year: 1,
    semester: 1,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'comm1',
    name: 'Communication Skills',
    code: 'ENG (1FY1-04)',
    year: 1,
    semester: 1,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'mech1',
    name: 'Basic Mechanical Engineering',
    code: 'BME (1FY3-07)',
    year: 1,
    semester: 1,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'elec1',
    name: 'Basic Electrical Engineering',
    code: 'BEE (1FY3-08)',
    year: 1,
    semester: 1,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  // Second Year - No branch selection needed
  {
    id: 'math2',
    name: 'Engineering Mathematics-II',
    code: 'MATH (2FY2-01)',
    year: 1,
    semester: 2,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'chem1',
    name: 'Engineering Chemistry',
    code: 'CHEM (2FY2-03)',
    year: 1,
    semester: 2,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'human1',
    name: 'Human Values',
    code: 'HV (2FY1-05)',
    year: 1,
    semester: 2,
    credits: 2,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'prog1',
    name: 'Programming for Problem Solving',
    code: 'PPS (2FY3-06)',
    year: 1,
    semester: 2,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'civil1',
    name: 'Basic Civil Engineering',
    code: 'BCE (2FY3-09)',
    year: 1,
    semester: 2,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },

  // Third Semester - CSE Branch
  {
    id: 'ds1-cse',
    name: 'Data Structure and Algorithm',
    code: 'DSA (3CS4-05)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'se1-cse',
    name: 'Software Engineering',
    code: 'SE (3CS4-07)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'math3-cse',
    name: 'Advance Engineering Mathematics',
    code: 'MATH (3CS2-01)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'oop1-cse',
    name: 'Object Oriented Programming',
    code: 'OOPs (3CS4-06)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'digital1-cse',
    name: 'Digital Electronics',
    code: 'DE (3CS3-04)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'mefa1-cse',
    name: 'Managerial Eco. and Financial Accounting',
    code: 'MEFA (3CS1-03)',
    branchId: 'cse',
    year: 2,
    semester: 3,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },

  // Third Semester - ECE Branch
  {
    id: 'signals-ece',
    name: 'Signals and Systems',
    code: 'SS (3EC4-05)',
    branchId: 'ece',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'analog-ece',
    name: 'Analog Electronics',
    code: 'AE (3EC4-06)',
    branchId: 'ece',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'network-ece',
    name: 'Network Analysis',
    code: 'NA (3EC4-07)',
    branchId: 'ece',
    year: 2,
    semester: 3,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },

  // Fourth Semester - CSE Branch
  {
    id: 'dbms1-cse',
    name: 'Database Management Systems',
    code: 'DBMS (4CSR4-05)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'discrete-cse',
    name: 'Discrete Mathematics Structure',
    code: 'MATH (4CSR2-01)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'dccn-cse',
    name: 'Data Communication And Computer Networks',
    code: 'DCCN (4CSR4-07)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'tc-cse',
    name: 'Technical Communication',
    code: 'TC (4CSR1-02)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 2,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'mai-cse',
    name: 'Microprocessor & Interfaces',
    code: 'MandI (4CSR3-04)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'toc-cse',
    name: 'Theory of Computation',
    code: 'TOC (4CSR4-06)',
    branchId: 'cse',
    year: 2,
    semester: 4,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },

  // Fifth Semester - CSE Branch
  {
    id: 'itc-cse',
    name: 'Information Theory & Coding',
    code: 'ITC (5CS3-01)',
    branchId: 'cse',
    year: 3,
    semester: 5,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'cd-cse',
    name: 'Compiler Design',
    code: 'CD (5CS4-02)',
    branchId: 'cse',
    year: 3,
    semester: 5,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'os-cse',
    name: 'Operating System',
    code: 'OS (5CS4-03)',
    branchId: 'cse',
    year: 3,
    semester: 5,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'cgm-cse',
    name: 'Computer Graphics & Multimedia',
    code: 'CGM (5CS4-04)',
    branchId: 'cse',
    year: 3,
    semester: 5,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'aa-cse',
    name: 'Analysis of Algorithms',
    code: 'AA (5CS4-05)',
    branchId: 'cse',
    year: 3,
    semester: 5,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },

  // Sixth Semester - CSE Branch
  {
    id: 'dip-cse',
    name: 'Digital Image Processing',
    code: 'DIP (6CS4-01)',
    branchId: 'cse',
    year: 3,
    semester: 6,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'ml-cse',
    name: 'Machine Learning',
    code: 'ML (6CS4-02)',
    branchId: 'cse',
    year: 3,
    semester: 6,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'iss-cse',
    name: 'Information Security System',
    code: 'ISS (6CS4-03)',
    branchId: 'cse',
    year: 3,
    semester: 6,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'cao-cse',
    name: 'Computer Architecture and Organization',
    code: 'CAO (6CS4-04)',
    branchId: 'cse',
    year: 3,
    semester: 6,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'ai-cse',
    name: 'Artificial Intelligence',
    code: 'AI (6CS4-05)',
    branchId: 'cse',
    year: 3,
    semester: 6,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },

  // Seventh Semester - CSE Branch
  {
    id: 'iot-cse',
    name: 'Internet of Things',
    code: 'IoT (7CS4-01)',
    branchId: 'cse',
    year: 4,
    semester: 7,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'oe1-cse',
    name: 'Open Elective-1',
    code: 'OE1 (7CS5-02)',
    branchId: 'cse',
    year: 4,
    semester: 7,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  },

  // Eighth Semester - CSE Branch
  {
    id: 'bda-cse',
    name: 'Big Data Analytics',
    code: 'BDA (8CS4-01)',
    branchId: 'cse',
    year: 4,
    semester: 8,
    credits: 4,
    chapters: [],
    books: [],
    assignments: []
  },
  {
    id: 'oe2-cse',
    name: 'Open Elective-2',
    code: 'OE2 (8CS5-02)',
    branchId: 'cse',
    year: 4,
    semester: 8,
    credits: 3,
    chapters: [],
    books: [],
    assignments: []
  }
];