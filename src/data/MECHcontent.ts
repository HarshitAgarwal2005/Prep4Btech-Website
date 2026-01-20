import { ContentSubject, ContentItem } from '../types';

export const contentSubjects: ContentSubject[] = [
  
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
export const contentItems: ContentItem[] = [];
export const branches = [
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    code: 'MECH',
    description: 'Mechanical systems and manufacturing',
    icon: '⚙️',
    color: 'from-red-500 to-pink-500'
  },
];