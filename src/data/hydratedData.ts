import { contentSubjects, contentItems, branches } from './contentData';
import { ContentSubject, ContentItem } from '../types';

// Create copies of the original arrays to avoid modifying the source data.
const hydratedSubjects: ContentSubject[] = [...contentSubjects];
const hydratedContentItems: ContentItem[] = [...contentItems];

// --- Data Hydration Logic ---
// This block runs once to generate all the necessary data for common subjects.

// 1. Identify the base subjects and content that are common to all 1st-year students.
// We use the CSE 1st-year data as the template.
const commonSubjectsTemplate = contentSubjects.filter(
  subject => subject.year === 1 && subject.branch.toUpperCase() === 'CSE'
);
const commonSubjectIds = commonSubjectsTemplate.map(subject => subject.id);
const commonContentTemplate = contentItems.filter(item =>
  commonSubjectIds.includes(item.subjectId)
);

// 2. Identify the branches that need the common subjects added.
const targetBranches = branches.filter(
  branch => branch.code.toUpperCase() !== 'CSE'
);

// 3. Generate the subjects and content for each target branch.
targetBranches.forEach(branch => {
  const branchCode = branch.code;
  const lowerCaseBranchCode = branchCode.toLowerCase();

  // Generate subjects for this branch from the template.
  commonSubjectsTemplate.forEach(templateSubject => {
    const newSubject: ContentSubject = {
      ...templateSubject,
      branch: branchCode,
      id: templateSubject.id.replace('-cse', `-${lowerCaseBranchCode}`),
    };
    hydratedSubjects.push(newSubject);
  });

  // Generate content for this branch from the template.
  commonContentTemplate.forEach(templateItem => {
    const newContentItem: ContentItem = {
      ...templateItem,
      id: templateItem.id.replace('-cse', `-${lowerCaseBranchCode}`),
      subjectId: templateItem.subjectId.replace('-cse', `-${lowerCaseBranchCode}`),
    };
    hydratedContentItems.push(newContentItem);
  });
});

// Export the final, complete lists for the application to use.
export { hydratedSubjects, hydratedContentItems };
