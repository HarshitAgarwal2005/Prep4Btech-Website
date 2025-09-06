import { ContentSubject, ContentItem } from '../types';

export const contentSubjects: ContentSubject[] = [
  // First Year - Semester 1 (Common Subjects, differentiated by branch)
  // CSE
  {
    id: 'math1-s1-cse',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1-cse',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1-cse',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1-cse',
    name: 'Basic Mechanical Engineering',
    code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1-cse',
    name: 'Basic Electrical Engineering',
    code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },
  {
    id: 'camd-s1-cse',
    name: 'CAMD',
    code: '1FY3-29',
    year: 1,
    semester: 1,
    branch: 'CSE',
    description: 'Computer-Aided Machine Drawing',
    icon: '✏️'
  },
  // ECE
  {
    id: 'math1-s1-ece',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1-ece',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1-ece',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1-ece',
    name: 'Basic Mechanical Engineering',
    code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1-ece',
    name: 'Basic Electrical Engineering',
    code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'ECE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },
  // EE
  {
    id: 'math1-s1-ee',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1-ee',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1-ee',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1-ee',
    name: 'Basic Mechanical Engineering',
    code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1-ee',
    name: 'Basic Electrical Engineering',
    code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'EE',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },
  // MECH
  {
    id: 'math1-s1-mech',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1-mech',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1-mech',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1-mech',
    name: 'Basic Mechanical Engineering',
    code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1-mech',
    name: 'Basic Electrical Engineering',
    code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'MECH',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },
  // CIVIL
  {
    id: 'math1-s1-civil',
    name: 'Engineering Mathematics-I',
    code: '1FY2-01',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Fundamental mathematical concepts for engineering',
    icon: '📐'
  },
  {
    id: 'physics-s1-civil',
    name: 'Engineering Physics',
    code: '1FY2-02',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Basic physics principles and applications',
    icon: '⚛️'
  },
  {
    id: 'comm-s1-civil',
    name: 'Communication Skills',
    code: '1FY1-04',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'English communication and technical writing',
    icon: '💬'
  },
  {
    id: 'mech-s1-civil',
    name: 'Basic Mechanical Engineering',
    code: '2FY3-07',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Introduction to mechanical engineering concepts',
    icon: '⚙️'
  },
  {
    id: 'elec-s1-civil',
    name: 'Basic Electrical Engineering',
    code: '1FY3-08',
    year: 1,
    semester: 1,
    branch: 'CIVIL',
    description: 'Electrical circuits and basic electronics',
    icon: '⚡'
  },


  // First Year - Semester 2 (Common Subjects, differentiated by branch)
  // CSE
  {
    id: 'math2-s2-cse',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2-cse',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2-cse',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2-cse',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Introduction to programming concepts using C',
    icon: '💻'
  },
  {
    id: 'civil-s2-cse',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  {
    id: 'caeg-s2-cse',
    name: 'CAEG',
    code: '2FY3-28',
    year: 1,
    semester: 2,
    branch: 'CSE',
    description: 'Computer-Aided Engineering Graphics',
    icon: '📐'
  },
  // ECE
  {
    id: 'math2-s2-ece',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2-ece',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2-ece',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2-ece',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2-ece',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'ECE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  // EE
  {
    id: 'math2-s2-ee',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2-ee',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2-ee',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2-ee',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2-ee',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'EE',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  // MECH
  {
    id: 'math2-s2-mech',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2-mech',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2-mech',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2-mech',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2-mech',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'MECH',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },
  // CIVIL
  {
    id: 'math2-s2-civil',
    name: 'Engineering Mathematics-II',
    code: '2FY2-01',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Advanced mathematical concepts and applications',
    icon: '📊'
  },
  {
    id: 'chem-s2-civil',
    name: 'Engineering Chemistry',
    code: '2FY2-03',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Chemical principles for engineering applications',
    icon: '🧪'
  },
  {
    id: 'hv-s2-civil',
    name: 'Human Values',
    code: '1FY1-05',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Ethics, values and professional development',
    icon: '🤝'
  },
  {
    id: 'pps-s2-civil',
    name: 'Programming for Problem Solving',
    code: '2FY3-06',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Introduction to programming concepts',
    icon: '💻'
  },
  {
    id: 'civil-s2-civil',
    name: 'Basic Civil Engineering',
    code: '1FY3-09',
    year: 1,
    semester: 2,
    branch: 'CIVIL',
    description: 'Civil engineering fundamentals',
    icon: '🏗️'
  },


  // Second Year - Semester 3 - CSE
  {
    id: 'aem-s3-cse',
    name: 'Advance Engineering Mathematics',
    code: '3CS2-01',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Advanced topics in engineering mathematics',
    icon: '📈'
  },
  {
    id: 'oop-s3-cse',
    name: 'Object Oriented Programming',
    code: '3CS4-06',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Concepts of OOP using languages like C++ or Java',
    icon: '🎯'
  },
  {
    id: 'de-s3-cse',
    name: 'Digital Electronics',
    code: '3CS3-04',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Fundamentals of digital circuits and logic design',
    icon: '🔌'
  },
  {
    id: 'dsa-s3-cse',
    name: 'Data Structures And Algorithm',
    code: '3CS4-05',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Data organization and algorithmic problem solving',
    icon: '🔗'
  },
  {
    id: 'mefa-s3-cse',
    name: 'Managerial Economics And Financial Engineering',
    code: '3CS1-03',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Economic principles and financial management in engineering',
    icon: '💰'
  },
  {
    id: 'se-s3-cse',
    name: 'Software Engineering',
    code: '3CS4-07',
    year: 2,
    semester: 3,
    branch: 'CSE',
    description: 'Principles of software development life cycle',
    icon: '🔧'
  },

  // Second Year - Semester 4 - CSE
  {
    id: 'dms-s4-cse',
    name: 'Discrete Mathematics Structure',
    code: '4CS2-01',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Mathematical structures that are fundamentally discrete',
    icon: '🔢'
  },
  {
    id: 'tc-s4-cse',
    name: 'Technical communication',
    code: '4CS1-02',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Effective communication for technical fields',
    icon: '📝'
  },
  {
    id: 'mi-s4-cse',
    name: 'Microprocessor & Interfaces',
    code: '4CS3-01',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Architecture and programming of microprocessors',
    icon: '🤖'
  },
  {
    id: 'dbms-s4-cse',
    name: 'Database Management System',
    code: '4CS4-05',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Design and management of databases',
    icon: '🗃️'
  },
  {
    id: 'toc-s4-cse',
    name: 'Theory Of Computation',
    code: '4CS4-06',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Theoretical foundations of computer science',
    icon: '🧠'
  },
  {
    id: 'dccn-s4-cse',
    name: 'Data Communication & Computer Networks',
    code: '4CS4-07',
    year: 2,
    semester: 4,
    branch: 'CSE',
    description: 'Principles of data communication and networking',
    icon: '🌐'
  },

  // 3rd year semester 5 - CSE
  {
    id: 'itc-s5-cse',
    name: 'Information Theory & Coding',
    code: '5CS3-01',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Quantification, storage, and communication of information',
    icon: '📡'
  }, {
    id: 'cd-s5-cse',
    name: 'Compiler Design',
    code: '5CS4-02',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Principles and practices of compiler construction',
    icon: '⚙️'
  }, {
    id: 'os-s5-cse',
    name: 'Operating System',
    code: '5CS4-03',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Core concepts of operating systems',
    icon: '💻'
  }, {
    id: 'cgm-s5-cse',
    name: 'Computer Graphics & Multimedia',
    code: '5CS4-04',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Creating and manipulating visual content',
    icon: '🎨'
  }, {
    id: 'aa-s5-cse',
    name: 'Analysis Of Algorithm',
    code: '5CS5-05',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Analysis of algorithm complexity and performance',
    icon: '📊'
  }, {
    id: 'wc-s5-cse',
    name: 'Wireless Communication',
    code: '5CS5-11',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Principles of wireless communication systems',
    icon: '📶'
  }, {
    id: 'hci-s5-cse',
    name: 'Human Computer Interaction',
    code: '5CS5-12',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Design and use of computer technology',
    icon: '🧑‍💻'
  },
  {
    id: 'bio-s5-cse',
    name: 'Bioinformatics',
    code: '5CS5-13',
    year: 3,
    semester: 5,
    branch: 'CSE',
    description: 'Computational analysis of biological data',
    icon: '🧬'
  },

  // 3rd year semester 6 - CSE
  {
    id: 'dip-s6-cse',
    name: 'Digital Image Processing',
    code: '6CS3-01',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Processing digital images using algorithms',
    icon: '🖼️'
  },
  {
    id: 'ml-s6-cse',
    name: 'Machine Learning',
    code: '6CS4-02',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Algorithms that learn from data',
    icon: '🤖'
  },
  {
    id: 'cao-s6-cse',
    name: 'Computer Architecture & Organization',
    code: '6CS4-04',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Structure and behavior of computer systems',
    icon: '🏛️'
  },
  {
    id: 'ai-s6-cse',
    name: 'Artificial Intelligence',
    code: '6CS4-05',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Creating intelligent machines',
    icon: '🧠'
  },
  {
    id: 'cc-s6-cse',
    name: 'Cloud Computing',
    code: '6CS4-06',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'On-demand computing services over the internet',
    icon: '☁️'
  },
  {
    id: 'ds-s6-cse',
    name: 'Distributed System',
    code: '6CS4-11',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Systems with components on networked computers',
    icon: '🔗'
  },
  {
    id: 'sdn-s6-cse',
    name: 'Software Defined Network',
    code: '6CS5-12',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Network control is decoupled from forwarding functions',
    icon: '🌐'
  },
  {
    id: 'eerp-s6-cse',
    name: 'Ecommerce & ERP',
    code: '6CS4-13',
    year: 3,
    semester: 6,
    branch: 'CSE',
    description: 'Electronic commerce and enterprise resource planning',
    icon: '🛒'
  },

  // 4th year semester 7 - CSE
  {
    id: 'iot-s7-cse',
    name: 'Internet Of Things',
    code: '7CS4-01',
    year: 4,
    semester: 7,
    branch: 'CSE',
    description: 'Network of physical objects embedded with sensors',
    icon: '🛰️'
  }, {
    id: 'oe1-s7-cse',
    name: 'Open Elective-I',
    code: '7CS4-XX',
    year: 4,
    semester: 7,
    branch: 'CSE',
    description: 'Elective course from other departments',
    icon: '📚'
  },

  // 4th year semester 8 - CSE
  {
    id: 'bda-s8-cse',
    name: 'Big Data Analytics',
    code: '8CS4-01',
    year: 4,
    semester: 8,
    branch: 'CSE',
    description: 'Analyzing large and complex data sets',
    icon: '📊'
  }, {
    id: 'oe2-s8-cse',
    name: 'Open Elective-II',
    code: '8CS4-XX',
    year: 4,
    semester: 8,
    branch: 'CSE',
    description: 'Elective course from other departments',
    icon: '📚'
  },

  // ECE Subjects
  // ECE - SEM 3
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

  // EE Subjects
  // EE - Semester 3
  {
    id: 'ae-s3-ee',
    name: 'Advance Mathematics',
    code: '3EE2-01',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Advanced mathematical topics for electrical engineering',
    icon: '📈'
  },
  {
    id: 'mefa-s3-ee',
    name: 'Managerial Economics & Financial Accounting',
    code: '3EE2-03',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Economics and finance for engineers',
    icon: '💰'
  },
  {
    id: 'pgp-s3-ee',
    name: 'Power Generation Processes',
    code: '3EE3-04',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Methods and processes of generating electrical power',
    icon: '🏭'
  },
  {
    id: 'eca-s3-ee',
    name: 'Electrical Circuit Analysis',
    code: '3EE4-05',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Analysis of electrical circuits',
    icon: '⚡'
  },
  {
    id: 'analog-elec-s3-ee',
    name: 'Analog Electronics',
    code: '3EE4-06',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Principles of analog electronic circuits',
    icon: '📻'
  },
  {
    id: 'em1-s3-ee',
    name: 'Electrical Machine -I',
    code: '3EE4-07',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Fundamentals of electrical machines',
    icon: '⚙️'
  },
  {
    id: 'ef-s3-ee',
    name: 'Electromagnetic Fields',
    code: '3EE4-08',
    year: 2,
    semester: 3,
    branch: 'EE',
    description: 'Study of electric and magnetic fields',
    icon: '🧲'
  },
  // EE - Semester 4
  {
    id: 'bio-s4-ee',
    name: 'Biology',
    code: '4EE2-01',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Introduction to biological sciences for engineers',
    icon: '🧬'
  },
  {
    id: 'tc-s4-ee',
    name: 'Technical communication',
    code: '4EE1-02',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Effective communication for technical fields',
    icon: '📝'
  }, {
    id: 'emi-s4-ee',
    name: 'Electronic Measurement & Instrumentation',
    code: '4EE3-04',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Principles of electronic measurement devices',
    icon: '📏'
  },
  {
    id: 'pe-s4-ee',
    name: 'Power Electronics',
    code: '4EE4-06',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Control and conversion of electrical power',
    icon: '🔋'
  },
  {
    id: 'em2-s4-ee',
    name: 'Electrical Machine-II',
    code: '4EE4-05',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Advanced topics in electrical machines',
    icon: '⚙️'
  },
  {
    id: 'ss-s4-ee',
    name: 'Signal & Systems',
    code: '4EE4-07',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Analysis of signals and systems',
    icon: '📡'
  },
  {
    id: 'de-s4-ee',
    name: 'Digital Electronics',
    code: '4EE4-08',
    year: 2,
    semester: 4,
    branch: 'EE',
    description: 'Fundamentals of digital circuits and logic design',
    icon: '🔌'
  },
  // EE - 3rd year semester 5
  {
    id: 'em-s5-ee',
    name: 'Electrical Materials',
    code: '5EE3-01',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Properties and applications of electrical materials',
    icon: '🔬'
  }, {
    id: 'ps1-s5-ee', // Assuming ps2-s5 was a typo and this is Power System 1
    name: 'Power System-I',
    code: '5EE4-02',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Analysis of power systems',
    icon: '⚡'
  }, {
    id: 'cs-s5-ee',
    name: 'Control System',
    code: '5EE4-03',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Modeling and control of dynamic systems',
    icon: '🎛️'
  }, {
    id: 'micro-s5-ee',
    name: 'Microprocessor',
    code: '5EE4-04',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Architecture and programming of microprocessors',
    icon: '🤖'
  }, {
    id: 'emd-s5-ee',
    name: 'Electrical Machine Design',
    code: '5EE4-05',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Design principles of electrical machines',
    icon: '🛠️'
  }, {
    id: 'rps-s5-ee',
    name: 'Restructured Power System',
    code: '5EE5-11',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Modern power system structures',
    icon: '🌐'
  }, {
    id: 'ew-s5-ee',
    name: 'Electromagnetic Wave',
    code: '5EE5-12',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Propagation and behavior of electromagnetic waves',
    icon: '🌊'
  },
  {
    id: 'dcs-s5-ee',
    name: 'Digital Control System',
    code: '5EE5-13',
    year: 3,
    semester: 5,
    branch: 'EE',
    description: 'Design and analysis of digital control systems',
    icon: '🎛️'
  },
  // EE - 3rd year semester 6
  {
    id: 'ca-s6-ee',
    name: 'Computer Architecture',
    code: '6EE3-01',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Structure and behavior of computer systems',
    icon: '🏛️'
  },
  {
    id: 'ps2-s6-ee',
    name: 'Power System-II',
    code: '6EE4-02',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Advanced power system analysis',
    icon: '⚡'
  },
  {
    id: 'psp-s6-ee',
    name: 'Power System Protection',
    code: '6EE4-03',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Protection schemes for power systems',
    icon: '🛡️'
  },
  {
    id: 'eeca-s6-ee',
    name: 'Electrical Energy Conservation & Auditing',
    code: '6EE4-04',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Methods for energy conservation',
    icon: '💡'
  },
  {
    id: 'ed-s6-ee',
    name: 'Electrical Drives',
    code: '6EE4-05',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Control of electric motors',
    icon: '🚗'
  },
  {
    id: 'posp-s6-ee',
    name: 'Power System Planning',
    code: '6EE4-08',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Planning and expansion of power systems',
    icon: '🗺️'
  },
  {
    id: 'dsp-s6-ee',
    name: 'Digital Signal Processing',
    code: '6EE5-12',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Processing of digital signals',
    icon: '🎶'
  },
  {
    id: 'ehv-s6-ee',
    name: 'Electrical & Hybrid Vehicles',
    code: '6EE5-13',
    year: 3,
    semester: 6,
    branch: 'EE',
    description: 'Technology of electric and hybrid vehicles',
    icon: '🚙'
  },
  // EE - 4th year semester 7
  {
    id: 'pec-s7-ee',
    name: 'Professional Elective Course-I',
    code: '7EE5-11/12/13',
    year: 4,
    semester: 7,
    branch: 'EE',
    description: 'Specialized elective course',
    icon: '📚'
  }, {
    id: 'eeoe1-s7-ee',
    name: 'Open Elective-I',
    code: '7EE5-XX',
    year: 4,
    semester: 7,
    branch: 'EE',
    description: 'Elective from other departments',
    icon: '📖'
  },
  // EE - 4th year semester 8
  {
    id: 'pec2-s8-ee',
    name: 'Professional Elective Course-II',
    code: '8EE4-11/12/13',
    year: 4,
    semester: 8,
    branch: 'EE',
    description: 'Specialized elective course',
    icon: '📚'
  }, {
    id: 'eeoe2-s8-ee',
    name: 'Open Elective-II',
    code: '8EE4-XX',
    year: 4,
    semester: 8,
    branch: 'EE',
    description: 'Elective from other departments',
    icon: '📖'
  },

  // MECH Subjects
  // MECH - 2ND YEAR - SEM 3
  {
    id: 'thermo-s3-mech',
    name: 'Thermodynamics',
    code: 'ME301',
    year: 2,
    semester: 3,
    branch: 'MECH',
    description: 'Heat and energy transfer principles',
    icon: '🌡️'
  },
  {
    id: 'som-s3-mech',
    name: 'Strength of Materials',
    code: 'ME302',
    year: 2,
    semester: 3,
    branch: 'MECH',
    description: 'Material properties and stress analysis',
    icon: '🔧'
  },
];

export const contentItems: ContentItem[] = [
  // Engineering Mathematics-I Content (for CSE)
  {
    id: 'math1-theory-1-cse',
    title: 'Engineering Mathematics-I Complete Notes',
    description: 'Comprehensive theory notes covering all topics',
    type: 'theory',
    subjectId: 'math1-s1-cse',
    fileSize: '2.5 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://example.com/math1-notes'
  },
  {
    id: 'math1-theory-2-cse',
    title: 'Engineering Mathematics-I Practice Problems',
    description: 'Solved examples and practice exercises',
    type: 'theory',
    subjectId: 'math1-s1-cse',
    fileSize: '1.8 MB',
    uploadDate: '2024-01-20',
    viewUrl: 'https://example.com/math1-practice'
  },
  {
    id: 'math1-lab-1-cse',
    title: 'Engineering Mathematics-I Lab Manual',
    description: 'Laboratory experiments and procedures',
    type: 'lab',
    subjectId: 'math1-s1-cse',
    fileSize: '3.2 MB',
    uploadDate: '2024-01-25',
    viewUrl: 'https://example.com/math1-lab'
  },
  {
    id: 'math1-video-1-cse',
    title: 'Engineering Mathematics-I Video Lectures',
    description: 'Video lectures covering key concepts',
    type: 'videos',
    subjectId: 'math1-s1-cse',
    duration: '45 minutes',
    uploadDate: '2024-01-30',
    viewUrl: 'https://example.com/math1-videos',
    thumbnailUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Math-I'
  },
  {
    id: 'math1-book-1-cse',
    title: 'Engineering Mathematics by Kreyszig',
    description: 'Reference textbook for advanced mathematics',
    type: 'books',
    subjectId: 'math1-s1-cse',
    fileSize: '15.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://example.com/math1-book'
  },
  {
    id: 'math1-assignment-1-cse',
    title: 'Engineering Mathematics-I Assignment 1',
    description: 'First assignment with solutions',
    type: 'assignments',
    subjectId: 'math1-s1-cse',
    fileSize: '1.1 MB',
    uploadDate: '2024-02-05',
    viewUrl: 'https://example.com/math1-assignment1'
  },
  {
    id: 'math1-mtt-1-cse',
    title: 'Engineering Mathematics-I MTT Paper',
    description: 'Mid-term test paper with solutions',
    type: 'mtt',
    subjectId: 'math1-s1-cse',
    fileSize: '0.8 MB',
    uploadDate: '2024-02-10',
    viewUrl: 'https://example.com/math1-mtt'
  },

  // Engineering Physics Content (for CSE)
  {
    id: 'physics-theory-1-cse',
    title: 'Waves Optics Notes',
    description: 'Theory covering mechanics, waves, and optics',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/13zjpU57j5qPC9puTU12QY0rJQA7BYMs-/view?usp=drive_link'
  },
  {
    id: 'physics-theory-2-cse',
    title: 'Quantum Mechanics Notes',
    description: 'Theory covering Quantum Mechanics',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1UjMPjD1c4g8BnhPjyuefzZn1jYLe9cnv/view?usp=drive_link'
  },
  {
    id: 'physics-theory-3-cse',
    title: 'Coherence and Optical Fibre Notes',
    description: 'Theory covering Coherence and Optical Fibre',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1uxk8aZpSWzJ9f-WfivGXU1dTibfcyb4a/view?usp=drive_link'
  },
  {
    id: 'physics-theory-4-cse',
    title: 'Laser Notes',
    description: 'Theory covering laser ',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1fm5dJNGThyHOzIJcGP0edD7B1yYu865D/view?usp=drive_link'
  },
  {
    id: 'physics-theory-5-cse',
    title: 'Material Science Notes',
    description: 'Theory covering Material Science ',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1nqkIv2fPTLzode2bTNND-djot2f0gaIS/view?usp=drive_link'
  },
  {
    id: 'physics-theory-6-cse',
    title: 'Electromagnetism Notes',
    description: 'Theory covering Electromagnetism ',
    type: 'theory',
    subjectId: 'physics-s1-cse',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-18',
    viewUrl: 'https://drive.google.com/file/d/1DbdLYuzoLUbjMR_AKoEQ6ZsYOdAbn0AT/view?usp=drive_link'
  },
  {
    id: 'physics-lab-1-cse',
    title: 'Engineering Physics Lab All Experiments',
    description: 'Practical experiments and observations',
    type: 'lab',
    subjectId: 'physics-s1-cse',
    fileSize: '2.7 MB',
    uploadDate: '2024-01-22',
    viewUrl: 'https://drive.google.com/file/d/1ce-kR7tVIKB5fpaqPIm547mxEW2m-YCZ/view?usp=drive_link'
  },
  {
    id: 'physics-book-1-cse',
    title: 'Laser Chapter Book Notes',
    description: 'Reference textbook for Laser',
    type: 'books',
    subjectId: 'physics-s1-cse',
    fileSize: '15.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://drive.google.com/file/d/1km_lTssd-EBO0ENmBEa_p9keAoicVjuc/view?usp=sharing'
  },

  // CAMD Content (for CSE)
  {
    id: 'camd-theory-1-cse',
    title: 'Lab Manual_CAMD',
    description: 'Complete lab manual for Computer-Aided Machine Drawing',
    type: 'theory',
    subjectId: 'camd-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    // viewUrl: 'https://example.com/camd-manual'
    viewUrl: 'https://drive.google.com/file/d/13KJpegxkTUyp_KKN8z0Pp__ho-x4GNjr/view?usp=drive_link'
  },
  {
    id: 'camd-lab-1-cse',
    title: 'CAMD SHEETS 1-3',
    description: 'Drawing sheets 1 to 3',
    type: 'lab',
    subjectId: 'camd-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1Pm8nSsHezu12faHZmOqbkXIlcCiLauzR/view?usp=drive_link'
  },
  {
    id: 'camd-lab-2-cse',
    title: 'CAMD SHEETS 4-5',
    description: 'Drawing sheets 4 and 5',
    type: 'lab',
    subjectId: 'camd-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1tm1EpYQfwC9uVoSwEMyHEpmf0Y738GEJ/view?usp=drive_link'
  },
  {
    id: 'camd-lab-3-cse',
    title: 'CAMD SHEETS 6-9',
    description: 'Drawing sheets 6 to 9',
    type: 'lab',
    subjectId: 'camd-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1hznIvRM9ROwudAgzgKkOkSnwpV5XhBGy/view?usp=drive_link'
  },
   {
    id: 'camd-mttpaper-1-cse',
    title: 'Lab Manual_CAMD',
    description: 'Complete lab manual for Computer-Aided Machine Drawing',
    type: 'mttpaper',
    subjectId: 'camd-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    // viewUrl: 'https://example.com/camd-manual'
    viewUrl: 'https://drive.google.com/file/d/13KJpegxkTUyp_KKN8z0Pp__ho-x4GNjr/view?usp=drive_link'
  },


  // Communication Skills Content (for CSE)
  {
    id: 'comm-theory-1-cse',
    title: 'Communication Skills Theory Notes',
    description: 'Grammar, writing skills, and presentation techniques',
    type: 'theory',
    subjectId: 'comm-s1-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://example.com/comm-notes'
  },
  {
    id: 'comm-assignment-1-cse',
    title: 'Communication Skills Assignment',
    description: 'Essay writing and presentation assignments',
    type: 'assignments',
    subjectId: 'comm-s1-cse',
    fileSize: '0.9 MB',
    uploadDate: '2024-02-03',
    viewUrl: 'https://example.com/comm-assignment'
  },

  // BASIC ELECTRICAL ENGINEERING SEM-1 (for CSE)
  {
    id: 'elec1-theory-1-cse',
    title: 'Unit-1 DC Circuit',
    description: 'Comprehensive theory notes covering unit-1 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/1VjBqua8Sbl33BQ8zNYBjDF6qmg_6Z0co/view?usp=sharing'
  },
  {
    id: 'elec1-theory-2-cse',
    title: 'Unit-2 AC Circuit Notes',
    description: 'Comprehensive theory notes covering unit-2 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/1khdIEKQMRfiOKne6m_lf1gG4kXIDwCbB/view?usp=sharing'
  },
  {
    id: 'elec1-theory-3-cse',
    title: 'Unit-3 Transformer Notes',
    description: 'Comprehensive theory notes covering unit-3 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/1wIugI1pJZrhyR0JR8CHquipM1wdMMI1_/view?usp=sharing'
  },
  {
    id: 'elec1-theory-4-cse',
    title: 'Unit-4 Electrical Machines Notes',
    description: 'Comprehensive theory notes covering unit-4 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/14WF_yJ7QFx6LnEvjayOHptD-I9G5M_1P/view?usp=sharing'
  },
  {
    id: 'elec1-theory-5-cse',
    title: 'Unit-5 Power Converter Notes',
    description: 'Comprehensive theory notes covering unit-5 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/1hj4lmU9GEEjAkAi9Y724IPIKNACBmnuD/view?usp=sharing'
  },
  {
    id: 'elec1-theory-6-cse',
    title: 'Unit-6 Electrical Installations Notes',
    description: 'Comprehensive theory notes covering unit-6 topics',
    type: 'theory',
    subjectId: 'elec-s1-cse',
    fileSize: '8 MB',
    uploadDate: '2024-01-15',
    viewUrl: 'https://drive.google.com/file/d/14fJ74REIv9yReHxFepQ9afXSR5jSNwcH/view?usp=sharing'
  },
  {
    id: 'elec1-lab-1-cse',
    title: 'BEE Handwritten Lab Manual',
    description: 'Laboratory experiments and procedures',
    type: 'lab',
    subjectId: 'elec-s1-cse',
    fileSize: '3.2 MB',
    uploadDate: '2024-01-25',
    viewUrl: 'https://drive.google.com/file/d/1hLptTBsVDAdNqpat2OP0mM10tB_i_WuZ/view?usp=sharing'
  },

  // Programming for problem solving sem 2 (for CSE)
  {
    id: 'pps-theory-1-cse',
    title: 'Unit -I Fundamentals of Computer',
    description: 'Basic concepts of computer hardware and software',
    type: 'theory',
    subjectId: 'pps-s2-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1YoRZUASS5FJ0mz_Gy9mStHxzCoj0jK5k/view?usp=drive_link'
  },
  {
    id: 'pps-theory-2-cse',
    title: 'unit 2 PPS Number System',
    description: 'Number System Concepts',
    type: 'theory',
    subjectId: 'pps-s2-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1RMps2gEDp7hQqLa29eOYG5ptCSHhVjw1/view?usp=drive_link'
  },
  {
    id: 'pps-theory-3-cse',
    title: 'Unit -III C Programming Notes',
    description: 'Complete notes on C Programming language',
    type: 'theory',
    subjectId: 'pps-s2-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1r-WRNlpzU4nHGuoitHJSbJ_pvV_zVCRI/view?usp=drive_link'
  },
  {
    id: 'pps-theory-4-cse',
    title: 'Web Development Notes',
    description: 'Introduction to web development concepts',
    type: 'theory',
    subjectId: 'pps-s2-cse',
    fileSize: '1.9 MB',
    uploadDate: '2024-01-16',
    viewUrl: 'https://drive.google.com/file/d/1CjkxwyIolse6MuFZMMHbYyuEaO9CV5rx/view?usp=sharing'
  },
  {
    id: 'pps-book-1-cse',
    title: 'E Balagurusamy - Programming in ANSI C',
    description: 'Reference textbook for C programming',
    type: 'books',
    subjectId: 'pps-s2-cse',
    fileSize: '24.2 MB',
    uploadDate: '2024-02-01',
    viewUrl: 'https://drive.google.com/file/d/1y0A4EH4QSqUzrhulsxrzQ2tfib46YHNp/view?usp=drive_link'
  },

  // Data Structures & Algorithms Content (for CSE)
  {
    id: 'dsa-theory-1-cse',
    title: 'Data Structures & Algorithms Complete Notes',
    description: 'Arrays, linked lists, trees, graphs, and algorithms',
    type: 'theory',
    subjectId: 'dsa-s3-cse',
    fileSize: '4.2 MB',
    uploadDate: '2024-02-15',
    viewUrl: 'https://example.com/dsa-notes'
  },
  {
    id: 'dsa-lab-1-cse',
    title: 'DSA Lab Programs',
    description: 'Implementation of data structures in C++',
    type: 'lab',
    subjectId: 'dsa-s3-cse',
    fileSize: '2.1 MB',
    uploadDate: '2024-02-18',
    viewUrl: 'https://example.com/dsa-lab'
  },
  {
    id: 'dsa-video-1-cse',
    title: 'DSA Video Tutorials',
    description: 'Step-by-step algorithm explanations',
    type: 'videos',
    subjectId: 'dsa-s3-cse',
    duration: '120 minutes',
    uploadDate: '2024-02-20',
    viewUrl: 'https://example.com/dsa-videos',
    thumbnailUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=DSA'
  },
  {
    id: 'dsa-mtt-1-cse',
    title: 'DSA Mid-Term Test Paper',
    description: 'Previous year MTT with detailed solutions',
    type: 'mtt',
    subjectId: 'dsa-s3-cse',
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
    id: 'mech',
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
