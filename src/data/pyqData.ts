import { Course, Branch, PYQSubject, PYQPaper } from '../types';

export const courses: Course[] = [
  {
    id: 'btech',
    name: 'Bachelor of Technology',
    code: 'B.Tech',
    description: 'Undergraduate engineering program'
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications',
    code: 'BCA',
    description: 'Undergraduate computer applications program'
  },
  {
    id: 'mba',
    name: 'Master of Business Administration',
    code: 'MBA',
    description: 'Postgraduate business administration program'
  },
  {
    id: 'mca',
    name: 'Master of Computer Applications',
    code: 'MCA',
    description: 'Postgraduate computer applications program'
  }
];

export const branches: Branch[] = [
  // B.Tech Branches
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    code: 'CSE',
    courseId: 'btech',
    description: 'Software development and computer systems'
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    courseId: 'btech',
    description: 'Electronics and communication systems'
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    code: 'ME',
    courseId: 'btech',
    description: 'Mechanical systems and manufacturing'
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    code: 'CE',
    courseId: 'btech',
    description: 'Infrastructure and construction'
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    code: 'EE',
    courseId: 'btech',
    description: 'Electrical systems and power'
  },
  // BCA Branch
  {
    id: 'bca-general',
    name: 'Computer Applications',
    code: 'CA',
    courseId: 'bca',
    description: 'General computer applications'
  },
  // MBA Branches
  {
    id: 'mba-finance',
    name: 'Finance',
    code: 'FIN',
    courseId: 'mba',
    description: 'Financial management and analysis'
  },
  {
    id: 'mba-marketing',
    name: 'Marketing',
    code: 'MKT',
    courseId: 'mba',
    description: 'Marketing and sales management'
  },
  // MCA Branch
  {
    id: 'mca-general',
    name: 'Computer Applications',
    code: 'CA',
    courseId: 'mca',
    description: 'Advanced computer applications'
  }
];

export const pyqSubjects: PYQSubject[] = [
  // CSE Subjects
  {
    id: 'cse-s1-math1',
    name: 'Engineering Mathematics-1',
    code: 'MATH101',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-chemistry',
    name: 'Engineering Chemistry',
    code: 'CHEM101',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-comm',
    name: 'Communication Skills',
    code: 'ENG101',
    branchId: 'cse',
    semester: 1,
    credits: 3
  },
  {
    id: 'cse-s1-mech',
    name: 'Basic Mechanical Engineering',
    code: 'MECH101',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-civil',
    name: 'Basic Civil Engineering',
    code: 'CIVIL101',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s2-math2',
    name: 'Engineering Mathematics-2',
    code: 'MATH102',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chemistry',
    name: 'Engineering Chemistry',
    code: 'CHEM101',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-programming',
    name: 'Programming for Problem Solving',
    code: 'CS101',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s3-ds',
    name: 'Data Structures',
    code: 'CS201',
    branchId: 'cse',
    semester: 3,
    credits: 4
  },
  {
    id: 'cse-s3-co',
    name: 'Computer Organization',
    code: 'CS202',
    branchId: 'cse',
    semester: 3,
    credits: 4
  },
  {
    id: 'cse-s4-dbms',
    name: 'Database Management Systems',
    code: 'CS301',
    branchId: 'cse',
    semester: 4,
    credits: 4
  },
  {
    id: 'cse-s4-os',
    name: 'Operating Systems',
    code: 'CS302',
    branchId: 'cse',
    semester: 4,
    credits: 4
  }
];

export const pyqPapers: PYQPaper[] = [
  // Engineering Mathematics-1 Papers
  {
    id: 'paper-1',
    title: 'Engineering Mathematics-1 - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-math1',
    downloadUrl: '<iframe src="https://drive.google.com/file/d/15yxzmBCTso2s9enawz7KNSdj-5EakqUf/preview" width="640" height="480"></iframe>',
    uploadDate: '2025-01-15',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'Engineering Mathematics-1 - Practice Problems 2025',
    year: 2025,
    subjectId: 'cse-s1-math1',
    downloadUrl: 'https://drive.google.com/file/d/15cdwtAOou8IXRvcwOiwIEkdZgSHJ-Xx4/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
  {
    id: 'paper-3',
    title: 'Engineering Mathematics-1 - Previous Year Questions 2024',
    year: 2024,
    subjectId: 'cse-s1-math1',
    downloadUrl: 'https://drive.google.com/file/d/15cdwtAOou8IXRvcwOiwIEkdZgSHJ-Xx4/view?usp=sharing',
    uploadDate: '2024-12-15',
    fileSize: '2.1 MB'
  },
  // Engineering Chemistry Papers
  {
    id: 'paper-4',
    title: 'Engineering Chemistry - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-chemistry',
    downloadUrl: 'https://drive.google.com/file/d/15yxzmBCTso2s9enawz7KNSdj-5EakqUf/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.2 MB'
  },
  {
    id: 'paper-5',
    title: 'Engineering Chemistry - Lab Manual 2025',
    year: 2025,
    subjectId: 'cse-s1-chemistry',
    downloadUrl: 'https://drive.google.com/file/d/15yxzmBCTso2s9enawz7KNSdj-5EakqUf/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
  // Communication Skills Papers
  {
    id: 'paper-6',
    title: 'Communication Skills - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-comm',
    downloadUrl: 'https://drive.google.com/file/d/15d7p-NnMmZY8ukpH-xq2kxzI8HcEytqO/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
  {
    id: 'paper-7',
    title: 'Communication Skills - Practice Exercises 2025',
    year: 2025,
    subjectId: 'cse-s1-comm',
    downloadUrl: 'https://drive.google.com/file/d/15d7p-NnMmZY8ukpH-xq2kxzI8HcEytqO/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
  // Basic Mechanical Engineering Papers
  {
    id: 'paper-8',
    title: 'Basic Mechanical Engineering - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/15dSFR2RZwxbUteFkcDwlrgi9nQqMX1EO/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-9',
    title: 'Basic Mechanical Engineering - Lab Manual 2025',
    year: 2025,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/15dSFR2RZwxbUteFkcDwlrgi9nQqMX1EO/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '3.8 MB'
  },
  // Basic Civil Engineering Papers
  {
    id: 'paper-10',
    title: 'Basic Civil Engineering - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-civil',
    downloadUrl: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.5 MB'
  },
  {
    id: 'paper-11',
    title: 'Basic Civil Engineering - Lab Manual 2025',
    year: 2025,
    subjectId: 'cse-s1-civil',
    downloadUrl: 'https://drive.google.com/file/d/15h7coVpacUVgNcs3bB2P6OJmeHda95yY/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.9 MB'
  }
];