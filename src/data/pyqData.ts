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
  {
    id: 'cse-s4-os',
    name: 'Internet Of Things',
    code: '7CS4-01',
    branchId: 'cse',
    semester: 7,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Open Elective-I ',
    code: '7CS4',
    branchId: 'cse',
    semester: 7,
    credits: 3
  },
  // 8th semester subjects 
  {
    id: 'cse-s4-os',
    name: 'Big Data Analytics',
    code: '8CS4-01',
    branchId: 'cse',
    semester: 8,
    credits: 3
  },
  {
    id: 'cse-s4-os',
    name: 'Open Elective-I',
    code: '8CS4',
    branchId: 'cse',
    semester: 8,
    credits: 3
  },
  //End of cse subjects
  //elctronics and communication engineering 
  {
    id: 'cse-s1-math',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'ece',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'ece',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-csk',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'ece',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-mech',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'ece',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-electrical',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'ece',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s2-math',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'ece',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chem',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'ece',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-hv',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'ece',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'ece',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-pps',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'ece',
    semester: 2,
    credits: 2
  },
  //electronics engineering 
  // 1st semester subjects
  {
    id: 'cse-s1-math',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'ee',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'ee',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-csk',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'ee',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-mech',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'ee',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-electrical',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'ee',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s2-math',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'ee',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chem',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'ee',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-hv',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'ee',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'ee',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-pps',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'ee',
    semester: 2,
    credits: 2
  },
  // 3rd semester subjects
  {
    id: 'ee-s3-os',
    name: 'Advance Mathematics',
    code: '3EE2-01',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-os',
    name: 'Managerial Economics & Financial Accounting',
    code: '3EE2-03',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
   {
    id: 'ee-s3-os',
    name: 'Power Generation Processes',
    code: '3EE3-04',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
   {
    id: 'ee-s3-os',
    name: 'Electrical Circuit Analysis ',
    code: '3EE4-05',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-os',
    name: 'Analog Electronics',
    code: '3EE4-06',
    branchId: 'ee',
    semester: 3,
    credits: 3
  }, {
    id: 'ee-s3-os',
    name: 'Electrical Machine -I',
    code: '3EE4-07',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-os',
    name: 'Electromagnetic Fields',
    code: '3EE4-08',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
  // 4th semester subjects 
   {
    id: 'ee-s4-os',
    name: 'Biology',
    code: '4EE2-01',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-os',
    name: 'Technical Communication',
    code: '4EE1-02',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-os',
    name: 'Electronic Measurement & Instrumentation',
    code: '4EE3-04',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-os',
    name: 'Electrical Machine-II',
    code: '4EE4-05',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-os',
    name: 'Power Electronics',
    code: '4EE4-06',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-os',
    name: 'Signal & Systems',
    code: '4EE4-07',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-os',
    name: 'Digital Electronics',
    code: '4EE4-08',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  // 5th semester subjects 
  {
    id: 'ee-s5-os',
    name: 'Electrical Materials',
    code: '5EE3-01',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-os',
    name: 'Power System-II',
    code: '5EE4-02',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-os',
    name: 'Control System',
    code: '5EE4-03',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-os',
    name: 'Microprocessor',
    code: '5EE4-04',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-os',
    name: 'Electrical Machine Design',
    code: '5EE4-05',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
{
    id: 'ee-s5-os',
    name: 'Restructured Power System',
    code: '5EE5-11',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-os',
    name: 'Electromagnetic Wave',
    code: '5EE5-12',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-os',
    name: 'Digital Control System',
    code: '5EE5-13',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  // 6th semester subjects 
    {
    id: 'ee-s6-os',
    name: 'Computer Architecture',
    code: '6EE3-01',
    branchId: 'ee',
    semester: 6,
    credits: 2
  },
   {
    id: 'ee-s6-os',
    name: 'Power System-II',
    code: '6EE4-02',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-os',
    name: 'Power System Proctection',
    code: '6EE4-03',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-os',
    name: 'Electrical Energy Conservation & Auditing',
    code: '6EE4-04',
    branchId: 'ee',
    semester: 6,
    credits: 3
  }, 
 {
    id: 'ee-s6-os',
    name: 'Electrical Drives',
    code: '6EE4-05',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-os',
    name: 'Power System Planning',
    code: '6EE4-08',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-os',
    name: 'Digital Signal Processing',
    code: '6EE5-12',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-os',
    name: 'Electrical & Hybrid Vehicles',
    code: '6EE5-13',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
  // 7th semester subjects 
  {
    id: 'ee-s7-os',
    name: 'PEC',
    code: '7EE5-11-12-13',
    branchId: 'ee',
    semester: 7,
    credits: 3
  },
   {
    id: 'ee-s7-os',
    name: 'Open Elective-I',
    code: '7EE5-11-12-13',
    branchId: 'ee',
    semester: 7,
    credits: 3
  },
  //8th semester subjects
  {
    id: 'ee-s8-os',
    name: 'PEC ',
    code: '8EE4-11-12-13',
    branchId: 'ee',
    semester: 8,
    credits: 3
  },
   {
    id: 'ee-s8-os',
    name: 'Open Elective-I',
    code: '8EE4-11-12-13',
    branchId: 'ee',
    semester: 8,
    credits: 3
  },
  //end of electrical engineering

//     //mechanical enginnering subjects 
{
    id: 'cse-s1-math',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'me',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'me',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-csk',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'me',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-mech',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'me',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-electrical',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'me',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s2-math',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'me',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chem',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'me',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-hv',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'me',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'me',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-pps',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'me',
    semester: 2,
    credits: 2
  },

    // civil engineering subjects 
    {
    id: 'cse-s1-math',
    name: 'Engineering Mathematics-1',
    code: '1FY2-01',
    branchId: 'ce',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-physics',
    name: 'Engineering Physics',
    code: '1FY2-02',
    branchId: 'ce',
    semester: 1,
    credits: 4
  },
  {
    id: 'cse-s1-csk',
    name: 'Communication Skills',
    code: '1FY1-04',
    branchId: 'ce',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-mech',
    name: 'Mechanical Engineering',
    code: '2FY3-07',
    branchId: 'ce',
    semester: 1,
    credits: 2
  },{
    id: 'cse-s1-electrical',
    name: 'Electrical Engineering ',
    code: '1FY3-08',
    branchId: 'ce',
    semester: 1,
    credits: 2
  },
  // 2nd semester subjects
  {
    id: 'cse-s2-math',
    name: 'Engineering Mathematics',
    code: '2FY2-01',
    branchId: 'ce',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-chem',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    branchId: 'ce',
    semester: 2,
    credits: 4
  },
  {
    id: 'cse-s2-hv',
    name: 'Human Values',
    code: '1FY1-05',
    branchId: 'ce',
    semester: 2,
    credits: 2
  },
  {
    id: 'cse-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    branchId: 'ce',
    semester: 2,
    credits: 2
  },
  
  {
    id: 'cse-s2-pps',
    name: 'Problem Solving For Programming',
    code: '2FY3-06',
    branchId: 'ce',
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

  // engineering physics papers
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-ENGINEERING-PHYSICS-1E3102-2025',
    year: 2025,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1R_XL_BRGdPp_QgbyV-7OvrpGIcvBmn6Z/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-2-SEM-ENGINEERING-PHYSICS-2E3203-JUN-2025',
    year: 2025,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/13Yqc18kcuAtPdcXQ7RbpVvTyhWkCyWzr/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-3',
    title: 'BTECH-1-SEM-ENGINEERING-PHYSICS-2E3203-2024',
    year: 2024,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1xd4c3_RrOrGLFEqvk03APUoAHCZpNGMe/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-4',
    title: 'BTECH-2-SEM-ENGINEERING-PHYSICS-2E3203-2024',
    year: 2024,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/14cyMVVFcxYPlgDxeAxbarkypdVz23efO/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-1-SEM-ENGINEERING-PHYSICS-11N502-MAY-2023',
    year: 2023,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1k_6Orn6oMGkfdyN8kfDs7gyotu-cD-eO/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
     {
    id: 'paper-6',
    title: 'BTECH-2-SEM-ENGINEERING-PHYSICS-2E3203-2023',
    year: 2023,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1lRam7zKBvNuCY51TD3xhiaIS7X5A2RsV/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-7',
    title: 'BTECH-1-SEM-ENGINEERING-PHYSICS-11N502-JUL-2022',
    year: 2022,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/15jvY1y--Z2ERyA6lha83_qJn_7snmrBV/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-1-SEM-ENGINEERING-PHYSICS-1E3102-MAY-2022',
    year: 2022,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1P4MP9TA3-Lp5xJ80J3J4hJrSqemxx52l/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-9',
    title: 'BTECH-2-SEM-ENGINEERING-PHYSICS-2E3203-JUL-2022',
    year: 2022,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1cfD-Mq6nNmbSF6B7Hf0MRb7MRMDKN5Pq/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-10',
    title: 'BTECH-2-SEM-ENGINEERING-PHYSICS-1E2402',
    year: 2022,
    subjectId: 'cse-s1-physics',
    downloadUrl: 'https://drive.google.com/file/d/1aqY9AOO2s5rRhS7B6g562ls__2mEpRWT/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },

  //

  // communication skills papers 
{
    id: 'paper-1',
    title: 'BTECH-1-SEM-COMMUNICATION-SKILLS-1E3104-2025',
    year: 2025,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1j8DA5fRAQ0f1MobGzMm33_4yVCDTUAcV/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-1-SEM-COMMUNICATION-SKILLS-1E3104-2024',
    year: 2024,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1usJYlA2m8b4yLwlQIzzrg3gSBC8yBGS6/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-3',
    title: 'BTECH-2-SEM-COMMUNICATION-SKILLS-2E3205-2024',
    year: 2024,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1ZhNvdwmIo1x9gvPYLY4VeiGG_hdLq_KN/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-4',
    title: 'BTECH-1-SEM-COMMUNICATION-SKILLS-1E3104-2023',
    year: 2023,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/15KW9g3FC_vPquxkWURXte6l-_1EdS6kT/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-2-SEM-COMMUNICATION-SKILL-21N504-2023',
    year: 2023,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1adjAQyrt-Z4WR_7Umr7DVE_Nd3ZUHxFO/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-6',
    title: 'BTECH-1-SEM-COMMUNICATION-SKILLS-1E3104-MAY-2022',
    year: 2022,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1GzhQzXcNTmELoGKGsNzFZ1DRFvcBFPMG/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-7',
    title: 'BTECH-2-SEM-COMMUNICATION-SKILLS-2E3205-JUL-2022',
    year: 2022,
    subjectId: 'cse-s1-csk',
    downloadUrl: 'https://drive.google.com/file/d/1L0zncqvIDVDbq2TFTMEHhbiv8Jq16uPy/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  //
  // mechanical engineering papers 
    {
    id: 'paper-1',
    title: 'BTECH-1-SEM-BASIC-MECHANICAL-ENGINEERING-1E3107-2025',
    year: 2025,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1uf39-iJ8r8-iQCzFTFNHWizOMAccsXys/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-2-SEM-BASIC-MECHANICAL-ENGINEERING-2E3206-JUN-2025',
    year: 2025,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1v9PCUrIIGHVcA9F3fVqky4cixHYTl9q-/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-3',
    title: 'BTECH-1-SEM-BASIC-MECHANICAL-ENGINEERING-1E3107-2024',
    year: 2024,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1ufsFzPd2ZwJK4Gie779uBUuyr10Uj9mV/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-4',
    title: 'BTECH-2-SEM-BASIC-MECHANICAL-ENGINEERING-2E3206-2024',
    id: 'paper-3',
    title: 'Engineering Mathematics-1 - Previous Year Questions 2024',
    year: 2024,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/10qBWT9Of4qSvsREZ4O0EcgtWNpq-CQ0n/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-5',
    title: 'BTECH-1-SEM-BASIC-MECHANICAL-ENGINEERING-1E3107-2023',
    year: 2023,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1FbPl-n4BuQ0UirsqGXDBtYs2v_MuFV8S/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {id: 'paper-6',
    title: 'BTECH-2-SEM-BASIC-MECHANICAL-ENGINEERING-2E3206-2023',
    year: 2023,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1ggSVWUKYPKGKN5331wJn2eC-v8kO6tIs/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-7',
    title: 'BTECH-1-SEM-BASIC-MECHANICAL-ENGINEERING-1E3107-MAY-2022',
    year: 2022,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/1ThE-jPG-3ok1faOvO9FMjagO3apKiYgk/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-2-SEM-BASIC-MECHANICAL-ENGINEERING-1E3107-2022',
    year: 2022,
    subjectId: 'cse-s1-mech',
    downloadUrl: 'https://drive.google.com/file/d/18QhCFVmCY9kkV2rLbyGsqShorGIqGJXu/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },

  //
  //electrical engineering papers 
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-ENGINEERING-ELECTRICAL-1E3101-2024',
    year: 2024,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1Z79GWGpWAFbbzUUWQDi1upf9BbbA-gVN/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-2-SEM-BASIC-ELECTRICAL-ENGINEERING-2E3209-2024',
    year: 2024,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/11JQ2hl_X2Xmxg-DSQvRfZBq-npa3alk6/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-3',
    title: 'BTECH-1-SEM-BASIC-ELECTRICAL-ENGINEERING-1E3108-2023',
    year: 2023,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1L0b4X4d55cYwMa5MwDTcbg13wrk9HoX3/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
    {
    id: 'paper-4',
    title: 'BTECH-2-SEM-BASIC-ELECTRICAL-ENGINEERING-1E3108-2023',
    year: 2023,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1ubzxuOwmcxSv2yKFCOq_N8nHGHnQtleF/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-1-SEM-BASIC-ELECTRICAL-ENGINEERING-11N507-JUL-2022',
    year: 2022,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1McyP46w_HiiwyPwdX4Ze32G8_fJpfQFt/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
   {
    id: 'paper-6',
    title: 'BTECH-1-SEM-BASIC-ELECTRICAL-ENGINEERING-1E3108-MAY-2022',
    year: 2022,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1_RWBDgF9Xen9avggwivA35kZujepivcB/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  {
    id: 'paper-7',
    title: 'BTECH-2-SEM-BASIC-ELECTRICAL-ENGINEERING-21N507-2022',
    year: 2022,
    subjectId: 'cse-s1-electrical',
    downloadUrl: 'https://drive.google.com/file/d/1oO4Ed6NvxoEjNBTThhiXgCEEueN278jG/view?usp=sharing',
    uploadDate: '2025-06-11',
    fileSize: '2.5 MB'
  },
  //
  // advanced mathematics papers -II
  {
    id: 'paper-1',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2025',
    year: 2025,
    subjectId: 'cse-s2-math',
    downloadUrl: 'https://drive.google.com/file/d/1XTlhFHPY-1T3IXCjgVhI7BPSd-KyOm7y/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-2',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2024',
    year: 2024,
    subjectId: 'cse-s2-math',
    downloadUrl: 'https://drive.google.com/file/d/1vVrm3d8IT-_OIsSILBsmSVY_dFT9q1Op/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-3',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-JUN-2024',
    year: 2023,
    subjectId: 'cse-s2-math',
    downloadUrl: 'https://drive.google.com/file/d/1h1kgtpu3p6PwPZscirq2l6r4MSKIKqcv/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-4',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E3201-2022',
    year: 2022,
    subjectId: 'cse-s2-math',
    downloadUrl: 'https://drive.google.com/file/d/1JVnRS_AiM7l55GtHN7rWC2fhA5YkJT3I/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-2-SEM-ENGINEERING-MATHEMATICS-2-2E2401',
    year: 2021,
    subjectId: 'cse-s2-math',
    downloadUrl: 'https://drive.google.com/file/d/1R3mVvsHTNur1Sc5aPTuf3TK0ip6jgbCr/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.3 MB'
  },
  //
  // chemistry engineering papers
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-ENGINEERING-CHEMISTRY-1E3103-2025',
    year: 2025,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1vFl99bdXr4gs0AowDwSGDnXXb6T_u0cK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.2 MB'
  },
  {
    id: 'paper-2',
    title: 'BTECH-1-SEM-ENGINEERING-CHEMISTRY-1E3103-2024',
    year: 2024,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1FpUrQ3QVXUaipd6DZsNdGSAmcJN_dZRB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
  {
    id: 'paper-3',
    title: 'BTECH-2-SEM-ENGINEERING-CHEMISTRY-2E3202-2024',
    year: 2024,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1WjQ3j8STQBjqVYbJeyOHZt5W3rf7C9HU/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
  {
    id: 'paper-5',
    title: 'BTECH-1-SEM-ENGINEERING-CHEMISTRY-1E3103-2023',
    year: 2023,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1m2CbsxUnJnSzdnVKz44fsMlkw52XwM-y/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
   {
    id: 'paper-4',
    title: 'BTECH-2-SEM-ENGINEERING-CHEMISTRY-2E3202-2023',
    year: 2023,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1X8crNePTXSDAjgE6b5_SGOupCvid4dv5/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
     {
    id: 'paper-5',
    title: 'BTECH-1-SEM-ENGINEERING-CHEMISTRY-11N503-JUL-2022',
    year: 2022,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1tS0rpdU9UaYUjopMnH5BfvPRg1Ja6L__/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
    {
    id: 'paper-6',
    title: 'BTECH-1-SEM-ENGINEERING-CHEMISTRY-1E3103-MAY-2022',
    year: 2022,
    subjectId: 'cse-s2-chem',
    downloadUrl: 'https://drive.google.com/file/d/1EU4R7nmtKOpmWkxlk5gJiXMTcsY4C3BZ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '3.0 MB'
  },
  //
 // human values papers
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-ENGINEERING-HUMAN VALUES-1E3103-2024',
    year: 2024,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1Yx_cEw_fa8qnPgaskrFvhfVY0cPYKW30/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
  // Communication Skills Papers
  {
    id: 'paper-1',
    title: 'BTECH-2-SEM-HUMAN-VALUES-2E3204-2024',
    year: 2024,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1TnYNg7lox5OX9rgrALxu81JOzezwME_5/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
   {
    id: 'paper-2',
    title: 'BTECH-1-SEM-HUMAN-VALUES-1E3105-2023',
    year: 2023,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1IO68dY3aEpxa4fFzuRpgogNuPPxqGxTY/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
   {
    id: 'paper-3',
    title: 'BTECH-2-SEM-HUMAN-VALUES-2E3204-2023',
    year: 2023,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1kQfK3vfI-qSExh8vH7s-4NIIj5IP4YBB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
     {
    id: 'paper-4',
    title: 'BTECH-1-SEM-HUMAN-VALUES-1E3105-MAY-2022',
    year: 2022,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1dU3sycmGBqwkq7Nk9TYr0BW6RVG_Gy9o/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-2-SEM-HUMAN-VALUES-1E3105-2022',
    year: 2022,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/1Ds26W4QAChn3SLnoxneYfhOnia5heBJ4/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
   {
    id: 'paper-6',
    title: 'BTECH-1-SEM-HUMAN-VALUES-1E2405',
    year: 2022,
    subjectId: 'cse-s2-hv',
    downloadUrl: 'https://drive.google.com/file/d/16DZtiNjWb0iWXCFqswvH0KENqSKhYLCw/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.8 MB'
  },
  //
   // basic civil engineering papers   
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-BASIC-CIVIL-ENGINEERING-1E3109-2025',
    year: 2025,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/1AH5L2ZFkQGM18n4mgR4JK7SGIHrA-ZJw/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
    {
    id: 'paper-2',
    title: 'BTECH-1-SEM-BASIC-CIVIL-ENGINEERING-1E3109-2024',
    year: 2024,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/183SnH-8vEDrfiM_3WZqku82Y0jZh3oa-/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
  {
    id: 'paper-3',
    title: 'BTECH-2-SEM-BASIC-CIVIL-ENGINEERING-1E3109-2024',
    year: 2024,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/1Nzm9S8HvrxP8qfTirqOovKDK0ajektuj/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
   {
    id: 'paper-4',
    title: 'BTECH-1-SEM-BASIC-CIVIL-ENGINEERING-1E3109-2023',
    year: 2023,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/11-SfTD2_xDiKFin8LztrJpZ2hhgDuJSm/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
  {
    id: 'paper-5',
    title: 'BTECH-2-SEM-BASIC-CIVIL-ENGINEERING-1E3109-2023',
    year: 2023,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/1Q8PHQ8v_nRX-y60oqWWJzvIb_eBleAio/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
     {
    id: 'paper-6',
    title: 'BTECH-1-SEM-INTRODUCTION-TO-BUILT-ENVIRONMENT-11N506',
    year: 2022,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/1QAmaAXQuJqgDxAb-ezuzLD4MUoDCEzkK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
     {
    id: 'paper-7',
    title: 'BTECH-1-SEM-BASIC-CIVIL-ENGINEERING-1E3109-MAY-2022',
    year: 2022,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/19tW_V7KHfCmuAGllC9KQ9kkVBofM5Jso/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-2-SEM-BASIC-CIVIL-ENGINEERING-2E3208-JUL-2022',
    year: 2022,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/141472mJLnaB6uuB4csHbIqnvucl-YrjK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
  {
    id: 'paper-9',
    title: 'BTECH-1-SEM-BASIC-CIVIL-ENGINEERING-1E2409',
    year: 2022,
    subjectId: 'cse-s2-civil',
    downloadUrl: 'https://drive.google.com/file/d/1fADL43xTA8WDLgBDQJSeoA7R9p54Wjp2/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '2.6 MB'
  },
 //
  // problem solving papers Papers
  
  {
    id: 'paper-1',
    title: 'BTECH-1-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E3106-2025',
    year: 2025,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1WvMRzloiuzTopuC4bionn43ug5-4Mab2/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
     {
    id: 'paper-2',
    title: 'BTECH-1-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E3106-2024',
    year: 2024,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1ABSaPsCh9hqrM1WXvejFMlH9dJPDHvIz/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-3',
    title: 'BTECH-2-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-2E3207-2024.pdf',
    year: 2024,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/12WR9po1lwtWmqXEk7ecFrWi0XqwJkFHp/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-4',
    title: 'BTECH-1-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E3106-2023',
    year: 2023,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1u5GISUkaxGpFH3B7IncQhqFvQenHiL0Q/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-5',
    title: 'BTECH-2-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E3106-MAY-2023',
    year: 2023,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1pA7fPxctRF0IAzfMvbqYej7xQ0KrHl0z/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-6',
    title: 'BTECH-1-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E3106-MAY-2022',
    year: 2022,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1repHS_C0M7t62qBto2ysejRM2QpEC3Mv/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-7',
    title: 'BTECH-2-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-2E3207-JUL-2022',
    year: 2022,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1d7n8w-XvPKsZkl4smYosY-niboWn3Why/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-1-SEM-PROGRAMMING-FOR-PROBLEM-SOLVING-1E2406',
    year: 2021,
    subjectId: 'cse-s2-pps',
    downloadUrl: 'https://drive.google.com/file/d/1czqApvWIXDPHjGbHJ5zIOiVIHKTryPDx/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  }
  //
   
  
];