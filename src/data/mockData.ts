import { Assignment, Book, Project } from '../types';
// import { Subject, Assignment, Book, Project } from '../types';
// export const subjects: Subject[] = [
//   {
//     id: 'cs101',
//     name: 'Programming Fundamentals',
//     code: 'CS101',
//     year: 1,
//     semester: 1,
//     branch: 'CSE',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Introduction to Programming', description: 'Basic concepts and problem-solving' },
//       { id: '2', title: 'Variables and Data Types', description: 'Understanding data representation' },
//       { id: '3', title: 'Control Structures', description: 'Conditional statements and loops' },
//       { id: '4', title: 'Functions and Modules', description: 'Code organization and reusability' }
//     ],
//     books: [],
//     assignments: []
//   },
//   {
//     id: 'cs102',
//     name: 'Data Structures',
//     code: 'CS102',
//     year: 2,
//     semester: 1,
//     branch: 'CSE',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Arrays and Strings', description: 'Linear data structures' },
//       { id: '2', title: 'Linked Lists', description: 'Dynamic memory allocation' },
//       { id: '3', title: 'Stacks and Queues', description: 'LIFO and FIFO structures' },
//       { id: '4', title: 'Trees and Graphs', description: 'Hierarchical and network structures' }
//     ],
//     books: [],
//     assignments: []
//   },
//   {
//     id: 'cs201',
//     name: 'Algorithms',
//     code: 'CS201',
//     year: 2,
//     semester: 2,
//     branch: 'CSE',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Algorithm Analysis', description: 'Time and space complexity' },
//       { id: '2', title: 'Sorting Algorithms', description: 'Various sorting techniques' },
//       { id: '3', title: 'Searching Algorithms', description: 'Linear and binary search' },
//       { id: '4', title: 'Dynamic Programming', description: 'Optimization problems' }
//     ],
//     books: [],
//     assignments: []
//   },
//   {
//     id: 'cs301',
//     name: 'Database Systems',
//     code: 'CS301',
//     year: 3,
//     semester: 1,
//     branch: 'CSE',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Database Fundamentals', description: 'DBMS concepts and architecture' },
//       { id: '2', title: 'SQL and Queries', description: 'Database query language' },
//       { id: '3', title: 'Normalization', description: 'Database design principles' },
//       { id: '4', title: 'Transactions', description: 'ACID properties and concurrency' }
//     ],
//     books: [],
//     assignments: []
//   },
//   // ECE Subjects
//   {
//     id: 'ece101',
//     name: 'Circuit Analysis',
//     code: 'ECE101',
//     year: 1,
//     semester: 1,
//     branch: 'ECE',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Basic Circuit Elements', description: 'Resistors, capacitors, and inductors' },
//       { id: '2', title: 'Kirchhoff Laws', description: 'Current and voltage laws' },
//       { id: '3', title: 'Network Theorems', description: 'Thevenin and Norton theorems' },
//       { id: '4', title: 'AC Analysis', description: 'Sinusoidal steady-state analysis' }
//     ],
//     books: [],
//     assignments: []
//   },
//   // IT Subjects
//   {
//     id: 'it101',
//     name: 'Information Systems',
//     code: 'IT101',
//     year: 1,
//     semester: 1,
//     branch: 'IT',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Introduction to IT', description: 'Overview of information technology' },
//       { id: '2', title: 'System Analysis', description: 'Understanding system requirements' },
//       { id: '3', title: 'Database Concepts', description: 'Data management principles' },
//       { id: '4', title: 'Network Basics', description: 'Computer networking fundamentals' }
//     ],
//     books: [],
//     assignments: []
//   },
//   // Mechanical Subjects
//   {
//     id: 'me101',
//     name: 'Engineering Mechanics',
//     code: 'ME101',
//     year: 1,
//     semester: 1,
//     branch: 'MECHANICAL',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Statics', description: 'Forces and equilibrium' },
//       { id: '2', title: 'Dynamics', description: 'Motion and acceleration' },
//       { id: '3', title: 'Friction', description: 'Static and kinetic friction' },
//       { id: '4', title: 'Moments', description: 'Torque and rotational motion' }
//     ],
//     books: [],
//     assignments: []
//   },
//   // Civil Subjects
//   {
//     id: 'ce101',
//     name: 'Structural Analysis',
//     code: 'CE101',
//     year: 1,
//     semester: 1,
//     branch: 'CIVIL',
//     credits: 4,
//     chapters: [
//       { id: '1', title: 'Introduction to Structures', description: 'Basic structural concepts' },
//       { id: '2', title: 'Load Analysis', description: 'Types of loads and their effects' },
//       { id: '3', title: 'Beam Analysis', description: 'Bending moments and shear forces' },
//       { id: '4', title: 'Truss Analysis', description: 'Method of joints and sections' }
//     ],
//     books: [],
//     assignments: []
//   }
// ];

export const assignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Hello World Program',
    description: 'Write your first program in C++',
    subject: 'Programming Fundamentals',
    year: 1,
    branch: 'CSE',
    dueDate: '2024-02-15',
    type: 'lab'
  },
  {
    id: 'a2',
    title: 'Linked List Implementation',
    description: 'Implement singly linked list with basic operations',
    subject: 'Data Structures',
    year: 2,
    branch: 'CSE',
    dueDate: '2024-03-10',
    type: 'lab'
  },
  {
    id: 'a3',
    title: 'Sorting Algorithm Analysis',
    description: 'Compare performance of different sorting algorithms',
    subject: 'Algorithms',
    year: 2,
    branch: 'CSE',
    dueDate: '2024-04-05',
    type: 'theory'
  }
];

export const books: Book[] = [
  { 
    id: 'b1',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    subjects: ['Algorithms', 'Data Structures']
  },
  {
    id: 'b2',
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz',
    subjects: ['Database Systems']
  },
  {
    id: 'b3',
    title: 'The C Programming Language',
    author: 'Brian Kernighan',
    subjects: ['Programming Fundamentals']
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Library Management System',
    description: 'A web-based system for managing library operations',
    techStack: ['React', 'Node.js', 'MongoDB'],
    year: 3,
    type: 'major'
  },
  {
    id: 'p2',
    title: 'To-Do List App',
    description: 'Simple task management application',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    year: 1,
    type: 'mini'
  },
  {
    id: 'p3',
    title: 'E-Commerce Platform',
    description: 'Full-stack online shopping platform',
    techStack: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    year: 4,
    type: 'major'
  }
];