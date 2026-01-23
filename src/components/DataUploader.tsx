import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { contentSubjects, contentItems } from '../data/contentData';

const DataUploader: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  const validateData = () => {
    addLog("🔍 Validating data integrity...");
    
    // 1. Get all valid Subject IDs
    const validSubjectIds = new Set(contentSubjects.map(s => s.id));
    const orphans = [];

    // 2. Check every content item
    for (const item of contentItems) {
      if (!validSubjectIds.has(item.subjectId)) {
        orphans.push({
          itemId: item.id,
          title: item.title,
          badSubjectId: item.subjectId
        });
      }
    }

    if (orphans.length > 0) {
      addLog(`❌ FOUND ${orphans.length} ORPHAN ITEMS!`);
      addLog("The following items have subjectIds that don't exist:");
      orphans.forEach(o => {
        addLog(`- Item: "${o.title}" points to missing subject: "${o.badSubjectId}"`);
      });
      addLog("⚠️ FIX THESE IN YOUR CODE BEFORE UPLOADING.");
      return false;
    }

    addLog("✅ Data integrity check passed! All subjects exist.");
    return true;
  };

  const uploadData = async () => {
    setIsLoading(true);
    setLogs(['Starting process...']);

    // Step 1: Validate locally first
    if (!validateData()) {
      setIsLoading(false);
      return; 
    }

    try {
      // Step 2: Upload Subjects
      addLog(`Uploading ${contentSubjects.length} subjects...`);
      
      // Deduplicate subjects just in case
      const uniqueSubjectsMap = new Map();
      contentSubjects.forEach(sub => uniqueSubjectsMap.set(sub.id, sub));
      const cleanSubjects = Array.from(uniqueSubjectsMap.values());

      const { error: subjectError } = await supabase
        .from('subjects')
        .upsert(cleanSubjects.map(s => ({
          id: s.id,
          name: s.name,
          code: s.code,
          year: s.year,
          semester: s.semester,
          branch: s.branch,
          description: s.description,
          icon: s.icon
        })), { onConflict: 'id' });

      if (subjectError) throw subjectError;
      addLog('✅ Subjects uploaded successfully!');

      // Step 3: Upload Content
      addLog(`Uploading ${contentItems.length} content items...`);
      const chunkSize = 50;
      for (let i = 0; i < contentItems.length; i += chunkSize) {
        const chunk = contentItems.slice(i, i + chunkSize);
        
        // Remove duplicates in the chunk
        const uniqueChunk = Array.from(new Map(chunk.map(item => [item.id, item])).values());

        const { error: contentError } = await supabase
          .from('content_items')
          .upsert(uniqueChunk.map(c => ({
            id: c.id,
            title: c.title,
            description: c.description,
            type: c.type,
            subject_id: c.subjectId,
            view_url: c.viewUrl,
            file_size: c.fileSize,
            upload_date: new Date(c.uploadDate).toISOString()
          })), { onConflict: 'id' });

        if (contentError) throw new Error(`Batch ${i} failed: ${contentError.message}`);
        addLog(`✅ Batch ${i} - ${i + chunk.length} uploaded.`);
      }

      addLog('🎉 SUCCESS! All data is now in Supabase.');

    } catch (err: any) {
      console.error(err);
      addLog(`❌ ERROR: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Seeder & Validator</h1>
      
      <button 
        onClick={uploadData}
        disabled={isLoading}
        className={`w-full py-4 rounded-lg font-bold text-lg mb-6 transition-colors ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isLoading ? 'Running Checks & Uploading...' : 'Validate & Upload'}
      </button>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-96 overflow-y-auto font-mono text-xs border border-gray-700">
        {logs.length === 0 ? (
          <p className="text-gray-500">Logs will appear here...</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`mb-1 ${log.includes('❌') ? 'text-red-400 font-bold bg-red-900/20 p-1' : ''}`}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DataUploader;