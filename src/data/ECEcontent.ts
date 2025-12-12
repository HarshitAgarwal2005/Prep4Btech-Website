import { ContentSubject, ContentItem } from '../types';

export const contentSubjects: ContentSubject[] = [
  {
    id: 'aem1-s3-ece',
    name: 'Advance Engg. Mathematics 1',
    code: '3EC201',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Mathematics for Engg.',
    icon: '📚'
  },
  {
    id: 'mefa-s3-ece',
    name: 'Managerial Economics And Financial Engineering',
    code: '3EC1-03',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Economic principles and financial management in engineering',
    icon: '💰'
  },
  {
    id: 'tc-s4-ece',
    name: 'Technical Communication',
    code: '3EC102',
    year: 2,
    semester: 4,
    branch: 'ECE',
    description: 'Technical Communication',
    icon: '📝'
  },
];
export const contentItems: ContentItem[] = [];
export const branches = [
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    description: 'Electronics and communication systems',
    icon: '📡',
    color: 'from-green-500 to-emerald-500'
  },
];