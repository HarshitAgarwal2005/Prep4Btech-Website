import { ContentSubject, ContentItem } from '../types';

export const contentSubjects: ContentSubject[] = [
  {
    id: 'signals-s3-ece',
    name: 'Signals and Systems',
    code: 'EC303',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Spf',
    icon: '📡'
  },
  {
    id: 'analog-s3-ece',
    name: 'Analog Electronics',
    code: 'EC304',
    year: 2,
    semester: 3,
    branch: 'ECE',
    description: 'Ada',
    icon: '📻'
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