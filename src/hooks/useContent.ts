// src/hooks/useContent.ts
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';

// --- Subjects Hook ---
export const useSubjects = (year: number | null, searchQuery: string) => {
  return useQuery({
    queryKey: ['subjects', year, searchQuery], // Unique key for caching
    queryFn: async () => {
      let query = supabase
        .from('subjects')
        .select(`
          *,
          chapters (*)
        `)
        .order('name');

      if (year) {
        query = query.eq('year', year);
      }
      if (searchQuery) {
        // Search in both name and code
        query = query.or(`name.ilike.%${searchQuery}%,code.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};

// --- Books Hook ---
export const useBooks = (searchQuery: string, subjectFilter: string | null) => {
  return useQuery({
    queryKey: ['books', searchQuery, subjectFilter],
    queryFn: async () => {
      let query = supabase.from('books').select('*');

      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,author.ilike.%${searchQuery}%`);
      }
      if (subjectFilter) {
        // 'cs' stands for 'contains' for array columns
        query = query.contains('subjects', [subjectFilter]);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    }
  });
};