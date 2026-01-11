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
  {
    id: 'cse-s3-icgs',
    name: 'Indian Constitution & general studies',
    code: '3CS3',
    branchId: 'cse',
    semester: 3,
    credits: 3
  },
  // 4th semester subjects 
  {
    id: 'cse-s4-dms',
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
    id: 'cse-s5-itc',
    name: 'Information Theory & Coding',
    code: '5CS3-01',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  {
    id: 'cse-s5-cd',
    name: 'Compiler Design',
    code: '5CS4-02',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },{
    id: 'cse-s5-os',
    name: 'Operating System',
    code: '5CS4-03',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },{
    id: 'cse-s5-cgm',
    name: 'Computer Graphics & Multimedia',
    code: '5CS4-04',
    branchId: 'cse',
    semester: 5,
    credits: 3
  },
  {
    id: 'cse-s5-aa',
    name: 'Analysis Of Algorithm',
    code: '5CS5-05',
    branchId: 'cse',
    semester: 5, 
    credits: 3
  },
  {
    id: 'cse-s5-wc',
    name: 'Wireless Communication',
    code: '5CS5-11',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  {
    id: 'cse-s5-hci',
    name: 'Human Compiler Interaction',
    code: '5CS5-12',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  // {
  //   id: 'cse-s5-bio',
  //   name: 'Bioinformatics',
  //   code: '5CS5-13',
  //   branchId: 'cse',
  //   semester: 5,
  //   credits: 2
  // },
   {
    id: 'cse-s5-extra',
    name: 'Other Papers',
    code: '5CS5',
    branchId: 'cse',
    semester: 5,
    credits: 2
  },
  // 6th semester sunjects 
   {
    id: 'cse-s6-dip',
    name: 'Digital Image Processing',
    code: '6CS3--01',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s6-ml',
    name: 'Machine Learning',
    code: '6CS4-02',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
   {
    id: 'cse-s6-bio',
    name: 'Bioinformatics',
    code: '6CS6-13',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s6-iss',
    name: 'Information Security System',
    code: '6CS4-03',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s6-aco',
    name: 'Computer Architecture & Organization',
    code: '6CS4-04',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
   {
    id: 'cse-s6-ai',
    name: 'Artificial Intelligence ',
    code: '6CS4-05',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s6-cc',
    name: 'Cloud Computing',
    code: '6CS4-06',
    branchId: 'cse',
    semester: 6,
    credits: 3
  },
  {
    id: 'cse-s6-ds',
    name: 'Distributed System',
    code: '6C54-11',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  {
    id: 'cse-s6-sdn',
    name: 'Software Defined Network',
    code: '6CS5-12',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  {
    id: 'cse-s6-eerp',
    name: 'Ecommerce & ERP',
    code: '6CS4-13',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
   {
    id: 'cse-s6-extra',
    name: 'Other Papers',
    code: '5CS5',
    branchId: 'cse',
    semester: 6,
    credits: 2
  },
  //7th semester papers
  {
    id: 'cse-s7-iot',
    name: 'Internet Of Things',
    code: '7CS4-01',
    branchId: 'cse',
    semester: 7,
    credits: 3
  },
  {
    id: 'cse-s7-oe1',
    name: 'Open Elective-I ',
    code: '7CS4',
    branchId: 'cse',
    semester: 7,
    credits: 3
  },
  // 8th semester subjects 
  {
    id: 'cse-s8-bda',
    name: 'Big Data Analytics',
    code: '8CS4-01',
    branchId: 'cse',
    semester: 8,
    credits: 3
  },
  {
    id: 'cse-s8-oe2',
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
    id: 'ee-s3-ae',
    name: 'Advance Mathematics',
    code: '3EE2-01',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-mefa',
    name: 'Managerial Economics & Financial Accounting',
    code: '3EE2-03',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
   {
    id: 'ee-s3-pgp',
    name: 'Power Generation Processes',
    code: '3EE3-04',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
   {
    id: 'ee-s3-eca',
    name: 'Electrical Circuit Analysis ',
    code: '3EE4-05',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-ae',
    name: 'Analog Electronics',
    code: '3EE4-06',
    branchId: 'ee',
    semester: 3,
    credits: 3
  }, {
    id: 'ee-s3-em1',
    name: 'Electrical Machine -I',
    code: '3EE4-07',
    branchId: 'ee',
    semester: 3,
    credits: 3
  },
   {
    id: 'ee-s3-ef',
    name: 'Electromagnetic Fields',
    code: '3EE4-08',
    branchId: 'ee',
    semester: 3,
    credits: 2
  },
  // 4th semester subjects 
   {
    id: 'ee-s4-b',
    name: 'Biology',
    code: '4EE2-01',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-tc',
    name: 'Technical Communication',
    code: '4EE1-02',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-emi',
    name: 'Electronic Measurement & Instrumentation',
    code: '4EE3-04',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  {
    id: 'ee-s4-em2',
    name: 'Electrical Machine-II',
    code: '4EE4-05',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-pe',
    name: 'Power Electronics',
    code: '4EE4-06',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-ss',
    name: 'Signal & Systems',
    code: '4EE4-07',
    branchId: 'ee',
    semester: 4,
    credits: 3
  },
  {
    id: 'ee-s4-de',
    name: 'Digital Electronics',
    code: '4EE4-08',
    branchId: 'ee',
    semester: 4,
    credits: 2
  },
  // 5th semester subjects 
  {
    id: 'ee-s5-em',
    name: 'Electrical Materials',
    code: '5EE3-01',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-ps2',
    name: 'Power System-II',
    code: '5EE4-02',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-cs',
    name: 'Control System',
    code: '5EE4-03',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-micro',
    name: 'Microprocessor',
    code: '5EE4-04',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
  {
    id: 'ee-s5-emd',
    name: 'Electrical Machine Design',
    code: '5EE4-05',
    branchId: 'ee',
    semester: 5,
    credits: 3
  },
{
    id: 'ee-s5-rps',
    name: 'Restructured Power System',
    code: '5EE5-11',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-ew',
    name: 'Electromagnetic Wave',
    code: '5EE5-12',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  {
    id: 'ee-s5-dcs',
    name: 'Digital Control System',
    code: '5EE5-13',
    branchId: 'ee',
    semester: 5,
    credits: 2
  },
  // 6th semester subjects 
    {
    id: 'ee-s6-ca',
    name: 'Computer Architecture',
    code: '6EE3-01',
    branchId: 'ee',
    semester: 6,
    credits: 2
  },
   {
    id: 'ee-s6-ps2',
    name: 'Power System-II',
    code: '6EE4-02',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-psp',
    name: 'Power System Proctection',
    code: '6EE4-03',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-eeca',
    name: 'Electrical Energy Conservation & Auditing',
    code: '6EE4-04',
    branchId: 'ee',
    semester: 6,
    credits: 3
  }, 
 {
    id: 'ee-s6-ed',
    name: 'Electrical Drives',
    code: '6EE4-05',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-posp',
    name: 'Power System Planning',
    code: '6EE4-08',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-dsp',
    name: 'Digital Signal Processing',
    code: '6EE5-12',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
   {
    id: 'ee-s6-ehv',
    name: 'Electrical & Hybrid Vehicles',
    code: '6EE5-13',
    branchId: 'ee',
    semester: 6,
    credits: 3
  },
  // 7th semester subjects 
  {
    id: 'ee-s7-pec',
    name: 'PEC',
    code: '7EE5-11-12-13',
    branchId: 'ee',
    semester: 7,
    credits: 3
  },
   {
    id: 'ee-s7-eeoe1',
    name: 'Open Elective-I',
    code: '7EE5-11-12-13',
    branchId: 'ee',
    semester: 7,
    credits: 3
  },
  //8th semester subjects
  {
    id: 'ee-s8-pec',
    name: 'PEC ',
    code: '8EE4-11-12-13',
    branchId: 'ee',
    semester: 8,
    credits: 3
  },
   {
    id: 'ee-s8-eeoe2',
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
    uploadDate: '2025-06-1',
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
  },
  // 3rd semester papers 
   {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCE-ENGINEERING-MATHEMATICS-1-3E1206-FEB-2023',
    year: 2023,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/1hKzah64acKuKcfj-rcMVd_929bbvQeE2/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCE-ENGINEERING-MATHEMATICS-1-3E1206-FEB-2024',
    year: 2024,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/1xMRd_4TCaLXWIOSpBxk_mjaxT5nkLRO7/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCE-ENGINEERING-MATHEMATICS-1-3E1206-MAY-2022',
    year: 2022,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/1gKvYVf-HbE0LcCwQ8fRBedyqQojM2Ttj/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-3E1200-FEB-2023',
    year: 2023,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1A6XIu6Df0Ddy8f5opbyAmhB9w8m1vMRF/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-8',
    title: 'BTECH-3-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-3E1200-FEB-2024',
    year: 2024,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1CF7ieHpCAM1iLUgmfjFijfDN-0MRUj4S/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-3-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-3E1200-MAY-2022',
    year: 2022,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1212qi8gkURww20h8yAnQ2hu-EDVQfAgK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-TECHNICAL-COMMUNICATION-3E1250-FEB-2023',
    year: 2023,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1rxPPtqw2lxlcp4CrLu4mJ5rhhJ9X1v-u/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-TECHNICAL-COMMUNICATION-3E1250-FEB-2024',
    year: 2024,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1arDWIKKwreSEVvuXfzcr-uv_PPPln7s7/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-TECHNICAL-COMMUNICATION-3E1250-MAY-2022',
    year: 2022,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1UbvcaLPXq0GANZM72LcKQkayeFFR8sVu/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCED-ENGINEERING-MATHEMATICS-3E1201-2022',
    year: 2022,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/1vpxcVKBJC9kdranpLGbkJjg98u6acOsX/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-DATA-STRUCTURES-AND-ALGORITHMS-3E1202-MAY-2022',
    year: 2022,
    subjectId: 'cse-s3-dsa',
    downloadUrl: 'https://drive.google.com/file/d/1_LIorNaLv51NMh1J9llYuwr35iyjJAB9/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-DIGITAL-ELECTRONICS-3E1203-MAY-2022',
    year: 2022,
    subjectId: 'cse-s3-de',
    downloadUrl: 'https://drive.google.com/file/d/1l12sn14G33xaCNTokIt0glaU8w814oJQ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-MICROPROCESSOR-AND-MICROCONTROLLER-CSL204-2023',
    year: 2023,
    subjectId: 'cse-s4-mi',
    downloadUrl: 'https://drive.google.com/file/d/1IvXoz2pRqAn9x1ZIZVEfD5opWJJZfxrx/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCED-ENGINEERING-MATHEMATICS-3E1201-FEB-2024',
    year: 2024,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/1wEJfMxcoWV-T8jGCoVDS7T5td4d0QPkw/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-3-SEM-ADVANCED-ENGINEERING-MATHEMATICS-3E1201-JAN-2025',
    year: 2025,
    subjectId: 'cse-s3-aem',
    downloadUrl: 'https://drive.google.com/file/d/19q8U9kT9MR6XEGjWmvvB4IegAzRRaovk/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-8',
    title: 'BTECH-3-SEM-DATA-STRUCTURE-AND-ALGORITHMS-DEC-2023',
    year: 2023,
    subjectId: 'cse-s3-dsa',
    downloadUrl: 'https://drive.google.com/file/d/1-eJTT_Zzxy4Aky0tKTvTak7pWiCYYGEV/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DATA-STRUCTURES-AND-ALGORITHMS-3E1202-FEB-2023',
    year: 2023,
    subjectId: 'cse-s3-dsa',
    downloadUrl: 'https://drive.google.com/file/d/1587QwHrB_CyJ8iS8IX2t6HCLznfWVP85/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
 {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DATA-STRUCTURES-AND-ALGORITHMS-3E1202-FEB-2024',
    year: 2024,
    subjectId: 'cse-s3-dsa',
    downloadUrl: 'https://drive.google.com/file/d/1hdxcuaFDLzvw0J7s8JnG4qXtLlv6gYSK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DIGITAL-ELECTRONICS-3E1203-FEB-2023',
    year: 2023,
    subjectId: 'cse-s3-de',
    downloadUrl: 'https://drive.google.com/file/d/10M7DlubI13RHcTZxjGD8oIrxHU4K6sot/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DIGITAL-ELECTRONICS-3E1203-FEB-2024',
    year: 2024,
    subjectId: 'cse-s3-de',
    downloadUrl: 'https://drive.google.com/file/d/1WAaY0Mbae0D3BmYD1DCyw7EaXWnGTdvr/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DIGITAL-ELECTRONICS-3E1203-JAN-2025',
    year: 2025,
    subjectId: 'cse-s3-de',
    downloadUrl: 'https://drive.google.com/file/d/1kTQK2lE6kuM-Fau7660wWpwUFtacwlZW/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DIGITAL-ELECTRONICS-31N0402-2024',
    year: 2024,
    subjectId: 'cse-s3-de',
    downloadUrl: 'https://drive.google.com/file/d/1UGqmkiBuTNHokts2zAr1LknrrHKWuUZ_/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-DISCRETE-MATHEMATICAL-STRUCTURES-DEC-2023',
    year: 2023,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/11rmNcAzpIVZAiczeEX8pS23Pegz7TXEd/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-OBJECT-ORIENTED-PROGRAMMING-3E1204-JAN-2025',
    year: 2025,
    subjectId: 'cse-s3-oops',
    downloadUrl: 'https://drive.google.com/file/d/1M62-Hczb_c7CbvlSXNrcwXm77Up7LlLe/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-OBJECT-ORIENTED-PROGRAMMING-3E1204-JAN-2024',
    year: 2025,
    subjectId: 'cse-s3-oops',
    downloadUrl: 'https://drive.google.com/file/d/1w33G8LgLiTgiNabQXM0piyg49Vz27I9I/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-3-SEM-OBJECT-ORIENTED-PROGRAMMING-3E1204-JAN-2022',
    year: 2025,
    subjectId: 'cse-s3-oops',
    downloadUrl: 'https://drive.google.com/file/d/1IisyHFbc9dq0zRWPMzhu6L7HnvZOwRnE/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-8',
    title: 'BTECH-EE-EC-EIC-CS-IT-3-SEM-GENERAL-STUDIES-HUL201-2024',
    year: 2024,
    subjectId: 'cse-s3-icgs',
    downloadUrl: 'https://drive.google.com/file/d/1l_IaO8KKE7VNR8Vsmj8UM5rf_OJz9b1u/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-3-SEM-INDIAN-CONSTITUTION-HUL203-2023',
    year: 2023,
    subjectId:  'cse-s3-icgs',
    downloadUrl: 'https://drive.google.com/file/d/1Rd6lbfH6DEGT_1LZ9_bVE6VJWor9EqOD/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },

  // 4th semester papers 
 {
    id: 'paper-8',
    title: 'BTECH-3-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-4E1302-2025',
    year: 2025,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1JYBk6R2-XSqx0-GCNKqkM23SJcaCCcfZ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-4-SEM-TECHNICAL-COMMUNICATION-4E1303-2025',
    year: 2025,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1UnZAPz-cltj65Oz8XFPOFJVg8cV6t6N4/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-DISCRETE-MATHEMATICS-STRUCTURE-4E1301-2025',
    year: 2025,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/18uTCgqjeNKE9TYSC_fXu69_O4sQbl1d0/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-MICROPROCESSOR-AND-INTERFACES-4E1304-2025',
    year: 2025,
    subjectId: 'cse-s4-mi',
    downloadUrl: 'https://drive.google.com/file/d/1uklz9fvkRwchENuDWaL1_s41uVvLqFpB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-THEORY-OF-COMPUTATION-4E1306-2025',
    year: 2025,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1ewwmdElqJqhRPVFbpen986LBg6ZSto35/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  
 // ishke baad dekhna h konse papers upload hua h 
  {
    id: 'paper-8',
    title: 'BTECH-4-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-4E1302-2024',
    year: 2024,
    subjectId: 'cse-s3-mefa', 
    downloadUrl: 'https://drive.google.com/file/d/1s1QRK58rgqePAquAGXGA5xycr8NpnllG/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-4-SEM-TECHNICAL-COMMUNICATION-4E1303-2024',
    year: 2024,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1mx2DBwMKSWxVIx6tBGpVaYONQAzK7Bp1/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-DATA-COMMUNICATION-AND-COMPUTER-NETWORKS-4E1307-2024',
    year: 2024,
    subjectId: 'cse-s4-dccn',
    downloadUrl: 'https://drive.google.com/file/d/1SDHHbXRypVclm5ZcbBHihYbBq9xGJHZx/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-DATABASE-MANAGEMENT-SYSTEM-4E1305-2024',
    year: 2024,
    subjectId: 'cse-s4-dbms',
    downloadUrl: 'https://drive.google.com/file/d/1ZWbWJA0BBRCOpYPErRHdaG3yLAFhE57S/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-DISCRETE-MATHEMATICS-STRUCTURE-4E1301-2024',
    year: 2024,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/1thOHCmaY0wSCr-hWAP5GWhBMXSzglQjE/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-MICROPROCESSOR-AND-INTERFACES-4E1304-2024',
    year: 2024,
    subjectId: 'cse-s4-mi',
    downloadUrl: 'https://drive.google.com/file/d/1E5pQATVqX_mvS9EzqpCdV1SZXnJawyrN/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-THEORY-OF-COMPUTATION-4E1306-2024',
    year: 2024,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1B1tnXvyTLQefGE4DmJcB-HaMCweltu7f/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-IT-4-SEM-PRINCIPLE-OF-COMMUNICATION-4E1330-2024',
    year: 2024,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/12CDsW_0RRj_oYQo4MNqoJMFLkqA28pWA/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-4-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-410003-JULY-2023',
    year: 2023,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1nxBwag3OQzmnaU5UiK5pJ0WC3KAgHuq0/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-4-SEM-TECHNICAL-COMMUNICATION-4E1303-JUL-2023',
    year: 2023,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1dlwZ3AEHddgTlrxmkIbeXXLsT2LItHe5/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-AID-CS-IT-CAI-4-SEM-DATA-COMMUNICATION-AND-COMPUTER-NETWORKS-4E1307-JUL-2023',
    year: 2023,
    subjectId: 'cse-s4-dccn',
    downloadUrl: 'https://drive.google.com/file/d/1cKz-_eHeeq2flIdS1WPqOdo6JzUhL_c1/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-AID-CS-IT-CAI-4-SEM-DISCRETE-MATHEMATICS-STRUCTURE-4E1301-JUL-2023',
    year: 2023,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/1zb7QBdVtT02Y8c5ZiSZeq2gN03bpiwPU/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CAI-CS-IT-AID-4-SEM-DATABASE-MANAGEMENT-SYSTEM-4E1305-JUL-2023',
    year: 2023,
    subjectId: 'cse-s4-dbms',
    downloadUrl: 'https://drive.google.com/file/d/1OEhhm7pORfEcCW0_YwNKq2YLFFWKT3Zy/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-4-SEM-DATABASE-MANAGEMENT-SYSTEM-4CSDC10-MAY-2023',
    year: 2023,
    subjectId: 'cse-s4-dbms',
    downloadUrl: 'https://drive.google.com/file/d/1h1a3yon2UmvOaZhMYGwhvtVs5XsbO72X/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8', // check this 
    title: 'BTECH-CS-IT-4-SEM-SOFTWARE-TESTING-4ITDC07-2023',
    year: 2023,
    subjectId: 'cse-s4-st',
    downloadUrl: 'https://drive.google.com/file/d/1UAtnMTbPSDt_bC9Jdx1Lxfk3ejahBFuP/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-AID-CAI-4-SEM-THEORY-OF-COMPUTATION-4E1306-JUL-2023',
    year: 2023,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1LnWsAOJpWxhgYoJrencS4CJcN43-9TO-/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-ALL-4-SEM-DATA-BASE-MANAGEMENT-SYSTEMS-41N0404-AUG-2023',
    year: 2023,
    subjectId: 'cse-s4-dbms',
    downloadUrl: 'https://drive.google.com/file/d/1F8pTSnigLLAGNWcEFUU_oNSVmDe-OIqN/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-ALL-4-SEM-DISCRETE-MATHEMATICS-41N0401-AUG-2023',
    year: 2023,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/14LTyXgePbrVdZcQlVfhqwn9hnt28WmYO/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-ALL-4-SEM-INTRODUCTION-TO-JAVA-PROGRAMMING-41N0406-AUG-2023',
    year: 2023,
    subjectId: 'cse-s4-jp', //check this 
    downloadUrl: 'https://drive.google.com/file/d/1Tq08DnyeyZQkEh768NAOurbGubbeFdtQ/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',// check this
    title: 'BTECH-CS-IT-ALL-4-SEM-INTRODUCTION-TO-PYTHON-PROGRAMMING-41N0405-AUG-2023',
    year: 2023,
    subjectId: 'cse-s4-pp',
    downloadUrl: 'https://drive.google.com/file/d/1qbC_9SEG_BQeg0TFZQs0H-zLOOeLij1U/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-ALL-4-SEM-MICROPROCESSOR-AND-INTERFACES-41N0402-AUG-2023',
    year: 2023,
    subjectId: 'cse-s4-mi',
    downloadUrl: 'https://drive.google.com/file/d/1BdSgNf-1mf8jHqkg17hEKvUF5dlPcK22/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-ALL-4-SEM-THEORY-OF-COMPUTATION-41N0403-AUG-2023',
    year: 2025,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1y2pZ-ZleGxUfdCm64GBatCdUsbq6mJmj/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-IT-4-SEM-PRINCIPLE-OF-COMMUNICATION-4E1330-2023',
    year: 2023,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1RvQa5xsYr5Z4TYXbUHEOBf5WeA_GahGZ/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-4-SEM-MANAGERIAL-ECONOMICS-AND-FINANCIAL-ACCOUNTING-4E1302-2022',
    year: 2022,
    subjectId: 'cse-s3-mefa',
    downloadUrl: 'https://drive.google.com/file/d/1Xt-qs2iQog_OxIoQ7vHqE-xRep7ZsHYa/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-4-SEM-TECHNICAL-COMMUNICATION-4E1303-2022',
    year: 2022,
    subjectId: 'cse-s4-tc',
    downloadUrl: 'https://drive.google.com/file/d/1mqVwFylebPvjRfll2VkbSeSoOF1Af2lo/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-AID-CAI-4-SEM-DATA-COMMUNICATION-AND-COMPUTER-NETWORKS-4E1307-2022',
    year: 2022,
    subjectId: 'cse-s4-dccn',
    downloadUrl: 'https://drive.google.com/file/d/1ZY2bfae2a4oMrzmIYnOXbEF7fNeaSglG/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-AID-CAI-4-SEM-DATABASE-MANAGEMENT-SYSTEM-4E1305-2022',
    year: 2022,
    subjectId: 'cse-s4-dbms',
    downloadUrl: 'https://drive.google.com/file/d/1ViSkwm8MWDwMvj_X1tE9WbcR6vZeQNRt/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-AID-CAI-4-SEM-DISCRETE-MATHEMATICS-STRUCTURE-4E1301-2022',
    year: 2022,
    subjectId: 'cse-s4-dms',
    downloadUrl: 'https://drive.google.com/file/d/1dAu9jryWP-qTT6emXD2socmLH1brup_a/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-CS-IT-AID-CAI-4-SEM-THEORY-OF-COMPUTATION-4E1306-2022',
    year: 2022,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1G6lSW_fRMalfoBjeSm9WnKKsuHjoEuaB/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-8',
    title: 'BTECH-IT-4-SEM-PRINCIPLE-OF-COMMUNICATION-4E1330-2022',
    year: 2022,
    subjectId: 'cse-s4-toc',
    downloadUrl: 'https://drive.google.com/file/d/1PV9zUWncinElRA2od8Qk61iry6RT3jSl/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  }, 

  

  // 5th semester papers
    
 {
    id: 'paper-1',
    title: 'BTECH-AID-CAI-CDS-5-SEM-DATA-MINING-CONCEPTS-AND-TECHNIQUES-5E1821-2024',
    year: 2024,
    subjectId: 'cse-s5-extra',
    downloadUrl: 'https://drive.google.com/file/d/1g_jbLDndLrklvJ7DFL6RmrtvFNmIpq67/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-5-SEM-HUMAN-COMPUTER-INTERACTION-5E1357-JAN-2022',
    year: 2022,
    subjectId: 'cse-s5-hci',
    downloadUrl: 'https://drive.google.com/file/d/1miOJdBzIuKx29ZmLNfE3iCOs73X7-52q/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-5-SEM-INFORMATION-THEORY-AND-CODING-5E1351-MAR-2021',
    year: 2021,
    subjectId: 'cse-s5-itc',
    downloadUrl: 'https://drive.google.com/file/d/13G9fe3mFKnxd7TDQV8Vfxp9SoUSC-R8d/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-5-SEM-INFORMATION-THEORY-AND-CODING-5E1351-MAR-2022',
    year: 2022,
    subjectId: 'cse-s5-itc',
    downloadUrl: 'https://drive.google.com/file/d/1P52Rs8O1S0UBpFGAB48QWKf0C-xK04KY/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-5-SEM-INFORMATION-THEORY-AND-CODING-5E1351-MAR-2022',
    year: 2022,
    subjectId: 'cse-s5-itc',
    downloadUrl: 'https://drive.google.com/file/d/1kiqDLbMKnV0PLV4OPrJDz76j8jvKZ-z5/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-5-SEM-OPERATING-SYSTEMS-5CSDC13-2024',
    year: 2024,
    subjectId: 'cse-s5-os',
    downloadUrl: 'https://drive.google.com/file/d/1gIAA3V1TEugT2Nlxmvv9sxr54zr-0wVl/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-ANALYSIS-OF-ALGORITHM-5E1755-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-aa',
    downloadUrl: 'https://drive.google.com/file/d/1jcoJB3wYWGv5LRtfSg0c1jqVCgikVGrI/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-ANALYSIS-OF-ALGORITHMS-5E1355-MAR-2021',
    year: 2021,
    subjectId: 'cse-s5-aa',
    downloadUrl: 'https://drive.google.com/file/d/1mFqSmn1xtQUWnIopF9eDn6WledWoOqKD/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-ANALYSIS-OF-ALGORITHMS-5E1355-MAR-2022',
    year: 2022,
    subjectId: 'cse-s5-aa',
    downloadUrl: 'https://drive.google.com/file/d/1n03PnxYXNgCugO05_VHcqDtsgXBe78Ia/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPILER-DESIGN-5E1352-JAN-2022',
    year: 2022,
    subjectId: 'cse-s5-cd',
    downloadUrl: 'https://drive.google.com/file/d/11bf_7eCnBwqnvwSUq_QFKFxmBWeNrs-k/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPILER-DESIGN-5E1352-MAR-2021',
    year: 2021,
    subjectId: 'cse-s5-cd',
    downloadUrl: 'https://drive.google.com/file/d/1tTW2YVCIDxvrjUEly4N6qTEfv7dh2Psf/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPILER-DESIGN-5E1752-2024',
    year: 2024,
    subjectId: 'cse-s5-cd',
    downloadUrl: 'https://drive.google.com/file/d/1X18VotxHWA7GsLgA8NJEg00kygvIQPvA/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPUTER-GRAPHICS-AND-MULTIMEDIA-5E1354-JAN-2022',
    year: 2022,
    subjectId: 'cse-s5-cgm',
    downloadUrl: 'https://drive.google.com/file/d/1LoXUfrorTqsoi7AMNsxDgI2lyNacuMCD/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPUTER-GRAPHICS-AND-MULTIMEDIA-5E1354-MAR-2021',
    year: 2021,
    subjectId: 'cse-s5-cgm',
    downloadUrl: 'https://drive.google.com/file/d/1Dyo9Fiq2N1etsOGRIdJRCoyAHBO06lhe/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPUTER-GRAPHICS-AND-MULTIMEDIA-5E1754-2024',
    year: 2024,
    subjectId: 'cse-s5-cgm',
    downloadUrl: 'https://drive.google.com/file/d/1gKvjCTtlZt808sSQIUy7TURCzEJ_2M8O/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-COMPUTER-GRAPHICS-AND-MULTIMEDIA-5E1754-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-cgm',
    downloadUrl: 'https://drive.google.com/file/d/1areT1uoH_9_ZvdJIeJyeThcz3cKGwplM/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-CYBER-SECURITY-MANAGEMENT-DEC-2023',
    year: 2023,
    subjectId: 'cse-s5-extra',
    downloadUrl: 'https://drive.google.com/file/d/1I822F6yuEho1Phi1UuUKJy92HouLWBw7/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-DATA-MINING-CONCEPTS-AND-TECHNIQUES-5E1821-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-extra',
    downloadUrl: 'https://drive.google.com/file/d/1_mNxlbZv2AVvnSsGHalUcIow0htjFgPe/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-DESIGN-AND-ANALYSIS-OF-ALGORITHMS-NOV-2023',
    year: 2023,
    subjectId: 'cse-s5-extra',
    downloadUrl: 'https://drive.google.com/file/d/1dqjus38sCrTZUeQtD77bKkThh5hxDYsw/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-FUNDAMENTALS-OF-BLOCK-CHAIN-5E1826-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-extra',
    downloadUrl: 'https://drive.google.com/file/d/1CNN0Es9CFlz9kCG0NHP11ueX40cFqE5J/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-HUMAN-COMPUTER-INTERACTION-5E1757-2024',
    year: 2024,
    subjectId: 'cse-s5-hci',
downloadUrl:'https://drive.google.com/file/d/1Qzk28atjjfEMKFp73BWlQp8xbw4r3m44/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-HUMAN-COMPUTER-INTERACTION-5E1757-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-hci',
downloadUrl:'https://drive.google.com/file/d/1Q3y1XCIvlELpFfMVEiyw1TcrHOOpYNjE/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-INFORMATION-THEORY-AND-CODING-5E1751-2024',
    year: 2024,
    subjectId: 'cse-s5-itc',
downloadUrl:'https://drive.google.com/file/d/1a0k2hgYeZRjjthwMPos9d_QNpbNtfv99/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
 {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-INFORMATION-THEORY-AND-CODING-5E1751-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-itc',
downloadUrl:'https://drive.google.com/file/d/1L54IdBmRkeEvfVKjjk0dx9WKU4mz5Yoz/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-OPERATING-SYSTEM-5E1353-JAN-2022',
    year: 2022,
    subjectId: 'cse-s5-os',
 downloadUrl:'https://drive.google.com/file/d/1R8Z_aqAF-3djWj_sKiKkHOzGV3R4mjRt/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-OPERATING-SYSTEM-5E1353-MAR-2021',
    year: 2021,
    subjectId: 'cse-s5-os',
downloadUrl:'https://drive.google.com/file/d/1jC84JsLPiqxtGzqvsXRa6Otb5CjI8XiB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-OPERATING-SYSTEM-5E1753-2024',
    year: 2024,
    subjectId: 'cse-s5-os',
 downloadUrl:'https://drive.google.com/file/d/1jfCnJM9OH-xJ6fTmDNa0P_UCnmgQVYrt/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-OPERATING-SYSTEM-5E1753-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-os',
downloadUrl:'https://drive.google.com/file/d/1EQbVLnMmGaRyGvJpiqDFCi7cKnXr1GAB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-5-SEM-WIRELESS-COMMUNICATION-5E1756-FEB-2024',
    year: 2024,
    subjectId: 'cse-s5-wc',
downloadUrl:'https://drive.google.com/file/d/13yzcoN6FLtDX1Zl2UV59zULjXrYtJ1Qv/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-5-SEM-OPERATING-SYSTEM-5E1753-2024',
    year: 2024,
    subjectId: 'cse-s5-os',
downloadUrl:'https://drive.google.com/file/d/1D4R8YDWfoNrpCnvLyG3hjMalkzmyw2aB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-CAI-5-SEM-ANALYSIS-OF-ALGORITHM-5E1755-FEB-2023',
    year: 2023,
    subjectId: 'cse-s5-aa',
downloadUrl:'https://drive.google.com/file/d/1uBqwKQjXpwzkKHPpC3eiisywB4902Cxy/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-CAI-5-SEM-COMPILER-DESIGN-5E1752-FEB-2023',
    year: 2023,
    subjectId: 'cse-s5-cd',
 downloadUrl:'https://drive.google.com/file/d/1k-4sO9MJ69we-1logNeaseplUl0KOn5p/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-CAI-5-SEM-COMPUTER-GRAPHICS-AND-MULTIMEDIA-5E1754-FEB-2023',
    year: 2023,
    subjectId: 'cse-s5-cgm',
downloadUrl:'https://drive.google.com/file/d/1xU4CYAU4Gfg85PjKQU2D96dfXLsWxtE9/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-CAI-5-SEM-OPERATING-SYSTEM-5E1753-FEB-2023',
    year: 2023,
    subjectId: 'cse-s5-os',
 downloadUrl:'https://drive.google.com/file/d/1z0BuMLHv9h-xNGDk4_X7a2oC64CZauw1/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-IT-4-SEM-MICROPROCESSOR-AND-INTERFACES-5E1788-2024',
    year: 2024,
    subjectId: 'cse-s4-mi',
 downloadUrl:'https://drive.google.com/file/d/1H4_i-u6_ZdEORuW07GeMM-SEY061F3QN/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-4-SEM-MICROPROCESSOR-AND-INTERFACES-5E1788-FEB-2023',
    year: 2023,
    subjectId: 'cse-s4-mi',
 downloadUrl:'https://drive.google.com/file/d/100GMV-nN5FSxDm5rVGDwjykgez2uyBxx/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-4-SEM-MICROPROCESSOR-AND-INTERFACES-5E1788-FEB-2024',
    year: 2024,
    subjectId: 'cse-s4-mi',
downloadUrl:'https://drive.google.com/file/d/1GkR2tXB9PlqUO_uMYyXVPyGsimR4pFY7/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-5-SEM-SOFTWARE-TESTING-AND-PROJECT-MANAGEMENT-5E1789-FEB-2023',
    year: 2023,
    subjectId: 'cse-s6-extra',
downloadUrl:'https://drive.google.com/file/d/1qy3J7PQgzNZKpyxhx6a9nYFq4ZGIBtXN/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  
  //6th semester papers

 {
    id: 'paper-1',
    title: 'BTECH-AID-CAI-6-SEM-NATURAL-LANGUAGE-PROCESSING-6E7108-2025',
    year: 2025,
    subjectId: 'cse-s6-extra',
downloadUrl:'https://drive.google.com/file/d/1IsClO4LEczmMsVF8rUyRCO861lGAok1d/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CAI-CS-IT-AID-6-SEM-CLOUD-COMPUTING-6E7106-JUL-2023',
    year: 2023,
    subjectId: 'cse-s6-cc',
downloadUrl:'https://drive.google.com/file/d/1iz599wPwyoYii40SRsyXKjpJmj5ojtKQ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CAI-CS-IT-AID-6-SEM-INFORMATION-SECURITY-SYSTEMS-6E7103-JUL-2023',
    year: 2023,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/1pHANYGFiqCveI8LLVwXNWw_9CcSJnxvG/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
{
    id: 'paper-1',
    title: 'BTECH-CAI-CS-IT-AID-6-SEM-PRINCIPLES-OF-ARTIFICIAL-INTELLIGENCE-6E7105-JUL-2023',
    year: 2023,
    subjectId: 'cse-s6-extra',
downloadUrl:'https://drive.google.com/file/d/19uKvFTvDp8DpJWnIMl4RQ3tXn1AcQU5F/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CAI-CS-IT-AID-CAI-6-SEM-MACHINE-LEARNING-6E7102-JUL-2023',
    year: 2023,
    subjectId: 'cse-s6-ml',
downloadUrl:'https://drive.google.com/file/d/1CI8AAgCa0lQFq5SD80EK32VWDeYe_VUy/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-6-SEM-CLOUD-COMPUTING-6E1560-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-cc',
downloadUrl:'https://drive.google.com/file/d/1NL7Pum7ac-tJzpT24hvo4mVAYrXQTvvR/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-6-SEM-BLOCK-CHAIN-AND-CYBER-SECURITY-6E7193-2025',
    year: 2025,
    subjectId: 'cse-s6-extra',
downloadUrl:'https://drive.google.com/file/d/1dT7j5vAuwErsLB2n33A40235o41kZ1e7/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-6-SEM-CYBER-FORENSIC-6E7194-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-extra',
downloadUrl:'https://drive.google.com/file/d/1D20l_omlTUsgLXwqJhoc5uSMrlcLNFvk/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-ARTIFICIAL-INTELLIGENCE-610405-AUG-2023',
    year: 2023,
    subjectId: 'cse-s6-ai',
downloadUrl:'https://drive.google.com/file/d/1ufC-466Z1Sd7yU1gHLC2GDjSWQcf1drJ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-CLOUD-COMPUTING-6E7106-2024',
    year: 2024,
    subjectId: 'cse-s6-cc',
downloadUrl:'https://drive.google.com/file/d/1afZv3jBDzk5MZbZYNF5CPE6JWHJuU-u-/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-6E7104-2024',
    year: 2024,
    subjectId: 'cse-s6-aco',
downloadUrl:'https://drive.google.com/file/d/1bT_ew6B20Y8oNUu1vF97GWJPPbtKybMj/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-DIGITAL-IMAGE-PROCESSING-6E7101-2024',
    year: 2024,
    subjectId: 'cse-s6-dip',
downloadUrl:'https://drive.google.com/file/d/1C11HdX1SDM4EA2ZiQzuiNUcD6cfIGKYn/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-DISTRIBUTED-SYSTEM-6E7136-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-ds',
downloadUrl:'https://drive.google.com/file/d/1-zvtakAzd64z83rc7HePgSZQImlAn8h8/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-E-COMMERCE-AND-ERP-6E7138-2024',
    year: 2024,
    subjectId: 'cse-s6-eerp',
downloadUrl:'https://drive.google.com/file/d/17RAYnOSBH4d4qXLoMd7MjivEvPPs1M73/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-INFORMATION-SECURITY-SYSTEM-610403-AUG-2023',
    year: 2023,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/11UqHAEZqGh2ZrtMc1raHMLGEYQwR31cj/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-INFORMATION-SECURITY-SYSTEMS-6E7103-2024',
    year: 2024,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/1tTfvbYhJaIu6iCSkGr949ND7B91Qgdcs/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-INFORMATION-SECURITY-SYSTEMS-61N0403-2024',
    year: 2024,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/16Z_cJmM77dPQ9k5JTO_2bphxEfOf70Cs/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-MACHINE-LEARNING-6E7102-2024',
    year: 2024,
    subjectId: 'cse-s6-ml',
downloadUrl:'https://drive.google.com/file/d/11FopiTM40lFfR8tHGJGTtZ2CbkyrPgwy/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-MACHINE-LEARNING-610402-AUG-2023',
    year: 2023,
    subjectId: 'cse-s6-ml',
downloadUrl:'https://drive.google.com/file/d/1-eD1FmjoQ6jgT3U7Vu3HfM04iW42c65S/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-PRINCIPLES-OF-ARTIFICIAL-INTELLIGENCE-6E7105-2024',
    year: 2024,
    subjectId: 'cse-s6-ai',
downloadUrl:'https://drive.google.com/file/d/1LgXFbpRe_Iu689rwOUHH1-o14EkurQIQ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-ARTIFICIAL-INTELLIGENCE-AND-DATA-SCIENCE-CLOUD COMPUTING-6E7106-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-ai',
downloadUrl:'https://drive.google.com/file/d/1-bAiOLm5iairvp0Jy5AqmooWz1Qwk7am/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-6E7104-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-aco',
downloadUrl:'https://drive.google.com/file/d/1IWd48s-2XBwvbXTp8fwgWHfM0ry2VSiD/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
     {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-DIGITAL-IMAGE-PROCESSING-6E7101-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-dip',
downloadUrl:'https://drive.google.com/file/d/1S4VV6zWVzw25rETUvISprLOxzBFZAt7k/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-INFORMATION-SECURITY-SYSTEMS-6E7103-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/1-X9EjmHHQ-nlZ6YDIdkSr7iOix5emjmL/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-MACHINE-LEARNING-6E7102-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-ml',
downloadUrl:'https://drive.google.com/file/d/1xvZpK6ZKiQ1GG9Z9d7L76g1fVx3lu7jx/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-6-SEM-PRINCIPLES-OF-ARTIFICIAL-INTELLIGENCE-6E7105-MAY-2025',
    year: 2025,
    subjectId: 'cse-s6-ai',
downloadUrl:'https://drive.google.com/file/d/146twuWcncBBOeTUSd35fPX0z5YOEeGa-/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AID-CAI-6-SEM-DIGITAL-IMAGE-PROCESSING-6E7101-JUN-2023',
    year: 2023,
    subjectId: 'cse-s6-dip',
downloadUrl:'https://drive.google.com/file/d/1LhO_SMb9p2cQwl31NzXyKXKzu8peQxpF/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-IT-AIML-CSDS-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-610404-AUG-2023',
    year: 2023,
    subjectId: 'cse-s6-cao',
downloadUrl:'https://drive.google.com/file/d/1ZbDXbcsXctDuseQKTzfP72AsevUhayU9/view?usp=drive_link',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-ALL-6-SEM-DIGITAL-IMAGE-PROCESSING-610401-AUG-2023',
    year: 2023,
    subjectId: 'cse-s6-dip',
downloadUrl:'https://drive.google.com/file/d/1DpP7JDo5PVx653XSPSNCPphE2D9MhhIs/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-ARTIFICIAL-INTELLIGENCE-6E1555-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-ai',
downloadUrl:'https://drive.google.com/file/d/1ehLTI0S9_25Kn1nrzI0wuHIOmfGpGOZ6/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-6E1554-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-cao',
downloadUrl:'https://drive.google.com/file/d/1NlRvquG8IBJUNCCSHsokRCiWJGBJ72Ox/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-6E1554-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-cao',
downloadUrl:'https://drive.google.com/file/d/1VsK9gSXtlD0N-CJ1rT5WwQloMWWJFiAA/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-COMPUTER-ARCHITECTURE-AND-ORGANIZATION-6E1554-JUN-2022(2)',
    year: 2022,
    subjectId: 'cse-s6-cao',
downloadUrl:'https://drive.google.com/file/d/1EAxkZUyJffxbIfALVnnmeluLeBunqltU/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
    {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-DIGITAL-IMAGE-PROCESSING-6E1551-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-dip',
downloadUrl:'https://drive.google.com/file/d/14U9EeSDDshJvloM2Z_g1xYk_YYnUonS0/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
     {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-DISTRIBUTED-SYSTEM-6E1650-2022',
    year: 2022,
    subjectId: 'cse-s6-ds',
downloadUrl:'https://drive.google.com/file/d/1UNQgrjhIyq-5pEu5Sv9psMz9MwYwEGC0/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-6-SEM-MACHINE-LEARNING-6E1552-JUN-2022',
    year: 2022,
    subjectId: 'cse-s6-ml',
downloadUrl:'https://drive.google.com/file/d/18T3XqZhNveLmsmB1JbluynENu5vuVkQK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  // 7th semester papers 
   {
    id: 'paper-1',
    title: 'BTECH-AI-EC-EI-7-SEM-DIGITAL-SIGNAL-PROCESSING-7E7072-MAR-2021',
    year: 2021,
    subjectId: 'cse-s7-dsp',
downloadUrl:'https://drive.google.com/file/d/1Tc_dRV8ghPMS-cf2A1uHe_0GB7np9rMC/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-6-SEM-CLOUD-COMPUTING-7E7031-MAR-2021',
    year: 2021,
    subjectId: 'cse-s6-cc',
downloadUrl:'https://drive.google.com/file/d/1HPCjCddlujbjkUe-15nBYjoay9oeGIpK/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-7-SEM-INTERNET-OF-THINGS-7E1721-JAN-2022',
    year: 2022,
    subjectId: 'cse-s7-iot',
downloadUrl:'https://drive.google.com/file/d/11li5UtJH7wEut1rkoZZH_Kc2HXJaWYkO/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-7-SEM-INTERNET-OF-THINGS-7E1721-JAN-2023',
    year: 2023,
    subjectId: 'cse-s7-iot',
downloadUrl:'https://drive.google.com/file/d/124xWFmn5Lr4RDeryMwxJEKSao5OTE0F-/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-7-SEM-INTERNET-OF-THINGS-7E1721-MAR-2021',
    year: 2021,
    subjectId: 'cse-s7-iot',
downloadUrl:'https://drive.google.com/file/d/1DaysIBSRyUVLzfHc_uqPCMe57yUZA5qr/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-7-SEM-QUALITY-MANAGEMENT-7E1722-JAN-2023',
    year: 2023,
    subjectId: 'cse-s7-oe1',
downloadUrl:'https://drive.google.com/file/d/122a700u0iRo3FIlS9_16tNngUYhoA_LJ/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-CS-IT-6-SEM-INFORMATION-SYSTEM-SECURITY-7E7032-MAR-2021',
    year: 2021,
    subjectId: 'cse-s6-iss',
downloadUrl:'https://drive.google.com/file/d/1KY-55Rjfp-0yJ9IuUlrOO9ZRXUCuTYta/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-7-SEM-ADVANCE-DATA-BASE-MANAGEMENT-SYSTEMS-7E7056-MAR-2022',
    year: 2022,
    subjectId: 'cse-s7-oe1',
downloadUrl:'https://drive.google.com/file/d/1SoCYNcqRGvvlnfqMDcueqSAkqLvywtMB/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-8-SEM-BIG-DATA-ANALYTICS-7E1724-MAR-2021',
    year: 2021,
    subjectId: 'cse-s8-bda',
downloadUrl:'https://drive.google.com/file/d/1_2HeZLHtHwq-J8Bf9k0d0SyyGBI2TlLm/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
   {
    id: 'paper-1',
    title: 'BTECH-IT-7-SEM-INTERNET-PROGRAMMING-7E7052-MAR-2021',
    year: 2021,
    subjectId: 'cse-s7-iot',
downloadUrl:'https://drive.google.com/file/d/1B444tCVhn1A3uprmWhRzzIbzDRrO5MYU/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  // 8th semester papers 
   {
    id: 'paper-1',
    title: 'BTECH-8-SEM-DISASTER-MANAGEMENT-8E1860-JUN-2023',
    year: 2023,
    subjectId: 'cse-s8-oe2',
downloadUrl:'https://drive.google.com/file/d/1jJ96jgP23J6H4YlFXzp8015Tigu3MD4I/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-8-SEM-BIG-DATA-ANALYTICS-8E1809-JUN-2022',
    year: 2022,
    subjectId: 'cse-s8-bda',
downloadUrl:'https://drive.google.com/file/d/14HVoqMlufnGh0yVGRYQnenqeXqWw_T9_/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-8-SEM-BIG-DATA-ANALYTICS-8E1809-JUN-2023',
    year: 2023,
    subjectId: 'cse-s8-bda',
downloadUrl:'https://drive.google.com/file/d/18w-q5V0WwkKZy01tl6uQUS-3lm9ONdGg/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-CS-8-SEM-MOBILE-COMPUTING-8E8161-JUN-2022',
    year: 2022,
    subjectId: 'cse-s8-oe2',
downloadUrl:'https://drive.google.com/file/d/1Mat0QQdMnMG-vCmECa8h27-c37WBc9rX/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  },
  {
    id: 'paper-1',
    title: 'BTECH-IT-7-SEM-INTERNET-OF-THINGS-8E1810-JUN-2023',
    year: 2023,
    subjectId: 'cse-s7-iot',
downloadUrl:'https://drive.google.com/file/d/1zZETHIQr9CBMpidFrUhkf-_J4mOqqVW6/view?usp=sharing',
    uploadDate: '2025-01-15',
    fileSize: '4.2 MB'
  }
  
  

  
];