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
  // 3rd semester subjects
  {
    id: 'cse-s3-aem',
    name: 'Advance Engineering Mathematics',
    code: '3CS2-01',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-dsa',
    name: 'Data Structures And Algorithm',
    code: '3CS4-05',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-mefa',
    name: 'Mnnagerial Economics And Financial Engineering',
    code: '3CS1-03',
    branchId: 'cse',
    semester: 3,
    credits: 2
  },
  {
    id: 'cse-s3-de',
    name: 'Digital Electronics',
    code: '3CS3-04',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-oops',
    name: 'Object Oriented Programming',
    code: '3CS4-06',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  {
    id: 'cse-s3-se',
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
    id: 'cse-s4-tc',
    name: 'Technical communication',
    code: '4CS1-02',
    branchId: 'cse',
    semester: 4,
    credits: 2
  },
  {
    id: 'cse-s4-mi',
    name: 'Microprocessor & Interfaces',
    code: '4CS3-01',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-dbms',
    name: 'Database Management System',
    code: '4CS4-05',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-toc',
    name: 'Theory Of Computation',
    code: '4CS4-06',
    branchId: 'cse',
    semester: 4,
    credits: 3
  },
  {
    id: 'cse-s4-dccn',
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
  }
  
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