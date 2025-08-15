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
     code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
     code: '1FY3-08',
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
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
   code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },

  // Second Year - Semester 3
  {
     id: 'aem-s3',
    name: 'Advance Engineering Mathematics',
    code: '3CS2-01',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'oop-s3',
    name: 'Object Oriented Programming',
    code: '3CS4-06',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
    id: 'de-s3',
   name: 'Digital Electronics',
    code: '3CS3-04',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'dsa-s3',
     name: 'Data Structures And Algorithm',
    code: '3CS4-05',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'mefa-s3',
    name: 'Managerial Economics And Financial Engineering',
    code: '3CS1-03',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
    id: 'se-s3',
    name: 'Software Engineering',
    code: '3CS4-07',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
// Second Year - Semester 4
  {
    id: 'dms-s4',
    name: 'Discrete Mathematics Structure',
    code: '4CS2-01',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'tc-s4',
    name: 'Technical communication',
    code: '4CS1-02',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
   id: 'mi-s4',
    name: 'Microprocessor & Interfaces',
    code: '4CS3-01',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'dbms-s4',
    name: 'Database Management System',
    code: '4CS4-05',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
   id: 'toc-s4',
    name: 'Theory Of Computation',
    code: '4CS4-06',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
    id: 'dccn-s4',
    name: 'Data Communication & Computer Networks',
    code: '4CS4-07',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  // 3rd year semester 5
   {
     id: 'itc-s5',
    name: 'Information Theory & Coding',
    code: '5CS3-01',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
    id: 'cd-s5',
    name: 'Compiler Design',
    code: '5CS4-02',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
    id: 'os-s5',
    name: 'Operating System',
    code: '5CS4-03',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   id: 'cgm-s5',
    name: 'Computer Graphics & Multimedia',
    code: '5CS4-04',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   id: 'aa-s5',
    name: 'Analysis Of Algorithm',
    code: '5CS5-05',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   
    id: 'wc-s5',
    name: 'Wireless Communication',
    code: '5CS5-11',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
     id: 'hci-s5',
    name: 'Human Compiler Interaction',
    code: '5CS5-12',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'bio-s5',
    name: 'Bioinformatics',
    code: '5CS5-13',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
// third year semester 6
  {
   id: 'dip-s6',
    name: 'Digital Image Processing',
    code: '6CS3--01',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'ml-s6',
    name: 'Machine Learning',
    code: '6CS4-02',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
    {
   id: 'cao-s6',
    name: 'Computer Architecture & Organization',
    code: '6CS4-04',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'ai-s6',
    name: 'Artificial Intelligence ',
    code: '6CS4-05',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'cc-s6',
    name: 'Cloud Computing',
    code: '6CS4-06',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'ds-s6',
    name: 'Distributed System',
    code: '6C54-11',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'sdn-s6',
    name: 'Software Defined Network',
    code: '6CS5-12',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'eerp-s6',
    name: 'Ecommerce & ERP',
    code: '6CS4-13',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  // forth year semester 7
    {
     id: 'iot-s7',
    name: 'Internet Of Things',
    code: '7CS4-01',
    year: 4,
    semester: 7,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  {
    id: 'oe1-s7',
    name: 'Open Elective-I ',
    code: '7CS4',
    year: 4,
    semester: 7,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  {
   id: 'bda-s8',
    name: 'Big Data Analytics',
    code: '8CS4-01',
    year: 4,
    semester: 8,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  {
    id: 'oe2-s8',
    name: 'Open Elective-I',
    code: '8CS4',
    year: 4,
    semester: 8,
    branch: 'CSE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
    
  // ECE Subjects
  // First Year ECE - Semester 1
  {
    id: 'math1-s1',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1',
    name: 'Basic Mechanical Engineering',
     code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
     code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },

  //  ECE  - Semester 2
  {
    id: 'math2-s2',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
   code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  //  ECE SEM 3
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

  // ELECTRICAL  Subjects
  // 1ST YEAR EE SEM 1
   {
    id: 'math1-s1',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1',
    name: 'Basic Mechanical Engineering',
     code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
     code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },

  //  EE  - Semester 2
  {
    id: 'math2-s2',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
   code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
   // EE - Semester 3
  {
     id: 'ae-s3',
    name: 'Advance Mathematics',
    code: '3EE2-01',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
   id: 'mefa-s3',
    name: 'Managerial Economics & Financial Accounting',
    code: '3EE2-03',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
   id: 'pgp-s3',
    name: 'Power Generation Processes',
    code: '3EE3-04',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'eca-s3',
    name: 'Electrical Circuit Analysis ',
    code: '3EE4-05',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
   id: 'ae-s3',
    name: 'Analog Electronics',
    code: '3EE4-06',
    code: '3CS1-03',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
   id: 'em1-s3',
    name: 'Electrical Machine -I',
    code: '3EE4-07',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
   {
    id: 'ef-s3',
    name: 'Electromagnetic Fields',
    code: '3EE4-08',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
// EE - Semester 4
  {
   id: 'b-s4',
    name: 'Biology',
    code: '4EE2-01',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'tc-s4',
    name: 'Technical communication',
    code: '4EE1-02',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },{
  id: 'emi-s4',
    name: 'Electronic Measurement & Instrumentation',
    code: '4EE3-04',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'pe-s4',
    name: 'Power Electronics',
    code: '4EE4-06',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
  id: 'em2-s4',
    name: 'Electrical Machine-II',
    code: '4EE4-05',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Object-oriented programming concepts',
    icon: '🎯'
  },
  {
    id: 'ss-s4',
    name: 'Signal & Systems',
    code: '4EE4-07',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
    {
   id: 'de-s4',
    name: 'Digital Electronics',
    code: '4EE4-08',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  // 3rd year semester 5
   {
     id: 'em-s5',
    name: 'Electrical Materials',
    code: '5EE3-01',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   id: 'ps2-s5',
    name: 'Power System-II',
    code: '5EE4-02',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   id: 'cs-s5',
    name: 'Control System',
    code: '5EE4-03',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
  id: 'micro-s5',
    name: 'Microprocessor',
    code: '5EE4-04',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
   id: 'emd-s5',
    name: 'Electrical Machine Design',
    code: '5EE4-05',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
    id: 'rps-s5',
    name: 'Restructured Power System',
    code: '5EE5-11',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  }, {
     id: 'ew-s5',
    name: 'Electromagnetic Wave',
    code: '5EE5-12',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'dcs-s5',
    name: 'Digital Control System',
    code: '5EE5-13',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
// third year semester 6
  {
    id: 'ca-s6',
    name: 'Computer Architecture',
    code: '6EE3-01',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'ps2-s6',
    name: 'Power System-II',
    code: '6EE4-02',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
    {
  id: 'psp-s6',
    name: 'Power System Proctection',
    code: '6EE4-03',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'eeca-s6',
    name: 'Electrical Energy Conservation & Auditing',
    code: '6EE4-04',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'ed-s6',
    name: 'Electrical Drives',
    code: '6EE4-05',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'posp-s6',
    name: 'Power System Planning',
    code: '6EE4-08',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
   id: 'dsp-s6',
    name: 'Digital Signal Processing',
    code: '6EE5-12',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'ehv-s6',
    name: 'Electrical & Hybrid Vehicles',
    code: '6EE5-13',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
  // forth year semester 7
    {
    id: 'pec-s7',
    name: 'PEC',
    code: '7EE5-11-12-13',
    year: 4,
    semester: 7,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  {
   id: 'eeoe1-s7',
    name: 'Open Elective-I',
    code: '7EE5-11-12-13',
    year: 4,
    semester: 7,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  
//EE SEM 8
{
   id: 'pec-s8',
    name: 'PEC-II',
    code: '8EE4-11-12-13',
    year: 4,
    semester: 8,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },  {
    id: 'eeoe2-s8',
    name: 'Open Elective-II',
    code: '8EE4-11-12-13',
    year: 4,
    semester: 8,
    branch: 'EE',
    description: 'Digital circuits and logic design',
    icon: '🔌'
  },
    
  // MECHANICAL SUBJECT MECH 
  // FIRST YEAR MECH SEM 1
   {
    id: 'math1-s1',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1',
    name: 'Basic Mechanical Engineering',
     code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
     code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },

  // First Year MECH  - Semester 2
  {
    id: 'math2-s2',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
   code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  // 2ND YEAR - MECH SEM 3
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
  },
       // CIVIL SUBJECT MECH 
  // FIRST YEAR CIVIL SEM 1
   {
    id: 'math1-s1',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '⚛️'
   },
  {
    id: 'physics-s1',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Basic physics principles and applications',
    icon: '🔧'
  },
  {
    id: 'comm-s1',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1',
    name: 'Basic Mechanical Engineering',
     code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1',
    name: 'Basic Electrical Engineering',
     code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },

  // First Year CIVIL  - Semester 2
  {
    id: 'math2-s2',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2',
    name: 'Engineering Chemistry',
   code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
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
    title: 'Waves Optics Notes',
    description: 'Theory covering mechanics, waves, and optics',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/13zjpU57j5qPC9puTU12QY0rJQA7BYMs-/view?usp=drive_link'
  },
   {
    id: 'physics-theory-1',
    title: 'Quantum Mechanics Notes',
    description: 'Theory covering Quantum Mechanics',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1UjMPjD1c4g8BnhPjyuefzZn1jYLe9cnv/view?usp=drive_link'
  },
   {
    id: 'physics-theory-1',
    title: 'Coherence and Optical Fibre Notes',
    description: 'Theory covering Coherence and Optical Fibre',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1uxk8aZpSWzJ9f-WfivGXU1dTibfcyb4a/view?usp=drive_link'
  },
   {
    id: 'physics-theory-1',
    title: 'Laser Notes',
    description: 'Theory covering laser ',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1fm5dJNGThyHOzIJcGP0edD7B1yYu865D/view?usp=drive_link'
  },
   {
    id: 'physics-theory-1',
    title: 'Material Science Notes',
    description: 'Theory covering Material Science ',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1nqkIv2fPTLzode2bTNND-djot2f0gaIS/view?usp=drive_link'
  },
   {
    id: 'physics-theory-1',
    title: 'Electromagnetism Notes',
    description: 'Theory covering Electromagnetism ',
    type: 'theory',
    subjectId: 'physics-s1',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1DbdLYuzoLUbjMR_AKoEQ6ZsYOdAbn0AT/view?usp=drive_link'
  },
  
  
  {
    id: 'physics-lab-1',
    title: 'Engineering Physics Lab All Experiments',
    description: 'Practical experiments and observations',
    type: 'lab',
    subjectId: 'physics-s1',
    fileSize: '2.7 MB',
    uploadDate: '2024-01-22',
    viewUrl: 'https://drive.google.com/file/d/1ce-kR7tVIKB5fpaqPIm547mxEW2m-YCZ/view?usp=drive_link'
  },
   {
    id: 'physics-book-1',
    title: 'Laser Chapter Book Notes',
    description: 'Reference textbook for Laser',
    type: 'books',
    subjectId: 'physics-s1',
    fileSize: '15.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://drive.google.com/file/d/1km_lTssd-EBO0ENmBEa_p9keAoicVjuc/view?usp=sharing'
  },
  
  // {
  //   id: 'physics-video-1',
  //   title: 'Engineering Physics Video Lectures',
  //   description: 'Conceptual explanations with demonstrations',
  //   type: 'videos',
  //   subjectId: 'physics-s1',
  //   duration: '60 minutes',
  //   uploadDate: '2024-01-28',
  //   viewUrl: 'https://example.com/physics-videos'
  // },

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
  // programming problem solving sem 2
   {
    id: 'pps-s2',
    title: 'Unit -I Fundamentals of Computer',
    description: 'Grammar, writing skills, and presentation techniques',
    type: 'theory',
    subjectId: 'pps-s2',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1YoRZUASS5FJ0mz_Gy9mStHxzCoj0jK5k/view?usp=drive_link'
  },
   {
    id: 'pps-s2',
    title: 'unit 2 PPS Number System',
    description: 'Number System Concepts',
    type: 'theory',
    subjectId: 'pps-s2',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1RMps2gEDp7hQqLa29eOYG5ptCSHhVjw1/view?usp=drive_link'
  },
   {
    id: 'pps-s2',
    title: 'Unit -III C Programming Notes',
    description: ' C Programming Notes',
    type: 'theory',
    subjectId: 'pps-s2',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1r-WRNlpzU4nHGuoitHJSbJ_pvV_zVCRI/view?usp=drive_link'
  },
     {
    id: 'pps-book-1',
    title: 'E Balagurusamy - Programming in ANSI C-McGraw Hill Education book',
    description: 'Reference textbook ',
    type: 'books',
    subjectId: 'pps-s2',
    fileSize: '24.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://drive.google.com/file/d/1y0A4EH4QSqUzrhulsxrzQ2tfib46YHNp/view?usp=drive_link'
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
    code: 'MECH',
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