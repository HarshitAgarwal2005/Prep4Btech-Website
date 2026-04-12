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
      // If year === 1, it skips this check entirely, 
      // fetching the 1st year subjects for EVERY branch!
      if (branch && year !== 1) { 
        query = query.ilike('branch', `%${branch}%`);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as ContentSubject[];
    },
    // Only fetch if at least year and semester are selected to save resources
    enabled: !!year || !!semester 
  });
};

// Hook 2: Fetch ALL content for the selected subject (client-side filtering for counts)
export const useSubjectContent = (subjectId: string | undefined, contentType: string | null) => {
  const query = useQuery({
    queryKey: ['content', subjectId],
    queryFn: async () => {
      if (!subjectId) return [];

      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('subject_id', subjectId);

      if (error) throw error;

      return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        subjectId: item.subject_id,
        viewUrl: item.view_url,
        fileSize: item.file_size,
        uploadDate: item.upload_date,
        duration: item.duration
      })) as ContentItem[];
    },
    enabled: !!subjectId,
  });

  return {
    ...query,
    data: contentType
      ? (query.data ?? []).filter(item => item.type === contentType)
      : (query.data ?? []),
    allData: query.data ?? [],
  };
};