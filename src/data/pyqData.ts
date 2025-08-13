import {course, Branch, PYQSubject, PYQPaper } from '../types';
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
    id: 'ee',
    name: 'Electrical Engineering',
    code: 'EE',
    courseId: 'btech',
    description: 'Electrical systems and power'
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
  // 1st semester subjects
  {
    id: 'cse-s1-math',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-csk',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-mech',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-electrical',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s2-math',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chem',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-hv',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-pps',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  
];
export const pyqPapers: PYQPaper[] = [
  // Engineering Mathematics-1 Papers
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-ENGINEERING-MATHEMATICS-1-1E3101-2025',
    year: 2025,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1yb0yYCEju8BfhRW8AeNKbHU3wh-Uwgyk/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2025',
    year: 2025,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1XTlhFHPY-1T3IXCjgVhI7BPSd-KyOm7y/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
  {
    id: 'paper-3',
    title: 'BTECH-1-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2024',
    year: 2024,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1Tk07o25AcoIyvhAVYqBMv_BCmHiPMqQu/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-4',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2024',
    year: 2024,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1vVrm3d8IT-_OIsSILBsmSVY_dFT9q1Op/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
  {
    id: 'paper-5',
    title: 'BTECH-1-SEM-ENGINEERING-MATHEMATICS-1-1E3101-2023.pdf',
    year: 2023,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1CjuK0-YsSIY59eR1jRbnaTwRu0zIdET0/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-6',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2024',
    year: 2023,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1h1kgtpu3p6PwPZscirq2l6r4MSKIKqcv/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
  {
    id: 'paper-7',
    title: 'BTECH-1-SEM-ENGINEERING-MATHEMATICS-1-11N501-JUL-2022',
    year: 2022,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1STL12J1-MkOcB6F8GHWm9kGH3DtbInBU/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-2022',
    year: 2022,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1JVnRS_AiM7l55GtHN7rWC2fhA5YkJT3I/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-9',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E2401',
    year: 2021,
    subjectId: 'cse-s1-math',
    downloadUrl: 'https://drive.google.com/file/d/1R3mVvsHTNur1Sc5aPTuf3TK0ip6jgbCr/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },

  

  
];