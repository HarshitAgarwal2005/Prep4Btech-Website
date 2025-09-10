import { contentItems, contentSubjects } from '../data/contentData';
import { ContentItem, ContentSubject } from '../types';

/**
 * NEW FUNCTION
 * Retrieves a list of subjects for a specific branch, year, and semester.
 * For 1st year students, it automatically returns the common list of subjects
 * from the CSE branch, regardless of the branch code provided.
 *
 * @param branchCode The code for the branch (e.g., 'ECE', 'CSE').
 * @param year The academic year (e.g., 1, 2).
 * @param semester The semester (e.g., 1, 2).
 * @returns An array of subject objects.
 */
export function getSubjectsForBranch(branchCode: string, year: number, semester: number): ContentSubject[] {
  // Determine which branch's subjects to look for.
  // If it's the first year, always use 'CSE' as the source of truth.
  // Otherwise, use the provided branch code.
  const lookupBranch = year === 1 ? 'CSE' : branchCode;

  // Filter the subjects based on the determined branch, year, and semester.
  return contentSubjects.filter(subject =>
    subject.branch === lookupBranch &&
    subject.year === year &&
    subject.semester === semester
  );
}

/**
 * Retrieves content for a given subject ID.
 * If no specific content is found for a 1st-year subject,
 * it automatically fetches the content from the equivalent CSE subject.
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

  // If no content was found, check if it's a common 1st-year subject.
  // We can identify these by looking for '-s1-' or '-s2-' in the ID
  // and ensuring it's not a CSE subject (which is our base case).
  const isFirstYearCommonSubject =
    (subjectId.includes('-s1-') || subjectId.includes('-s2-')) && !subjectId.includes('-cse');

  if (isFirstYearCommonSubject) {
    // If it is a common subject, create the ID for the CSE equivalent.
    // For example, 'physics-s1-ece' becomes 'physics-s1-cse'.
    const cseEquivalentId = subjectId.replace(/-(ece|ee|mech|civil)$/, '-cse');

    // Return the content for the CSE equivalent subject.
    return contentItems.filter(item => item.subjectId === cseEquivalentId);
  }

  // If no specific or common content is found, return an empty array.
  return [];
}

