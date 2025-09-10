import { contentSubjects, contentItems, branches } from './contentData';
import { ContentSubject, ContentItem } from '../types';

// --- Step 1: Segregate the original data for clarity ---

// Template subjects are defined as 1st year, CSE branch only.
const commonSubjectsTemplate = contentSubjects.filter(
  subject => subject.year === 1 && subject.branch.toUpperCase() === 'CSE'
);

// All other subjects (e.g., 2nd year and beyond) that are not part of the common template.
const branchSpecificSubjects = contentSubjects.filter(
  subject => !commonSubjectsTemplate.some(template => template.id === subject.id)
);

// --- Step 2: Build the hydrated list of subjects ---

// Start the new list with all the specific, non-common subjects.
const hydratedSubjects: ContentSubject[] = [...branchSpecificSubjects];

// Add the original CSE common subjects back to the list.
hydratedSubjects.push(...commonSubjectsTemplate);

// Identify which other branches need the common subjects.
const targetBranches = branches.filter(
  branch => branch.code.toUpperCase() !== 'CSE'
);

// --- Step 3: Generate and add the common subjects for other branches ---
targetBranches.forEach(branch => {
  const branchCode = branch.code;
  const lowerCaseBranchCode = branchCode.toLowerCase();

  commonSubjectsTemplate.forEach(templateSubject => {
    const newSubject: ContentSubject = {
      ...templateSubject,
      branch: branchCode, // Set the branch to the new one (e.g., 'ECE')
      // Use a regular expression to safely replace only the suffix.
      id: templateSubject.id.replace(/-cse$/, `-${lowerCaseBranchCode}`),
    };
    hydratedSubjects.push(newSubject);
  });
});

// --- Step 4: Repeat the entire hydration process for content items ---

const commonSubjectIds = commonSubjectsTemplate.map(subject => subject.id);
const commonContentTemplate = contentItems.filter(item =>
  commonSubjectIds.includes(item.subjectId)
);
const branchSpecificContent = contentItems.filter(item =>
  !commonContentTemplate.some(template => template.id === item.id)
);

const hydratedContentItems: ContentItem[] = [...branchSpecificContent];
hydratedContentItems.push(...commonContentTemplate);

targetBranches.forEach(branch => {
    const lowerCaseBranchCode = branch.code.toLowerCase();

    commonContentTemplate.forEach(templateItem => {
        const newContentItem: ContentItem = {
            ...templateItem,
            id: templateItem.id.replace(/-cse$/, `-${lowerCaseBranchCode}`),
            subjectId: templateItem.subjectId.replace(/-cse$/, `-${lowerCaseBranchCode}`),
        };
        hydratedContentItems.push(newContentItem);
    });
});


// --- Step 5: Instrumentation for Debugging ---
// This will print the results to your browser's developer console.
console.log('--- Data Hydration Complete ---');
console.log(`Total subjects generated: ${hydratedSubjects.length} (Original: ${contentSubjects.length})`);
console.log(`Total content items generated: ${hydratedContentItems.length} (Original: ${contentItems.length})`);

// You can inspect these objects directly in the console.
console.log('Hydrated Subjects Sample (ECE, Year 1, Sem 1):',
  hydratedSubjects.filter(s => s.branch === 'ECE' && s.year === 1 && s.semester === 1)
);


// Export the final, complete lists for the application to use.
export { hydratedSubjects, hydratedContentItems };

