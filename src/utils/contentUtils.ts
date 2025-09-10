import { contentItems, contentSubjects } from '../data/contentData';
import { ContentItem, ContentSubject } from '../types';

/**
 * Retrieves a list of subjects for a specific branch, year, and semester.
 * For the 1st year, it treats subjects from the CSE branch as a "common" template
 * and dynamically adapts them for the requested branch.
 *
 * @param branchCode The code for the branch (e.g., 'ECE', 'CSE').
 * @param year The academic year (e.g., 1, 2).
 * @param semester The semester (e.g., 1, 2).
 * @returns An array of subject objects.
 */
export function getSubjectsForBranch(branchCode: string, year: number, semester: number): ContentSubject[] {
  const normalizedBranchCode = branchCode.toUpperCase();

  // For any year greater than 1, find the specific subjects for that branch.
  if (year !== 1) {
    return contentSubjects.filter(subject =>
      subject.branch === normalizedBranchCode &&
      subject.year === year &&
      subject.semester === semester
    );
  }

  // --- Logic for Common 1st Year Subjects ---

  // 1. Find the common base subjects from CSE for the given semester.
  const commonBaseSubjects = contentSubjects.filter(subject =>
    subject.branch === 'CSE' &&
    subject.year === 1 &&
    subject.semester === semester
  );

  // 2. If the requested branch is CSE itself, we can return the base subjects directly.
  if (normalizedBranchCode === 'CSE') {
    return commonBaseSubjects;
  }

  // 3. For other branches (ECE, EE, etc.), transform the base subjects.
  // This creates new subject objects with an ID and branch code that matches the request.
  return commonBaseSubjects.map(subject => ({
    ...subject,
    branch: normalizedBranchCode, // Set the branch to the one requested (e.g., 'ECE')
    id: subject.id.replace('-cse', `-${normalizedBranchCode.toLowerCase()}`), // e.g., 'math1-s1-cse' -> 'math1-s1-ece'
  }));
}

/**
 * Retrieves content for a given subject ID.
 * If no specific content is found for a 1st-year subject,
 * it automatically falls back to the content from the equivalent CSE subject.
 *
 * @param subjectId The ID of the subject (e.g., 'physics-s1-ece').
 * @returns An array of content items.
 */
export function getContentForSubject(subjectId: string): ContentItem[] {
  // First, try to find content that matches the subjectId directly.
  const subjectContent = contentItems.filter(item => item.subjectId === subjectId);

  // If we find any content, return it immediately.
  if (subjectContent.length > 0) {
    return subjectContent;
  }

  // --- Fallback Logic for Common 1st Year Content ---

  // 1. Check if the subject is a common one from the first year.
  const isFirstYearCommonSubject =
    (subjectId.includes('-s1-') || subjectId.includes('-s2-')) && !subjectId.includes('-cse');

  if (isFirstYearCommonSubject) {
    // 2. If it is, create the ID for the CSE equivalent by replacing the branch suffix.
    // This is more robust than a long regex. e.g., 'physics-s1-ece' -> 'physics-s1-cse'
    const cseEquivalentId = subjectId.substring(0, subjectId.lastIndexOf('-')) + '-cse';

    // 3. Return the content for the CSE equivalent subject.
    return contentItems.filter(item => item.subjectId === cseEquivalentId);
  }

  // If no specific or common content is found, return an empty array.
  return [];
}