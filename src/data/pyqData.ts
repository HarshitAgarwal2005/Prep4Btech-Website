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
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: 'PHY101',
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
  // CSE Math-1 Papers
  {
    id: 'paper-1',
    title: 'Engineering Mathematics-1 - 2023',
    year: 2023,
    subjectId: 'cse-s1-math1',
    downloadUrl: '/pyq/cse/sem1/math1-2023.pdf',
    uploadDate: '2024-01-15',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'Engineering Mathematics-1 - 2022',
    year: 2022,
    subjectId: 'cse-s1-math1',
    downloadUrl: '/pyq/cse/sem1/math1-2022.pdf',
    uploadDate: '2023-01-15',
    fileSize: '2.3 MB'
  },
  {
    id: 'paper-3',
    title: 'Engineering Mathematics-1 - 2021',
    year: 2021,
    subjectId: 'cse-s1-math1',
    downloadUrl: '/pyq/cse/sem1/math1-2021.pdf',
    uploadDate: '2022-01-15',
    fileSize: '2.1 MB'
  },
  // CSE Physics Papers
  {
    id: 'paper-4',
    title: 'Engineering Physics - 2023',
    year: 2023,
    subjectId: 'cse-s1-physics',
    downloadUrl: '/pyq/cse/sem1/physics-2023.pdf',
    uploadDate: '2024-01-15',
    fileSize: '3.2 MB'
  },
  {
    id: 'paper-5',
    title: 'Engineering Physics - 2022',
    year: 2022,
    subjectId: 'cse-s1-physics',
    downloadUrl: '/pyq/cse/sem1/physics-2022.pdf',
    uploadDate: '2023-01-15',
    fileSize: '3.0 MB'
  },
  // CSE Data Structures Papers
  {
    id: 'paper-6',
    title: 'Data Structures - 2023',
    year: 2023,
    subjectId: 'cse-s3-ds',
    downloadUrl: '/pyq/cse/sem3/ds-2023.pdf',
    uploadDate: '2024-01-15',
    fileSize: '2.8 MB'
  },
  {
    id: 'paper-7',
    title: 'Data Structures - 2022',
    year: 2022,
    subjectId: 'cse-s3-ds',
    downloadUrl: '/pyq/cse/sem3/ds-2022.pdf',
    uploadDate: '2023-01-15',
    fileSize: '2.6 MB'
  }
];