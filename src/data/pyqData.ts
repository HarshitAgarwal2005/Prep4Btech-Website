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
  // 1st semester subjects
  {
    id: 'cse-s1-math1',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-math1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'cse',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-math1',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-math1',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-math1',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'cse',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s1-chemistry',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s1-comm',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'cse',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-math2',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s1-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-chemistry',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'cse',
    semester: 2,
    credits: 2
  },
  // 3rd semester subjects
  {
    id: 'cse-s3-ds',
    name: 'Advance Engineering Mathematics',
    code: '3CS2-01',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-ds',
    name: 'Data Structures And Algorithm',
    code: '3CS4-05',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-ds',
    name: 'Mnnagerial Economics And Financial Engineering',
    code: '3CS1-03',
    branchId: 'cse',
    semester: 3,
    credits: 2
  },
  {
    id: 'cse-s3-ds',
    name: 'Digital Electronics',
    code: '3CS3-04',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-ds',
    name: 'Object Oriented Programming',
    code: '3CS4-06',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-co',
    name: 'Software Engineering',
    code: '3CS4-07',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  // 4th semester subjects 
  {
    id: 'cse-s4-dbms',
    name: 'Discrete Mathematics Structure',
    code: '4CS2-01',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Technical communication',
    code: '4CS1-02',
    branchId: 'cse',
    semester: 4,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Microprocessor & Interfaces',
    code: '4CS3-01',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Database Management System',
    code: '4CS4-05',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Theory Of Computation',
    code: '4CS4-06',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Data Communication & Computer Networks',
    code: '4CS4-07',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  // 5th semester subjects
  {
    id: 'cse-s4-os',
    name: 'Information Theory & Coding',
    code: '5CS3-01',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Compiler Design',
    code: '5CS4-02',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },{
    id: 'cse-s4-os',
    name: 'Operating System',
    code: '5CS4-03',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },{
    id: 'cse-s4-os',
    name: 'Computer Graphics & Multimedia',
    code: '5CS4-04',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Analysis Of Algorithm',
    code: '5CS5-05',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Wireless Communication',
    code: '5CS5-11',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Human Compiler Interaction',
    code: '5CS5-12',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Bioinformatics',
    code: '5CS5-13',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  // 6th semester sunjects 
   {
    id: 'cse-s4-os',
    name: 'Digital Image Processing',
    code: '6CS3--01',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s4-os',
    name: 'Machine Learning',
    code: '6CS4-02',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
   {
    id: 'cse-s4-os',
    name: 'Bioinformatics',
    code: '6CS6-13',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s4-os',
    name: 'Information Security System',
    code: '6CS4-03',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s4-os',
    name: 'Computer Architecture & Organization',
    code: '6CS4-04',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
   {
    id: 'cse-s4-os',
    name: 'Artificial Intelligence ',
    code: '6CS4-05',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s4-os',
    name: 'Cloud Computing',
    code: '6CS4-06',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Distributed System',
    code: '6C54-11',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Software Defined Network',
    code: '6CS5-12',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  {
    id: 'cse-s4-os',
    name: 'Ecommerce & ERP',
    code: '6CS4-13',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  //7th semester papers
  
  
  
];

export const pyqPapers: PYQPaper[] = [
  // Engineering Mathematics-1 Papers
  {
    id: 'paper-1',
    title: 'Engineering Mathematics-1 - Complete Notes 2025',
    year: 2025,
    subjectId: 'cse-s1-math1',
    downloadUrl: '<iframe src="https://drive.google.com/file/d/15cdwtAOou8IXRvcwOiwIEkdZgSHJ-Xx4/preview?rm=minimal" width="640" height="480"></iframe>',
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
  
  {
    id: 'paper-2',
    title: 'Engineering Mathematics-1 - Practice Problems 2025',
    year: 2025,
    subjectId: 'cse-s1-math1',
    downloadUrl: 'https://drive.google.com/file/d/15cdwtAOou8IXRvcwOiwIEkdZgSHJ-Xx4/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
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