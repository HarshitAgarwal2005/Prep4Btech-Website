// src/hooks/useContent.ts
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';
import { ContentSubject, ContentItem } from '../types';

// Hook 1: Fetch Subjects based on filters
export const useSubjects = (year: number | null, semester: number | null, branch: string | null) => {
  return useQuery({
    queryKey: ['subjects', year, semester, branch],
    queryFn: async () => {
      let query = supabase.from('subjects').select('*');
      
      if (year) query = query.eq('year', year);
      if (semester) query = query.eq('semester', semester);
      // Use ILIKE for flexible branch matching (e.g., matching "CSE" in "CSE/AI")
      if (branch) query = query.ilike('branch', `%${branch}%`);
      
      const { data, error } = await query;
      if (error) throw error;
      return data as ContentSubject[];
    },
    // Only fetch if at least year and semester are selected to save resources
    enabled: !!year || !!semester 
  });
};

// Hook 2: Fetch Content ONLY for the selected subject
export const useSubjectContent = (subjectId: string | undefined, contentType: string | null) => {
  return useQuery({
    queryKey: ['content', subjectId, contentType],
    queryFn: async () => {
      if (!subjectId) return [];
      
      let query = supabase
        .from('content_items') // Assuming you named your table 'content_items'
        .select('*')
        .eq('subject_id', subjectId); // Make sure column name matches your DB

      if (contentType) {
        query = query.eq('type', contentType);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      // Map DB snake_case to CamelCase if necessary, or just use as is
      return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        subjectId: item.subject_id, // Map DB column to TS type
        viewUrl: item.view_url,
        fileSize: item.file_size,
        uploadDate: item.upload_date,
        duration: item.duration // If you have this
      })) as ContentItem[];
    },
    enabled: !!subjectId, // Only run this query when a subject is actually selected
  });
};